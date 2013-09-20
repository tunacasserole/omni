class Omni::TillDetail < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :till_details
  self.primary_key  = :till_detail_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  supports_fulltext    
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :till_detail_id,                   :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.till_display} - #{m.tender_display}"}
  default      :tender_count,                     :override  =>  false,        :to    => 0                  
  default      :tender_amount,                    :override  =>  false,        :to    => 0                  
  default      :is_destroyed,                     :override  =>  false,        :to    => false              
  # DEFAULTS (End)


  # REFERENCE (Start) ===================================================================
  reference do
    display_attribute  :display
    query_attribute    :display
    item_template      '{display}'
  end
  # REFERENCE (End)


  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :till,                            :class_name => 'Omni::Till',                    :foreign_key => 'till_id'
  belongs_to   :tender,                          :class_name => 'Omni::Tender',                  :foreign_key => 'tender_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :till_display,                           :to => 'till.display'
    map :tender_display,                         :to => 'tender.display'
  end
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  # COMPUTED ATTRIBUTES (End)

  # TEMPORARY ATTRIBUTES (Start) ========================================================
  # TEMPORARY ATTRIBUTES (End)


  # SCOPES (Start) ======================================================================

  # SCOPES (End)


  # HOOKS (Start) =======================================================================
  # HOOKS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :till_display do till.display if till end
    string   :tender_display do tender.display if tender end
 
    text     :till_display_fulltext, :using => :till_display
    text     :tender_display_fulltext, :using => :tender_display
  end 
  # INDEXING (End)


end # class Omni::TillDetail

