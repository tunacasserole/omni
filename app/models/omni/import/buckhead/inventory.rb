class Omni::Import::Buckhead::Inventory < Omni::Import::Base

  def self.import(import)
    total_count = 0
    no_sku_count = 0
    no_location_count = 0
    error_count = 0
    created_count = 0
    
    log_it "Omni::Import::Buckhead::Inventory.import"
    locations = {}
    Omni::Location.all.each {|loc| locations[loc.location_nbr] = loc.location_id}
    #log_it  "create location hash for faster processing  #{Time.now}"

    Omni::RmsItem.all.each_with_index do |ri,i|
      # break if i > 20000

      total_count += 1
      sku = Omni::SkuAlias.where(:sku_alias => "#{ri.ID}").first 
      no_sku_count += 1 unless sku
      next unless sku
      log_it "---  OMNI: sku = #{sku.sku_id}"
      
      #log_it  "Lookup location from locations_hash for outlet_nbr: #{line[:outlet_nbr]}"
      location_id = locations["#{ri.outlet_nbr}"]
      no_location_count += 1 unless location_id
      next unless location_id      
      log_it  "---  OMNI: location is: #{location_id}"
      
      log_it "row #{i.to_s} MARK: outlet = #{ri.outlet_nbr} stock = {#ri.stock_nbr} size = #{ri.size} qoh = #{ri.qoh}"
      inv = Omni::Inventory.create(:sku_id => sku.sku_id, :location_id => location_id, :on_hand_units => ri.qoh)
      error_count += 1 unless inv
      next unless inv

      created_count += 1

      # inv = Omni::Inventory.create(:sku_id => '51713A3EAC3E11E2947800FF58D32228', :location_id => '', :on_hand_units => 0)      
      # puts inv.errors if inv.errors.inspect
    end

    log_it "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    log_it "******************************"
    log_it  "Mark inventory rows: #{total_count}"
    log_it  "no sku found for that stock-size: #{no_sku_count}"
    log_it  "no location found for that outlet: #{no_location_count}"    
    log_it  "creation error: #{error_count}"
    log_it  "rows succesfully created: #{created_count}"
    log_it "******************************"
    log_it "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"    

    log_it  "DONE EXPORTING FROM MARK AT: #{Time.now.to_s}"
  end
end