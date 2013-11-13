class Omni::AllocationDetail < ActiveRecord::Base


  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  # self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :allocation_details
  self.primary_key                = :allocation_detail_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  #supports_audit
  #supports_revisioning
  supports_fulltext
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates :allocation_detail_id,                        :presence      => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default :allocation_detail_id,             :with => :guid
  default :sku_id,                           :to   => lambda{|m| m.allocation.sku_id}
  default :allocation_detail_nbr,            :override  =>  false,        :with  => :sequence,         :named=>"ALLOCATION_DETAIL_NBR"
  default :units_needed,                     :override  =>  false,        :to    => 0
  default :units_allocated,                  :override  =>  false,        :to    => 0
  default :units_shipped,                    :override  =>  false,        :to    => 0
  # DEFAULTS (End)


  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :allocation,                      :class_name => 'Omni::Allocation',             :foreign_key => 'allocation_id'
  belongs_to   :location,                        :class_name => 'Omni::Location',               :foreign_key => 'location_id'
  belongs_to   :sku,                             :class_name => 'Omni::Sku',                    :foreign_key => 'sku_id'
  # ASSOCIATIONS (End)


    # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :location_display,                     :to => 'location.display'
    map :sku_display,                          :to => 'sku.display'
    map :allocation_display,                   :to => 'allocation.display'
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
  state_machine :state, :initial => :draft do

  ### STATES ###
    state :draft do; end

    state :locked do; end

    state :transfer_request do; end

    state :shipped do
    end

  ### CALLBACKS ###
    # after_transition :on => :lock, :do => :process_lock
    # after_transition :on => :unlock, :do => :process_unlock
    after_transition :on => :transfer, :do => :process_transfer
    after_transition :on => :ship, :do => :process_ship

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
  def process_approve
  end

  def process_transfer
  end

  def process_ship
  end


  # HELPERS (Start) =====================================================================

  # HELPERS (End)

end # class Omni::AllocationProfile
