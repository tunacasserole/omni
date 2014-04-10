class Omni::MarkWip < ActiveRecord::Base

# METADATA (Start) ====================================================================
 #self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :mark_wip
  self.primary_key                = :id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  #supports_audit
  #supports_revisioning
  # supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates :stock_nbr,                        :presence      => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :stock_nbr,                          with: :guid
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
  # searchable do
  #   string   :stock_nbr
  #   string   :size
  #   # string   :bts_id
  #   # string   :sku_id
  #   # string   :state

  #   # text     :department_display_fulltext, using: :department_display
  #   # text     :display_fulltext, using: :display
  #   # text     :version_fulltext, using: :version
  #   # text     :state_fulltext, using: :state
  # end
  # HOOKS (Start) =======================================================================

  # HOOKS (End)


  # STATES (Start) ====================================================================

  # STATES (End)


  # HELPERS (Start) =====================================================================

  # HELPERS (End)

end # class Omni::MarkWip
