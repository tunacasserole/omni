class Omni::Util::Seed

  def self.go(m)
    @model_name = m
    @full_model_name = Omni::Util::Gem.full_model_name(m)

    dump_to_seed
  end

  def self.dump_to_seed
    # initialize
    rows_to_dump = "#{@full_model_name}".constantize.count
    rows_per_file = 20000
    file_count = rows_to_dump / rows_per_file + 1

    # delete previous seed files
    Dir.entries("db/seed").each {|x| File.delete("db/seed/#{x}") if (x.include? @model_name.tableize) } #&& (x.length == @model_name.tableize.length + 18)

    if rows_to_dump < rows_per_file
      # dump rows into a single file
      puts "#{Omni::Util::Clock.stamp} dumping to file #{gen_file_name}"
      SeedDump.dump("#{@full_model_name}".constantize, file: gen_file_name)
    else
      # split and dump rows into many files
      (file_count).times do |i|
        puts "#{Omni::Util::Clock.stamp} dumping rows #{rows_per_file * i} - #{rows_per_file * (i+1)} to #{gen_file_name}_#{i+1}.rb"
        data = "#{@full_model_name}".constantize.offset(rows_per_file * i).limit(rows_per_file).to_a
        SeedDump.dump(data, file: "#{gen_file_name}_#{i+1}.rb")
      end
    end

    puts "#{Omni::Util::Clock.stamp} finished dump of #{rows_to_dump} rows"

    # delete all data before running the seed as a test
    # "#{gem_name}::#{model_name}".constantize.delete_all

    # run the seed file
    # system('rake buildit:db:seed')
  end

  def self.gen_file_name
    # generate seed file name
    sleep 1
    "db/seed/#{Time.now.to_s.chop.chop.chop.chop.gsub(/[^0-9]/, "")}_#{@model_name.tableize}.rb"

  end

end
