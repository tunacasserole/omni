class Omni::Seed::Base

    # def self.table_to_seed(model_name, target_table_name, source_table_name)

  #   # delete all data for a fresh start
  #   "Omni::#{model_name}".constantize.delete_all

  #   # reset the sequence number
  #   seq(table_name)

  #   # read from source table and map it to the target table

  #   # optionally call seed file generator

  # end

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

  def self.seed_file_name(model_name)
    # generate seed file name
    sleep 1
    "db/seed/#{Time.now.to_s.chop.chop.chop.chop.gsub(/[^0-9]/, "")}_#{model_name.tableize}.rb"
  end

  def self.dump_to_seed(model_name)
    # initialize
    rows_to_dump = "Omni::#{model_name}".constantize.count
    puts "#{time_stamp} starting dump of #{rows_to_dump} rows"
    rows_per_file = 20000
    file_count = rows_to_dump / rows_per_file + 1
    # puts "file_count is #{file_count}"
    gem_name = get_gem(model_name)

    # delete previous seed files
    Dir.entries("db/seed").each {|x| File.delete("db/seed/#{x}") if (x.include? model_name.tableize) } #&& (x.length == model_name.tableize.length + 18)

    if rows_to_dump < rows_per_file
      # dump rows into a single file
      puts "#{time_stamp} dumping to file #{seed_file_name(model_name)}"
      SeedDump.dump("#{gem_name}::#{model_name}".constantize, file: seed_file_name(model_name))
    else
      # split and dump rows into many files
      (file_count).times do |i|
        puts "#{time_stamp} dumping rows #{rows_per_file * i} - #{rows_per_file * (i+1)} to #{seed_file_name(model_name)}_#{i+1}.rb"
        data = "Omni::#{model_name}".constantize.offset(rows_per_file * i).limit(rows_per_file).to_a
        SeedDump.dump(data, file: "#{seed_file_name(model_name)}_#{i+1}.rb")
      end
    end

    puts "#{time_stamp} finished dump of #{rows_to_dump} rows"

    # delete all data before running the seed as a test
    # "#{gem_name}::#{model_name}".constantize.delete_all

    # run the seed file
    # system('rake buildit:db:seed')
  end

end
