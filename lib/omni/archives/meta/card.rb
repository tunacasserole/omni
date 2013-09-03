class Omni::Meta::Card < Omni::Meta::Base

  def self.run(model)
    @@cards = Omni::Meta::Base.excel_to_hash @@meta_folder, @@meta_file, 'cards'
    @@cards.reject! {|row| row['model_name'] != model.model_name}
    
    @i = Buildit::InspectorMeta.all(:model_meta_id => model.model_meta_id).first
    Omni::Meta::Inspector.run model if !@i

    # CREATE CARDS DEFINED IN MODEL_HEADERS
    @@cards.each do |row|
      next unless row['child_model']
      puts '-- processing child model: ' + row['child_model'] if @@debug
      next if ['Profile','Tag','Attachment'].include? row['title'] 
      xtype = 'omni-' + row['child_model'].tableize + '-Explorer'
      xtype = 'buildit-' + row['child_model'].tableize + '-Explorer' if ['Note','Attachment'].include? row['child_model']
      next if Buildit::InspectorCardMeta.all(:inspector_meta_id => @i.inspector_meta_id, :xtype => xtype).first      
      if @@poly_models.include? row['child_model']
        association_type = 'CUSTOM'
        custom_association = ''
      else
        association_type = 'SEARCH'
      end
      Buildit::InspectorCardMeta.create(:inspector_meta_id => @i.inspector_meta_id, :association_type => association_type, :custom_association => custom_association, :xtype => xtype, :title => row['title'], :position => row['position'])  
      puts '-- created card: ' + row['title'].yellow if @@verbose
    end

    @@cards.each do |row|
      # GENERATE ASSOCIATION FOR NOTES IF NEEDED
      #puts row['title']
      if ['Note'].include? row['child_model']
        note_model_meta_id = Buildit::ModelMeta.all(:model_name => 'Note').first.model_meta_id
        Buildit::AssociationMeta.create(:model_meta_id => model.model_meta_id, :to_model_meta_id => note_model_meta_id, :association_name => 'notes', :association_type => 'has_many', :foreign_key => 'notable_id') unless Buildit::AssociationMeta.all(:model_meta_id => model.model_meta_id, :association_name => 'notes', :association_type => 'has_many').first
      end
    end

    # GENERATE PROFILE CARD
    if !Buildit::InspectorCardMeta.all(:inspector_meta_id => @i.inspector_meta_id, :title => 'Profile').first
      Buildit::InspectorCardMeta.create(:inspector_meta_id => @i.inspector_meta_id, :xtype => "omni-#{model.model_name.tableize}-Form", :title => 'Profile', :position => 1, :association_type => 'SEARCH')  
      puts '-- generated card: ' + 'profile'.yellow if @@verbose
    end 

  end

  def self.generate_cards

    # GENERATE CARDS BASED ON ASSOCIATIONS
    db_cards = Buildit::InspectorCardMeta.all(:inspector_meta_id => @i.inspector_meta_id)
    m_associations = Buildit::AssociationMeta.all(:model_meta_id => model.model_meta_id)    
    m_associations.select {|x| x.association_type == 'has_many' unless x.foreign_key.end_with? 'able_id'}.each_with_index do |a, index|
      #next if db_cards.index {|x| x.title == a.association_name.titleize}
      xtype = "omni-#{a.association_name}-Explorer"
      next if Buildit::InspectorCardMeta.all(:inspector_meta_id => @i.inspector_meta_id, :xtype => xtype).first
      c = Buildit::InspectorCardMeta.create(:inspector_meta_id => @i.inspector_meta_id, :xtype => xtype, :title => a.association_name.titleize, :position => index+2)
      puts '-- generated card: ' + c.title.yellow if @@verbose
    end
  end  


end