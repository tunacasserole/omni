class Omni::Meta::Association < Omni::Meta::Base

  def self.run(model)

    #puts model.attribute_meta.inspect if @@debug

    # Generate associations by convention
    model = Buildit::ModelMeta.all(:model_name => model.model_name).first
    model.attribute_meta.reject {|a| !a.attribute_name.end_with?('_id') or a.mapping_type == 'MAPPED' or a.attribute_name == model.primary_attribute or @@skip_these_attributes.include? a.attribute_name}.each_with_index do |a, i| 
      next if model.association_meta.index {|x| x.association_name == a.attribute_name.chop.chop.chop && x.association_type == 'belongs_to'}
      m2 = get_parent a
      next if !m2
      assoc_b = Buildit::AssociationMeta.create(:model_meta_id => model.model_meta_id, :to_model_meta_id => m2.model_meta_id, :association_name => a.attribute_name.chop.chop.chop, :association_type => 'belongs_to') 
      puts '-- created association: ' + model.table_name.singularize  + ' belongs_to ' + m2.model_name if @@verbose
      assoc_h = Buildit::AssociationMeta.create(:model_meta_id => m2.model_meta_id, :to_model_meta_id => model.model_meta_id, :association_name => model.table_name, :association_type => 'has_many', :foreign_key => m2.primary_attribute) unless (model.model_meta_id == m2.model_meta_id) || Buildit::AssociationMeta.all(:model_meta_id => m2.model_meta_id, :to_model_meta_id => model.model_meta_id, :association_name => model.model_name.tableize, :association_type => 'has_many').first or model.model_meta_id == m2.model_meta_id
      puts '-- created association: ' + m2.table_name.singularize + ' has_many ' + model.table_name if @@verbose
    end

    # import associations from spreadsheet meta
    # @@associations = Omni::Meta::Base.excel_to_hash @@meta_folder, @@meta_file, 'associations'    
    # @@associations.reject! {|row| row['model_name'] != model.model_name}    
    # @@associations.each do |row|
    #   if row['model_meta_id'] == model.model_name and Buildit::AssociationMeta.all(:model_meta_id => model.model_meta_id, :association_name => row['association_name']).first
    #     to_m_id = Buildit::ModelMeta.all(:model_name => row['to_model_meta_id']).first.model_meta_id 
    #     Buildit::AssociationMeta.create(:model_meta_id => model.model_meta_id, :to_model_meta_id => to_m_id, :association_name => row['association_name'], :association_type => row['association_type'], :association_options => row['association_options'])
    #     puts '-- created association.  model is: ' + model.model_meta_id + ' to model id is ' + to_m_id + 'type is ' + row['association_type'] if @@verbose
    #   end
    # end

  end

   def self.get_parent(a)
    poly_hash = {'addressable_id' => 'Address','consumer_id' => 'Customer','emailable_id' => 'EmailAddress','phoneable_id' => 'Phone','stockable_id' => 'StockLedgerActivity','noteable_id' => 'Note','pickable_id' => 'PickTicket'}
    if poly_hash.has_key? a.attribute_name
      parent = Buildit::ModelMeta.all(:model_name => poly_hash[a.attribute_name]).first 
    else
      parent = Buildit::ModelMeta.all(:primary_attribute => a.attribute_name).first || Buildit::ModelMeta.all.reject {|x| !a.attribute_name.index(x.model_name.singularize.foreign_key)}.first
    end
  end


end