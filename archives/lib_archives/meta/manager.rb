class Omni::Meta::Manager < Omni::Meta::Base

  def self.run(model_name, options = {})
    #puts 'manager run'
    ### possible options: :verbose => true, :restart => ModelName
    puts "\n== " + model_name.upcase.ljust(26).cyan + " ! " << Time.now.strftime("%H:%M:%S").yellow
    Omni::Meta::Base.run model_name
    @@debug = options[:debug] #if options[:debug]
    @@verbose = options[:verbose] or options[:debug]
    #puts "--- feelin' chatty today ---" if @@verbose        
    model = Buildit::ModelMeta.all(:model_name => model_name).first
    #puts 'yo'
    Buildit::Framework.configuration.scaffolders.omni_meta.each do |worker|
      puts "== #{worker.to_s.ljust(26).green} ! " << Time.now.strftime("%H:%M:%S").yellow
      worker.send(:run, model) if worker.respond_to? :run
    end
  end

  def self.run_all(options = {})
    Omni::Meta::Base.constants  
    @@verbose = (options[:verbose] or options[:debug])
    puts 'manager run all' if @@verbose
    #@@verbose = true if options[:verbose] 
    #fix_these_models = ['Classification','Customer','Container','ContainerDetail','Department','District','LocationUser','Order','OrderDetail','Payment','Projection','Purchase','PurchaseDetail','Receipt','ReceiptDetail','Region','Shipment','Sku','Style','TillActivity','Transfer','Voucher']
    #@@models.reject! {|row| !fix_these_models.include? row['model_name'] } 
    puts "restarting" + options[:restart] if options[:restart] and @@verbose  
    @@models.each {|row| run row['model_name'] if !options[:restart] or (options[:restart] and row['model_name'] > options[:restart])}
    #@@models.each {|row| run row['model_name'] if @@models_with_states.include? row['model_name']}
  end
  
  def self.load_models
    Omni::Meta::Base.constants
    @@models.each {|row| Omni::Meta::ModelGroup.load row['model_name']}
    @@models.each {|row| Omni::Meta::Model.load row['model_name']}
  end

end

