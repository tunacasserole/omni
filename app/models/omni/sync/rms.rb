class Omni::Sync::Rms < Omni::Import::Base

   def self.xit
    # put "no locations found for these outlets: #{@no_locations}"
    # put "no skus found for these products: #{@no_skus}"
    put "RMS Items  with no Omni Skus: #{@no_sku_count}"
    put "no location found for these stores: #{@no_location_count}"
    put "omni rows created: #{@created_count}"
    put "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"
    puts @output
    exit
  end

  def self.put(message)
    @output = [] unless @output
    @output << "#{Time.now.strftime("%H:%M:%S").yellow}: #{message}"
    # puts "#{Time.now.strftime("%H:%M:%S").yellow}: #{message}"
  end

  def self.load
    puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
    # puts "rms inventory dynamics rows: #{Omni::RmsItemDynamic.count.to_s}"
    @start_time = Time.now
    @start_date = Date.parse('1-1-2011')
    @end_date = Date.parse('31-12-2013')
    @total_count = 0
    @created_count = 0
    @no_sku_count = 0
    @no_location_count = 0
    @no_inventory_count = 0
    @days = 0

    @locations = Omni::Location.source_hash('BUCKHEAD')
    @skus = Omni::Sku.source_hash('BUCKHEAD')

    @updates = []
    @no_locations = []
    @no_skus = []
    @order_lines = []
  end

  def self.on_hand
    load
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for 'RMS')
    sql = 'select ItemID, StoreID, SnapShotQuantity from ItemDynamic where SnapShotQuantity > 0'
    data = ActiveRecord::Base.connection.execute sql
    # ActiveRecord::Base.transaction do
    # Omni::RmsItemDynamic.where('SnapShotQuantity > 0').find_each do |x|
    data.each do |x|
        puts "PROCESSING row #{@created_count.to_s}:" if @created_count.to_s.end_with? '00000'
        puts x.StoreID
        location_id = @locations[x.StoreID.to_i]
        unless location_id
          @no_location_count += 1
          @no_locations << x.StoreID.to_s if x.StoreID
          next
        end

        sku_id = @skus["#{x.ItemID}"]
        unless sku_id
          @no_sku_count += 1
          @no_skus << x.ItemID.to_s if x.ItemID
          next
        end

        units = x.SnapShotQuantity
        sql = "insert into inventories (inventory_id, sku_id, location_id, on_hand_units) VALUES ('#{SecureRandom.uuid.gsub('-','').upcase}', '#{sku_id}', '#{location_id}',#{units})"
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
    data.each do |x|

      location_id = @locations[x['StoreID'].to_i]
      unless location_id
        @no_location_count += 1
        @no_locations << x['StoreID'] if x['StoreID']
        next
      end

      sku_id = @skus[x['ItemID']]
      unless sku_id
        @no_sku_count += 1
        @no_skus << x['ItemID'] if x['ItemID']
        next
      end

      units = x['QOO'].chop.chop.to_i
      # puts "#{x['ItemID'].to_s} : #{x['StoreID'].to_s} : #{x['QOO'].chop.chop}"
      sql = "insert into inventories (inventory_id, sku_id, location_id, on_order_units) VALUES ('#{SecureRandom.uuid.gsub('-','').upcase}', '#{sku_id}', '#{location_id}',#{units})"
      ActiveRecord::Base.connection.execute sql
      @created_count += 1
    end

    xit
  end

  def self.wip
   puts "Not applicable for RMS"
  end

  def self.allocated
   puts "Not applicable for RMS"
  end

  def self.transit
   puts "Not applicable for RMS"
  end

  def self.sold
    load
    # backorder_sql = "select T.Time, T.StoreID, TE.ItemID, TE.Quantity from TransactionEntry TE, [Transaction] T where T.TransactionNumber = TE.TransactionNumber and TE.Quantity > 0 and T.ItemID <> '48389' and T.RecallID <> 0 and T.RecallType = 4 and T.Time >= '01/01/2011'"

    start_date = '01-01-2011'
    1.upto(40).each do |x|
      ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for 'RMS')
      sql = "select T.[Time], T.StoreID, TE.ItemID, TE.Quantity as Sold from TransactionEntry TE, [Transaction] T where T.TransactionNumber = TE.TransactionNumber and TE.Quantity > 0 and TE.ItemID <> '48389' and T.[Time] >= '#{(start_date.to_date + (x-1).months).to_s}' and T.[Time] <= '#{(start_date.to_date + x.months).to_s}'"
      data = ActiveRecord::Base.connection().execute sql
      ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for 'BUILDIT')
      data.each do |x|

        location_id = @locations[x['StoreID']]
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
        @updates.push "('#{SecureRandom.uuid.gsub('-','').upcase}','#{sku_id}','#{location_id}',#{date},#{units})"
        @created_count += 1

        if @created_count.to_s.end_with? '0000'
          puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{@created_count.to_s}"
          insert_sql = "insert into daily_results (daily_result_id, sku_id, location_id, date, net_sale_units) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE net_sale_units = VALUES(net_sale_units)"
          ActiveRecord::Base.connection.execute insert_sql
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
  # def self.to_sql(store_id, item, units, date, sold)
  #   @source_count += 1

  #   location_id = @locations[.to_i]
  #   unless location_id
  #       @no_location_count += 1
  #       @no_locations << "#{store_id.to_s},#{item.to_s}"
  #   end

  #   sku_id = @skus["#{stock_nbr.to_s},#{size}"]
  #   unless sku_id
  #     @no_sku_count += 1
  #     @no_skus << "#{store_id.to_s},#{item.to_s}"
  #   end

  #   if sold
  #     row_id = @inventories["#{location_id},#{sku_id},#{date}.to_s"]
  #   else
  #     row_id = @inventories["#{location_id},#{sku_id}"]
  #   end

  #   unless row_id
  #     @no_id_count += 1
  #     @no_row << "#{location_id},#{sku_id}"
  #     row_id = Buildit::Util::Guid.generate
  #   end

  #   if location_id and sku_id
  #     if sold
  #       @updates.push "('#{row_id}','#{sku_id}','#{location_id}',#{units},#{date})"
  #     else
  #       @updates.push "('#{row_id}','#{sku_id}','#{location_id}',#{units})"
  #     end
  #     @created_count += 1
  #   end

  # end
# end