class Omni::Sync::Base

  def self.go(model_name)
    model_name.downcase == 'all' ? sync_all : "Omni::Sync::#{model_name}".constantize.go

    # test that the correct number of rows were created
    count = "Omni::#{model_name}".constantize.count
    puts "rows synced is #{count}"
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
          puts ".. #{model_name.yellow} #{time_stamp}:  (#{rows.to_s} / #{count}) #{(rows.to_f / count.to_f * 100.0).round(2).to_s}% complete.  #{(count - rows).to_s.cyan} #{'remaining'.cyan}.  proj. finish: #{(finish).strftime("%H:%M:%S").yellow} (#{(remaining / 60).round(0)} remaining minutes)"
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
    @output << "#{time_stamp}: #{message}"
    # puts "#{time_stamp}: #{message}"
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

    @locations = Omni::Location.to_hash('PARKER')
    @skus = Omni::Sku.to_hash('PARKER')
    @inventories = Omni::Inventory.to_hash

    @updates = []
    @no_locations = []
    @no_skus = []
    @no_row = []
    @order_lines = []
  end

  def self.re_sequence(model_name)
    sequence_code = table_name.chop.upcase + "_NBR"
    data = "Omni::#{model_name}".constantize.all.order("#{sequence_code}")
    data.each_with_index {|x| x.send(sequence_code, i + 999)}

    # # reset last_used_nbr in sequences table
    # seq = Buildit::Sequence.where(sequence_code: sequence_code).first
    # if seq
    #   seq.value = new_max
    #   seq.save
    # else
    #   puts "sequence entry not found for #{sequence_code}"
    # end
  end

  def self.seq(table_name)
    sequence_code = table_name.chop.upcase + "_NBR"
    seq = Buildit::Sequence.where(sequence_code: sequence_code).first
    if seq
      seq.value = 1000
      seq.save
    else
      puts "sequence entry not found for #{sequence_code}"
    end
  end

  def self.table_to_hash(table_name, options={})
    result = []

    Omni::Util::Clock.stamp(message: "started reading table #{table_name}")

    order_by =  "order by #{ options.delete(:order_by) || 'display' }"
    # data = ActiveRecord::Base.connection.execute "select * from #{table_name} #{order_by}"
    data = Omni::TgInventory.all(order_by)
    Omni::Util::Clock.stamp(message: "finished reading table #{table_name}")

    data.each_with_index do |row, i|
      break if i > 10
      Omni::Util::Clock.go(row: i, total: data.count, message: "loading hash")
      puts row[0]

    end

    result

  end


  def self.excel_to_hash(file_name)
    # Takes an excel file name and a tab name, and returns an array of stripped, transposed rows
    # Sample call:  @@data = excel_to_hash File.join(Rails.root,'db/meta/model_headers.xlsx'), 'models'
    # Access the data:  @data.first['column_name']
    puts "== reading excel into memory at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
    folder_name = File.join(Rails.root, 'db','import')
    rows = []
    file = File.open(File.join(folder_name, file_name), mode = 'r')
    excel = Roo::Excelx.new(file.path)
    # tab_name = 'sheet1'
    # excel.default_sheet = excel.sheets.index(tab_name) ? excel.sheets.index(tab_name) + 1 : excel.sheets[1]
    header = excel.row(1)
    (2..excel.last_row).each do |i|
      break if i > 10
      Omni::Util::Clock.go(row: i, total: excel.last_row - 1)
      next unless excel.row(i)[0]
      row = Hash[[header, excel.row(i)].transpose]
      # row.each_key{|x| row[x] = row[x].to_s.strip if row[x]}
      # next if ['0','-'].include?(excel.row(i)[0])
      rows << row
    end
    puts "== finished reading #{rows.count.to_s} rows at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
    return rows
  end

  def self.excel_to_seed(model_name, table_name)

    # delete all data for a fresh start
    # "Omni::#{model_name}".constantize.delete_all

    # reset the sequence number
    # seq(table_name)

    # load the excel data into a hash and map it to the database
    data = excel_to_hash("#{table_name}.xlsx")
    data.each_with_index {|x,i| "Omni::Sync::#{model_name}".constantize.map_to_db(x); Omni::Util::Clock.go(row: i, total: ata.count)}

    # optionally call seed file generator
    # dump_to_seed(model_name)

    # test that the correct number of rows were created

  end

  def self.get_gem(model_name)
    if ['Lookup','Sequence'].include? model_name
      gem_name = 'Buildit'
    else
      gem_name = 'Omni'
    end
  end

end
