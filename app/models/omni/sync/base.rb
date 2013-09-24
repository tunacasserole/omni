class Omni::Sync::Base

  def self.locations
    locations = {}
    put "START..create location hash"
    Omni::Location.all.each {|loc| @locations[loc.location_nbr] = loc.location_id}
    put "END....create location hash: #{@locations.count.to_s}"
    locations
  end

  def self.xit
    if Time.now-@start_time > 120
      put "******************************"
      put "Omni rows created: #{@created_count}"
      put "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"
      puts @output
      put "******************************"
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
  end
end
