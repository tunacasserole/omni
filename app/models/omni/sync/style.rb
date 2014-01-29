class Omni::Sync::Style < Omni::Sync::Base

  def self.go
    # @@load_hash = {}
    # Omni::StyleLoad.all.each { |sl| @@load_hash[sl.id] = sl.display}

    # update_subclasses
    # update_size_groups
    # update_missing_suppliers_from_skus_load
    # update_missing_suppliers_from_styles_load
    update_missing_locations_from_skus_load
  end

  def self.update_missing_suppliers_from_styles_load
    data = Omni::Style.where(supplier_id: nil)
    data.each_with_index do |x, i|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '00'
      # sku_id = @skus[source]
      load = Omni::StyleLoad.where(display: x.display).first
      puts "load not found ==> x.supplier_id is #{x.supplier_id} and style is #{x.display}" unless load
      next unless load
      supplier = Omni::Supplier.where(display: load.supplier_id).first || Omni::Supplier.where(description: load.supplier_id).first
      puts "supplier not found ==> and load.supplier is #{load.supplier} supplier name is #{load.supplier} and style is #{x.display}" unless supplier
      next unless supplier
      x.supplier_id = supplier.supplier_id
      x.save
    end
  end

  def self.update_missing_suppliers_from_skus_load
    data = Omni::Style.where(supplier_id: nil)
    data.each_with_index do |x, i|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '00'
      # sku_id = @skus[source]
      load = Omni::SkuLoad.where(style_display: x.display).first
      puts "load not found ==> x.supplier_id is #{x.supplier_id} and style is #{x.display}" unless load
      next unless load
      supplier = Omni::Supplier.where(display: load.supplier).first || Omni::Supplier.where(description: load.supplier).first
      puts "supplier not found ==> and load.supplier is #{load.supplier} supplier name is #{load.supplier} and style is #{x.display}" unless supplier
      next unless supplier
      x.supplier_id = supplier.supplier_id
      x.save
    end
  end

  def self.update_subclasses
    data = Omni::Style.all
    data.each_with_index do |x, i|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '00'
      load = Omni::StyleLoad.where(display: x.display).first
      next unless load
      subclass = Omni::Subclass.where(display: load.subclass_id).first
      next unless subclass
      x.subclass_id = subclass.subclass_id
      x.save
    end
  end

  def self.update_size_groups
    data = Omni::Style.all
    data.each_with_index do |x, i|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '00'
      load = Omni::StyleLoad.where(display: x.display).first
      next unless load
      size_group = Omni::SizeGroup.where(concatenated_name: load.size_group_id).first
      next unless size_group
      x.size_group_id = size_group.size_group_id
      x.save
    end
  end
end


