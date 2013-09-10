class Omni::Import::ExcelCsv::Style < Omni::Import::Base

  def self.import(import)
    puts "importing #{import.table_name} at #{Time.now.to_s}"
    data_folder = File.join(Rails.root,'db')    
    exceptions = ''
    @data = excel_to_hash data_folder, import.file_name, import.table_name
    @data.each_with_index do |row,i|
      puts "processed #{i.to_s} rows" if i.to_s.end_with? '000'
      x = Omni::Style.where(:display => row["display"]).first || Omni::Style.new(:display => row["display"])
      x.description = row["description"]
      x.subclass_id = Omni::Subclass.where(:display => row['subclass_id']).first
      x.brand = row['(l)brand'].upcase if row['brand']
      x.fabric_content



      parent_style=Omni::Style.where(:display=>row['style_id']).first
      if parent_style
        x.style_id = parent_style.style_id 
      else
        puts "--STYLE is not valid sku: #{row["display"]}"
      end
      parent_color=Omni::Color.where(:display=>row["color_id"]).first || Omni::Color.create(:display => row["color_id"])
      if parent_color
        x.color_id = parent_color.color_id
      else

        puts "--COLOR is not valid"
      end
      parent_size=Omni::Size.where(:display=>row["size_id"]).first || Omni::Size.create(:display => row["size_id"])
      if parent_size
        x.size_id = parent_size.color_id
      else
        puts "--SIZE is not valid"
      end
      x.design_code=row["design_code"]
      x.source=row["source"]
      x.source_id=row["source_id"]
      x.initial_retail_price=row["initial_retail_price"]
      if x.valid?
        # puts "#{model_name}, #{x.display} - VALID"
        x.save
      else
        puts "#{model_name}, #{x.display}, ERRORS ==> #{x.errors.full_messages.join("\n")}, #{x.inspect}"
      end
    end # end of data.each
    
    log_it model_name.constantize.count.to_s + " rows\n"
    if @data.count > model_name.constantize.count
      log_it " . . . some rows did not load . . . "
    else
      log_it " . . . things appear to have worked correctly . . . "  
    end
  
    log_it "DONE importing from file at #{Time.now.to_s}"
  end
  
end