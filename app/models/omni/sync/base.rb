class Omni::Sync::Base

  def self.go(model_name)
    puts "going - #{model_name}"

    model_name.downcase == 'all' ? sync_all : "Omni::Sync::#{model_name}".constantize.go
  end

  def self.sync_all
    puts "syncing all"
  end

  def self.index_all
    puts "indexing all"
  end

  def self.index(model_name)
    puts "-- indexing - #{model_name}"
    rows = 0
    if model_name.downcase == 'all'
      index_all
    else
      data = "Omni::#{model_name}".constantize.where(is_indexed: [false,nil])
      count = data.count
      puts ".. #{count} rows to process ......................................"
      start = Time.now
      data.find_each do |x|
        if rows.to_s.end_with? '00'
          elapsed = Time.now - start
          pct_complete = (rows.to_f / count.to_f * 100.0).round(2)
          total = (elapsed * 100 / pct_complete).round(0)
          remaining = total - elapsed
          finish = start + total
          puts ".. #{model_name.yellow} #{Time.now.strftime("%H:%M:%S").yellow}:  (#{rows.to_s} / #{count}) #{(rows.to_f / count.to_f * 100.0).round(2).to_s}% complete.  #{(count - rows).to_s.cyan} #{'remaining'.cyan}.  proj. finish: #{(finish).strftime("%H:%M:%S").yellow} (#{(remaining / 60).round(0)} remaining minutes)"
        end
        rows += 1
        x.is_indexed = true
        x.save
        x.index
      end
    end
  end

  def self.de_dup(model_name)
    delete_count = 0
    data = "Omni::#{model_name}".constantize.all
    data.each do |x|
      # used_count = Omni::Supplier.where(style_id: x.style_id).count
      # next if used_count > 0
      dup_count = "Omni::#{model_name}".constantize.where(display: x.display).count
      next if dup_count < 2
      delete_count += 1
      x.delete if dup_count > 1
    end

    puts "delete_count is #{delete_count}"
  end

  def self.xit
    # put "no locations found for these outlets: #{@no_locations}"
    # put "no skus found for these stock-size combos: #{@no_skus}"
    # put "no inventory rows: #{@no_row_rows}"
    put "no sku found for that stock-size: #{@no_sku_count}"
    put "no location found for that outlet: #{@no_location_count}"
    put "no inventory found: #{@no_id_count}"
    put "***********************************"
    put "legacy source rows: #{@source_count}"
    put "omni rows created: #{@created_count}"
    put "legacy rows skipped: #{@source_count - @created_count}"
    put "***********************************"
    put "== finished in #{(Time.now - @start).round(0).to_s.cyan}s"
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
    @start = Time.now
    @date = Date.parse('1-1-1999')
    # @start_date = Date.parse('1-1-2011')
    # @end_date = Date.parse('31-12-2013')
    # @total_count = 0
    @created_count = 0
    @source_count = 0
    @no_sku_count = 0
    @no_location_count = 0
    @no_id_count = 0
    @days = 0

    @locations = Omni::Location.source_hash('PARKER')
    @skus = Omni::Sku.source_hash('PARKER')
    @inventories = Omni::Inventory.source_hash

    @updates = []
    @no_locations = []
    @no_skus = []
    @no_row = []
    @order_lines = []
  end

end
