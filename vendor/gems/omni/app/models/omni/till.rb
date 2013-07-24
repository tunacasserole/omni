class Omni::Till < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :tills
  self.primary_key  = :till_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :location_id,                     :presence    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :till_id,                          :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.location_display} - Till: #{m.till_nbr}"}
  default      :till_nbr,                         :override  =>  false,        :with  => :sequence,         :named=>"TILL_NBR"
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
  has_many     :till_details,                    :class_name => 'Omni::TillDetail',              :foreign_key => 'till_id'
  has_many     :till_audits,                     :class_name => 'Omni::TillAudit',               :foreign_key => 'till_id'
  has_many     :till_activities,                 :class_name => 'Omni::TillActivity',            :foreign_key => 'till_id'
  belongs_to   :location,                        :class_name => 'Omni::Location',                :foreign_key => 'location_id'
  has_many     :notes,                           :class_name => 'Buildit::Note',                     :foreign_key => 'notable_id',       :as => :notable
  has_many     :terminals,                       :class_name => 'Omni::Terminal',                :foreign_key => 'till_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :location_display,                       :to => 'location.display'
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
    string   :location_display do location.display if location end
    string   :till_nbr
 
    text     :location_display_fulltext, :using => :location_display
    text     :till_nbr_fulltext, :using => :till_nbr
  end 
  # INDEXING (End)


end # class Omni::Till

