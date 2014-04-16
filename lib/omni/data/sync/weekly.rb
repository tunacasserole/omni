class Omni::Data::Sync::Weekly < Omni::Data::Sync::Base

  def self.go
   # Omni::Data::Sync::Inventory::Parker.inventory
   Omni::Data::Sync::DailyResult.go
  end

end


