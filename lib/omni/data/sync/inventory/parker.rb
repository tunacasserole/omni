class Omni::Data::Sync::Inventory::Parker

  def self.xit
    # put "no locations found for these outlets: #{@no_locations}"
    # put "number of locations without an outlet: #{@no_locations.length}"
    # put "no skus found for these stock-size combos: #{@no_skus}"
    # put "no inventory rows: #{@no_row_rows}"
    put "\n***********************************"
    # put "no sku found for these stock-sizes: #{@no_skus}"
    # put "no location found for these outlets: #{@no_locations}"
    put "no sku found for that stock-size: #{@no_sku_count}"
    put "no location found for that outlet: #{@no_location_count}"
    put "no inventory found: #{@no_id_count}"
    put "      -------------------------"
    put "legacy source rows: #{@source_count}"
    put "legacy rows skipped: #{@source_count - @created_count}"
    put "omni rows created: #{@created_count}"
    put "***********************************\n"
    put "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"
    puts @output
    # @no_locations.each {|x| puts x}
    # exit
    # @no_skus.each do |x|
    #   Omni::Sku.create(display: x, source: 'MARK AUTO CREATE', source_id: x, state: 'autocreated') #unless Omni::Sku.where(source_id: source).first
    # end
  end

  def self.put(message)
    @output = [] unless @output
    @output << "#{Time.now.strftime("%H:%M:%S").yellow}: #{message}"
    # puts "#{Time.now.strftime("%H:%M:%S").yellow}: #{message}"
  end

  def self.inventory
    # self.on_hand
    self.wip
    # self.transit
    # self.allocated
    # self.daily_results
    # self.sales_history
  end

  # def self.sales_history
  #   # compile daily sales history into inventory sale_unit_ytd, py1, py2, py3
  #   # ytd will be weekly, prior years will be one-time

  #   bar = ProgressBar.new(Omni::DailyResult.count)
  #   years = {2011 => 'py3', 2012 => 'py2', 2013 => 'py1', 2014 => 'ytd'}
  #   if location_id and sku_id
  #     if sold
  #       @updates.push "('#{row_id}','#{location_id}','#{sku_id}',#{units},'#{date}')"
  #     else
  #       @updates.push "('#{row_id}','#{location_id}','#{sku_id}',#{units})"

  #   ActiveRecord::Base.transaction do
  #     ActiveRecord::Base.connection.execute("select sku_id, location_id, year, sum(net_sale_units) from daily_results group by sku_id, location_id, year").each do |x|
  #       bar.increment!
  #       # ActiveRecord::Base.connection.execute("update inventories set sale_units_#{years[x[2]]} = #{x[3]} where sku_id = '#{x[0]}' and location_id = '#{x[1]}'")
  #       ActiveRecord::Base.connection.execute("insert into inventories (inventory_id, location_id, sku_id, on_hand_units) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE net_sale_units = VALUES(net_sale_units)"
  #     end
  #   end

  # end

  def self.on_hand
    load
    bar = ProgressBar.new(Omni::MarkInventory.where('qoh > 0 and stock_nbr > 0 and size is not null').count)

    ActiveRecord::Base.transaction do
      Omni::MarkInventory.where('qoh > 0 and stock_nbr > 0 and size is not null').find_each do |x|
        bar.increment!
        # break if @created_count > 11000
        self.to_sql(x.outlet_nbr, x.stock_nbr, x.size, x.qoh, @date, false)
        if @created_count.to_s.end_with? '0000' and @updates.length > 0
          # puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{@created_count.to_s}"
          sql = "insert into inventories (inventory_id, location_id, sku_id, on_hand_units) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE on_hand_units = VALUES(on_hand_units)"
          # puts "sql is ***********#{sql}"
          ActiveRecord::Base.connection.execute sql
          @updates = []
          sql = ''
        end
      end
    end

    sql = "insert into inventories (inventory_id, location_id, sku_id, on_hand_units) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE on_hand_units = VALUES(on_hand_units)"
    # puts "*********#{sql}*************"
    ActiveRecord::Base.connection.execute sql unless @created_count == 0
    # xit
  end

  def self.wip
    load
    # bar = ProgressBar.new(Omni::MarkWip.where('cut_wip > 0 or cont_wip > 0 or plant_wip > 0').count)
    ActiveRecord::Base.connection.execute("update inventories set work_in_process_units = 0")

    ActiveRecord::Base.transaction do
      ActiveRecord::Base.connection.execute("select outlet_nbr, stock_nbr, size, sum(cut_wip), sum(cont_wip), sum(plant_wip) from mark_wip group by outlet_nbr, stock_nbr, size").each do |x|
      # Omni::MarkWip.where('cut_wip > 0 or plant_wip > 0 or cont_wip > 0').find_each do |x|
        # bar.increment!
        units = x[3] + x[4] + x[5]
        next unless units > 0
        self.to_sql(x[0], x[1], x[2], units, @date, false)
      end
    end

    sql = "insert into inventories (inventory_id, location_id, sku_id, work_in_process_units) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE work_in_process_units = VALUES(work_in_process_units)"
    ActiveRecord::Base.connection.execute sql unless @created_count == 0
    # if @updates.length > 1
    #   # sql = "insert into inventories (inventory_id, work_in_process_units) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE work_in_process_units = VALUES(work_in_process_units)"
    # end
    # xit
  end

  def self.transit
    load
    # transfer_to_outlet = Omni::MarkTransfer.outlet_hash
    # bar = ProgressBar.new(ActiveRecord::Base.connection.execute("select count(*) from transfer_li a, transfer_hd b where a.transfer_id = b.id and b.status_id = 9").first[0])
    ActiveRecord::Base.connection.execute("select b.to_outlet_nbr, stock_nbr, size, sum(qty) from transfer_li a, transfer_hd b where a.transfer_id > #{49237} and a.transfer_id = b.id and b.status_id = 9 group by stock_nbr, size, b.to_outlet_nbr order by stock_nbr, size, b.to_outlet_nbr").each do |x|
    # Omni::MarkTransferLine.where("transfer_id >= ?", Omni::MarkTransfer.last_transfer_of_2010).joins(:mark_transfer).where("transfer_hd.status_id = 9").find_each do |x|
      # bar.increment!
      # next unless x[3] > 0
      self.to_sql(x[0], x[1], x[2], x[3], @date, false)
      if @created_count.to_s.end_with? '00'
        sql = "insert into inventories (inventory_id, location_id, sku_id, in_transit_units) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE in_transit_units = VALUES(in_transit_units)"
        ActiveRecord::Base.connection.execute sql unless @created_count == 0
        sql = ''
      end
    end
    sql = "insert into inventories (inventory_id, location_id, sku_id, in_transit_units) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE in_transit_units = VALUES(in_transit_units)"
    ActiveRecord::Base.connection.execute sql unless @created_count == 0

    # xit
  end

  def self.allocated
    load
    # bar = ProgressBar.new(ActiveRecord::Base.connection.execute("select count(*) from transfer_li a, transfer_hd b where a.transfer_id = b.id and b.status_id in (8,53)").first[0])
    ActiveRecord::Base.connection.execute("select b.to_outlet_nbr, stock_nbr, size, sum(qty) from transfer_li a, transfer_hd b where a.transfer_id > #{49237} and a.transfer_id = b.id and b.status_id in (8,53) group by stock_nbr, size, b.to_outlet_nbr order by stock_nbr, size, b.to_outlet_nbr").each do |x|
      # bar.increment!
      self.to_sql(x[0], x[1], x[2], x[3], @date, false)
    end
    sql = "insert into inventories (inventory_id, location_id, sku_id, allocated_units) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE allocated_units = VALUES(allocated_units)"
    ActiveRecord::Base.connection.execute sql unless @created_count == 0
    xit
  end

  def self.daily_results
    load
    self.order_hashes
    bar = ProgressBar.new(Omni::MarkOrderLine.count)
    Omni::MarkOrderLine.where('order_nbr >= ?', @last_order).find_each do |x|
      bar.increment!
      # puts x.order_nbr
      outlet_nbr = @order_to_outlet[x.order_nbr]
      # puts outlet_nbr
      date = @order_to_date[x.order_nbr]
      self.to_sql(outlet_nbr, x.stock_nbr, x.size, x.qty_ordered, date, true)

      if @updates.length == 10000
        # puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{@created_count.to_s}"
        sql = "insert into daily_results (daily_result_id, location_id, sku_id, net_sale_units, date) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE net_sale_units = VALUES(net_sale_units)"
        ActiveRecord::Base.connection.execute sql unless @created_count == 0
        @updates = []
        sql = ''
        @created_count += 1
      end

    end
    sql = "insert into daily_results (daily_result_id, location_id, sku_id, net_sale_units, date) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE net_sale_units = VALUES(net_sale_units)"
    ActiveRecord::Base.connection.execute sql unless @created_count == 0
    ActiveRecord::Base.connection.execute "update daily_results set year = year(date)"

    xit
  end

  def self.to_sql(outlet_nbr, stock_nbr, size, units, date, sold)
      # puts "START to_sql, created_count is #{@created_count}, outlet_nbr is #{outlet_nbr}, stock_nbr is #{stock_nbr}, size is #{size}, units is #{units.to_s}, date is #{date}, sold is #{sold}"
    size = size.upcase
    @source_count += 1
    location_id = @locations[outlet_nbr]
    unless location_id
      # if @no_locations.include? outlet_nbr
      #   l = Omni::Location.where(display: outlet_nbr).first || Omni::Location.create(display: outlet_nbr)
      # else
      #   l = Omni::Location.create(display: outlet_nbr) unless Omni::Location.where(display: outlet_nbr).first
      # end
      # if l
      #   location_id = l.location_id
      # else
      #   puts "no location found for: #{outlet_nbr}"
      # end
      @no_location_count += 1
      @no_locations << outlet_nbr
      # abort
    end

    source = "#{stock_nbr.to_s}-#{size}"
    sku_id = @parker_skus[source]
    unless sku_id
      @no_sku_count += 1
      @no_skus << source
    end
    #   if @no_skus.include? source
    #     s = Omni::Sku.where(display: source).first || Omni::Sku.create(display: source, source: 'MARK AUTO CREATE', source_id: source, state: 'autocreated')
    #   else
    #     s = Omni::Sku.create(display: source, source: 'MARK AUTO CREATE', source_id: source, state: 'autocreated') unless Omni::Sku.where(source_id: source).first
    #   end
    #   if s
    #     sku_id = s.sku_id
    #   else
    #     puts "no sku found for: #{source}"
    #   end

    if sold
      row_id = @daily_results["#{location_id},#{sku_id},#{date}"]
    else
      row_id = @inventories["#{location_id},#{sku_id}"]
    end

    unless row_id
      @no_id_count += 1
      @no_row << "#{location_id},#{sku_id},#{date}"
      # puts "no row found: #{location_id}, #{sku_id}, #{date}"
      row_id = Buildit::Util::Guid.generate
    end

    if location_id and sku_id
      if sold
        @updates.push "('#{row_id}','#{location_id}','#{sku_id}',#{units},'#{date}')"
      else
        @updates.push "('#{row_id}','#{location_id}','#{sku_id}',#{units})"
      end
      @created_count += 1
      # puts "created_count is #{@created_count}"
    end

    # puts "END to_sql, created_count is #{@created_count}, sku_id is #{sku_id}, location_id is #{location_id}, row_id is #{row_id}, @no_skus_count is #{@no_skus_count.to_s}, @no_location_count is #{@no_location_count}"#, @no_skus is #{@no_skus}"
  end

  def self.order_hashes
    @daily_results = Omni::DailyResult.to_hash
    # puts "#{Time.now.strftime("%H:%M:%S").yellow}: START..create order_nbr to outlet_nbr hash"
    @order_to_outlet = {}
    @order_to_date = {}
    ActiveRecord::Base.transaction do
      Omni::MarkOrder.where('order_nbr >= ?',@last_order).find_each(:batch_size => 15000) do |o|
      # Omni::MarkOrder.where('order_nbr >= ? and order_nbr <= ?',Omni::MarkOrder.last_order_of_2010, Omni::MarkOrder.count).find_each(:batch_size => 10000) do |o|
        @order_to_date[o.order_nbr] = "#{o.date_putin.to_s[0...10]}"
        @order_to_outlet[o.order_nbr] = o.outlet_nbr
      end
    end
    puts "#{Time.now.strftime("%H:%M:%S").yellow}: order_to_date hash: #{@order_to_date.count.to_s} and order_to_outlet hash: #{@order_to_outlet.count.to_s}"
  end

  def self.load
    puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
    @start_time = Time.now
    @date = Date.parse('1-1-1999')
    # @start_date = Date.parse('1-1-2011')
    # @end_date = Date.parse('31-12-2013')
    # @total_count = 0
    @created_count = 0
    @source_count = 0
    @no_sku_count = 0
    @no_location_count = 0
    @no_id_count = 0
    @days = 0
    @last_order = 2100000
    @last_order = Omni::MarkOrder.last_order_of_2010
    @locations = Omni::Location.to_hash
    @parker_skus = Omni::SkuAlias.to_hash('PARKER')
    @inventories = Omni::Inventory.to_hash
    @updates = []
    @no_locations = []
    @no_skus = []
    @no_row = []
    @order_lines = []
  end

  def self.locations
    data = Omni::MarkOutlet.all
    data.each do |x|
      Omni::Location.create(display: x.name, location_nbr: x.outlet_nbr, line_1: x.address1, line_2: x.address2, city: x.city, zip: x.zip_code, phone: x.phone_nbr, is_enabled: false) unless Omni::Location.where(location_nbr: x.outlet_nbr).first
    end
  end

end
