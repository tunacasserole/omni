class Omni::Meta::Polymorphic < Omni::Meta::Base
    
  def self.run(model)
    #poly_names = {:Address => 'addressable', :Bom => 'bomable', :Customer => 'consumer', :Email => 'emailable', :Phone => 'phoneable', :PickTicket => 'pickable', :StockLedgerActivity => 'stockable', :WorkOrder => 'workable'}
    @@polymorphics = Omni::Meta::Base.excel_to_hash @@meta_folder, @@meta_file, 'polymorphics'
    @@polymorphics.reject! {|row| row['model_name'] != model.model_name}
    @@polymorphics.each do |row|
      assoc_type =  ('belongs_to' if row['belongs_to']) || ('has_one' if row['has_one']) || ('has_many' if row['has_many'])
      #puts assoc_type
      next if !assoc_type
      assoc_name = row[assoc_type]
      poly_model_name = assoc_name.classify
      poly_model_name = 'Address' if assoc_name == 'address'
      p = Buildit::ModelMeta.all(:model_name => poly_model_name).first
      next if !p ##logger.debug '--- unknown model for ' + poly_model_name
      poly_name = row[':as =>']
      ### Create belongs_to association on the polymorphic model
      if assoc_type == 'belongs_to' and !Buildit::AssociationMeta.all(:model_meta_id => p.model_meta_id, :to_model_meta_id => p.model_meta_id, :association_name => row['belongs_to']).first
        Buildit::AssociationMeta.create(:model_meta_id => p.model_meta_id, :to_model_meta_id => p.model_meta_id, :association_name => row['belongs_to'], :association_type => 'belongs_to', :foreign_key => poly_name + '_id', :is_polymorphic => true) 
        #logger.debug '-- created association: ' + p.model_name.downcase + ' belongs_to ' + row['belongs_to'] + ' =='
        next
      end
      ### Create has_many / has_one association on the subscriber model (m)  
      if !Buildit::AssociationMeta.all(:model_meta_id => model.model_meta_id, :to_model_meta_id => p.model_meta_id, :association_name => assoc_name, :association_type => assoc_type, :association_options => ':as => :' + poly_name).first          
        Buildit::AssociationMeta.create(:model_meta_id => model.model_meta_id, :to_model_meta_id => p.model_meta_id, :association_name => assoc_name, :association_type => assoc_type, :association_options => ':as => :' + poly_name, :foreign_key => poly_name + '_id')          
        #logger.debug '-- created association: ' + model.model_name.downcase + ' ' + assoc_type + ' ' + p.model_name.downcase + ', Association Name => ' + assoc_name + ' =='
      end
      ### Create belongs_to association on the polymorphic model (p)
      if !Buildit::AssociationMeta.all(:model_meta_id => p.model_meta_id, :to_model_meta_id => model.model_meta_id, :association_name => poly_name, :association_type => 'belongs_to').first
        Buildit::AssociationMeta.create(:model_meta_id => p.model_meta_id, :to_model_meta_id => model.model_meta_id, :association_name => poly_name, :association_type => 'belongs_to', :is_polymorphic => true) 
        #logger.debug '-- created association: ' + p.model_name.downcase + ' belongs_to ' + model.model_name.downcase + ', Association Name => ' + poly_name + ' =='  
      end
    end
  
  end
end
