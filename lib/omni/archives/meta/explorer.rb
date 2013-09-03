class Omni::Meta::Explorer < Omni::Meta::Base
    
  def self.run(model)
    if !Buildit::ExplorerMeta.all(:model_meta_id => model.model_meta_id).first
      Buildit::ExplorerMeta.create(:model_meta_id => model.model_meta_id, :title_type => 'LABEL', :title_value => model.model_name.titleize, :subtitle_type => 'LABEL', :subtitle_value => model.description, :explorer_name => 'Explorer', :inspector_xtype => "omni-#{model.table_name}-Inspector", :new_form_xtype => "omni-#{model.table_name}-Form", :ui => 'DESKTOP')
      puts '-- Generated Explorer: ' + model.model_name.titleize.green if @@verbose
    end
  end
end