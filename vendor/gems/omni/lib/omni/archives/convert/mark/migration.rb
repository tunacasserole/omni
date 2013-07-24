class Omni::Convert::Mark::Migrations < Omni::Convert::Mark::Base

  def self.run(model)
    puts "running migrations"
   #establish_connection   Buildit::Util::Data::Connection.for 'BUILDIT'  
    ActiveRecord::Base.connection.tables.each do |table_name|
      puts "\n" + table_name
      ActiveRecord::Base.connection.columns(table_name).each {|c| puts "- " + c.name + ": " + c.type.to_s + " " + c.limit.to_s}
    end  
  end

end