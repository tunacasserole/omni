class Omni::Sync::Inventory::Buckhead < Omni::Sync::Base

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
    # @output = [] unless @output
    @output << "#{Time.now.strftime("%H:%M:%S").yellow}: #{message}"
    # puts "#{Time.now.strftime("%H:%M:%S").yellow}: #{message}"
  end

  def self.load
    puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
    # puts "rms inventory dynamics rows: #{Omni::RmsItemDynamic.count.to_s}"
    @start_time = Time.now
    @start_date = Date.parse('1-1-2011')
    @end_date = Date.parse('31-12-2013')
    @source_count = 0
    @created_count = 0
    @no_sku_count = 0
    @no_location_count = 0
    @no_inventory_count = 0
    @days = 0
    @locations = Omni::Location.source_hash('BUCKHEAD')
    @skus = Omni::Sku.source_hash('BUCKHEAD')
    @output = []
    @updates = []
    @no_locations = []
    @no_skus = []
    @order_lines = []
  end

  def self.inventory
    @inventories = Omni::Inventory.source_hash
    self.on_hand
    # self.on_order
  end

  def self.on_hand
    load
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for 'RMS')
    sql = 'select ItemID, StoreID, SnapShotQuantity from ItemDynamic where SnapShotQuantity > 0'
    data = ActiveRecord::Base.connection.execute sql
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for 'BUILDIT')
    # ActiveRecord::Base.transaction do
    # Omni::RmsItemDynamic.where('SnapShotQuantity > 0').find_each do |x|
    data.each do |x|
      @source_count += 1
      puts "PROCESSING row #{@created_count.to_s}:" if @created_count.to_s.end_with? '00000'

      location_id = @locations[x['StoreID'].to_i]
      unless location_id
        @no_location_count += 1
        @no_locations << x['StoreID'] if x['StoreID']
        next
      end

      sku_id = @skus[x['ItemID'].to_s]
      unless sku_id
        @no_sku_count += 1
        @no_skus << x['ItemID'] #if x['ItemID']
        next
      end

      units = x['SnapShotQuantity']
      row_id = @inventories["#{location_id},#{sku_id}"] || Buildit::Util::Guid.generate

      sql = "insert into inventories (inventory_id, sku_id, location_id, on_hand_units) VALUES ('#{row_id}', '#{sku_id}', '#{location_id}',#{units}) ON DUPLICATE KEY UPDATE on_hand_units = VALUES(on_hand_units)"
      ActiveRecord::Base.connection.execute sql
      @created_count += 1
    end

    xit
  end

  def self.on_order
    # Get on order amounts by store and item from PurchaseOrderEntry
    load
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for 'RMS')
    sql = "select POE.StoreID, ItemID, (QuantityOrdered - QuantityReceivedToDate) AS QOO from PurchaseOrderEntry POE inner join PurchaseOrder PO on PO.ID = POE.PurchaseOrderID AND PO.StoreID = POE.StoreID where PO.Status < 2 and PO.Potype < 2 order by ItemID, POE.StoreID"
    data = ActiveRecord::Base.connection().execute sql
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for 'BUILDIT')
    data.each do |x|
      @source_count += 1
      # puts "#{x['ItemID'].to_s} : #{x['StoreID'].to_s} : #{x['QOO'].chop.chop}"
      location_id = @locations[x['StoreID'].to_i]
      unless location_id
        @no_location_count += 1
        @no_locations << x['StoreID'] if x['StoreID']
        next
      end

      sku_id = @skus[x['ItemID'].to_s]
      unless sku_id
        @no_sku_count += 1
        @no_skus << x['ItemID'] if x['ItemID']
        next
      end

      units = x['QOO']
      row_id = @inventories["#{location_id},#{sku_id}"] || Buildit::Util::Guid.generate
      sql = "insert into inventories (inventory_id, sku_id, location_id, supplier_on_order_units) VALUES ('#{row_id}', '#{sku_id}', '#{location_id}',#{units}) ON DUPLICATE KEY UPDATE supplier_on_order_units = VALUES(supplier_on_order_units)"
      ActiveRecord::Base.connection.execute sql
      @created_count += 1
    end

    xit
  end

  def self.results
    load
    # @daily_results = Omni::DailyResult.source_hash
    @daily_results = {}
    # backorder_sql = "select T.Time, T.StoreID, TE.ItemID, TE.Quantity from TransactionEntry TE, [Transaction] T where T.TransactionNumber = TE.TransactionNumber and TE.Quantity > 0 and T.ItemID <> '48389' and T.RecallID <> 0 and T.RecallType = 4 and T.Time >= '01/01/2011'"
    start_date = '01-01-2011'
    1.upto(40).each do |x|
      ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for 'RMS')
      sql = "select T.[Time], T.StoreID, TE.ItemID, TE.Quantity as Sold from TransactionEntry TE, [Transaction] T where T.TransactionNumber = TE.TransactionNumber and TE.Quantity > 0 and TE.ItemID <> '48389' and T.[Time] >= '#{(start_date.to_date + (x-1).months).to_s}' and T.[Time] <= '#{(start_date.to_date + x.months).to_s}'"
      data = ActiveRecord::Base.connection().execute sql
      ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for 'BUILDIT')
      data.each do |x|
        @source_count += 1
        # puts "#{x['ItemID'].to_s} : #{x['StoreID'].to_s} : #{x['Sold']}"

        location_id = @locations[x['StoreID'].to_i]
        unless location_id
          @no_location_count += 1
          @no_locations << x['StoreID'] if x['StoreID']
          next
        end

        sku_id = @skus["#{x['ItemID']}"]
        unless sku_id
          @no_sku_count += 1
          @no_skus << x['ItemID'] if x['ItemID']
          next
        end

        units = x['Sold'].to_s.chop.chop
        date = "'#{x['Time'].to_s[0...10]}'"
        row_id = @daily_results["#{location_id},#{sku_id},#{date.to_s}"] || Buildit::Util::Guid.generate
        @updates.push "('#{row_id}','#{sku_id}','#{location_id}',#{date},#{units})"
        @created_count += 1

        if @created_count.to_s.end_with? '0000'
          puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{@created_count.to_s}"
          sql = "insert into daily_results (daily_result_id, sku_id, location_id, date, net_sale_units) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE net_sale_units = VALUES(net_sale_units) "
          ActiveRecord::Base.connection.execute sql
          @updates = []
          sql = ''
        end
      end
    end

    sql = "insert into daily_results (daily_result_id, sku_id, location_id, date, net_sale_units) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE net_sale_units = VALUES(net_sale_units)"
    ActiveRecord::Base.connection.execute sql
    xit
  end
end
