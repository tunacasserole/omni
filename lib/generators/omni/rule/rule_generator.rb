require 'colored'

class Omni::RuleGenerator < Rails::Generators::Base

  desc "This generator runs the rules engine."

  #source_root File.join(File.dirname(__FILE__), 'templates')
  #argument :load_group, :type => :string, :banner => 'Group to Load'  
  
  def initialize(*args, &block)
    puts 'Initialize'    
    @start_time = Time.now
    super
  end

  def generate
    puts "\n\n== RULES GENERATOR INITIATED ==============================================\n\n"
    puts "! Started at: " << Time.now.strftime("%H:%M:%S")
    #abort 'SLA Count - Expected:1, Actual: ' + Omni::StockLedgerActivity.count.to_s if Omni::StockLedgerActivity.count < 1
    #sla = Omni::StockLedgerActivity.first    
    #Omni::Rule::Base.run(sla)
    #adj = Omni::
  end # def generate

  def finalize
    puts "! Ended at: " << Time.now.strftime("%H:%M:%S")
    puts "! Processed rules in #{(Time.now - @start_time).round(3)}s"
    puts "\n== RULES GENERATOR COMPLETED ==============================================\n\n"
  end

private

end