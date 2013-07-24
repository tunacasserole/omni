class Omni::District < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :districts
  self.primary_key  = :district_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :region_id,                       :presence    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :district_id,                      :override  =>  false,        :with  => :guid              
  default      :district_nbr,                     :override  =>  false,        :with  => :sequence,         :named=>"DISTRICT_NBR"
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
  has_many     :locations,                       :class_name => 'Omni::Location',                :foreign_key => 'district_id'
  belongs_to   :region,                          :class_name => 'Omni::Region',                  :foreign_key => 'region_id'
  belongs_to   :user,                            :class_name => 'Buildit::User',                     :foreign_key => 'user_id'
  has_many     :notes,                           :class_name => 'Buildit::Note',                     :foreign_key => 'notable_id',       :as => :notable
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :region_display,                         :to => 'region.display'
    map :user_display,                           :to => 'user.full_name'
  end
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  # COMPUTED ATTRIBUTES (End)

  # TEMPORARY ATTRIBUTES (Start) ========================================================
  # TEMPORARY ATTRIBUTES (End)


  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc
  # ORDERING (End)


  # HOOKS (Start) =======================================================================
  # HOOKS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :display
    string   :district_nbr
    string   :region_display do region.display if region end
    string   :user_display do user.full_name if user end
 
    text     :display_fulltext, :using => :display
    text     :district_nbr_fulltext, :using => :district_nbr
    text     :region_display_fulltext, :using => :region_display
    text     :user_display_fulltext, :using => :user_display
  end 
  # INDEXING (End)



  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::District

