class Omni::AllocationDetail < ActiveRecord::Base

  # METADATA (Start) ====================================================================
  self.table_name                 = :allocation_details
  self.primary_key                = :allocation_detail_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates :allocation_detail_id,                        :presence      => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :allocation_detail_id,             :with => :guid
  default :display, :override  =>  false,   :to   => lambda{|m| "from: #{m.allocation.location_display} - #{m.allocation.sku_display} - #{m.allocation.allocation_nbr}"}
  # default :description, :override  =>  false,   :to   => lambda{|m| "#{m.allocation_detail_nbr} - #{m.allocation.allocation_nbr} - #{m.purchase_line_nbr}"}
  # default :sku_id,                           :to   => lambda{|m| m.allocation.sku_id}
  default :allocation_detail_nbr,            :override  =>  false,        :with  => :sequence,         :named => "ALLOCATION_DETAIL_NBR"
  default :units_needed,                     :override  =>  false,        :to    => 0
  default :units_allocated,                  :override  =>  false,        :to    => 0
  default :units_shipped,                    :override  =>  false,        :to    => 0
  # DEFAULTS (End)

  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :allocation,                      :class_name => 'Omni::Allocation',             :foreign_key => 'allocation_id'
  belongs_to   :location,                        :class_name => 'Omni::Location',               :foreign_key => 'location_id'
  belongs_to   :transfer,                        :class_name => 'Omni::Transfer',               :foreign_key => 'transfer_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :location_display,                     :to => 'location.display'
    map :transfer_display,                     :to => 'transfer.display'
    map :allocation_display,                   :to => 'allocation.display'
  end
  # MAPPED ATTRIBUTES (End)
  # ORDERING (Start) ====================================================================
  # order_search_by :location_display =>:asc
  # ORDERING (End)

  # INDEXING (Start) ====================================================================
  searchable do
  # Exact match attributes
    string   :allocation_id
    string   :allocation_detail_id
    string   :location_id
    string   :allocation_detail_nbr
    string   :state
    string   :display
  # Partial match (contains) attributes
    text     :display_fulltext, :using => :display
    text     :state_fulltext, :using => :state
    text     :location_display_fulltext, :using => :location_display
  end
  # INDEXING (End)

  # STATES (Start) ====================================================================
  StateMachine::Machine.ignore_method_conflicts = true
  state_machine :state, :initial => :draft do

  ### STATES ###
    state :draft do; end

    state :locked do; end

    state :transfer_request do; end

    state :shipped do
    end

  ### CALLBACKS ###
    # after_transition :on => :lock, :do => :do_lock
    # after_transition :on => :unlock, :do => :do_unlock
    after_transition :on => :transfer, :do => :do_transfer
    after_transition :on => :ship, :do => :do_ship

    event :lock do
      transition :draft => :locked
    end

    event :unlock do
      transition :locked => :draft
    end

    event :transfer do
      transition :draft => :transfer_request
      transition :locked => :transfer_request
    end

    event :ship do
      transition :transfer_request => :shipped
    end

  end
  # STATES (End)

  # STATE HANDLERS (Start) ====================================================================
  def do_approve
  end

  def do_transfer
    tr_id = Omni::TransferReason.where(display: 'Allocation').first ? Omni::TransferReason.where(display: 'Allocation').first.transfer_reason_id : nil
    user_id = Buildit::User.current ? Buildit::User.current.user_id : nil
    t = Omni::Transfer.create(requesting_location_id: self.location_id, fulfillment_location_id: self.allocation.location_id, sku_id: self.allocation.sku_id, transfer_reason_id: tr_id, request_units: self.units_allocated, request_date: Date.today, request_user_id: user_id)
    self.transfer_id = t.transfer_id
    save
  end

  def do_ship
  end
  # HELPERS (Start) =====================================================================

  # HELPERS (End)

end # class Omni::AllocationProfile
