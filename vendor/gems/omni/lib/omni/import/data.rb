class Omni::Import::Data < Omni::Import::Base
    
  def self.load(model_name)
    count = 0
    model_name = 'Sku' if model_name == 'Skus2'
    Omni::Import::Base.load(model_name)
    #Import::Sequence.run_all
    print "-- " + model_name.ljust(20) + " " << Time.now.strftime("%H:%M:%S").yellow
    exceptions = ::ERB.new('').result(binding)
    @@core_data.each do |row|
      count += 1
      #next if (model_name == 'Sku' or model_name == 'Style') and count > 50
      #puts row["display"]
      next if @@core_data.count == ('Omni::' + model_name).constantize.count
      x = ('Omni::' + model_name).constantize.where(:display => row["display"]).first || ('Omni::' + model_name).constantize.new(:display => row["display"])
      row.keys.reject {|k| !row[k] or row[k] == ' ' or row[k] == 'main!A1'}.each do |a_name_original|
        next if !a_name_original
        #puts "**** #{row[a_name_original]}"
        a_name = a_name_original.to_s.sub('*','').sub('(l)','')
        next if a_name.end_with? 'user_id'        
        a_value = row[a_name_original].to_s.sub('.0','')
        a_value.chop! if a_value.end_with? '.'
        exceptions << "#{a_name_original}, #{a_value}"
        if a_name.end_with? '_id'
          if @@poly_hash.has_key? a_name
            puts "polymorphic attribute, parent of #{row[a_name_original]} is #{row[a_name_original.chop.chop.chop + '_type'].demodulize}"
          else
            parent = get_parent row[a_name_original]
          end
          if !parent 
            exceptions << "Could not locate parent model for #{a_name}\n"
            next
          end
          parent_row = ('Omni::' + parent.model_name).constantize.where(:display => a_value).first
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
        #puts "#{model_name}, #{x.display}, ERRORS ==> #{x.errors.full_messages.join("\n")}, #{x.inspect}"
        x.save
        #print '.'
      else
        #print '0'
        #print x.errors.full_messages.join("\n")
        @@exceptions << "#{model_name}, #{x.display}, ERRORS ==> #{x.errors.full_messages.join("\n")}, #{x.inspect}"
      end
    end
    
    print " " + ('Omni::' + model_name).constantize.count.to_s + " rows\n"
    if @@core_data.count > ('Omni::' + model_name).constantize.count
      puts " . . . some rows did not load . . . "
    end

    if model_name != 'User'
      count = ('Omni::' + model_name).constantize.count    
      if count < @@core_data.count
      else
        #logger.debug " actual: #{count.to_s.cyan} "
      end
    end
  end

  def self.get_parent(attribute_name)
    parent_model = attribute_name.chop.chop.chop + '_type'
    puts "the parent of #{attribute_name} is parent_model"
  end
end   

# Buildit::ModelMeta.all(:model_name => row[a_name_original.chop.chop.chop + '_type'].demodulize).first 