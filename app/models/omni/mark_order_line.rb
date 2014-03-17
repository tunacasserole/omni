class Omni::MarkOrderLine < ActiveRecord::Base

# METADATA (Start) ====================================================================
  # self.establish_connection       Buildit::Util::Data::Connection.for 'mark'
  self.table_name                 = :orders_li
  self.primary_key                = :lineitemid
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  #supports_audit
  #supports_revisioning
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  # validates :id,                        :presence      => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  # default :id,                          with: :guid
  # DEFAULTS (End)


  # ASSOCIATIONS (Start) ================================================================
  # belongs_to   :mark_order,                    class_name: 'Omni::MarkOrder',             foreign_key: 'order_nbr'
  # ASSOCIATIONS (End)


  # mapped_attributes do
    # map :outlet_nbr,                       to: 'mark_order.outlet_nbr'
    # map :date_putin,                        to: 'mark_order.date_putin'
  # end


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
  #   integer   :stock_nbr
  #   string   :size

  #   text     :stock_nbr, using: :stock_nbr
  #   text     :size, using: :size
  # end
  # HOOKS (Start) =======================================================================

  # HOOKS (End)


  # STATES (Start) ====================================================================

  # STATES (End)


  # HELPERS (Start) =====================================================================

  # HELPERS (End)

end # class Omni::MarkOrderReport
