class Omni::CostDetail < ActiveRecord::Base

# METADATA (Start) ====================================================================
  #self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :cost_details
  self.primary_key                = :cost_detail_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  #supports_audit
  #supports_revisioning
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates :cost_detail_id,                           uniqueness: true
  validates :display,                                  uniqueness: true
  validates :cost_id,                                  presence: true
  validates :cost_detail_name,                         presence: true
  validates :cost_source,                              lookup: 'COST_SOURCE',      allow_nil: true
  validates :cost_type,                                lookup: 'COST_TYPE',        allow_nil: true
  validates :cost_calculation,                         lookup: 'COST_CALCULATION', allow_nil: true

  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :cost_detail_id,                          with: :guid
  default :display,            :override => false,  :to   => lambda{|m| "#{m.cost_display} - #{m.cost_detail_name}"}
  default :cost_amount,                             to: 0
  default :cost_percent,                            to: 0
  default :is_update_inventory_cost,                to: false
  default :is_update_invoice_cost,                  to: false

  # DEFAULTS (End)


  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :cost,           class_name: 'Omni::Cost',       foreign_key: 'cost_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :cost_display,                              to: 'cost.display'
  end

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
    string   :cost_detail_id
    string   :display
    string   :cost_display do cost.display if cost end
    string   :cost_source
    string   :cost_type
    integer  :cost_amount
    integer  :cost_percent
    string   :cost_calculation

    text     :display_fulltext,            using: :display
    text     :cost_display_fulltext,       using: :cost_display

  end

  # HOOKS (Start) =======================================================================

  # HOOKS (End)


  # STATES (Start) ====================================================================

  # STATES (End)


  # HELPERS (Start) =====================================================================

  # HELPERS (End)

end # class Omni::CostDetail
