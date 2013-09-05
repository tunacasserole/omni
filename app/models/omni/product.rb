class Omni::Product < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :products
  self.primary_key  = :product_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :category_id,                     :presence    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :product_id,                       :override  =>  false,        :with  => :guid              
  default      :product_nbr,                      :override  =>  false,        :with  => :sequence,         :named=>"PRODUCT_NBR"
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
  has_many     :styles,                          :class_name => 'Omni::Style',                   :foreign_key => 'product_id'
  has_many     :program_products,                :class_name => 'Omni::ProgramProduct',          :foreign_key => 'product_id'
  belongs_to   :category,                        :class_name => 'Omni::Category',                :foreign_key => 'category_id'
  has_many     :notes,                           :class_name => 'Buildit::Note',                     :foreign_key => 'notable_id',       :as => :notable
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :category_display,                       :to => 'category.display'
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
    string   :product_nbr
    string   :category_display do category.display if category end
 
    text     :display_fulltext, :using => :display
    text     :product_nbr_fulltext, :using => :product_nbr
    text     :category_display_fulltext, :using => :category_display
  end 
  # INDEXING (End)



  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::Product
