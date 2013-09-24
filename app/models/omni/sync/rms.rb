class Omni::Sync::Rms

  def self.xit
    if Time.now-@start_time > 120
      put "******************************"
      put "Omni rows created: #{@created_count}"    
      put "******************************"
      put "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"              
      puts @output
      exit
    end
  end

  def self.put(message)
    @output = [] unless @output
    @output << "#{Time.now.strftime("%H:%M:%S").yellow}: #{message}"
    # puts "#{Time.now.strftime("%H:%M:%S").yellow}: #{message}"
  end

  def self.load
    @start_time = Time.now
    put "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ " 
    @start_date = Date.parse('1-1-2011')
    @end_date = Date.parse('31-12-2013')
    @total_count = 0
    @created_count = 0
    @no_sku_count = 0
    @no_location_count = 0
    @last_order_of_2010 = 1569747
    @last_transfer_id_of_2010 = 288002     
    @days = 0

    @locations = {}
    @skus = {}
    @order_to_date = {}
    @order_to_outlet = {}    
    @transfer_to_outlet = {}        

    @no_locations = []
    @no_skus = []
    @order_lines = []    

    put "START..create sku hash"
    Omni::Sku.find_each(:conditions => "mark_stock IS NOT NULL and mark_size IS NOT NULL") {|x| @skus.merge!([x.mark_stock, x.mark_size] => x.sku_id)}
    put "END....create sku hash: #{@skus.count.to_s}"

    put "START..create location hash"
    Omni::Location.all.each {|loc| @locations[loc.location_nbr] = loc.location_id}
    put "END....create location hash: #{@locations.count.to_s}"
  end

  def self.on_hand
    load

    ActiveRecord::Base.transaction do
      Omni::MarkInventory.find_each do |x|      
        puts "*********PROCESSING row #{@total_count.to_s}:" if @i.to_s.end_with? '00000'        
        @total_count += 1
        on_hand = x.qoh || 0

        location_id = @locations["#{x.outlet_nbr}"]
        if !location_id
          @no_location_count += 1
          @no_locations << "#{x.outlet_nbr},"
          next
        end

        sku_id = @skus[[x[:stock_nbr].to_s, x[:size].to_s]]
        if !sku_id
          @no_sku_count += 1
          @no_skus << "#{x.stock_nbr.to_s}:#{x.size}, "
          next
        end

        @insert_sql = "insert into inventories (inventory_id, sku_id, location_id, on_hand_units) VALUES ('#{SecureRandom.uuid.gsub('-','').upcase}', '#{sku_id}', '#{location_id}',#{on_hand})"
        ActiveRecord::Base.connection.execute @insert_sql
        @created_count += 1        
      end
    end
    
    put "******************************"
    put "no locations found for these outlets: #{@no_locations}"
    put "no skus found for these stock-size combos: #{@no_skus}"
    put "\n\nMark inventory rows: #{@total_count}"
    put "Omni inventory rows created: #{@created_count}"    
    put "no sku found for that stock-size: #{@no_sku_count}"
    put "no location found for that outlet: #{@no_location_count}"
    put "******************************"

    puts @output 
  end

  def self.wip
    load
    Omni::MarkWip.find_each do |x|
      location_id = @locations["#{x.outlet_nbr}"]
      sku_id = @skus[[x[:stock_nbr].to_s, x[:size].to_s]]
      next unless location_id and sku_id
      wip = x.cut_wip + x.plant_wip + x.cont_wip
      inv = Omni::Inventory.find_or_create_by_sku_id_and_location_id(:location_id => location_id, :sku_id => sku_id)
      inv.work_in_process_units = wip
      @created_count += 1
    end
    xit        
  end

  def self.transfers
    load
    Omni::MarkTransferLine.where("status_id in (8,9,53) and transfer_id >= ?", @last_transfer_id_of_2010).find_each do |x|
      location_id = @locations["#{x.outlet_nbr}"]
      sku_id = @skus[[x[:stock_nbr].to_s, x[:size].to_s]]
      next unless location_id and sku_id      
      inv = Omni::Inventory.find_or_create_by_sku_id_and_location_id(:location_id => location_id, :sku_id => sku_id)
      inv.allocated_units = x.qty if [8,53].include? x.transfer_status
      inv.in_transit_units = x.qty if x.transfer_status == 9
      inv.save    
    end
    xit
  end

  def self.sold_simple
    load
    Omni::MarkOrder.where('order_nbr >= ?',@last_order_of_2010).find_each {|o| @order_to_date[o.order_nbr] = o.date_putin}

    Omni::MarkOrderLine.where('order_nbr >= ?', @last_order_of_2010).find_each do |line|
      sku_id = @skus[[line.stock_nbr.to_s, line.size.to_s]]
      location_id = @locations["#{line.outlet_nbr}"]
      next unless sku_id and location_id
      units = line.qty_ordered
      date = @order_to_date[line.order_nbr]
      result = Omni::DailyResult.find(:sku_id => sku_id, :location_id => location_id, :date => date).first || Omni::DailyResult.new(:sku_id => sku_id, :location_id => location_id, :date => date, :net_sale_units => 0)
      result.net_sale_units += units
    end
  end

  def self.sold
    load

    put "deleting daily results"
    Omni::DailyResult.delete_all
    put "done deleting"

    put "create order_nbr to outlet_nbr hash"
    Omni::MarkOrder.where('order_nbr >= ?',@last_order_of_2010).find_each {|o| @order_to_outlet[o.order_nbr] = o.outlet_nbr}
    put "created order to outlet hash: #{@order_to_outlet.count.to_s}"

    put "date range is: #{@start_date.to_s} to #{@end_date.to_s} for #{(@end_date - @start_date).to_i} days"
    @start_date.upto(@end_date) {|x| sold_by_day x}
    put "Days Processed: #{@days}"    
    xit
  end

  def self.sold_by_day(date_to_export)
    puts "#{Time.now.strftime("%H:%M:%S").yellow}: #{date_to_export.to_s}"
    @days += 1
    
    put "start getting start and end order numbers"
    if Omni::MarkOrder.where('DATE(date_putin) = ?', date_to_export).count > 0  
      start_order_nbr = Omni::MarkOrder.where('DATE(date_putin) = ?', date_to_export).minimum('order_nbr')
      end_order_nbr = Omni::MarkOrder.where('DATE(date_putin) = ?', date_to_export).maximum('order_nbr')
    end
    put "done getting start and end order numbers"

    put "create a hash of mark order_lines summarized for the period"
    Omni::MarkOrderLine.where('order_nbr >= ? and order_nbr <= ?', start_order_nbr, end_order_nbr).find_each do |line|
      outlet_nbr = @order_to_outlet[line.order_nbr]
      result = @order_lines.detect {|r| r[:stock_nbr] == line.stock_nbr && r[:size] == line.size && r[:outlet_nbr] == outlet_nbr}
      if result
        result[:total_units] += line.qty_ordered
      else
        result = {:stock_nbr => line.stock_nbr, :size => line.size, :outlet_nbr => outlet_nbr, :total_units => line.qty_ordered}
        @order_lines.push(result)
      end
    end
    put "created hash of order_lines: #{@order_lines.count.to_s}"

    put "For each stock-size combo from order line, write a daily_result row if the sku and location can be found"
    @order_lines.each do |line|
      sku_id = @skus[[line[:stock_nbr].to_s, line[:size].to_s]]
      location_id = @locations["#{line[:outlet_nbr]}"]
      next unless sku_id and location_id
      units = line[:total_units]
      insert_sql = "insert into daily_results (daily_result_id, sku_id, location_id, net_sale_units) VALUES ('#{SecureRandom.uuid.gsub('-','').upcase}', '#{sku_id}', '#{location_id}', #{units})"
      ActiveRecord::Base.connection.execute insert_sql
      @created_count += 1
    end
  end
end