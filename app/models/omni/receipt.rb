class Omni::Receipt < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :receipts
  self.primary_key  = :receipt_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # supports_logical_delete
  # supports_audit
  # supports_revisioning
  supports_fulltext
  supports_crud_privileges
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :uniqueness  => true
  validates    :freight_terms,                   :lookup      => 'FREIGHT_TERMS',              :allow_nil => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :receipt_id,                       :override  =>  false,        :with  => :guid
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.location_display} - Receipt: #{m.create_date}"}
  default      :receipt_nbr,                      :override  =>  false,        :with  => :sequence,         :named=>"RECEIPT_NBR"
  
  default      :create_date,                                                   :with  => :now
  default      :carrier_supplier_id,                                            :to    => lambda{|m| }

  default      :appointment_duration,             :override  =>  false,        :to    => 0
  default      :is_expected_asn,                  :override  =>  false,        :to    => false
  default      :is_destroyed,                     :override  =>  false,        :to    => false
  # DEFAULTS (End)


  # REFERENCE (Start) ===================================================================
  reference do
    display_attribute  :display
    query_attribute    :display
    item_template      '{display}'
  end
  # REFERENCE (End)


  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :location,                        :class_name => 'Omni::Location',                :foreign_key => 'location_id'
  belongs_to   :carrier_supplier,                :class_name => 'Omni::Supplier',                :foreign_key => 'carrier_supplier_id'
  belongs_to   :accepted_by_user,                :class_name => 'Buildit::User',                 :foreign_key => 'accepted_by_user_id'
  belongs_to   :completed_by_user,               :class_name => 'Buildit::User',                 :foreign_key => 'completed_by_user_id'
  belongs_to   :allocation_profile,              :class_name => 'Omni::AllocationProfile',       :foreign_key => 'allocation_profile_id'

  has_many     :receipt_details,                 :class_name => 'Omni::ReceiptDetail',           :foreign_key => 'receipt_id'
  has_many     :receipt_purchases,               :class_name => 'Omni::ReceptPurchase',          :foreign_key => 'receipt_id'
  has_many     :purchases,                       :class_name => 'Omni::Purchase',                :through => :receipt_purchases

  # ASSOCIATIONS (End)


  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :location_display,                       :to => 'location.display'
    map :carrier_supplier_display,               :to => 'carrier_supplier.display'
    map :accepted_by_user_display,               :to => 'accepted_by_user.full_name'
    map :completed_by_user_display,              :to => 'completed_by_user.full_name'
    map :allocation_profile_display,             :to => 'allocation_profile.display'
  end
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  # COMPUTED ATTRIBUTES (End)

  # TEMPORARY ATTRIBUTES (Start) ========================================================
  # TEMPORARY ATTRIBUTES (End)


  # SCOPES (Start) ======================================================================

  # SCOPES (End)


  # HOOKS (Start) =======================================================================
  # HOOKS (End)

  # STATES (Start) ====================================================================
  state_machine :state, :initial => :draft do

  ### STATES ###
    state :draft do; end

    state :scheduled do; end

    state :processing do; end

    state :accepted do; end

    state :complete do
    # Validate that all receipt_details are in complete state

    end

  ### CALLBACKS ###
    after_transition :on => :start, :do => :process_start
    after_transition :on => :accept, :do => :process_accept
    after_transition :on => :complete, :do => :process_complete


  ### EVENTS ###
    event :start do
      transition [:draft, :scheduled] => :processing
    end

    event :accept do
      transition [:draft, :scheduled, :processing] => :accepted
    end

    event :complete do
      transition :accepted => :complete
    end

  end

  # STATES (End)

  # STATE HELPERS (Start) =====================================================================
    def process_start
      self.receipt_date = Date.today
      self.save
    end

    def process_accept
    # Do complete process on each Receipt Detail

    # Update Receipt
      self.accepted_date = Date.today
      self.accepted_by_user_id = Buildit::User.current.user_id
    end

    def process_complete
      self.complete_date = Date.today
      self.completed_by_user_id = Buildit::User.current.user_id
    end

  # STATE HELPERS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :receipt_nbr
    string   :location_display do location.display if location end
    string   :carrier_supplier_display do carrier_supplier.display if carrier_supplier end
    string   :display
    string   :state

    text     :receipt_nbr_fulltext, :using => :receipt_nbr
    text     :location_display_fulltext, :using => :location_display
    text     :carrier_supplier_display_fulltext, :using => :carrier_supplier_display
    text     :state_fulltext, :using => :state
  end
  # INDEXING (End)



end # class Omni::Receipt

