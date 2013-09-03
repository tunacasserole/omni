class Omni::MarkOrderLine < ActiveRecord::Base


  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
 #self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :orders_li
  self.primary_key                = :lineitemid
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  #supports_audit
  #supports_revisioning
  #supports_fulltext
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates :lineitemid,                        :presence      => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default :lineitemid,                          :with => :guid
  # DEFAULTS (End)


  # ASSOCIATIONS (Start) ================================================================
  belongs_to :mark_order, :class_name => 'Omni::MarkOrder', :foreign_key=>'order_nbr'
  # ASSOCIATIONS (End)


  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :order_status,                            :to => 'mark_order.status'
  end
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

end # class Omni::MarkOrderLine