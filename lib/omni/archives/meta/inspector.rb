class Omni::Meta::Inspector < Omni::Meta::Base

  def self.run(model)
    @@inspectors = Omni::Meta::Base.excel_to_hash @@meta_folder, @@meta_file, 'inspectors'
    puts 'inspector for ' + model.model_name if @@debug
    i = Buildit::InspectorMeta.all(:model_meta_id => model.model_meta_id).first
    puts 'i.inspector_meta_id = ' + i.inspector_meta_id if i and @@debug
    if !i
      #@@inspectors.reject! {|row| row['model_name'] != model.model_name}      
      @@inspectors.each do |row|
        puts 'title ' + row['title_value'] if @@debug
        next unless row['model_name'] == model.model_name
        if !Buildit::InspectorMeta.all(:model_meta_id => model.model_meta_id, :title_value => row['title_value']).first
          puts 'creating inspector for ' + model.model_name if @@verbose
          Buildit::InspectorMeta.create(:model_meta_id => model.model_meta_id, :project_id => @@project_id, :inspector_name => row['inspector_name'] || 'Inspector', :title_type => row['title_type'].upcase, :title_value => row['title_value'], :subtitle_type => row['subtitle_type'].upcase, :subtitle_value => row['subtitle_value'], :description => row['description'])
          puts '-- created inspector for ' + model.model_name if @@verbose
        end
      end
    end

    i = Buildit::InspectorMeta.all(:model_meta_id => model.model_meta_id).first
    if !i
      Buildit::InspectorMeta.create(:model_meta_id => model.model_meta_id, :project_id => @@project_id, :inspector_name => 'Inspector', :title_type => 'LABEL', :title_value => model.model_name, :subtitle_type => 'FIELD', :subtitle_value => 'display', :description => model.model_name)
    end
  end
end