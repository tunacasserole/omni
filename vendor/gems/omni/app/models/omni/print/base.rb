class Omni::Print::Base

  def self.constants
  	puts "constants"
    @@home_dir = File.join(Dir.home,'sandbox','omni')
    @@pdf_dir = File.join(Dir.home,'sandbox','omni','tmp','pdf')    
  end
  
end
