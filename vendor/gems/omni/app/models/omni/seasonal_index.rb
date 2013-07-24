class Omni::SeasonalIndex < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :seasonal_indexes
  self.primary_key  = :seasonal_index_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :seasonal_index_name,             :presence    => true
  validates    :seasonal_index_name,             :uniqueness  => true,                         :allow_nil => false 
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :seasonal_index_id,                :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m|"#{m.seasonal_index_name}"}
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
  has_many     :style_locations,                 :class_name => 'Omni::StyleLocation',           :foreign_key => 'seasonal_index_id'
  has_many     :sku_locations,                   :class_name => 'Omni::SkuLocation',             :foreign_key => 'seasonal_index_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
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
    string   :seasonal_index_name
    boolean  :is_destroyed
 
    text     :seasonal_index_name_fulltext, :using => :seasonal_index_name
  end 
  # INDEXING (End)


end # class Omni::SeasonalIndex

