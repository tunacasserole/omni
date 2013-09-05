class Omni::Meta::Service < Omni::Meta::Base
  
  def self.run(model)
  	if model.attribute_meta
      #Omni::Meta::Table.clobber model.table_name
      system ("rails g buildit:service Omni::#{model.model_name} --skip-migrate")  #--skip-api
    elsif
      puts '---- no attribute_meta has been loaded for ' + model.model_name + '.  skipping service generation ----'
    end
  end

  def self.run_all(options = {})
    Omni::Meta::Base.constants
    #@@verbose = true if options[:verbose]    
    @@models.each {|row| run row['model_name'] unless (options[:restart] and row['model_name'] < options[:restart])}
  end

end