class Omni::Meta::Client < Omni::Meta::Base
  
  def self.run(model)
    system ("rails g buildit:client Omni::#{model.model_name} --skip-i18n --skip-sources --skip-mobile --skip-tablet --skip-phone")
  end

  def self.run_all(options = {})
    Omni::Meta::Base.constants
    @@verbose = true if options[:verbose]    
    @@models.each {|row| run row['model_name'] unless (options[:restart] and row['model_name'] < options[:restart])}
  end


end