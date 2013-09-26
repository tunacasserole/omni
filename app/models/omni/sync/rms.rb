class Omni::Sync::Rms < Omni::Import::Base

   def self.xit
    # put "no locations found for these outlets: #{@no_locations}"
    put "no skus found for these products: #{@no_skus}"
    put "no skus found for these products: #{@no_sku_count}"
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

    ActiveRecord::Base.transaction do
      # Omni::RmsItemDynamic.where('select ItemID, StoreID, SnapShotQuantity from ItemDynamic where SnapShotQuantity > 0').find_each do |x|
      Omni::RmsItemDynamic.where('SnapShotQuantity > 0').find_each do |x|
        puts "PROCESSING row #{@created_count.to_s}:" if @created_count.to_s.end_with? '00000'

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
        @insert_sql = "insert into inventories (inventory_id, sku_id, location_id, on_hand_units) VALUES ('#{SecureRandom.uuid.gsub('-','').upcase}', '#{sku_id}', '#{location_id}',#{units})"
        ActiveRecord::Base.connection.execute @insert_sql
        @created_count += 1
      end
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

      units = x['QOO'].chop.chop
      # puts "#{x['ItemID'].to_s} : #{x['StoreID'].to_s} : #{x['QOO'].chop.chop}"
      sql = "insert into inventories (inventory_id, sku_id, location_id, on_hand_units) VALUES ('#{SecureRandom.uuid.gsub('-','').upcase}', '#{sku_id}', '#{location_id}',#{units})"
      ActiveRecord::Base.connection.execute sql
      @created_count += 1
    end

    xit
  end

  def self.wip
   # N/A
   puts "Not applicable for RMS"
  end

  def self.allocated
   # N/A
   puts "Not applicable for RMS"
  end

  def self.transit
   # N/A
   puts "Not applicable for RMS"
  end

  def self.sold
    load
    Omni::RmsTransaction"select DBTimeStamp as date,ItemID, StoreID, Quantity from TransactionEntry where ItemID <>'48389' and Quantity > 0"
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

      units = x['QOO'].chop.chop

      sql = "insert into daily_results (daily_result_id, sku_id, location_id, date, net_sale_units) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE net_sale_units = VALUES(net_sale_units)"
      ActiveRecord::Base.connection.execute sql
      @created_count += 1
    end

  end


  # def self.sold_mark_for_reference
  #   load
  #   self.order_hashes
  #   Omni::MarkOrderLine.where('order_nbr >= ?', Omni::MarkOrder.last_order_of_2010).find_each do |line|
  #     outlet_nbr = @order_to_outlet[line.order_nbr]
  #     location_id = @locations[outlet_nbr]
  #     @no_location_count += 1 unless location_id
  #     sku_id = @skus[[line.stock_nbr.to_s, line.size.to_s]]
  #     @no_sku_count += 1 unless sku_id
  #     date = @order_to_date[line.order_nbr]
  #     units = line.qty_ordered
  #     next unless sku_id and location_id and date
  #     @updates.push "('#{SecureRandom.uuid.gsub('-','').upcase}','#{sku_id}','#{location_id}',#{date},#{units})"
  #     @created_count += 1
  #     if @created_count.to_s.end_with? '0000'
  #       puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{@created_count.to_s}"
  #       sql = "insert into daily_results (daily_result_id, sku_id, location_id, date, net_sale_units) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE net_sale_units = VALUES(net_sale_units)"
  #       ActiveRecord::Base.connection.execute sql
  #       @updates = []
  #       sql = ''
  #     end
  #   end
  #   sql = "insert into daily_results (daily_result_id, sku_id, location_id, date, net_sale_units) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE net_sale_units = VALUES(net_sale_units)"
  #   ActiveRecord::Base.connection.execute sql
  #   xit
  # end

  def self.order_hashes
    puts "#{Time.now.strftime("%H:%M:%S").yellow}: START..create order_nbr to outlet_nbr hash"
    @order_to_outlet = {}
    @order_to_date = {}
    ActiveRecord::Base.transaction do
      Omni::MarkOrder.where('order_nbr >= ? and order_nbr <= ?',Omni::MarkOrder.last_order_of_2010, Omni::MarkOrder.count).find_each(:batch_size => 10000) do |o|
      # Omni::MarkOrder.where('order_nbr >= ? and order_nbr <= ?',Omni::MarkOrder.last_order_of_2010, Omni::MarkOrder.count).find_each(:batch_size => 10000) do |o|
        @order_to_date[o.order_nbr] = "'#{o.date_putin.to_s[0...10]}'"
        @order_to_outlet[o.order_nbr] = o.outlet_nbr
      end
    end
    puts "#{Time.now.strftime("%H:%M:%S").yellow}: END..create order_to_date hash: #{@order_to_date.count.to_s} and order_to_outlet hash: #{@order_to_outlet.count.to_s}"
  end



end
