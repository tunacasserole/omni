class Omni::Cost < ActiveRecord::Base

# METADATA (Start) ====================================================================
  #self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :costs
  self.primary_key                = :cost_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  #supports_audit
  #supports_revisioning
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates :cost_id,                        uniqueness: true
  validates :display,                        uniqueness: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :cost_id,                          with: :guid
  # DEFAULTS (End)


  # ASSOCIATIONS (Start) ================================================================
  has_many :cost_details,                    class_name: 'Omni::CostDetail',    foreign_key: 'cost_id'
  has_many :sku_suppliers,                   class_name: 'Omni::SkuSupplier',   foreign_key: 'cost_id'
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
  order_search_by :display => :asc
  # ORDERING (End)


  # SCOPES (Start) ======================================================================

  # SCOPES (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :cost_id
    string   :display
    string   :short_name
    string   :description

    text     :display_fulltext,            using: :display
    text     :short_name_fulltext,         using: :short_name
    text     :description_fulltext,        using: :description
  end
  # HOOKS (Start) =======================================================================

  # HOOKS (End)


  # STATES (Start) ====================================================================

  # STATES (End)


  # HELPERS (Start) =====================================================================

  # HELPERS (End)

end # class Omni::Cost
