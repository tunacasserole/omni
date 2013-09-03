class Omni::Meta::Model < Omni::Meta::Base
  
  def self.load(model_name)
    #puts 'model'
    #@@models = Omni::Meta::Base.excel_to_hash @@meta_folder, @@meta_file, 'application_models' if !@@models
    @@models.each do |row|
      #puts row["model_name"]
      next unless row["model_name"] == model_name
      next if Buildit::ModelMeta.all(:model_name => model_name).first
      m = Buildit::ModelMeta.new(:model_name => model_name)
      #puts "creating model"
      #puts "project_id" + @@project_id
      m.project_id = @@project_id
      #puts "model group is " + row["model_group"]
      m.model_group_meta_id = Buildit::ModelGroupMeta.all(:name => row["model_group"]).first.model_group_meta_id
      m.description = row['description']
      m.package_name = 'omni'
      m.namespace = 'Omni'
      m.table_name = row['table_name']
      m.primary_attribute = row['primary_attribute']
      m.display_attribute = 'display'
      m.inquiry_attribute = 'display'
      m.display_template = '{display}'      
      m.is_m_to_n = false
      if !m.valid?
        puts "unable to create model"
        abort
      else
        #puts 'creating model: ' + row["model_name"]
        m.save
      end
    end
  end

end