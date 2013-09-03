  class Omni::Import::Buckhead::Order < Omni::Import::Base

  def self.export(import_id, start_date, end_date)
    log_it(import_id, type, title, message)    
    puts "--STARTED EXPORTING FROM RMS AT: #{Time.now.to_s}"
    puts "--------start date: #{start_date.to_s}"
    puts "--------end date: #{end_date.to_s}"
    #start_date.upto(end_date) {|x| puts x.to_s}
    start_date.upto(end_date) {|x| export_date x}
    puts "--DONE EXPORTING FROM RMS AT: #{Time.now.to_s}"
  end

  def self.export_date(date_to_export)
    puts "*** EXPORTING DATE: #{date_to_export.to_s} ***"
    start_time = Time.now      
    rows_to_be_updated = 0
    rows_to_be_created = 0
    rows_updated = 0
    rows_created = 0
    results = []
   
    puts "... trying to connect to RMS ... "
    orders = Rms::Order.where(:LastUpdated => date_to_export)
    log_it  "order count: " + orders.count.to_s    
    # # puts orders.count.to_s
    # if orders 
    #   start_order_nbr = orders.where('DATE(date_putin) = ?', date_to_export).minimum('order_nbr')
    #   puts "... end_order_nbr"
    #   end_order_nbr = orders.where('DATE(date_putin) = ?', date_to_export).maximum('order_nbr')
    # else
    #   puts 'orders found'
    # end

    # puts "\n--create order to outlet hash for faster outlet_nbr lookups -- #{Time.now}\n"
    # order_headers = Mark::OrderHeader.where('order_nbr >= ? and order_nbr <= ?', start_order_nbr, end_order_nbr)
    # orders = {}
    # order_headers.each {|o| orders[o.order_nbr] = o.outlet_nbr}

    # #puts "\n--read all mark order lines for the period at once -- #{Time.now}\n"
    # order_lines = Mark::OrderLine.where('order_nbr >= ? and order_nbr <= ?', start_order_nbr, end_order_nbr)

    # #puts "\n--create a hash of mark order lines summarized for the period -- #{Time.now}\n"
    # order_lines.each do |line|
    #   outlet_nbr = orders[line.order_nbr]
    #   #puts "for each line, look to see if period_result row exists, if not then create it. -- #{Time.now}\n"      
    #   result = results.detect {|r| r[:outlet_nbr] == outlet_nbr && r[:stock_nbr] == line.stock_nbr && r[:size] == line.size}
    #   if result
    #     #puts "result row already created, add on to total_units -- #{Time.now}\n"
    #     rows_to_be_updated += 1
    #     result[:total_units] += line.qty_ordered
    #   else
    #     #puts "first time to see this combination.  create result row and set total units => qty_orderd -- #{Time.now}\n"
    #     rows_to_be_created += 1
    #     result = {:outlet_nbr => outlet_nbr, :stock_nbr => line.stock_nbr, :size => line.size, :total_units => line.qty_ordered}
    #     results.push(result)
    #   end
    # end
    
    # #puts "\n--summarized order line results count: #{results.count.to_s} -- #{Time.now}\n"        
    # # period_id = Omni::Period.where(:start_date => start_date, :end_date => end_date).first.period_id
    # # period_display =  Omni::Period.where(:start_date => start_date, :end_date => end_date).first.display

    # #puts "\n--create location hash for faster processing -- #{Time.now}\n"
    # locations = {}
    # Omni::Location.all.each {|loc| locations[loc.location_nbr] = loc.location_id}

    # #puts "\n--create sku_aliases hash for faster processing -- #{Time.now}\n"
    # sku_aliases = {}
    # Omni::SkuAlias.all.each {|sa| sku_aliases[sa.sku_alias] = sa.sku_id if sa.sku_alias and sa.sku_id}

    # #puts "\n--For each result, write a period_result row if the sku alias and location can be found"
    # results.each do |line|  
    #   #puts "\n--Lookup sku_alias in sku_aliases_hash for stock_nbr: #{line[:stock_nbr]} and size: #{line[:size]}"      
    #   sku_id = sku_aliases["#{line[:stock_nbr]}-#{line[:size]}"]
    #   next unless sku_id
    #   #puts "\n--sku alias is: #{sku_id}"      
      
    #   #puts "\n--Lookup location from locations_hash for outlet_nbr: #{line[:outlet_nbr]}"
    #   location_id = locations["#{line[:outlet_nbr]}"]
    #   next unless location_id      
    #   #puts "\n--location is: #{location_id}"

    #   pr = Omni::PeriodResult.where(:period_id => p.period_id, :sku_id => sku_id, :location_id => location_id).first
    #   if pr
    #     #puts "\n\n!!!!!!!!!!!!! UPDATED ROW FOR PERIOD: #{period_id} SKU: #{sku_id} and LOCATION: #{location_id} !!!!!!!!!!!!!!!!!!!!!!!!\n\n"
    #     #puts "\n\n!!!!!!!!!!!!! UPDATED ROW FOR OUTLET_NBR: #{line[:outlet_nbr]} STOCK_NBR: #{line[:stock_nbr]} and SIZE: #{line[:size]} and TOTAL: #{line[:total_units]}!!!!!!!!!!!!!!!!!!!!!!!!\n\n"        
    #     rows_updated += 1        
    #   else
    #     pr = Omni::PeriodResult.new(:period_id => p.period_id, :sku_id => sku_id, :location_id => location_id, :net_sale_units => 0)
    #     #puts "\n\n!!!!!!!!!!!!! CREATED ROW FOR PERIOD: #{period_id} SKU: #{sku_id} and LOCATION: #{location_id} !!!!!!!!!!!!!!!!!!!!!!!!\n\n"
    #     rows_created += 1
    #   end
    #   pr.net_sale_units += line[:total_units]      
    #   pr.save
    #   #puts "!!!!!!!!!!!!! SAVED ROW FOR SKU: #{sku_id} and LOCATION: #{location_id} !!!!!!!!!!!!!!!!!!!!!!!!"                            
    # end

    # puts "------------start with order # #{start_order_nbr.to_s}"
    # puts "------------end with order # #{end_order_nbr.to_s}"
    # puts "------------order headers: #{order_headers.count.to_s}"    
    # puts "------------order lines: #{order_lines.count.to_s}"
    # puts "------------hash of summarized order lines: #{results.count.to_s}"    
    # puts "\n"    
    # puts "--------- TOTAL # of ROWS TO BE CREATED: #{rows_to_be_created.to_s}"
    # puts "---------      actual # of rows CREATED: #{rows_created.to_s}"
    # puts "\n"   
    # puts "--------- TOTAL # of ROWS TO BE UPDATED: #{rows_to_be_updated.to_s}"
    # puts "---------      actual # of rows UPDATED: #{rows_updated.to_s}"        
    puts "\n"
    puts "--------- TIME TO EXECUTE WAS: #{(Time.now-start_time).to_s}"    
    puts "\n"     
  end

end