class Omni::Import::Load::Style < Omni::Import::Base

  def self.import
    # puts "importing #{import.table_name} at #{Time.now.to_s}"
    exceptions = ''
    @data=Omni::StyleLoad.all
    @data.each_with_index do |row,i|
      puts "processed #{i.to_s} rows" if i.to_s.end_with? '000'
      x = Omni::Style.where(:display => row.display).first || Omni::Style.new(:display => row.display)
      # x.style_name = row.style_name
      x.description = row.description
      x.subclass_id = Omni::Subclass.where(:display => row.subclass_id).first.subclass_id if Omni::Subclass.where(:display => row.subclass_id).first
      x.product_id = Omni::Product.where(:display => row.product_id).first.product_id if Omni::Product.where(:display => row.product_id).first
      x.brand = row.brand.upcase if row.brand
      x.product_type_id = Omni::ProductType.where(:display => row.product_type_id.capitalize).first.product_type_id if Omni::ProductType.where(:display => row.product_type_id.capitalize).first
      x.fabric_content = row.fabric_content.upcase if row.fabric_content
      x.is_convertible = row.is_convertible
      x.is_converted = row.is_converted

      generic_style=Omni::Style.where(:display=>row.generic_style_id).first
      if generic_style
        x.generic_style_id = generic_style.style_id 
      else
        puts "--GENERIC STYLE is not valid."
      end

      site=Omni::Site.where(:display=>row.site_id).first
      if site
        x.site_id = site.site_id
      else
        puts "--Site is not valid"
      end

      supplier=Omni::Supplier.where(:supplier_name=>row.supplier_id).first
      if supplier
        x.supplier_id = supplier.supplier_id
      else
        puts "--SUPPLIER is not valid"
      end
      
      size_group=Omni::SizeGroup.where(:display=>row.size_group_id).first
      if size_group
        x.size_group_id = size_group.size_group_id
      else
        puts "--SIZE GROUP is not valid"
      end
      
      x.conversion_type=row.conversion_type
      x.initial_retail_price=row.initial_retail_price

      if x.valid?
        x.save
      else
        puts "Omni::Style, #{x.display}, ERRORS ==> #{x.errors.full_messages.join("\n")}, #{x.inspect}"
      end
    end # end of data.each
    
    puts Omni::Style.count.to_s + " rows\n"
    if @data.count > Omni::Style.count
      puts " . . . some rows did not load . . . "
    else
      puts " . . . things appear to have worked correctly . . . "  
    end
  
    puts "DONE importing from file at #{Time.now.to_s}"
  end
  
end