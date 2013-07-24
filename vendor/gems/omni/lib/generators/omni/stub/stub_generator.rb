class Omni::StubGenerator < Rails::Generators::Base

  desc "This generator builds the entire application: import meta, gen service, gen client, import data"

  class_option :destroy,       :desc => 'Destroys all related meta data', :type => :boolean,   :default => false,   :aliases => '-d'
  class_option :verbose,       :desc => 'Shows informational messages', :type => :boolean,   :default => false,   :aliases => '-v'
  class_option :gen,           :desc => 'generation only, no import meta', :type => :string,   :default => false,    :aliases => '-g'
  class_option :all,           :desc => 'Rebuild the whole system',      :type => :boolean,   :default => false,   :aliases => '-a'
  class_option :restart,       :desc => 'Which model to restart with',   :type => :string,    :banner => 'Restart'
  class_option :worker,        :desc => 'The single worker to execute',  :type => :string,    :default => false
  class_option :table_name,    :desc => 'name of the table to stub from', :type => :string,   :aliases => '-t'
  class_option :model_name,    :desc => 'The fully qualified model name', :type => :string,    :banner => 'Model',  :aliases => 'm'

  def initialize(*args, &block)
    @start_time = Time.now
    super
    @table_name = options.table_name
    puts " \n== #{@table_name} ===================================================="
  end

  def execute
    generate
  end

  def finalize
    puts "! Ended at: " << Time.now.strftime("%H:%M:%S")
    puts "! Processed Stub Generation in #{(Time.now - @start_time).round(3)}s"
  end

  private

  def generate
    Omni::Stub::Manager.run(options)
  end # def generate

end
