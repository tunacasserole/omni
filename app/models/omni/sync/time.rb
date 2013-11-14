class Omni::Sync::Time

  def self.put(message)
    output = "#{Time.now.strftime("%H:%M:%S").yellow}: #{message}"
    @output << output
    puts output
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

  def self.mri
    ### Last order of 2010 = 1569747.  All orders must be greater than that

    @output = []
    @rows_to_be_updated = 0
    @rows_to_be_created = 0
    @rows_created = 0
    @rows_updated = 0
    @sku_hash = {}
    @locations = {}
    @days = 0
    records_array = []
    inventory_hash = {}
    inventory_array = []

    put "== starting MRI test =="

    put "START - raw sql: array"
    start_time = Time.now
    sql = "Select * from inventory"
    inventory_array = ActiveRecord::Base.connection.execute(sql)
    put "== finished in #{(Time.now - start_time).round(0).to_s.cyan}s"
    put "END - created array with raw sql: #{inventory_array.count.to_s}"

    put "START - activerecord: find_each, array"
    start_time = Time.now
    inventory_array = []
    Omni::Inventory.find_each do |x|
      inventory_array << x
    end
    put "== finished in #{(Time.now - start_time).round(0).to_s.cyan}s"
    put "END - created array with find_each: #{inventory_array.count.to_s}"

    put "START - activerecord: each, array"
    start_time = Time.now
    inventory_array = []
    Omni::Inventory.all.each do |x|
      inventory_array << x
    end
    put "== finished in #{(Time.now - start_time).round(0).to_s.cyan}s"
    put "END - created array with each: #{inventory_array.count.to_s}"

    puts @output
  end

  def self.jruby
    ### Last order of 2010 = 1569747.  All orders must be greater than that

    @output = []
    @rows_to_be_updated = 0
    @rows_to_be_created = 0
    @rows_created = 0
    @rows_updated = 0
    @total_count = 0
    @no_sku_count = 0
    @error_count = 0
    @created_count = 0
    @skus = {}
    @locations = {}
    @days = 0
    @i = 0
    sku_array = []
    records_array = []
    inventory_hash = {}
    inventory_array = []


    put "== starting jruby test =="

    # put "START..create sku hash - using activerecord - jruby cannot handle without find_each"
    # Omni::Sku.where("mark_stock IS NOT NULL and mark_size IS NOT NULL").find_each {|x| @skus.merge!([x.mark_stock, x.mark_size] => x.sku_id)}
    # put "END....create sku hash: #{@skus.count.to_s}"

    # put "START..create sku array - using sql - jruby cannot handle"
    # sql = "Select * from skus"
    # sku_array = ActiveRecord::Base.connection.execute(sql)
    # put "END....create sku array: #{@skus.count.to_s}"

    # put "START..create location hash for faster processing"
    # Omni::Location.all.each {|loc| @locations[loc.location_nbr] = loc.location_id}
    # put "END....create location hash: #{@locations.count.to_s}"

    # 1.upto(10).map do |n|
    #   do_inventory_group n
    # end

    1.upto(4).map do |n|
      Thread.new { do_inventory_group n}
    end.each(&:join)

# put "START - raw sql: array"
    # start_time = Time.now
    # sql = "Select * from inventory"
    # inventory_array = ActiveRecord::Base.connection.execute(sql)
    # put "== finished in #{(Time.now - start_time).round(0).to_s.cyan}s"
    # put "END - created array with raw sql: #{inventory_array.count.to_s}"




    # put "START - activerecord: each, array"
    # start_time = Time.now
    # inventory_array = []
    # Omni::Inventory.all.each do |x|
    #   inventory_array << x
    # end
    # put "== finished in #{(Time.now - start_time).round(0).to_s.cyan}s"
    # put "END - created array with each: #{inventory_array.count.to_s}"

    puts @output
  end

  def self.do_inventory_group(page_nbr)
    # put "START - process inventory group"
    start_time = Time.now

    Omni::MarkInventory.paginate(:page => page_nbr, :per_page => 1000).each do |x|
      location_id = @locations["#{x.outlet_nbr}"]
      next unless location_id
      sku_id = @skus[[x[:stock_nbr].to_s, x[:size].to_s]]
      next unless sku_id
      # put "sku: #{sku_id}"
      # inv = Omni::Inventory.create(:sku_id => sku_id, :location_id => location_id, :on_hand_units => x.qoh)
    end
    put "== finished page #{page_nbr.to_s} in #{(Time.now - start_time).round(0).to_s.cyan}s"
  end

end
