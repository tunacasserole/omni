class Omni::Import::Parker::Inventory < Omni::Import::Base

  def self.import
    puts "..Omni::Import::Parker::Inventory.import"
  	@total_count = 0
  	@error_count = 0
  	@created_count = 0
    @no_sku_count = 0
    @no_location_count = 0
    loops = 0
      
    @locations = {}
    puts  "START..create location hash for faster processing  #{Time.now}"
    Omni::Location.all.each {|loc| @locations[loc.location_nbr] = loc.location_id}
    puts  "END....create location hash for faster processing  #{Time.now}"    

    # count = Omni::MarkInventory.count
    count = 10000
    page_size = 1000
    loops = page_size / count
    loops = 2
    (0...loops).each do |i|
      paged_inventory(i*page_size+1,i+page_size)
    end
    # puts "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

    puts "******************************"
    puts  "Mark inventory rows: #{@total_count}"
    puts  "no sku found for that stock-size: #{@no_sku_count}"
    puts  "no location found for that outlet: #{@no_location_count}"    
    puts  "creation error: #{@error_count}"
    puts  "rows succesfully created: #{@created_count}"
    puts "******************************"
    # puts "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"    

    puts  "DONE EXPORTING FROM MARK AT: #{Time.now.to_s}"
  end

  def self.paged_inventory(start, finish)
    Omni::MarkInventory.where("id between ? and ?",start,finish).each_with_index do |x,i|
      puts "*********PROCESSING row #{i.to_s}:" if i.to_s.end_with? '00000'
      # puts "row #{i.to_s} MARK: outlet = #{x.outlet_nbr} stock = {#x.stock_nbr} size = #{x.size} qoh = #{x.qoh}"      
      @total_count += 1
      location_id = @locations["#{x.outlet_nbr}"]
      if !location_id
        @no_location_count += 1
        next
      end
      sku = Omni::Sku.where(:source => 'PARKER', :source_id=>"#{x.stock_nbr},#{x.size}").first  #|| Omni::Sku.create(:source => "PARKER",:display=>"#{x.stock_nbr},#{x.size}")
      if !sku
        @no_sku_count += 1
        next
      end       
      inv = Omni::Inventory.create(:sku_id => sku.sku_id, :location_id => location_id, :on_hand_units => x.qoh)
      @error_count += 1 unless inv
      @created_count += 1 if inv

      # inv = Omni::Inventory.create(:sku_id => '51713A3EAC3E11E2947800FF58D32228', :location_id => '', :on_hand_units => 0)      
      # puts inv.errors if inv.errors.inspect
    end
  end    
end