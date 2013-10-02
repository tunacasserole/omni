class Omni::Sync::Omni

  def self.xit
    # put "no locations found for these outlets: #{@no_locations}"
    # put "no skus found for these products: #{@no_skus}"
    put "no sku found for that item: #{@no_sku_count}"
    put "no location found for that store: #{@no_location_count}"
    # put "no inventory found: #{@no_id_count}"
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

  def self.results
    puts "---results---"
    @period_results = Omni::PeriodResult.source_hash
    periods = Omni::Period.where("year_number > '2010' and year_number < '2014'").order('year_number ASC').order('period_number ASC')
    periods.each do |p|
        # p = Omni::Period.where(:display => '2011-Period 1').first
        # units = x['sold']  #JRUBY
        # location_id = x['location_id'] #JRUBY
        # sku_id = x['sku_id'] #JRUBY
      sql = "select sku_id, location_id, sum(net_sale_units) as sold from daily_results where date >= '#{p.start_date}' and date <= '#{p.end_date}' group by sku_id, location_id"
      data = ActiveRecord::Base.connection.execute sql
      data.each do |x|
        @source_count += 1
        units = x[2]
        period_id = p.period_id
        location_id = x[1] #MRI
        sku_id = x[0] #MRI
        row_id = @period_results["#period_id},#{location_id},#{sku_id}"] || Buildit::Util::Guid.generate
        @updates.push "('#{row_id}','#{period_id}','#{location_id}','#{sku_id}',#{units})"

        if @created_count.to_s.end_with? '000'
          puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{@created_count.to_s}"
          sql = "insert into period_results (period_result_id, period_id, location_id, sku_id, net_sale_units) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE net_sale_units = VALUES(net_sale_units)"
          ActiveRecord::Base.connection.execute sql
          @updates = []
          sql = ''
        end
        @created_count += 1
      end
      xit
    end
  end

  def self.bts
    load
    bts = Omni::Bts.find_or_create(:display => Date.today.to_s)
    @bts = Omni::BtsDetail.source_hash
    sql = 'select location_id, sku_id, on_hand_units, supplier_on_order_units, work_in_process_units, in_transit_units, allocated_units from inventories'
    # ActiveRecord::Base.transaction do
    data = ActiveRecord::Base.connection.execute sql
    data.each do |x|
      @source_count += 1
      location_id = x[0]
      sku_id = x[1]
      oh = x[2]
      oo = x[3]
      wip = x[4]
      tr = x[5]
      al = x[6]
      row_id = @bts["#{location_id},#{sku_id}"] || Buildit::Util::Guid.generate
      @updates.push "('#{row_id}','#{bts.bts_id}','#{location_id}','#{sku_id}',#{oh},#{oo},#{wip},#{tr},#{al})"
      if @created_count.to_s.end_with? '000'
        puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{@created_count.to_s}"
        sql = "insert into bts_details (bts_detail_id, bts_id, location_id, sku_id, on_hand, on_order, wip, transit, allocated) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE on_hand = VALUES(on_hand)"
        ActiveRecord::Base.connection.execute sql
        @updates = []
        sql = ''
      end
      @created_count += 1
    end
  end

end