class Omni::Meta::Destroy < Omni::Meta::Base
  
  def self.run(model)
    #puts 'destroying' if @@verbose
    m = Buildit::ModelMeta.all(:model_name => model.model_name).first
    if m
      puts '== destroying forms, fieldsets and fields' if @@verbose
      form = Buildit::FormMeta.all(:model_meta_id => m.model_meta_id).first
      if form
        puts '== destroying form ' if @@verbose
        form.fieldset_meta.each do |fs|
          fs.field_meta.each do |field|
            puts '== destroying field ' + field.label if @@verbose
            field.destroy
          end
          fs.destroy
        end
        form.destroy
      end
      e = Buildit::ExplorerMeta.all(:model_meta_id => m.model_meta_id).first
      if e
        puts '== destroying explorers and columns' if @@verbose
        e.column_meta.each {|c| c.destroy}
        e.destroy
      end
      inspector = Buildit::InspectorMeta.all(:model_meta_id => m.model_meta_id).first
      if inspector
        inspector.inspector_card_meta.each {|card| card.destroy}
        inspector.destroy
      end

      puts '== destroying attributes and validations' if @@verbose
      m.attribute_meta.each do |attr|
        Buildit::ValidationMeta.all(:attribute_meta_id => attr.attribute_meta_id).each {|v| v.destroy}
        attr.destroy
      end
      puts '== destroying associations' if @@verbose
      m.association_meta.each do |assoc|
        puts '== destroying association: ' + assoc.association_name if @@verbose
        assoc.destroy
      end
      puts '== done destroying model' if @@verbose
      #puts '== destroying behaviors ========'
      #Buildit::BehaviorMeta.all(:model_meta_id => m_id).each {|b| b.destroy puts 'destroy'}
      #m.destroy
    end
  end
   
end # module Omni::Meta