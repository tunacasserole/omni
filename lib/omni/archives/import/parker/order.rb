  class Omni::Import::Parker::Order < Omni::Import::Base

  def self.import(import)
    log_it "Omni::Import::Parker::Order.import"
    start_date = import.start_date
    end_date = import.end_date

    log_it "STARTED EXPORTING FROM MARK AT: #{Time.now.to_s}"
    log_it "start date: #{start_date.to_s}"
    log_it "end date: #{end_date.to_s}"
    #start_date.upto(end_date) {|x| log_it  x.to_s}
    start_date.upto(end_date) {|x| export_date x} if start_date
    #import_by_department(import.department)
    log_it  "DONE EXPORTING FROM MARK AT: #{Time.now.to_s}"
  end

  def self.import_by_department(dept)
    log_it "importing by department #{dept.display}"
    # for each sku_location, load related order lines into a hash
    all_mark_order_lines = Mark::OrderLine.all
    log_it "grabbed #{all_mark_order_lines.count.to_s} order lines from Mark"
    dept.sku_locations.each do |sl|
      next unless sl.sku.stock_nbr
      order_lines = all_mark_order_lines.where(:outlet_nbr => sl.outlet_nbr, :stock_nbr => sl.stock_nbr)
      log_it "Found #{order_lines.count.to_s} order lines in Mark for sku #{sl.sku.display} and location #{sl.location.display}"
      total_lines < order_lines
    end
    log_it "Found #{total_lines.count.to_s} order lines for department #{dept.display}"
  end

  def self.export_date(date_to_export)
    log_it "Omni::Import::Parker::Order.export_date #{date_to_export.to_s} ***"
    period_id = Omni::Period.where("start_date <= ? and end_date >= ?", date_to_export,date_to_export).first.period_id
    log_it "period is #{period_id}"

    start_time = Time.now      
    rows_to_be_updated = 0
    rows_to_be_created = 0
    rows_updated = 0
    rows_created = 0
    mark_order_lines = []
    orders = Mark::OrderHeader.where('DATE(date_putin) = ?', date_to_export)
    log_it  "order count: " + orders.count.to_s

    if orders 
      #log_it  'orders found'
      start_order_nbr = orders.where('DATE(date_putin) = ?', date_to_export).minimum('order_nbr')
      log_it  "... end_order_nbr"
      end_order_nbr = orders.where('DATE(date_putin) = ?', date_to_export).maximum('order_nbr')
    else
      #log_it  'no orders found'
    end

    #log_it  "create order to outlet hash for faster outlet_nbr lookups  #{Time.now}"
    order_headers = Mark::OrderHeader.where('order_nbr >= ? and order_nbr <= ?', start_order_nbr, end_order_nbr)
    orders = {}
    order_headers.each {|o| orders[o.order_nbr] = o.outlet_nbr}

    #log_it  "read all mark order lines for the period at once  #{Time.now}"
    order_lines = Mark::OrderLine.where('order_nbr >= ? and order_nbr <= ?', start_order_nbr, end_order_nbr)

    #log_it  "create a hash of mark order lines summarized for the period  #{Time.now}"
    order_lines.each do |line|
      outlet_nbr = orders[line.order_nbr]
      #log_it  "for each line, lo k to see if period_result row exists, if not then create it.  #{Time.now}"      
      result = mark_order_lines.detect {|r| r[:outlet_nbr] == outlet_nbr && r[:stock_nbr] == line.stock_nbr && r[:size] == line.size}
      if result
        #log_it  "result row already created, add on to total_units  #{Time.now}"
        rows_to_be_updated += 1
        result[:total_units] += line.qty_ordered
      else
        #log_it  "first time to see this combination.  create result row and set total units => qty_orderd  #{Time.now}"
        rows_to_be_created += 1
        result = {:outlet_nbr => outlet_nbr, :stock_nbr => line.stock_nbr, :size => line.size, :total_units => line.qty_ordered}
        mark_order_lines.push(result)
      end
    end
    
    #log_it  "summarized order line mark_order_lines count: #{mark_order_lines.count.to_s}  #{Time.now}"        
    #log_it  "create location hash for faster processing  #{Time.now}"
    locations = {}
    Omni::Location.all.each {|loc| locations[loc.location_nbr] = loc.location_id}

    #log_it  "create sku_aliases hash for faster processing  #{Time.now}"
    sku_aliases = {}
    Omni::SkuAlias.all.each {|sa| sku_aliases[sa.sku_alias] = sa.sku_id if sa.sku_alias and sa.sku_id}

    #log_it  "For each result, write a period_result row if the sku alias and location can be found"
    mark_order_lines.each do |line|  
      #log_it  "Lookup sku_alias in sku_aliases_hash for stock_nbr: #{line[:stock_nbr]} and size: #{line[:size]}"      
      sku_id = sku_aliases["#{line[:stock_nbr]}-#{line[:size]}"]
      next unless sku_id
      #log_it  "sku alias is: #{sku_id}"      
      
      #log_it  "Lookup location from locations_hash for outlet_nbr: #{line[:outlet_nbr]}"
      location_id = locations["#{line[:outlet_nbr]}"]
      next unless location_id      
      #log_it  "location is: #{location_id}"

      pr = Omni::PeriodResult.where(:period_id => period_id, :sku_id => sku_id, :location_id => location_id).first
      if pr
        #log_it  "!!!!!!!!!!!!! UPDATED ROW FOR PERIOD: #{period_id} SKU: #{sku_id} and LOCATION: #{location_id} !!!!!!!!!!!!!!!!!!!!!!!!"
        #log_it  "!!!!!!!!!!!!! UPDATED ROW FOR OUTLET_NBR: #{line[:outlet_nbr]} STOCK_NBR: #{line[:stock_nbr]} and SIZE: #{line[:size]} and TOTAL: #{line[:total_units]}!!!!!!!!!!!!!!!!!!!!!!!!"        
        rows_updated += 1        
      else
        pr = Omni::PeriodResult.new(:period_id => period_id, :sku_id => sku_id, :location_id => location_id, :net_sale_units => 0)
        #log_it  "!!!!!!!!!!!!! CREATED ROW FOR PERIOD: #{period_id} SKU: #{sku_id} and LOCATION: #{location_id} !!!!!!!!!!!!!!!!!!!!!!!!"
        rows_created += 1
      end
      pr.net_sale_units += line[:total_units]      
      pr.save
      #log_it  "!!!!!!!!!!!!! SAVED ROW FOR SKU: #{sku_id} and LOCATION: #{location_id} !!!!!!!!!!!!!!!!!!!!!!!!"                            
    end

    log_it  "start with order # #{start_order_nbr.to_s}"
    log_it  "end with order # #{end_order_nbr.to_s}"
    log_it  "order headers: #{order_headers.count.to_s}"    
    log_it  "order lines: #{order_lines.count.to_s}"
    log_it  "hash of summarized order lines: #{mark_order_lines.count.to_s}"    
    log_it  "- TOTAL # of ROWS TO BE CREATED: #{rows_to_be_created.to_s}"
    log_it  "-      actual # of rows CREATED: #{rows_created.to_s}"
    log_it  "- TOTAL # of ROWS TO BE UPDATED: #{rows_to_be_updated.to_s}"
    log_it  "-      actual # of rows UPDATED: #{rows_updated.to_s}"        
    log_it  "- TIME TO EXECUTE WAS: #{(Time.now-start_time).to_s}"    
     
  end

end