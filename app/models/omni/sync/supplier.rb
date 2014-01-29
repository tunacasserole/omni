# require 'roo'

class Omni::Sync::Supplier < Omni::Sync::Base

  def self.go
    # imported directly from csv into db
    # update_guids
    update_descriptions
  end

  def self.update_descriptions
    Omni::Supplier.all.each do |x|
      next if x.description
      puts "x.display is #{x.display} and stripped is #{x.display.strip}"
      x.description = x.display
      x.save
    end# update_descriptions
  end

  def self.update_guids
    Omni::Supplier.all.each do |x|
      # puts x.supplier_id
      x.supplier_id = Buildit::Util::Guid.generate
      x.save
    end
  end

end


