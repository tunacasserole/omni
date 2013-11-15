class Omni::PurchaseAllocation < ActiveRecord::Base


  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  #self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :purchase_allocations
  self.primary_key                = :purchase_allocation_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  #supports_audit
  #supports_revisioning
  supports_fulltext
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates :purchase_allocation_id,                        :presence      => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default :purchase_allocation_id,                                              :with => :guid
  default :purchase_allocation_nbr,                :override  =>  false,        :with => :sequence,  :named=>"PURCHASE_ALLOCATION_NBR"
  # DEFAULTS (End)


  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :purchase_detail,            :class_name => 'Omni::PurchaseDetail',            :foreign_key => 'purchase_detail_id'
  belongs_to   :allocation,                 :class_name => 'Omni::Allocation',          :foreign_key => 'allocation_id'
  belongs_to   :location,                   :class_name => 'Omni::Location',               :foreign_key => 'location_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :location_display,                       :to => 'location.display'
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
  searchable do
    string   :purchase_detail_id
    string   :display
    string   :state
    string   :location_display
    string   :location_id

    text     :display_fulltext,            :using => :display
    text     :state_fulltext,              :using => :state
    text     :location_display_fulltext,        :using => :location_display
  end

  # INDEXING (End)


  # HOOKS (Start) =======================================================================
  hook :before_destroy, :cascading_delete,  10

  def cascading_delete
    # Delete all associated child rows in ReceiptDetail, ReceiptPurchase and ReceiptAllocation.
    if ['draft', 'hold', 'locked'].include? self.state
      self.receipt_allocations.each {|x| x.destroy}
      self.destroy
    else
      errors.add('state','only records in draft or hold state may be deleted.')
      raise ActiveRecord::Rollback
    end
  end
  # HOOKS (End)


  # STATES (Start) ====================================================================
  StateMachine::Machine.ignore_method_conflicts = true

  # STATES (Start) ====================================================================
  state_machine :state, :initial => :draft do

  ## STATES ###
    state :draft do
    end

  ## CALLBACKS ###
    event :lock do
      transition :draft => :locked
    end

    event :unlock do
      transition :locked => :draft
   end

  end
  # STATES (End)

  # STATE HELPERS (Start) =====================================================================
  # STATE HELPERS (End)


  # HELPERS (Start) =====================================================================

  # HELPERS (End)

end # class Omni::PurchaseAllocation
