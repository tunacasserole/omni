class Omni::Meta::Form < Omni::Meta::Base
  
  def self.run(model)
    if !Buildit::FormMeta.all(:model_meta_id => model.model_meta_id).first
      @@form = Buildit::FormMeta.create(:model_meta_id => model.model_meta_id, :title_type => 'LABEL', :title_value => model.model_name.titleize, :new_title_type => 'LABEL', :new_title_value => model.model_name.titleize, :subtitle_type => 'LABEL', :subtitle_value => model.description, :form_name => 'Form')
      puts '-- Generating Form: ' + model.model_name.titleize if @@verbose
    end

  end # self.run
 
end # class Omni::Meta