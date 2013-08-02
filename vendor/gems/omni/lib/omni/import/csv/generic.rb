class Omni::Import::Csv::Generic < Omni::Import::Base

  def self.import(import)
    # i = 1
    parent_hash = {'company_id' => 'Company', 'category_id' => 'Category', 'department_id' => 'Department', 'region_id' => 'Region','product_id' => 'Product','subclass_id' => 'Subclass', 'buyer_user_id' => 'User', 'product_type_id' => 'ProductType','supplier_id' => 'Supplier','add_on_sku_id'=>'Sku','site_id' => 'Site','generic_style_id'=>'Style','size_group_id'=>'SizeGroup'}    
    log_it "importing: #{import.table_name} at #{Time.now.to_s}"
    data_folder = File.join(Rails.root, 'vendor','gems','omni','db','import')    
    exceptions = ''
    @data = excel_to_hash data_folder, import.file_name, import.table_name  
    model_name = "Omni::" + import.model_name
    log_it "finished reading excel into memory at #{Time.now.to_s}"
    @data.each do |row|
      # i += 1
      # next if i > 100
      puts "Importing #{row["display"]}"
      x = model_name.constantize.where(:display => row["display"]).first || model_name.constantize.new(:display => row["display"])
      row.keys.reject {|k| !row[k] or row[k] == ' ' or row[k] == 'main!A1'}.each do |a_name_original|
        next if !a_name_original
        #puts "**** #{row[a_name_original]}"
        a_name = a_name_original.to_s.sub('*','').sub('(l)','')
        next if a_name.end_with? 'user_id'        
        a_value = row[a_name_original].to_s.sub('.0','')
        a_value.chop! if a_value.end_with? '.'
        exceptions << "#{a_name_original}, #{a_value}"
        if a_name.end_with? '_id'
            parent = parent_hash[a_name_original]
          if !parent 
            log_it "Could not locate parent model for #{a_name}\n"
            next
          end
            if parent == 'User'
              exceptions << "Cannot handle users yet."
              next
            else
              full_parent = 'Omni::' + parent
            end
          parent_row = full_parent.constantize.where(:display => a_value).first
          if !parent_row
            exceptions << "Could not locate parent row for #{a_name}\n"
            next
          else
            pa = parent_hash.key(parent)
            p_id = parent_row.send(pa)
            x.send(a_name + '=', p_id)
          end
        else
          if a_name_original.start_with? '(l)' or a_name_original.start_with? '*(l)' or Buildit::Lookup.where(:category => a_name.upcase).first
            x.send(a_name + '=', a_value.upcase) 
          else
            x.send(a_name + '=', a_value) 
          end
        end
      end # end of row.keys
      if x.valid?
        puts "#{model_name}, #{x.display} - VALID"
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