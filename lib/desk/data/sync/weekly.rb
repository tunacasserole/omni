class Omni::Data::Sync::Weekly

  def self.go
   # Omni::Data::Sync::Inventory::Parker.inventory
   Omni::Data::Sync::DailyResult.go
  end

end


