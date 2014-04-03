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

    @locations = Omni::Location.source_hash('PARKER')
    @skus = Omni::Sku.source_hash('PARKER')
    @inventories = Omni::Inventory.source_hash

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
      # break if i > 100
      clock_it(i)
      next unless excel.row(i)[0]
      row = Hash[[header, excel.row(i)].transpose]
      row.each_key{|x| row[x] = row[x].to_s.strip if row[x]}
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
    excel_type = 'xlsx'
    excel_to_hash("#{table_name}.#{excel_type}").each_with_index {|x,i| "Omni::Sync::#{model_name}".constantize.map_to_db(x); clock_it(i)}

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

  def self.clock_it(i)
    if i == 1
      @start_time = Time.now
      # puts "#{time_stamp}:  read row 1"
    end
    if i.to_s.end_with? '000'
      @end_time = Time.now

      # puts "#{time_stamp}: read rows: #{(i-1000).to_s} - #{i.to_s} in #{@end_time - @start_time} seconds"
      @start_time = Time.now
    end
  end

  def self.time_stamp
    "== #{Time.now.strftime("%H:%M:%S").yellow}: "
  end
end

  # def self.seed_file_name(model_name)
  #   # generate seed file name
  #   sleep 1
  #   "db/seed/#{Time.now.to_s.chop.chop.chop.chop.gsub(/[^0-9]/, "")}_#{model_name.tableize}.rb"
  # end

  # def self.dump_to_seed(model_name)
  #   # initialize
  #   rows_to_dump = "Omni::#{model_name}".constantize.count
  #   puts "#{time_stamp} starting dump of #{rows_to_dump} rows"
  #   rows_per_file = 20000
  #   file_count = rows_to_dump / rows_per_file + 1
  #   # puts "file_count is #{file_count}"
  #   gem_name = get_gem(model_name)

  #   # delete previous seed files
  #   Dir.entries("db/seed").each {|x| File.delete("db/seed/#{x}") if (x.include? model_name.tableize) } #&& (x.length == model_name.tableize.length + 18)

  #   if rows_to_dump < rows_per_file
  #     # dump rows into a single file
  #     puts "#{time_stamp} dumping to file #{seed_file_name(model_name)}"
  #     SeedDump.dump("#{gem_name}::#{model_name}".constantize, file: seed_file_name(model_name))
  #   else
  #     # split and dump rows into many files
  #     (file_count).times do |i|
  #       puts "#{time_stamp} dumping rows #{rows_per_file * i} - #{rows_per_file * (i+1)} to #{seed_file_name(model_name)}_#{i+1}.rb"
  #       data = "Omni::#{model_name}".constantize.offset(rows_per_file * i).limit(rows_per_file).to_a
  #       SeedDump.dump(data, file: "#{seed_file_name(model_name)}_#{i+1}.rb")
  #     end
  #   end

  #   puts "#{time_stamp} finished dump of #{rows_to_dump} rows"

    # delete all data before running the seed as a test
    # "#{gem_name}::#{model_name}".constantize.delete_all

    # run the seed file
    # system('rake buildit:db:seed')
  # end

# end
