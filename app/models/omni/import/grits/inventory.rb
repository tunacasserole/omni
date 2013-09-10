class Omni::Import::Grits::Inventory < Omni::Import::Base

  def self.import
    puts "..Omni::Import::Grits::Inventory.import"
  	total_count = 0
  	error_count = 0
  	created_count = 0

    locations = {:60 => }
    Omni::GritsBts.all.each_with_index do |x,i|
      puts "*********PROCESSING row #{i.to_s}:" if i.to_s.end_with? '0000'
    	total_count += 1
      sku = Omni::Sku.where(:source => "GRITS",:source_id => x.tg_sku_id).first
      if !sku
        no_sku_count += 1
        next
      end
      # puts "---  OMNI: sku = #{sku.sku_id}"
      
      #puts  "Lookup location from locations_hash for outlet_nbr: #{line[:outlet_nbr]}"
      location_id = locations["#{x.StoreID}"]
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

      created_count += 1    end

    # puts "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    puts "******************************"
    puts  "Grits inventory processed: #{total_count}"
    puts  "creation errors: #{error_count}"
    puts  "rows succesfully created: #{created_count}"
    puts "******************************"
    # puts "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"    
  end
end