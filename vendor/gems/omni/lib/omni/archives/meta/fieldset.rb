class Omni::Meta::Fieldset < Omni::Meta::Base
  
  def self.run(model)

    old_fs = ''
    fs_names = []
    @@attributes.each do |x|
      fs_names << x['fieldset'] if x['fieldset'] && x['fieldset'] != old_fs
      old_fs = x['fieldset']
    end
    
    form = Buildit::FormMeta.all(:model_meta_id => model.model_meta_id).first
    
    position = 1
    fs_names.each do |fs_name|
      fs = Buildit::FieldsetMeta.all(:form_meta_id => form.form_meta_id, :title => fs_name, :fieldset_name => fs_name.camelize).first
      if !fs
        fs = Buildit::FieldsetMeta.create(:form_meta_id => form.form_meta_id, :title => fs_name, :fieldset_name => fs_name.camelize, :collapsible => 1, :hidden => 0, :position => position)
        puts '-- saving fieldset: ' + fs.title.green if @@verbose        
      end
      position += 1
    end

  end

end