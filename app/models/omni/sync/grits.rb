class Omni::Sync::Omni

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
    Omni::Sku.connection.execute "INSERT INTO bts_details (bts_detail_id, bts_id, sku_id, data_source) values ('#{SecureRandom.uuid.gsub('-','').upcase}','#{self.bts_id}', '#{x.sku_id}','PARKER')" if self.is_source_parker and x.source == 'PARKER'
    Omni::Sku.where("mark_stock IS NOT NULL and mark_size IS NOT NULL").each {|x| @sku_hash.merge!([x.mark_stock, x.mark_size] => x.sku_id)}
    put "created @sku_hash: #{@sku_hash.count.to_s}"

    put "create location hash"
    Omni::Location.all.each {|loc| @locations[loc.location_nbr] = loc.location_id}
    put "created location hash: "
  end
end
