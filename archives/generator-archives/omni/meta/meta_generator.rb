require 'colored'

class Omni::MetaGenerator < Rails::Generators::Base

  desc "This generator builds the entire application: import meta, gen service, gen client, import data"

  class_option :destroy,       :desc => 'Destroys all related meta data', :type => :boolean,   :default => false,   :aliases => '-d'
  class_option :verbose,       :desc => 'Shows informational messages', :type => :boolean,   :default => false,   :aliases => '-v'
  class_option :meta,          :desc => 'import meta only, no generation', :type => :string,   :default => false,    :aliases => '-m'
  class_option :gen,          :desc => 'generation only, no import meta', :type => :string,   :default => false,    :aliases => '-g'  
  class_option :all,           :desc => 'Rebuild the whole system',      :type => :boolean,   :default => false,   :aliases => '-a'
  class_option :restart,       :desc => 'Which model to restart with',   :type => :string,    :banner => 'Restart'
  class_option :worker,        :desc => 'The single worker to execute',  :type => :string,    :default => false

  argument     :model_name,    :desc => 'The fully qualified model name', :type => :string,    :banner => 'Model'  

  def initialize(*args, &block)
    @start_time = Time.now
    super
    @model_name = model_name
    #puts " \n== #{@model_name} ===================================================="
  end

  def execute
    generate
  end

  def finalize
    puts "! Ended at: " << Time.now.strftime("%H:%M:%S")
    puts "! Processed Meta Generation in #{(Time.now - @start_time).round(3)}s"
  end

private

  def generate
    
    if options.import_only
      Omni::Import::Manager.run @model_name
      abort 'finished import'
    end

    Buildit::Framework.configuration.scaffolders.omni_meta.unshift Omni::Meta::Destroy if options.destroy
    Buildit::Framework.configuration.scaffolders.omni_meta.reject! {|x| !x.to_s.downcase.end_with? options.worker.downcase} if options.worker
    Buildit::Framework.configuration.scaffolders.omni_meta.reject! {|x| x.to_s.downcase.end_with? 'client' or x.to_s.downcase.end_with? 'service'} if options.meta    
    #Buildit::Framework.configuration.scaffolders.omni_meta.each {|x| puts x.to_s} if @@verbose
    
    #abort 'test'
    # Generate a single model if provided, otherwise the entire system
    if options.all
      if options.restart
        puts ' restart model is: ' + options.restart
        Omni::Meta::Manager.run_all :restart => options.restart 
      else
        puts ' no restart '
        Omni::Meta::Manager.run_all :verbose => options.verbose
      end
      #system("rake buildit:api")
      #system("rake buildit:sources")
      #system("rake buildit:i18n")
    else
      Omni::Meta::Manager.run(@model_name, :debug=>options.verbose)
      system("rails g buildit:service Omni:#{@model_name}") if options.service and options.worker
      system("rails g buildit:client Omni:#{@model_name}") if options.client and options.worker
      #Omni::Import::Manager.run @model_name if options.service or options.data
    end


  end # def generate

end
