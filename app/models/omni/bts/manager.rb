class Omni::Bts::Manager < Omni::Bts::Base

  def self.xit
    put "***********************************"
    put "legacy source rows: #{@source_count}"
    put "legacy rows skipped: #{@source_count - @created_count}"
    put "omni rows created: #{@created_count}"
    put "***********************************"
    put "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"
    puts @output
    # exit
  end

  def self.put(message)
    @output = [] unless @output
    @output << "#{Time.now.strftime("%H:%M:%S").yellow}: #{message}"
    # puts "#{Time.now.strftime("%H:%M:%S").yellow}: #{message}"
  end

  def self.load
    puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
    @start_time = Time.now
    @created_count = 0
    @source_count = 0
    @no_sku_count = 0
    @no_location_count = 0
    @no_periods = []
    @no_period_count = 0
    # @locations = Omni::Location.source_hash('PARKER')
    # @skus = Omni::Sku.source_hash('PARKER')
    @updates = []
  end

  def self.run
    load
    @bts = Omni::Bts.first #where(:display => Date.today.to_s).first || Omni::Bts.create(:display => Date.today.to_s)
    @bts_hash = {}
    # delete
    # inventory
    results
    xit
  end

  def self.delete
    sql = 'delete from bts_details'
    ActiveRecord::Base.connection.execute sql
  end

  def self.inventory
    @bts_hash = Omni::BtsDetail.source_hash
    sql = 'select location_id, sku_id, on_hand_units, supplier_on_order_units, work_in_process_units, in_transit_units, allocated_units from inventories'
    # ActiveRecord::Base.transaction do
    data = ActiveRecord::Base.connection.execute sql
    data.each do |x|
      @source_count += 1
      location_id = x[0]
      sku_id = x[1]
      oh = x[2] || 0
      oo = x[3] || 0
      wip = x[4] || 0
      tr = x[5] || 0
      al = x[6] || 0
      row_id = @bts_hash["#{location_id},#{sku_id}"] || Buildit::Util::Guid.generate
      @updates.push "('#{row_id}','#{@bts.bts_id}','#{location_id}','#{sku_id}',#{oh},#{oo},#{wip},#{tr},#{al})"
      if @created_count.to_s.end_with? '0000'
        puts "#{Time.now.strftime("%H:%M:%S").yellow}: INVENTORY processing row: #{@created_count.to_s}"
        sql = "insert into bts_details (bts_detail_id, bts_id, location_id, sku_id, on_hand, on_order, wip, transit, allocated) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE on_hand = VALUES(on_hand)"
        ActiveRecord::Base.connection.execute sql
        @updates = []
        sql = ''
      end
      @created_count += 1
    end
  end

  def self.results
    updates = []
    @bts_hash = Omni::BtsDetail.source_hash
    ['2011','2012','2013'].each do |year|
      period_id = Omni::Period.where(:display => year).first.period_id
      sql = "select location_id, sku_id, net_sale_units from period_results where period_id = #{'period_id'}"
      data = ActiveRecord::Base.connection.execute sql
      # puts "results rows: #{data.count.to_s}"
      data.each do |x|
        @source_count += 1
        break if @source_count > 10
        location_id = x[0]
        sku_id = x[1]
        row_id = @bts_hash["#{location_id},#{sku_id}"] #|| Buildit::Util::Guid.generate
        puts "row is: #{row_id} and location is: #{location_id} and sku is: #{sku_id}"
        puts "no row id for #{location_id},#{sku_id}" unless row_id
        units = x[2] || 0
        @updates.push "('#{row_id}','#{@bts.bts_id}','#{location_id}','#{sku_id}',#{units})"
        if @created_count.to_s.end_with? '0000'
          puts "#{Time.now.strftime("%H:%M:%S").yellow}: RESULTS  processing row: #{@created_count.to_s}"
          sql = "insert into bts_details (bts_detail_id, bts_id, location_id, sku_id, py2) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE py2 = VALUES(py2)" if year == '2011'
          sql = "insert into bts_details (bts_detail_id, bts_id, location_id, sku_id, py1) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE py1 = VALUES(py1)" if year == '2012'
          sql = "insert into bts_details (bts_detail_id, bts_id, location_id, sku_id, ytd) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE ytd = VALUES(ytd)" if year == '2013'
          ActiveRecord::Base.connection.execute sql
          @updates = []
          sql = ''
        end
        @created_count += 1
      end

      # sql = "insert into bts_details (bts_detail_id, bts_id, location_id, sku_id, py2) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE py2 = VALUES(py2)" if year == '2011'
      # sql = "insert into bts_details (bts_detail_id, bts_id, location_id, sku_id, py1) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE py1 = VALUES(py1)" if year == '2012'
      # sql = "insert into bts_details (bts_detail_id, bts_id, location_id, sku_id, ytd) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE ytd = VALUES(ytd)" if year == '2013'
      # ActiveRecord::Base.connection.execute sql
      # @updates = []
      # sql = ''

    end

  end
end