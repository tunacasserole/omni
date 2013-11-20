class Omni::ReceiptAllocation < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  # self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :receipt_allocations
  self.primary_key                = :receipt_allocation_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  # supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates :receipt_allocation_id,                        :presence      => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :receipt_allocation_id,                          :with => :guid
  # DEFAULTS (End)

  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :receipt_detail,           :class_name => 'Omni::ReceiptDetail',      :foreign_key => 'receipt_detail_id'
  belongs_to   :location,                 :class_name => 'Omni::Location',          :foreign_key => 'location_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :receipt_detail_display,          :to => 'receipt_detail.display'
    map :location_display,                :to => 'location.display'
  end
  # MAPPED ATTRIBUTES (End)

  # HOOKS (Start) =======================================================================
  hook :before_destroy, :cascading_delete,  10

  def cascading_delete
    # Delete all associated child rows in ReceiptDetail, ReceiptPurchase and ReceiptAllocation.
    unless ['draft'].include? self.state
      errors.add('state','only records in draft state may be deleted.')
      raise ActiveRecord::Rollback
    end
  end
  # HOOKS (End)  # STATES (Start) ====================================================================
  state_machine :state, :initial => :draft do

  ## STATES ###
    state :draft do
    end

  ## CALLBACKS ###

  ## EVENTS ###
    event :lock do
      transition :draft => :locked
    end

    event :unlock do
      transition :locked => :draft
   end

  end
  # STATES (End)

  # STATE HELPERS (Start) ====================================================================
  def do_complete
    # do :receive_purchase_detail (see PurchaseDetail actions); pass selling_units_received
    purchase_detail.receive
    write_stock_ledger_activity
  end
  # STATES (End)

  # HELPERS (Start) =====================================================================
  # HELPERS (End)
  # INDEXING (Start) ====================================================================
  searchable do
    string   :receipt_detail_id
    string   :display
    string   :state
    string   :location_id

    text     :display_fulltext,            :using => :display
  end
  # INDEXING (End)
end # class Omni::ReceiptAllocation
