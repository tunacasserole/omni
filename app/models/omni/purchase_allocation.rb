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
  default :purchase_allocation_id,                          :with => :guid
  default :purchase_allocation_nbr,                :override  =>  false,        :with => :sequence,  :named=>"PURCHASE_ALLOCATION_NBR"
  # DEFAULTS (End)


  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :purchase_detail,            :class_name => 'Omni::PurchaseDetail',            :foreign_key => 'purchase_detail_id'
  belongs_to   :allocation,                      :class_name => 'Omni::Allocation',          :foreign_key => 'allocation_id'
  belongs_to   :location,           :class_name => 'Omni::Location',               :foreign_key => 'location_id'
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
  before_destroy :validate_state
  def validate_state
    # false
    self.state == 'draft' ?  true : false
  end
  # HOOKS (End)


  # STATES (Start) ====================================================================
  StateMachine::Machine.ignore_method_conflicts = true

  state_machine :state, :initial => :draft do

  ### STATES ###
    # state :draft do
    # end

    state :locked do
      validate :permitted_to_lock
    end

  ### CALLBACKS ###
    # after_transition :on => :costing, :do => :process_costing

  ### EVENTS ###
    event :lock do
      transition :draft => :locked
    end
    event :unlock do
      transition :locked => :draft
    end

  end
  # STATES (End)


  # STATE HELPERS (Start) =====================================================================
  def permitted_to_lock
    errors.add('state','only allocations in draft state may be locked.') unless self.state == 'draft'
    self.state == 'draft' ? true : false
  end

  def process_something
    # the Cancel event writes StockLedgerActivity rows for each PurchaseDetail
    # to update On Order and order history
  end
  # STATE HELPERS (End)


  # HELPERS (Start) =====================================================================

  # HELPERS (End)

end # class Omni::PurchaseAllocation