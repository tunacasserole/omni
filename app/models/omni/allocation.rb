class Omni::Allocation < ActiveRecord::Base


  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  # self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :allocations
  self.primary_key                = :allocation_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  #supports_audit
  #supports_revisioning
  supports_fulltext
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates :allocation_id,                        :presence      => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default :allocation_id,                          :with => :guid
  default :allocation_nbr,                         :override  =>  false,        :with  => :sequence,         :named=>"ALLOCATION_NBR"
  default :is_destroyed,                           :override  =>  false,        :to    => false
  default :units_to_allocate,                     :override  =>  false,        :to    => 0
  # DEFAULTS (End)


  # ASSOCIATIONS (Start) ================================================================
  has_many     :allocation_details,         :class_name => 'Omni::AllocationDetail',    :foreign_key => 'allocation_id'
  belongs_to   :sku,                               :class_name => 'Omni::Sku',                      :foreign_key => 'sku_id'
  belongs_to   :location,                        :class_name => 'Omni::Location',               :foreign_key => 'location_id'
  # ASSOCIATIONS (End)


    # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :sku_display,                            :to => 'sku.display'
    map :location_display,                     :to => 'location.display'
    map :allocation_profile_display,       :to => 'allocation_profile.display'
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
    string   :allocatable_id
    string   :allocatable_type
    string   :allocation_nbr
    string   :display
    string   :state
    string   :location_id
    string   :sku_id
  # Partial match (contains) attributes
    text     :display_fulltext, :using => :display
    text     :state_fulltext, :using => :state
    text     :location_display_fulltext, :using => :location_display
    text     :sku_display_fulltext, :using => :sku_display
  end
  # INDEXING (End)

  # STATES (Start) ====================================================================
  state_machine :state, :initial => :draft do

  ### STATES ###
    state :draft do; end

    state :approved do; end

    state :transfer_request do; end

    state :shipped do
    end

  ### CALLBACKS ###
    after_transition :on => :approve, :do => :process_approve
    after_transition :on => :transfer, :do => :process_transfer
    after_transition :on => :ship, :do => :process_ship

    event :approve do
      transition :draft => :approved
    end

    event :transfer do
      transition :approved => :transfer_request
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