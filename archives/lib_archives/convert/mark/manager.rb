class Omni::Convert::Mark::Manager < Omni::Convert::Mark::Base

  def self.run(model_name, options = {})
    #puts 'manager run'
    ### possible options: :verbose => true, :restart => ModelName
    puts "\n== " + model_name.upcase.ljust(26).cyan + " ! " << Time.now.strftime("%H:%M:%S").yellow

    @@debug = options[:debug] #if options[:debug]
    @@verbose = options[:verbose] or options[:debug]

    Buildit::Framework.configuration.scaffolders.omni_convert.each do |worker|
      puts "== #{worker.to_s.ljust(26).green} ! " << Time.now.strftime("%H:%M:%S").yellow
      worker.send(:run, model_name) if worker.respond_to? :run
    end
  end

  def self.run_all(options = {})
    Omni::Convert::Mark::Base.constants
    @@verbose = (options[:verbose] or options[:debug])
    puts 'manager run all' if @@verbose
    puts "restarting" + options[:restart] if options[:restart] and @@verbose
    #@@models.each {|row| run row['model_name'] if !options[:restart] or (options[:restart] and row['model_name'] > options[:restart])}
    @@models.each do |m|
      puts m
      run m
    end
  end


end

