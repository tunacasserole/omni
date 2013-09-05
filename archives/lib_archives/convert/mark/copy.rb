class Omni::Convert::Mark::Copy < Omni::Convert::Mark::Base

  def self.run(model)
    puts "running the copy"
    #mark_inventory = Omni::MarkInventoryDev.all(:limit=> @@fetch_rows)
    mark_inventory = Omni::MarkInventoryDev.all
    mark_inventory.each  do |i|
      puts "Stock Nbr = #{i.stock_nbr} and Outlet Nbr = #{i.outlet_nbr}"
      #if !Omni::MarkInventory.where(:outlet_nbr => i.outlet_nbr, :stock_nbr => i.stock_nbr, :size => i.size).first
        x = Omni::MarkInventory.new(:outlet_nbr => i.outlet_nbr, :stock_nbr => i.stock_nbr, :size => i.size, :qoh => i.qoh, :id => i.id)
        #x.save
        puts "created inventory for outlet: #{i.outlet_nbr} and stock: #{i.stock_nbr} and size: #{i.size}"
      #end
    end
  end

  def self.create_sku_locations
    puts "creating sku locations"
    locations = Omni::Location.all
    skus = Omni::Sku.all(:limit => 50)
    skus.each do |sku|
      locations.each {|loc| Omni::SkuLocation.create(:sku_id => sku.sku_id, :location_id => loc.location_id) }
    end

  end
end