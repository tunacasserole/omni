class  Omni::Meta::Validation <  Omni::Meta::Base
    
  def self.run(model)
    #puts 'Hash of attributes'
    @@attr_hash = {}
    Buildit::AttributeMeta.all(:model_meta_id => model.model_meta_id).each {|x| @@attr_hash[x.attribute_name] = x.attribute_meta_id}

    @@attributes.each do |row|
      next if @@skip_these_attributes.include? row['attribute_name']
      next if row['attribute_name'] == 'state'
      a_id = @@attr_hash[row['attribute_name']]
      puts 'attribute - ' + row['attribute_name'] if @@debug
      puts 'missing attribute please re-import attributes' if !a_id      
      if row['lookups'] == 'TRUE'
        if !Buildit::ValidationMeta.all(:attribute_meta_id => a_id, :validation_type => 'lookup').first
          puts '-- next validation: lookups - ' + row['attribute_name'] + ' attribute_meta_id = ' + a_id if @@verbose                              
          v_value = row['attribute_name'].upcase
          v_value = 'CLOCK_TIME' if row['attribute_name'].end_with? 'time'    
          v_value = 'STATE_CODE' if row['attribute_name'].end_with? 'state_code'              
          v = Buildit::ValidationMeta.create(:attribute_meta_id => a_id, :validation_type => 'lookup', :validation_value => v_value)
          puts '-- created validation: lookups - ' + row['attribute_name'] if @@verbose          
        end
      end
      if row['presence'] and row['presence'] == 'Unique'
        puts 'attribute_meta_id: ' + a_id if @@debug
        next if row['attribute_name'] == 'display'
        if !Buildit::ValidationMeta.all(:attribute_meta_id => a_id, :validation_type => 'uniqueness').first
          v = Buildit::ValidationMeta.create(:attribute_meta_id => a_id, :validation_type => 'uniqueness', :validation_value => 'true')
          puts '-- created validation: presence - ' + row['attribute_name'] if @@verbose          
        end
      end

    end
  end

end
