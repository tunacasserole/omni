class Omni::ProductType < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :product_types
  self.primary_key  = :product_type_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :product_type_id,                  :override  =>  false,        :with  => :guid
  default      :is_fabric,                        :override  =>  false,        :to    => false
  default      :is_trim,                          :override  =>  false,        :to    => false
  default      :is_converted,                     :override  =>  false,        :to    => false
  default      :is_labor,                         :override  =>  false,        :to    => false
  default      :is_shipping,                      :override  =>  false,        :to    => false
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
  has_many     :styles,                          :class_name => 'Omni::Style',                   :foreign_key => 'product_type_id'
  has_many     :skus,                            :class_name => 'Omni::Sku',                     :foreign_key => 'product_type_id'
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

    text     :display_fulltext, :using => :display
  end
  # INDEXING (End)



  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::ProductType

