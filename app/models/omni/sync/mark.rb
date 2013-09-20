class Omni::Sync::Mark

  def self.put(message)
    @output << "#{Time.now.strftime("%H:%M:%S").yellow}: #{message}"
  
  end

  def self.xit
    if Time.now-@start_time > 30
      put "start with order # #{@start_order_nbr.to_s}"
      put "end with order # #{@end_order_nbr.to_s}"
      put "order headers: #{@order_headers.count.to_s}"
      put "order_lines: #{@order_lines.count.to_s}"
      put "hash of summarized order @lines: #{@lines.count.to_s}" if @lines
      put "- Total rows to be saved: #{@rows_to_be_created.to_s}"
      put "- actual # of rows saved: #{@rows_created.to_s}"
      put "DONE EXPORTING FROM Mark: #{Time.now.to_s}"
      put "Number of days processed: #{@days}"
      put "EXECUTION TIME: #{(Time.now-@start_time).to_s}"
      puts @output
      exit
    end
  end

  def self.results
    ### Last order of 2010 = 1569747.  All orders must be greater than that
    @start_time = Time.now
    @output = []
    @rows_to_be_updated = 0
    @rows_to_be_created = 0
    @rows_created = 0
    @rows_updated = 0
    @sku_hash = {}
    @locations = {}
    @days = 0

    put "== starting =="
    put "create sku hash"
    # Omni::Sku.connection.execute "INSERT INTO bts_details (bts_detail_id, bts_id, sku_id, data_source) values ('#{SecureRandom.uuid.gsub('-','').upcase}','#{self.bts_id}', '#{x.sku_id}','PARKER')" if self.is_source_parker and x.source == 'PARKER'
    Omni::Sku.where("mark_stock IS NOT NULL and mark_size IS NOT NULL").each {|x| @sku_hash.merge!([x.mark_stock, x.mark_size] => x.sku_id)}
    put "created @sku_hash: #{@sku_hash.count.to_s}"

    put "create location hash"
    Omni::Location.all.each {|loc| @locations[loc.location_nbr] = loc.location_id}
    put "created location hash: #{@locations.count.to_s}"

    start_date = Date.parse('1-1-2011')
    end_date = Date.parse('30-9-2013')
    put "date range is: #{start_date.to_s} to #{end_date.to_s} for #{(end_date - start_date).to_i} days"

    start_date.upto(end_date) {|x| result_by_day x}
    xit
  end

  def self.result_by_day(date_to_export)
    puts "#{Time.now.strftime("%H:%M:%S").yellow}: #{date_to_export.to_s}"
    @days += 1
    orders = Omni::MarkOrder.where('DATE(date_putin) = ?', date_to_export)
    if orders
      @start_order_nbr = orders.where('DATE(date_putin) = ?', date_to_export).minimum('order_nbr')
      @end_order_nbr = orders.where('DATE(date_putin) = ?', date_to_export).maximum('order_nbr')
      put "--order range: #{@start_order_nbr} to #{@end_order_nbr}: #{orders.count.to_s}"
    end

    put "create order to outlet hash"
    orders = {}
    @order_headers = Omni::MarkOrder.where('order_nbr >= ? and order_nbr <= ?', @start_order_nbr, @end_order_nbr)
    @order_headers.each {|o| orders[o.order_nbr] = o.outlet_nbr}
    put "created order to outlet hash: #{orders.count.to_s}"

    put "create a hash of mark order lines summarized for the period"
    @lines = []
    @order_lines = Omni::MarkOrderLine.where('order_nbr >= ? and order_nbr <= ?', @start_order_nbr, @end_order_nbr).order("stock_nbr")
    put "order_lines: #{@order_lines.count}"
    @order_lines.each do |line|
      outlet_nbr = orders[line.order_nbr]
      # put "for each line, look to see if period_result row exists, if not then create it."
      result = @lines.detect {|r| r[:stock_nbr] == line.stock_nbr && r[:size] == line.size && r[:outlet_nbr] == outlet_nbr}
      if result
        result[:total_units] += line.qty_ordered
      else
        # @rows_to_be_created += 1
        result = {:stock_nbr => line.stock_nbr, :size => line.size, :outlet_nbr => outlet_nbr, :total_units => line.qty_ordered}
        @lines.push(result)
      end
    end
    put "created hash of order lines: #{@lines.count.to_s}"

    put "deleting daily results for #{date_to_export.to_s}"
    Omni::DailyResult.delete_all(:date => date_to_export)
    put "done deleting"

    put "For each result, write a period_result row if the sku and location can be found"
    @lines.each do |line|
      # put "#{line[:stock_nbr].to_s}, #{line[:size]}"
      sku_id = @sku_hash[[line[:stock_nbr].to_s, line[:size].to_s]]
      location_id = @locations["#{line[:outlet_nbr]}"]
      # put "sku for #{line[:stock_nbr]} and #{line[:size]} is: #{sku_id}"
      # put "Location missing for: #{line.outlet_nbr}" unless location_id
      next unless sku_id and location_id
      Omni::DailyResult.create(:date => date_to_export, :sku_id => sku_id, :location_id => location_id, :net_sale_units => line[:total_units])
      # put "--daily_result:  SKU: #{sku_id} and LOCATION: #{location_id} and #{date_to_export.to_s}"
      @rows_created += 1
    end
  end
end

          # Omni::Sku.where(:mark_stock => line[:stock_nbr],:mark_size => line[:size]).first
          # period_id = Omni::Period.where("start_date <= ? and end_date >= ?", date_to_export,date_to_export).first.period_id
    # put "create sku_aliases hash for faster processing"
    # sku_aliases = {}
    # Omni::SkuAlias.all.each {|sa| sku_aliases[sa.sku_alias] = sa.sku_id if sa.sku_alias and sa.sku_id}
    # put @lines.count



  # def self.costs
  #   put "STARTED EXPORTING COSTS: #{Time.now.to_s}"

  #   put "FINISHED EXPORTING COSTS: #{Time.now.to_s}"
  # end

  # def self.inventories
  #   put "..Omni::Sync::Mark::inventory"
  #   @@locations = {}
  #   put "START..create location hash for faster processing"
  #   Omni::Location.all.each {|loc| @@locations[loc.location_nbr] = loc.location_id}
  #   put "END....create location hash for faster processing"

  #   page_size = 1000
  #   pages = Omni::Sku.count / page_size + 1
  #   (1...pages).each do |p|
  #     break if p > 3
  #     skus = Omni::Sku.paginate(:page => p, :per_page => page_size).order('display')
  #     skus.each do |s|
  #       mark_inventory = Omni::MarkInventory.where(:stock_nbr => s.mark_stock, :size => s.mark_size)
  #       mark_inventory.each do |mi|
  #         # INVENTORY #
  #         inv = Omni::Inventory.find_or_create_by_sku_id_and_location_id(s.sku_id,@@locations["#{mi.outlet_nbr}"])
  #         break unless inv

  #         mark_wip = Omni::MarkWip.where(:stock_nbr => s.mark_stock, :size => s.mark_size)
  #         mark_wip.each do |mw|
  #           inv.work_in_process_units = mw.cut_wip + mw.cont_wip + mw.plant_wip
  #         end

  #         mark_transfers = Omni::MarkTransferLine.where(:stock_nbr => s.mark_stock, :size => s.mark_size)
  #         mark_transfers.each do |tl|
  #           inv.allocated_units = tl.qty if [8,53].include? tl.transfer_status
  #           inv.in_transit_units = tl.qty if tl.transfer_status == 9
  #         end

  #         inv.on_hand_units = mi.qoh
  #         inv.save # Creates or updates the Omni Inventory row
  #         # INVENTORY #
  #       end
  #     end
  #   end
  # end

# ol = Omni::MarkOrderLine.delete('order_nbr < 1569747')
  # def self.period_results
  #   ### Last order of 2010 = 1569747.  All orders must be greater than that
  #   ### Last order of 2011 = ?
  #   # @order_lines = Omni::MarkOrderLine.where(:stock_nbr => s.mark_stock, :size => s.mark_size, :order_nbr).where("order_nbr > ?",1569747)
  #   # @order_lines.each do |ol|
  #   #   period = Omni::Period.where("start_date <= ")
  #   #   pr = Omni::DailyResult.find_or_create_by_sku_id_and_location_id_and_period_id(s.sku_id,@@locations["#{mi.outlet_nbr}"])
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
#     # put "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

#     put "******************************"
#     put "Mark inventory rows: #{@total_count}"
#     put "no sku found for that stock-size: #{@no_sku_count}"
#     put "no location found for that outlet: #{@no_location_count}"
#     put "creation error: #{@error_count}"
#     put "rows succesfully created: #{@created_count}"
#     put "******************************"
#     # put "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

#     put "DONE EXPORTING FROM MARK AT: #{Time.now.to_s}"
#   end

#   def self.paged_inventory(start, finish)
#     Omni::MarkInventory.where("id between ? and ?",start,finish).each_with_index do |x,i|
#       put "*********PROCESSING row #{i.to_s}:" if i.to_s.end_with? '00000'
#       # put "row #{i.to_s} MARK: outlet = #{x.outlet_nbr} stock = {#x.stock_nbr} size = #{x.size} qoh = #{x.qoh}"
#       @total_count += 1
#       location_id = @@locations["#{x.outlet_nbr}"]
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
#       # put inv.errors if inv.errors.inspect
#     end
#   end
# end

# def self.wip
#   data = Omni::MarkWip.all
#   data.each do |x|
#     location_id = @@locations["#{x.outlet_nbr}"]
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
        # put "--allocated, in transit--"
        # data = Omni::MarkTransferLine.where(:stock_nbr => self.source_id, :size => self.source_id)
        # data.each do |x|
        #   self.allocated += x.qty if [8,53].include? x.transfer_status
        #   self.transit += x.qty if x.transfer_status == 9
        # end
        # put "--ytd, py1, py2, projection--"



    # put "create stock to sku hash"
    # products = []
    # @order_lines = Omni::MarkOrderLine.where('order_nbr >= ? and order_nbr <= ?', @start_order_nbr, @end_order_nbr).select("DISTINCT stock_nbr, size")
    # @order_lines.each do |line|
    #   xit
    #   put "stock_nbr: #{line.stock_nbr},  size: #{line.size}"
    #   sku = Omni::Sku.where(:mark_stock => line[:stock_nbr],:mark_size => line[:size]).first
    #   put "sku not found" unless sku
    #   next unless sku
    #   put "sku found"
    #   result = {:stock_nbr => line.stock_nbr, :size => line.size, :sku_id => sku.sku_id}
    #   products.push(result)
    # end
    # put "done creating stock to sku hash: #{products.count}"
    # xit
