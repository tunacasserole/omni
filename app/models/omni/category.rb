class Omni::Category < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :categories
  self.primary_key  = :category_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  supports_fulltext  
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :category_code,                   :presence    => true
  validates    :category_code,                   :uniqueness  => true,                         :allow_nil => false 
  validates    :category_type,                   :lookup      => 'CATEGORY_TYPE',              :allow_nil => true  
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :category_id,                      :override  =>  false,        :with  => :guid              
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
  has_many     :products,                        :class_name => 'Omni::Product',                 :foreign_key => 'category_id'
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
    string   :category_code
    string   :category_type do |x| Buildit::Lookup::Manager.display_for('CATEGORY_TYPE', x.category_type) end
 
    text     :display_fulltext, :using => :display
    text     :category_code_fulltext, :using => :category_code
    text     :category_type_fulltext, :using => :category_type
  end 
  # INDEXING (End)



  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::Category

