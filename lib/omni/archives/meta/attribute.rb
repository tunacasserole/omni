class Omni::Meta::Attribute < Omni::Meta::Base

  def self.lambda_valid(row)
    flag = false
    brace_count = row.count('{') - row.count('}')
    pipe_count =  row.count('|') % 2
    parantheses_count = row.count('(') - row.count(')')
    bracket_count = row.count('[') - row.count(']')
    single_quote_count = row.count('\'')  % 2
    double_quote_count = row.count('\"')  % 2

    count = brace_count + pipe_count + parantheses_count + bracket_count + single_quote_count + double_quote_count

    if count == 0
      flag = true
    end

  return flag
  end

    
  def self.run(model)
    @@template_attributes = Omni::Meta::Base.excel_to_hash @@meta_folder, @@meta_file, 'template_attributes'
    @@attributes.each do |row|
      puts "-- attribute is " + row["attribute_name"] if @@verbose
      next if !row['label'] and !row["template_name"]
      next if model.attribute_meta.index {|x| x.attribute_name == row['attribute_name']}
      next if @@skip_these_attributes.include? row['attribute_name']
      # if row['attribute_name'].end_with? '_id'
      #   parent = Omni::Meta::Base.get_parent row['attribute_name'] 
      #   next if !parent
      # end
      a = Buildit::AttributeMeta.all(:model_meta_id => model.model_meta_id, :attribute_name => row['attribute_name']).first || Buildit::AttributeMeta.new(:model_meta_id => model.model_meta_id, :attribute_name => row['attribute_name'])
      ta = []
      puts "no template attribute specified for " + row['attribute_name'] if !row["template_name"]
      @@template_attributes.each {|x| ta = x if x["template_name"] and x["template_name"].upcase == row["template_name"].upcase}
      a.description = row['description']
      if !ta['template_name'] or ['sequencenumber', 'integerkey', 'shortid'].include? ta['template_name'].downcase
        a.field_type = 'STRING' 
      else
        a.field_type = ta['field_type']
      end
      a.min_field_size = ta['min_field_size'] || '50'
      a.max_field_size = ta['max_field_size'] || '50'
      a.field_precision = ta['field_precision'] if ta['field_precision']
      a.field_scale = ta['field_scale'] if ta['field_scale']
      is_pk = model.primary_attribute == a.attribute_name       
      a.label = row['label'] || row['attribute_name']
      #puts a.label
      
      if !row["mapping_type"] or row["mapping_type"].upcase == 'DIRECT'
        a.mapping_type = 'DIRECT'
        a.mapped_field = row['attribute_name']
        mapper(row, a, is_pk)
        defaulter(row,a,is_pk)
      else
        a.mapping_type = 'MAPPED'
        a.mapped_field = row['mapped_field']
      end
      a.mapped_field = a.mapped_field.downcase
      # if row["explorer_order"] && (a.attribute_name != 'display') && !a.attribute_name.end_with?('_id')
      #   a.search_type = a.field_type
      #   a.search_type = 'FLOAT' if a.field_type == 'DECIMAL'
      #   #puts 'set search type = ' + a.search_type + ' for attribute ' + a.attribute_name
      # end
      a.search_type = set_search_type(row,a)
      a.allows_null = true if row['display_only']
      a.save
      puts "-- created #{a.mapping_type.downcase} attribute: #{a.attribute_name.green}" if @@verbose
    end
  end 

  def self.mapper(row, a, pk)
    if (a.attribute_name.end_with? '_id' and !pk) and !a.attribute_name.end_with? 'able_id' and !@@skip_these_attributes.include? a.attribute_name
      ma_name = a.attribute_name.gsub('id','display')
      mapped_attr = Buildit::AttributeMeta.all(:model_meta_id => a.model_meta_id, :attribute_name => ma_name, :mapping_type => 'MAPPED').first || Buildit::AttributeMeta.new(:model_meta_id => a.model_meta_id, :attribute_name => ma_name, :mapping_type => 'MAPPED')
      mapped_attr.label = a.attribute_name.chop.chop.chop.titleize
      mapped_attr.mapped_field = a.attribute_name.singularize.chop.chop.chop + '.display'
      mapped_attr.mapped_field = a.attribute_name.singularize.chop.chop.chop + '.full_name' if a.attribute_name =~ /user/
      mapped_attr.field_type = 'STRING'
      mapped_attr.allows_null = 1
      mapped_attr.search_type = 'STRING'
      puts '-- created mapped attribute: ' + mapped_attr.attribute_name.cyan if @@verbose
      mapped_attr.save
    end

  end      
      
  def self.set_search_type(row, a)
    if row['attribute_name'].end_with? 'able_id' or row['attribute_name'].end_with? 'able_type' or row['attribute_name'] == 'state' or row['attribute_name'].end_with? == '_nbr'
      a.search_type = 'STRING'
    end
  end

  def self.defaulter(row, a, pk)
    #puts "-- trying to default for: " + a.attribute_name
    a.allows_null = 1  
    if a.attribute_name.end_with? 'nbr' and row["template_"] != 'Integer9' # Default fields that end with _nbr using a sequence
      ##logger.debug '-- defaulting '.cyan + a.attribute_name.green + ' with a sequence'    
      a.default_type = 'with'
      a.default_with_value = 'sequence'
      a.default_options = ":named => '" + a.attribute_name.upcase + "'"    
      Buildit::Sequence.create(:sequence_code => a.attribute_name.upcase, :padding => 3, :value => 1000) unless Buildit::Sequence.where(:sequence_code => a.attribute_name.upcase).first
    elsif pk   # Default primary key with guid
      ##logger.debug '-- defaulting '.cyan + a.attribute_name.green + ' with a guid'        
      a.default_type = 'with'
      a.default_with_value = 'guid'
      a.allows_null = 0
    elsif a.field_type == 'BOOLEAN'   # Default booleans to false    
      ##logger.debug '-- defaulting '.cyan + a.attribute_name.green + ' to false'        
      a.default_type = 'to'
      if row['validates_with'] == 'TRUE'
        a.default_to_value = 'true'
      else
        a.default_to_value = 'false'
      end
    elsif !a.attribute_name.end_with? 'nbr' and (a.field_type == 'DECIMAL' or a.field_type == 'INTEGER')    #default numbers to 0    
      ##logger.debug '-- defaulting '.cyan + a.attribute_name.green + ' to 0'        
      a.default_type = 'to'
      a.default_to_value = 0
    #elsif ta_hash[row[3].to_sym].default_value
      #a.default_type = 'to'
      #a.default_to_value = ta_hash[row[3].to_sym].default_value    
    elsif row['non_standard_defaults'] and row['non_standard_defaults'].start_with? 'lambda' 
      puts '-- defaulting '.cyan + a.attribute_name.green + ' with a custom defaulter' if @@verbose
      if lambda_valid(row['non_standard_defaults'])
        a.default_type = 'to'
        a.default_to_value = row['non_standard_defaults']
      end

    elsif row['lookups'] == 'TRUE' and row['non_standard_defaults'] and row['non_standard_defaults'] != 'none' #validates against lookups table, take the first lookup value
      # puts ''== defaulting '.cyan + a.attribute_name.green# + ' to ' + a.default_to_value            '
      # v_value = a.attribute_name.upcase
      # v_value = 'GRADE' if a.attribute_name.start_with? 'grade' 
      # v_value = 'CLOCK_TIME' if a.attribute_name.end_with? 'time' 
      # v_value = 'STATE_CODE' if a.attribute_name.end_with? 'state_code'  
      # lookup = Buildit::Lookup.where(:category => v_value).order('default_text').first
      #a.default_type = 'to' 
      #a.default_to_value = lookup.code if lookup
      #a.allows_null = 1
    end          
    a.allows_null = 0 if row["allows_null"]
  end

end
