class Omni::Import::Csv::Generic < Omni::Import::Base

  def self.import(import)
    log_it "Importing for table: #{import.table_name} at #{Time.now.to_s}"
    data_folder = File.join(Rails.root, 'vendor','gems','omni','db','import')    
    exceptions = ''
    @data = excel_to_hash data_folder, import.file_name, import.table_name  
    model_name = "Omni::" + import.model_name
    @data.each do |row|
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
            parent = Buildit::ModelMeta.all(:primary_attribute => a_name).first || Buildit::ModelMeta.all.reject {|x| !a_name.index(x.model_name.singularize.foreign_key)}.first
          if !parent 
            exceptions << "Could not locate parent model for #{a_name}\n"
            next
          end
          parent_row = parent.model_name.constantize.where(:display => a_value).first
          if !parent_row
            exceptions << "Could not locate parent row for #{a_name}\n"
            next
          else
            p_id = parent_row.send(parent.primary_attribute)
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
        puts "#{model_name}, #{x.display}, ERRORS ==> #{x.errors.full_messages.join("\n")}, #{x.inspect}"
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