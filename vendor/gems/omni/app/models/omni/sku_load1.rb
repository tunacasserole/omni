class Omni::SkuLoad1 < ActiveRecord::Base


  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  # self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :sku_load1
  self.primary_key                = :sku_load_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  #supports_audit
  #supports_revisioning
  #supports_fulltext
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates :sku_load_id,                        :presence      => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default :sku_load_id,                          :with => :guid
  # DEFAULTS (End)


  # ASSOCIATIONS (Start) ================================================================
  
  # ASSOCIATIONS (End)


  # MAPPED ATTRIBUTES (Start) ===========================================================
  
  # MAPPED ATTRIBUTES (End)

  
  # COMPUTED ATTRIBUTES (Start) =========================================================
  
  # COMPUTED ATTRIBUTES (End)


  # TEMPORARY ATTRIBUTES (Start) ========================================================
  
  # TEMPORARY ATTRIBUTES (End)


  # FILTERS (Start) =====================================================================
  
  # FILTERS (End)


  # ORDERING (Start) ====================================================================
  
  # ORDERING (End)


  # SCOPES (Start) ======================================================================
  
  # SCOPES (End)


  # INDEXING (Start) ====================================================================
  
  # INDEXING (End)


  # HOOKS (Start) =======================================================================

  # HOOKS (End)


  # STATES (Start) ====================================================================
  
  # STATES (End)
  

  # HELPERS (Start) =====================================================================

  # HELPERS (End)

end # class Omni::SkuLoad1