class Omni::Convert::Mark::Inventory < Omni::Convert::Mark::Base

  def self.run(model)
    puts "running Inventory"
    mark_inventory = Mark::Inventory.all(:limit=> @@fetch_rows)
    mark_inventory.each  do |i|
    #puts "Stock Nbr = #{i.stock_nbr} and Outlet Nbr = #{i.outlet_nbr}"

    sku = get_sku(i.stock_nbr,i.size)
    location = get_location(i.outlet_nbr)

    if sku and location
      Omni::Inventory.create(:sku_id => sku.sku_id,:location_id => location.location_id,:on_hand_units => i.qoh)
    else
      puts "Exception : No Location or Sku found"
    end

    end
  end


  def self.run_all(options = {})
    Omni::Convert::Mark::Base.constants
    @@verbose = true if options[:verbose]
    @@models.each {|row| run row['model_name'] unless (options[:restart] and row['model_name'] < options[:restart])}
  end

  def self.get_sku(stock_nbr,size)
    puts "Getting SKU"
    sku_alias = "#{stock_nbr}-#{size}"
    Omni::SkuAlias.where(:sku_alias => sku_alias).first
  end

  def self.get_location(outlet_nbr)
    puts "Getting Location"
    Omni::Location.where(:location_nbr => outlet_nbr).first
  end



end