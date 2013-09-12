class Omni::Sync::Mark

  def self.inventories
    puts "..Omni::Sync::Mark::inventory"
    @locations = {}
    puts  "START..create location hash for faster processing  #{Time.now}"
    Omni::Location.all.each {|loc| @locations[loc.location_nbr] = loc.location_id}
    puts  "END....create location hash for faster processing  #{Time.now}"    

    page_size = 1000
    pages = Omni::Sku.count / page_size + 1 
    (1...pages).each do |p|
      break if p > 3
      skus = Omni::Sku.paginate(:page => p, :per_page => page_size).order('display')
      skus.each do |s|
        mark_inventory = Omni::MarkInventory.where(:stock_nbr => s.mark_stock, :size => s.mark_size)
        mark_inventory.each do |mi|
          # INVENTORY #
          inv = Omni::Inventory.find_or_create_by_sku_id_and_location_id(s.sku_id,@locations["#{mi.outlet_nbr}"])
          break unless inv

          mark_wip = Omni::MarkWip.where(:stock_nbr => s.mark_stock, :size => s.mark_size)
          mark_wip.each do |mw|
            inv.work_in_process_units = mw.cut_wip + mw.cont_wip + mw.plant_wip
          end
          
          mark_transfers = Omni::MarkTransferLine.where(:stock_nbr => s.mark_stock, :size => s.mark_size)
          mark_transfers.each do |tl|
            inv.allocated_units = tl.qty if [8,53].include? tl.transfer_status
            inv.in_transit_units = tl.qty if tl.transfer_status == 9
          end

          inv.on_hand_units = mi.qoh
          inv.save # Creates or updates the Omni Inventory row
          # INVENTORY #         
        end
      end
    end
  end

  def self.orders
    puts "STARTED EXPORTING FROM MARK AT: #{Time.now.to_s}"
    start_date = Date.parse('31-12-2010')
    end_date = Date.parse('31-12-2013')
    puts "start date: #{start_date.to_s}"
    puts "end date: #{end_date.to_s}"

    start_date.upto(end_date) do |x|
      date_to_export = x
      puts "Omni::Import::Parker::Order.export_date #{date_to_export.to_s} ***"
      period_id = Omni::Period.where("start_date <= ? and end_date >= ?", date_to_export,date_to_export).first.period_id
      puts "period is #{period_id}"

      start_time = Time.now      
      rows_to_be_updated = 0
      rows_to_be_created = 0
      rows_updated = 0
      rows_created = 0
      mark_order_line_hash = []
      orders = Omni::MarkOrder.where('DATE(date_putin) = ?', date_to_export)
      puts  "order count: " + orders.count.to_s

      if orders 
        puts  'orders found'
        start_order_nbr = orders.where('DATE(date_putin) = ?', date_to_export).minimum('order_nbr')
        puts  "... end_order_nbr"
        end_order_nbr = orders.where('DATE(date_putin) = ?', date_to_export).maximum('order_nbr')
      else
        puts  'no orders found'
      end

      puts  "create order to outlet hash for faster outlet_nbr lookups  #{Time.now}"
      order_headers = Omni::MarkOrder.where('order_nbr >= ? and order_nbr <= ?', start_order_nbr, end_order_nbr)
      orders = {}
      order_headers.each {|o| orders[o.order_nbr] = o.outlet_nbr}

      puts  "read all mark order lines for the period at once  #{Time.now}"
      order_lines = Omni::MarkOrderLine.where('order_nbr >= ? and order_nbr <= ?', start_order_nbr, end_order_nbr)

      puts  "create a hash of mark order lines summarized for the period  #{Time.now}"
      puts "******order lines = #{order_lines.count}"
      order_lines.each do |line|
        outlet_nbr = orders[line.order_nbr]
        puts  "for each line, lo k to see if period_result row exists, if not then create it.  #{Time.now}"      
        result = mark_order_line_hash.detect {|r| r[:outlet_nbr] == outlet_nbr && r[:stock_nbr] == line.stock_nbr && r[:size] == line.size}
        if result
          puts  "result row already created, add on to total_units  #{Time.now}"
          rows_to_be_updated += 1
          result[:total_units] += line.qty_ordered
        else
          puts  "first time to see this combination.  create result row and set total units => qty_orderd  #{Time.now}"
          rows_to_be_created += 1
          result = {:outlet_nbr => outlet_nbr, :stock_nbr => line.stock_nbr, :size => line.size, :total_units => line.qty_ordered}
          mark_order_line_hash.push(result)
        end
      end
      puts  "summarized order line mark_order_line_hash count: #{mark_order_line_hash.count.to_s}  #{Time.now}"        
      
      puts  "create location hash for faster processing  #{Time.now}"
      locations = {}
      Omni::Location.all.each {|loc| locations[loc.location_nbr] = loc.location_id}

      # puts  "create sku_aliases hash for faster processing  #{Time.now}"
      # sku_aliases = {}
      # Omni::SkuAlias.all.each {|sa| sku_aliases[sa.sku_alias] = sa.sku_id if sa.sku_alias and sa.sku_id}
      # puts mark_order_line_hash.count
      puts  "For each result, write a period_result row if the sku alias and location can be found"
      mark_order_line_hash.each do |line|  
        puts  "Lookup sku_alias in sku_aliases_hash for stock_nbr: #{line[:stock_nbr]} and size: #{line[:size]}"      
        sku = Omni::Sku.where(:mark_stock => line[:stock_nbr],:mark_size => line[:size]).first

        puts "**** SKU NOT FOUND for #{line[:stock_nbr]} and #{line.size}" unless sku
        next unless sku
        puts  "sku is: #{sku.display}"      
        
        puts  "Lookup location from locations_hash for outlet_nbr: #{line[:outlet_nbr]}"
        location_id = locations["#{line[:outlet_nbr]}"]
        puts "**** LOCATION NOT FOUND for #{line.outlet_nbr}" unless location_id    
        next unless location_id
        puts  "location is: #{location_id}"

        pr = Omni::PeriodResult.where(:period_id => period_id, :sku_id => sku.sku_id, :location_id => location_id).first
        if pr
          puts  "!!!!!!!!!!!!! UPDATED ROW FOR PERIOD: #{period_id} SKU: #{sku.sku_id} and LOCATION: #{location_id} !!!!!!!!!!!!!!!!!!!!!!!!"
          puts  "!!!!!!!!!!!!! UPDATED ROW FOR OUTLET_NBR: #{line[:outlet_nbr]} STOCK_NBR: #{line[:stock_nbr]} and SIZE: #{line[:size]} and TOTAL: #{line[:total_units]}!!!!!!!!!!!!!!!!!!!!!!!!"        
          rows_updated += 1        
        else
          pr = Omni::PeriodResult.new(:period_id => period_id, :sku_id => sku.sku_id, :location_id => location_id, :net_sale_units => 0)
          puts  "!!!!!!!!!!!!! CREATED ROW FOR PERIOD: #{period_id} SKU: #{sku.sku_id} and LOCATION: #{location_id} !!!!!!!!!!!!!!!!!!!!!!!!"
          rows_created += 1
        end
        pr.net_sale_units += line[:total_units]
        pr.save
        puts  "!!!!!!!!!!!!! SAVED ROW FOR SKU: #{sku.display} and LOCATION: #{location_id} !!!!!!!!!!!!!!!!!!!!!!!!"                            
      end

      puts  "start with order # #{start_order_nbr.to_s}"
      puts  "end with order # #{end_order_nbr.to_s}"
      puts  "order headers: #{order_headers.count.to_s}"    
      puts  "order lines: #{order_lines.count.to_s}"
      puts  "hash of summarized order lines: #{mark_order_line_hash.count.to_s}"    
      puts  "- TOTAL # of ROWS TO BE CREATED: #{rows_to_be_created.to_s}"
      puts  "-      actual # of rows CREATED: #{rows_created.to_s}"
      puts  "- TOTAL # of ROWS TO BE UPDATED: #{rows_to_be_updated.to_s}"
      puts  "-      actual # of rows UPDATED: #{rows_updated.to_s}"        
      puts  "- TIME TO EXECUTE WAS: #{(Time.now-start_time).to_s}"    
      puts  "DONE EXPORTING FROM MARK AT: #{Time.now.to_s}"       
    end
  end
end

ol = Omni::MarkOrderLine.where('order_nbr < 1569747').delete
  # def self.period_results
  #   ### Last order of 2010 = 1569747.  All orders must be greater than that
  #   ### Last order of 2011 = ?
  #   # order_lines = Omni::MarkOrderLine.where(:stock_nbr => s.mark_stock, :size => s.mark_size, :order_nbr).where("order_nbr > ?",1569747)
  #   # order_lines.each do |ol|
  #   #   period = Omni::Period.where("start_date <= ")
  #   #   pr = Omni::PeriodResult.find_or_create_by_sku_id_and_location_id_and_period_id(s.sku_id,@locations["#{mi.outlet_nbr}"])          
  #   #   pr.save
  #   # end  
  #         # PERIOD RESULTS # 
  # end


#   def self.inventory
#     @total_count = 0
#     @error_count = 0
#     @created_count = 0
#     @no_sku_count = 0
#     @no_location_count = 0
#     loops = 0
      

#     # count = Omni::MarkInventory.count
#     count = 1000
#     page_size = 1000
#     loops = page_size / count
#     loops = 2
#     (0...loops).each do |i|
#       paged_inventory(i*page_size+1,i+page_size)
#     end
#     # puts "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

#     puts "******************************"
#     puts  "Mark inventory rows: #{@total_count}"
#     puts  "no sku found for that stock-size: #{@no_sku_count}"
#     puts  "no location found for that outlet: #{@no_location_count}"    
#     puts  "creation error: #{@error_count}"
#     puts  "rows succesfully created: #{@created_count}"
#     puts "******************************"
#     # puts "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"    

#     puts  "DONE EXPORTING FROM MARK AT: #{Time.now.to_s}"
#   end

#   def self.paged_inventory(start, finish)
#     Omni::MarkInventory.where("id between ? and ?",start,finish).each_with_index do |x,i|
#       puts "*********PROCESSING row #{i.to_s}:" if i.to_s.end_with? '00000'
#       # puts "row #{i.to_s} MARK: outlet = #{x.outlet_nbr} stock = {#x.stock_nbr} size = #{x.size} qoh = #{x.qoh}"      
#       @total_count += 1
#       location_id = @locations["#{x.outlet_nbr}"]
#       if !location_id
#         @no_location_count += 1
#         next
#       end
#       sku = Omni::Sku.where(:source => 'PARKER', :source_id=>"#{x.stock_nbr},#{x.size}").first  #|| Omni::Sku.create(:source => "PARKER",:display=>"#{x.stock_nbr},#{x.size}")
#       if !sku
#         @no_sku_count += 1
#         next
#       end       
#       inv = Omni::Inventory.create(:sku_id => sku.sku_id, :location_id => location_id, :on_hand_units => x.qoh)
#       @error_count += 1 unless inv
#       @created_count += 1 if inv

#       # inv = Omni::Inventory.create(:sku_id => '51713A3EAC3E11E2947800FF58D32228', :location_id => '', :on_hand_units => 0)      
#       # puts inv.errors if inv.errors.inspect
#     end
#   end    
# end

# def self.wip
#   data = Omni::MarkWip.all
#   data.each do |x|
#     location_id = @locations["#{x.outlet_nbr}"]
#     if !location_id
#       @no_location_count += 1
#       next
#     end
#     sku = Omni::Sku.where(:source => 'PARKER', :source_id=>"#{x.stock_nbr},#{x.size}").first
#     if !sku
#       @no_sku_count += 1
#       next
#     end
#     inv = Omni::Inventory.where(:sku_id => sku.sku_id, :location_id => location_id).first || Omni::Inventory.new(:sku_id => sku.sku_id, :location_id => location_id)
#     inv.work_in_process_units = x.cut_wip + x.plant_wip + x.cont_wip
#     inv.save
#   end
# end       

  # data.each {|x| self.wip += x.cut_wip + x.plant_wip + x.cont_wip} 

# end
# TO DO - POPULATE THESE
      # qoh
      # wip
      # allocated
      # in transit
      # ytd
      # py1
      # py2
      # Calculations

      #         self.on_hand = Omni::MarkInventory.where(:stock_nbr => self.source_id, :size => self.source_id).sum(:qoh)
        # puts "--allocated, in transit--"
        # data = Omni::MarkTransferLine.where(:stock_nbr => self.source_id, :size => self.source_id)
        # data.each do |x|
        #   self.allocated += x.qty if [8,53].include? x.transfer_status
        #   self.transit += x.qty if x.transfer_status == 9
        # end
        # puts "--ytd, py1, py2, projection--"
