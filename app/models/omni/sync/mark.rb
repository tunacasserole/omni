class Omni::Sync::Mark < Omni::Import::Base

  def self.xit
    # put "no locations found for these outlets: #{@no_locations}"
    # put "number of locations without an outlet: #{@no_locations.length}"
    # put "no skus found for these stock-size combos: #{@no_skus}"
    # put "no inventory rows: #{@no_row_rows}"
    put "***********************************"
    put "no sku found for that stock-size: #{@no_sku_count}"
    put "no location found for that outlet: #{@no_location_count}"
    put "no inventory found: #{@no_id_count}"
    put "      -------------------------"
    put "legacy source rows: #{@source_count}"
    put "legacy rows skipped: #{@source_count - @created_count}"
    put "omni rows created: #{@created_count}"
    put "***********************************"
    put "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"
    puts @output
    # @no_locations.each {|x| puts x}
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
    @locations = Omni::Location.source_hash('PARKER')
    @skus = Omni::Sku.source_hash('PARKER')
    @updates = []
    @no_locations = []
    @no_skus = []
    @no_row = []
    @order_lines = []
  end

  def self.inventory
    @inventories = Omni::Inventory.source_hash
    self.on_hand
    self.wip
    self.transit
    self.allocated
  end

  def self.on_hand
    load
    ActiveRecord::Base.transaction do
      Omni::MarkInventory.where('qoh > 0 and stock_nbr > 0 and size is not null').find_each do |x|
        self.to_sql(x.outlet_nbr, x.stock_nbr, x.size, x.qoh, @date, false)
        if @created_count.to_s.end_with? '0000'
          puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{@created_count.to_s}"
          sql = "insert into inventories (inventory_id, sku_id, location_id, on_hand_units) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE on_hand_units = VALUES(on_hand_units)"
          ActiveRecord::Base.connection.execute sql
          @updates = []
          sql = ''
        end
      end
    end

    sql = "insert into inventories (inventory_id, sku_id, location_id, on_hand_units) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE on_hand_units = VALUES(on_hand_units)"
    ActiveRecord::Base.connection.execute sql
    xit
  end

  def self.wip
    load

    ActiveRecord::Base.transaction do
      Omni::MarkWip.where('cut_wip > 0 or plant_wip > 0 or cont_wip > 0').find_each do |x|
        units = x.cut_wip + x.plant_wip + x.cont_wip
        self.to_sql(x.outlet_nbr, x.stock_nbr, x.size, units, @date, false)
      end
    end

    sql = "insert into inventories (inventory_id, sku_id, location_id, work_in_process_units) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE work_in_process_units = VALUES(work_in_process_units)"
    ActiveRecord::Base.connection.execute sql
    # if @updates.length > 1
    #   # sql = "insert into inventories (inventory_id, work_in_process_units) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE work_in_process_units = VALUES(work_in_process_units)"
    # end
    xit
  end

  def self.allocated
    load
    transfer_to_outlet = Omni::MarkTransfer.outlet_hash
    Omni::MarkTransferLine.where("status_id in (8,53) and transfer_id >= ?", Omni::MarkTransfer.last_transfer_of_2010).find_each do |x|
      outlet_nbr = transfer_to_outlet[x.transfer_id]
      self.to_sql(outlet_nbr, x.stock_nbr, x.size, x.qty, @date, false)
    end
    sql = "insert into inventories (inventory_id, sku_id, location_id, allocated_units) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE allocated_units = VALUES(allocated_units)"
    ActiveRecord::Base.connection.execute sql
    xit
  end

  def self.transit
    load
    transfer_to_outlet = Omni::MarkTransfer.outlet_hash
    Omni::MarkTransferLine.where("transfer_id >= ?", Omni::MarkTransfer.last_transfer_of_2010).joins(:mark_transfer).where("transfer_hd.status_id = 9").find_each do |x|
      outlet_nbr = transfer_to_outlet[x.transfer_id]
      self.to_sql(outlet_nbr, x.stock_nbr, x.size, x.qty, @date, false)
    end
    sql = "insert into inventories (inventory_id, sku_id, location_id, in_transit_units) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE in_transit_units = VALUES(in_transit_units)"
    ActiveRecord::Base.connection.execute sql
    xit
  end

  def self.results
    load
    self.order_hashes

    Omni::MarkOrderLine.where('order_nbr >= ?', @last_order).find_each do |x|
      # puts x.order_nbr
      outlet_nbr = @order_to_outlet[x.order_nbr]
      # puts outlet_nbr
      date = @order_to_date[x.order_nbr]
      self.to_sql(outlet_nbr, x.stock_nbr, x.size, x.qty_ordered, date, true)

      if @updates.length == 10000
        puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{@created_count.to_s}"
        sql = "insert into daily_results (daily_result_id, sku_id, location_id, net_sale_units, date) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE net_sale_units = VALUES(net_sale_units)"
        ActiveRecord::Base.connection.execute sql
        @updates = []
        sql = ''
        @created_count += 1
      end

    end
    sql = "insert into daily_results (daily_result_id, sku_id, location_id, net_sale_units, date) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE net_sale_units = VALUES(net_sale_units)"
    ActiveRecord::Base.connection.execute sql
    xit
  end

  def self.to_sql(outlet_nbr, stock_nbr, size, units, date, sold)
    @source_count += 1
    location_id = @locations[outlet_nbr]
    unless location_id
        @no_location_count += 1
        @no_locations << outlet_nbr unless @no_locations.include? outlet_nbr
    end

    sku_id = @skus["#{stock_nbr.to_s},#{size}"]
    unless sku_id
      @no_sku_count += 1
      @no_skus << "#{stock_nbr.to_s},#{size}" unless @no_skus.include? "#{stock_nbr.to_s},#{size}"
      # puts @no_skus
    end

    if sold
      row_id = @daily_results["#{location_id},#{sku_id},#{date}"]
    else
      row_id = @inventories["#{location_id},#{sku_id}"]
    end

    unless row_id
      @no_id_count += 1
      @no_row << "#{location_id},#{sku_id},#{date}"
      # puts @no_row
      # abort 'whoops'
      row_id = Buildit::Util::Guid.generate
    end

    if location_id and sku_id
      if sold
        @updates.push "('#{row_id}','#{sku_id}','#{location_id}',#{units},'#{date}')"
      else
        @updates.push "('#{row_id}','#{sku_id}','#{location_id}',#{units})"
      end
      @created_count += 1
    end

  end

  def self.order_hashes
    puts "#{Time.now.strftime("%H:%M:%S").yellow}: START..create order_nbr to outlet_nbr hash"
    @daily_results = Omni::DailyResult.source_hash
    @order_to_outlet = {}
    @order_to_date = {}
    ActiveRecord::Base.transaction do
      Omni::MarkOrder.where('order_nbr >= ?',@last_order).find_each(:batch_size => 15000) do |o|
      # Omni::MarkOrder.where('order_nbr >= ? and order_nbr <= ?',Omni::MarkOrder.last_order_of_2010, Omni::MarkOrder.count).find_each(:batch_size => 10000) do |o|
        @order_to_date[o.order_nbr] = "#{o.date_putin.to_s[0...10]}"
        @order_to_outlet[o.order_nbr] = o.outlet_nbr
      end
    end
    puts "#{Time.now.strftime("%H:%M:%S").yellow}: END..create order_to_date hash: #{@order_to_date.count.to_s} and order_to_outlet hash: #{@order_to_outlet.count.to_s}"
  end

end