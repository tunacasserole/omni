class Omni::Sync::Mark < Omni::Import::Base

  def self.xit
    # put "no locations found for these outlets: #{@no_locations}"
    # put "no skus found for these stock-size combos: #{@no_skus}"
    put "no sku found for that stock-size: #{@no_sku_count}"
    put "no location found for that outlet: #{@no_location_count}"
    put "omni rows created: #{@created_count}"
    put "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"
    puts @output
    # @no_locations.each {|x| puts x}
    exit
  end

  def self.put(message)
    @output = [] unless @output
    @output << "#{Time.now.strftime("%H:%M:%S").yellow}: #{message}"
    # puts "#{Time.now.strftime("%H:%M:%S").yellow}: #{message}"
  end

  def self.load
    puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
    @start_time = Time.now
    @start_date = Date.parse('1-1-2011')
    @end_date = Date.parse('31-12-2013')
    @total_count = 0
    @created_count = 0
    @no_sku_count = 0
    @no_location_count = 0
    @no_inventory_count = 0
    @days = 0

    @locations = Omni::Location.source_hash('PARKER')
    @skus = Omni::Sku.source_hash('PARKER')

    @updates = []
    @no_locations = []
    @no_skus = []
    @order_lines = []
  end

  def self.on_hand
    load

    ActiveRecord::Base.transaction do
      Omni::MarkInventory.where('qoh > 0 and stock_nbr > 0 and size is not null').find_each do |x|
        on_hand = x.qoh || 0

        location_id = @locations[x.outlet_nbr]
        if !location_id
          @no_location_count += 1
          @no_locations << "#{x.outlet_nbr.to_s}, #{x.stock_nbr.to_s}, #{x.size}, #{x.qoh}" if x.outlet_nbr
          next
        end

        sku_id = @skus["#{x.stock_nbr.to_s},#{x.size}"]
        unless sku_id
          @no_sku_count += 1
          @no_skus << "#{x.stock_nbr.to_s},#{x.size}"
          next
        end

        @insert_sql = "insert into inventories (inventory_id, sku_id, location_id, on_hand_units) VALUES ('#{SecureRandom.uuid.gsub('-','').upcase}', '#{sku_id}', '#{location_id}',#{on_hand})"
        ActiveRecord::Base.connection.execute @insert_sql
        @created_count += 1
      end
    end

    xit
  end

  def self.wip
    load

    ActiveRecord::Base.transaction do
      Omni::MarkWip.where('cut_wip > 0 or plant_wip > 0 or cont_wip > 0').find_each do |x|

        location_id = @locations[x.outlet_nbr]

        sku_id = @skus["#{x.stock_nbr.to_s},#{x.size}"]
        next unless location_id and sku_id

        wip = x.cut_wip + x.plant_wip + x.cont_wip
        @updates.push "('#{SecureRandom.uuid.gsub('-','').upcase}','#{sku_id}','#{location_id}',#{wip})"
        @created_count += 1

      end
    end

    sql = "insert into inventories (inventory_id, sku_id, location_id, work_in_process_units) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE work_in_process_units = VALUES(work_in_process_units)"
    ActiveRecord::Base.connection.execute sql
    xit
  end

  def self.allocated
    load
    transfer_to_outlet = Omni::MarkTransfer.outlet_hash
    Omni::MarkTransferLine.where("status_id in (8,53) and transfer_id >= ?", Omni::MarkTransfer.last_transfer_of_2010).find_each do |x|
      outlet_nbr = transfer_to_outlet[x.id]
      location_id = @locations[outlet_nbr]
      sku_id = @skus["#{x.stock_nbr.to_s},#{x.size}"]
      next unless location_id and sku_id

      allocated = x.qty
      @updates.push "('#{SecureRandom.uuid.gsub('-','').upcase}','#{sku_id}','#{location_id}',#{x.qty})"
      @created_count += 1
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
      location_id = @locations[outlet_nbr]
      sku_id = @skus["#{x.stock_nbr.to_s},#{x.size}"]
      next unless location_id and sku_id

      allocated = x.qty
      @updates.push "('#{SecureRandom.uuid.gsub('-','').upcase}','#{sku_id}','#{location_id}',#{x.qty})"
      @created_count += 1
    end
    sql = "insert into inventories (inventory_id, sku_id, location_id, in_transit_units) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE in_transit_units = VALUES(in_transit_units)"
    ActiveRecord::Base.connection.execute sql
    xit
  end

  def self.sold
    load
    self.order_hashes
    Omni::MarkOrderLine.where('order_nbr >= ?', Omni::MarkOrder.last_order_of_2010).find_each do |x|

      outlet_nbr = @order_to_outlet[x.order_nbr]
      location_id = @locations[outlet_nbr]
      @no_location_count += 1 unless location_id
      next unless location_id

      sku_id = @skus["#{x.stock_nbr.to_s},#{x.size}"]
      @no_sku_count += 1 unless sku_id
      next unless sku_id

      date = @order_to_date[x.order_nbr]
      units = x.qty_ordered
      next unless date and units

      @updates.push "('#{SecureRandom.uuid.gsub('-','').upcase}','#{sku_id}','#{location_id}',#{date},#{units})"
      @created_count += 1

      if @created_count.to_s.end_with? '0000'
        puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{@created_count.to_s}"
        sql = "insert into daily_results (daily_result_id, sku_id, location_id, date, net_sale_units) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE net_sale_units = VALUES(net_sale_units)"
        ActiveRecord::Base.connection.execute sql
        @updates = []
        sql = ''
      end

    end
    sql = "insert into daily_results (daily_result_id, sku_id, location_id, date, net_sale_units) VALUES #{@updates.join(", ")} ON DUPLICATE KEY UPDATE net_sale_units = VALUES(net_sale_units)"
    ActiveRecord::Base.connection.execute sql
    xit
  end

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
  # def self.sold_daily
  #   load

  #   put "deleting daily results"
  #   Omni::DailyResult.delete_all

  #   @order_to_outlet = Omni::MarkOrder.order_to_outlet_hash

  #   put "date range is: #{@start_date.to_s} to #{@end_date.to_s} for #{(@end_date - @start_date).to_i} days"
  #   @start_date.upto(@end_date) {|x| sold_by_day x}
  #   put "Days Processed: #{@days}"
  #   xit
  # end

  # def self.sold_by_day(date_to_export)
  #   puts "#{Time.now.strftime("%H:%M:%S").yellow}: #{date_to_export.to_s}"
  #   @days += 1

  #   put "start getting start and end order numbers"
  #   if Omni::MarkOrder.where('DATE(date_putin) = ?', date_to_export).count > 0
  #     start_order_nbr = Omni::MarkOrder.where('DATE(date_putin) = ?', date_to_export).minimum('order_nbr')
  #     end_order_nbr = Omni::MarkOrder.where('DATE(date_putin) = ?', date_to_export).maximum('order_nbr')
  #   end
  #   put "done getting start and end order numbers"

  #   put "create a hash of mark order_lines summarized for the period"
  #   Omni::MarkOrderLine.where('order_nbr >= ? and order_nbr <= ?', start_order_nbr, end_order_nbr).find_each do |line|
  #     outlet_nbr = @order_to_outlet[line.order_nbr]
  #     result = @order_lines.detect {|r| r[:stock_nbr] == line.stock_nbr && r[:size] == line.size && r[:outlet_nbr] == outlet_nbr}
  #     if result
  #       result[:total_units] += line.qty_ordered
  #     else
  #       result = {:stock_nbr => line.stock_nbr, :size => line.size, :outlet_nbr => outlet_nbr, :total_units => line.qty_ordered}
  #       @order_lines.push(result)
  #     end
  #   end
  #   put "created hash of order_lines: #{@order_lines.count.to_s}"

  #   put "For each stock-size combo from order line, write a daily_result row if the sku and location can be found"
  #   @order_lines.each do |line|
  #     sku_id = @skus[[line[:stock_nbr].to_s, line[:size].to_s]]
  #     location_id = @locations[line[:outlet_nbr]]
  #     next unless sku_id and location_id
  #     units = line[:total_units]
  #     insert_sql = "insert into daily_results (daily_result_id, sku_id, location_id, net_sale_units) VALUES ('#{SecureRandom.uuid.gsub('-','').upcase}', '#{sku_id}', '#{location_id}', #{units})"
  #     ActiveRecord::Base.connection.execute insert_sql
  #     @created_count += 1
  #   end
  # end


# end
