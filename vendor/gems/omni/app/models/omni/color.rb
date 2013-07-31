class Omni::Color < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :colors
  self.primary_key  = :color_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :concatenated_name,               :presence    => true
  # validates    :color_family,                    :presence    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :color_id,                         :override  =>  false,        :with  => :guid              
  default      :color_nbr,                        :override  =>  false,        :with  => :sequence,         :named=>"COLOR_NBR"
  default      :is_plaid,                         :override  =>  false,        :to    => false              
  default      :is_stripe,                        :override  =>  false,        :to    => false              
  default      :is_discontinued,                  :override  =>  false,        :to    => false              
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
  has_many     :notes,                           :class_name => 'Buildit::Note',                     :foreign_key => 'notable_id',       :as => :notable
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
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
    string   :color_nbr
    string   :short_name
    string   :concatenated_name
    boolean  :is_plaid
    boolean  :is_stripe
    string   :color_family
 
    text     :display_fulltext, :using => :display
    text     :color_nbr_fulltext, :using => :color_nbr
    text     :short_name_fulltext, :using => :short_name
    text     :concatenated_name_fulltext, :using => :concatenated_name
    text     :color_family_fulltext, :using => :color_family
  end 
  # INDEXING (End)




  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::Color

