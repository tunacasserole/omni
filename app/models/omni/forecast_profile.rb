class Omni::ForecastProfile < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :forecast_profiles
  self.primary_key  = :forecast_profile_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  supports_fulltext    
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :display,           				:uniqueness  => true,                         :allow_nil => false
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :forecast_profile_id,              :override  =>  false,        :with  => :guid
 # default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.forecast_profile_name}"}
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
  has_many     :style_locations,                 :class_name => 'Omni::StyleLocation',           :foreign_key => 'forecast_profile_id'
  has_many     :sku_locations,                   :class_name => 'Omni::SkuLocation',             :foreign_key => 'forecast_profile_id'
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
    string   :display
    string   :forecast_formula

    text     :display_fulltext, :using => :display
  end
  # INDEXING (End)



  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::ForecastProfile

