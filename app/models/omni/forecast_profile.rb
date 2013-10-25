class Omni::ForecastProfile < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :forecast_profiles
  self.primary_key  = :forecast_profile_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  #supports_audit
  #supports_revisioning
   supports_fulltext
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,           			        	:uniqueness  => true,               :allow_nil => false
  validates    :forecast_formula,                 :lookup      => 'FORECAST_FORMULA', :allow_nil => false
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :forecast_profile_id,              :override  =>  false,        :with  => :guid
  default      :sales_py1_weight,                 :override  =>  true,         :to    => 0
  default      :sales_py2_weight,                 :override  =>  true,         :to    => 0
  default      :sales_py3_weight,                 :override  =>  true,         :to    => 0
  default      :contract_year_1_weight,           :override  =>  true,         :to    => 0
  default      :contract_year_2_weight,           :override  =>  true,         :to    => 0
  default      :contract_year_3_weight,           :override  =>  true,         :to    => 0
  default      :contract_year_4_weight,           :override  =>  true,         :to    => 0
  default      :contract_year_5_weight,           :override  =>  true,         :to    => 0
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
  has_many     :projection_details,     :class_name => 'Omni::ProjectionDetail',    :foreign_key => 'forecast_profile_id'  
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

    text     :display_fulltext, :using => :display
  end
  # INDEXING (End)



  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::ForecastProfile

