require 'colored'

class Omni::ConvertGenerator < Rails::Generators::Base

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
        Omni::Convert::Mark::Manager.run_all :verbose => options.verbose
  end # def generate

end
