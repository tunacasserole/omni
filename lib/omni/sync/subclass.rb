class Omni::Sync::Subclass < Omni::Sync::Base

  def self.go
    update_classes
  end

  def self.update_classes
    puts "updating subclasses with a bad class"
    data = ActiveRecord::Base.connection.execute "select * from subclasses where classification_id is null or classification_id not in (select classification_id from classifications)"
    data.each do |x|
      puts "x[0] is #{x[0]}"
      puts "x[1] is #{x[1]}"
      puts "x[2] is #{x[2]}"
      puts "x[5] is #{x[5]}"

      ActiveRecord::Base.connection.execute "update subclasses set classification_id = null where subclass_id = '#{x[0]}'"
    end
  end
end


