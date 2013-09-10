class Omni::Import::Buckhead::Inventory < Omni::Import::Base

  def self.import(import)
    puts "Omni::Import::Buckhead::Inventory.import"
    total_count = 0
    no_sku_count = 0
    no_location_count = 0
    error_count = 0
    created_count = 0
  
    puts  "START..create location hash for faster processing  #{Time.now}"    
    locations = {}
    Omni::Location.all.each {|loc| locations[loc.location_nbr] = loc.location_id}
    puts  "END....create location hash for faster processing  #{Time.now}"

    Omni::RmsItemDynamic.all.each_with_index do |ri,i|
      break if i > 1000
      total_count += 1
      sku = Omni::Sku.where(:source_id => "#{ri.ItemID}").first 
      if !sku
        no_sku_count += 1
        next
      end
      # puts "---  OMNI: sku = #{sku.sku_id}"
      
      #puts  "Lookup location from locations_hash for outlet_nbr: #{line[:outlet_nbr]}"
      location_id = locations["#{ri.StoreID}"]
      if !location_id
        no_location_count += 1
        next     
      end
      # puts  "---  OMNI: location is: #{location_id}"
      
      # puts "row #{i.to_s} Buckhead: outlet = #{ri.outlet_nbr} stock = {#ri.stock_nbr} size = #{ri.size} qoh = #{ri.qoh}"
      inv = Omni::Inventory.create(:sku_id => sku.sku_id, :location_id => location_id, :on_hand_units => ri.qoh)
      if !inv
        error_count += 1
        next
      end

      created_count += 1
    end

    puts "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    puts "******************************"
    puts  "Buckhead inventory rows: #{total_count}"
    puts  "no sku found for that buckhead item: #{no_sku_count}"
    puts  "no location found for that outlet: #{no_location_count}"    
    puts  "creation error: #{error_count}"
    puts  "rows succesfully created: #{created_count}"
    puts "******************************"
    puts "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"    

    puts  "DONE EXPORTING FROM MARK AT: #{Time.now.to_s}"
  end
end