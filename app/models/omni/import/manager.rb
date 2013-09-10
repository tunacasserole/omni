class Omni::Import::Manager < Omni::Import::Base

  def self.run_by_id(import_id)
    puts "--run by id - importing"
    Omni::Import::Base.load_import import_id
    puts "Omni::Import::#{@@import.data_source.capitalize}::#{@@import.job_type.capitalize}" + '**********\n'
    "Omni::Import::#{@@import.data_source}::#{@@import.job_type.capitalize}".constantize.import(@@import) 
    puts "--end of importing"        
  end

  def self.run(model_name)
    puts 'run'
    Omni::Import::Base.constants unless defined? @@project_id
    Omni::Import::Data.load(model_name) if @@models.include? 'Omni::' + model_name
    if !@@exceptions.empty?
      log_it @@exceptions
      @@exceptions = []
      #abort 'found exceptions'
    end
    ("Omni::#{model_name}").constantize.reindex
  end
 
  def self.run_all(options = {})
    Omni::Import::Base.constants
  end

end