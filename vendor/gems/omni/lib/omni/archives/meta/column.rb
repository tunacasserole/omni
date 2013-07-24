class Omni::Meta::Column < Omni::Meta::Base
    
  def self.run(model)
    e_id = Buildit::ExplorerMeta.all(:model_meta_id => model.model_meta_id).first.explorer_meta_id
    #puts "e_id " + e_id
    @@attributes.each do |row|
      next if @@skip_these_attributes.include? row['attribute_name']
      next unless row["explorer_order"] and !Buildit::ColumnMeta.all(:explorer_meta_id => e_id, :label => row['label']).first
      next if row['attribute_name'] == 'display' and row['non_standard_defaults'] and row['non_standard_defaults'].start_with? 'lambda'
      puts "column " + row['label'] if @@verbose
      if row['attribute_name'].end_with? '_id' and !row['attribute_name'].end_with? 'able_id'
        a = Buildit::AttributeMeta.all(:model_meta_id => model.model_meta_id, :attribute_name => row['attribute_name'].gsub('id','display')).first
      else         
        a = Buildit::AttributeMeta.all(:model_meta_id => model.model_meta_id, :attribute_name => row['attribute_name']).first
      end
      #a.search_type == a.field_type
      #a.search_type == 'TEXT' if a.field_type == 'STRING'
      #a.save
      #puts "a_id " + a_id
      #puts "label " + row['label'] 
      #puts "position " + row["explorer_order"]
      c = Buildit::ColumnMeta.create(:explorer_meta_id => e_id, :package_name => 'omni', :attribute_meta_id => a.attribute_meta_id, :label => row['label'], :is_editable => 1, :position => row["explorer_order"])
      puts '-- saving column: ' + c.label.green if @@verbose
    end
  end

end  
