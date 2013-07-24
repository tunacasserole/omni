class Omni::Meta::Field < Omni::Meta::Base
  
  def self.run(model)
  	
    form = Buildit::FormMeta.all(:model_meta_id => model.model_meta_id).first
    
    field_hash = {}
    form.fieldset_meta.each {|fs| fs.field_meta.each {|f| field_hash[f.label] = f.attribute_meta_id}}

    attr_hash = {}
    Buildit::AttributeMeta.all(:model_meta_id => model.model_meta_id).each {|x| attr_hash[x.attribute_name] = x.attribute_meta_id}

    fs_hash = {}
    form.fieldset_meta.each {|fs| fs_hash[fs.fieldset_name] = fs.fieldset_meta_id}
    
    old_fs = ''
    #@@attributes.each {|row| puts 'field: ' + row['label']}
    @@attributes.select {|row| row["form_order"] && row['fieldset']}.each do |row|
      next if @@skip_these_attributes.include? row['attribute_name']
      label = row['label'] #|| row['attribute_name']
      a_id = attr_hash[row['attribute_name']]
      next if field_hash[row['label']] == a_id
	    next if fm = Buildit::FieldMeta.all(:fieldset_meta_id => fs_hash[row['fieldset']], :label => label, :attribute_meta_id => a_id).first
      next if row['attribute_name'].end_with? 'able_type' or row['attribute_name'].end_with? 'able_id'
      next if row['attribute_name'] == 'display' and row['non_standard_defaults'] and row['non_standard_defaults'].start_with? 'lambda'
      editable = 1
      if row['attribute_name'].end_with? 'State' or row['attribute_name'].end_with? 'Status' 
        label = model.model_name + ' State' 
        editable = 0
      end
      fm = Buildit::FieldMeta.create(:fieldset_meta_id => fs_hash[row['fieldset']], :label => label, :attribute_meta_id => a_id, :is_editable => editable, :is_required => 0, :position => row["form_order"].to_i)
	    puts '-- saving field: ' + row['label'].green + ' fieldset: ' + row['fieldset'] if @@verbose
      old_fs = row['fieldset']
    end

  end

end


