class Omni::Data::Sync::Script

  def self.put(message)
    @output = "begin" unless @output
    output = "#{Time.now.strftime("%H:%M:%S").yellow}: #{message}"
    @output << output
    puts output
  end

  def self.xit
    if Time.now-@start_time > 30
      exit
    end
  end

  def self.go
    # ActiveRecord::Base.connection.tables.each do |table_name|
    omni_classes = ActiveRecord::Base.subclasses.reject! {|c| c.to_s.start_with? 'Buildit'}
    omni_classes.each do |c|
      next if c.to_s.start_with? 'Omni::A' or c.to_s.start_with? 'Omni::B'
      next unless ActiveRecord::Base.connection.tables.include? c.table_name
      put "\n==#{c.table_name}==\n"

      # id_field = ActiveRecord::Base.connection.columns(c.table_name).first.name
      system("rails g buildit:stub BUILDIT #{c.table_name} #{c.primary_key} #{c.to_s.gsub!('Omni::','')} omni Omni --skip-api --quiet --skip")
    end
  end

end
