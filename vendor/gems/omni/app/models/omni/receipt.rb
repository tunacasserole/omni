class Omni::Receipt < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :receipts
  self.primary_key  = :receipt_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  supports_audit
  #supports_revisioning
  supports_fulltext

  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :uniqueness  => true
  validates    :freight_terms,                   :lookup      => 'FREIGHT_TERMS',              :allow_nil => true  
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :receipt_id,                       :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.location_display} - Receipt: #{m.create_date}"}
  default      :receipt_nbr,                      :override  =>  false,        :with  => :sequence, :named => "RECEIPT_NBR"
  default      :create_date,                                                   :with  => :now
  default      :appointment_duration,                                          :to    => 0                  
  default      :is_expected_asn,                                               :to    => false              
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
  has_many     :receipt_details,                 :class_name => 'Omni::ReceiptDetail',           :foreign_key => 'receipt_id'
  belongs_to   :location,                        :class_name => 'Omni::Location',                :foreign_key => 'location_id'
  belongs_to   :carrier_supplier,                :class_name => 'Omni::Supplier',                :foreign_key => 'carrier_supplier_id'
  belongs_to   :completed_by_user,               :class_name => 'Buildit::User',                     :foreign_key => 'completed_by_user_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :location_display,                       :to => 'location.display'
    map :carrier_supplier_display,               :to => 'carrier_supplier.display'
    map :completed_by_user_display,              :to => 'completed_by_user.full_name'
  end
  # MAPPED ATTRIBUTES (End)


  # COMPUTED ATTRIBUTES (Start) =========================================================
  computed_attributes do
    compute :total_receipt_units
    # compute :total_receipt_cost
  end
  # COMPUTED ATTRIBUTES (End)


  # TEMPORARY ATTRIBUTES (Start) ========================================================

  # TEMPORARY ATTRIBUTES (End)


  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc

  # ORDERING (End)


  # FILTERS (Start) =====================================================================
  
  # FILTERS (End)


  # SCOPES (Start) ======================================================================

  # SCOPES (End)


  # INDEXING (Start) ====================================================================
  searchable do
    # Exact match attributes 
    string   :receipt_id 
    string   :location_id
    string   :display  
    string   :receipt_nbr
    string   :location_display do location.display if location end
    string   :carrier_supplier_display do carrier_supplier.display if carrier_supplier end
    date     :ship_date
    string   :state

    # Partial match (contains) attributes 
    text     :receipt_nbr_fulltext, :using => :receipt_nbr
    text     :location_display_fulltext, :using => :location_display
    text     :carrier_supplier_display_fulltext, :using => :carrier_supplier_display
    text     :state_fulltext, :using => :state
  end 
  # INDEXING (End)


  # HOOKS (Start) =======================================================================

  def compute_total_receipt_units

    self.receipt_details.sum('received_units * receipt_pack_size') if self.receipt_details
    
  end

  # HOOKS (End)


  # STATES (Start) ====================================================================
  state_machine :state, :initial => :draft do

  ### STATES ###
    state :draft do

    end

    state :scheduled do

      validate  :transition_to_scheduled

    end

    state :processing do
      validate  :transition_to_processing
    end

    state :accepted do
      validate  :transition_to_accepted

    end

    state :cancelled do

    end


  ### CALLBACKS ###
    # after_transition :on => :costing, :do => :process_costing
    # after_transition :on => :release, :do => :process_release
    after_transition :on => :accept, :do => :process_accept
    # after_transition :on => :print,   :do => :process_print 

  ### EVENTS ###
    # event :costing do
    #   transition any => :costing
    #   transition :costing => :draft
    # end
    # event :release do
    #   transition :draft => :pending_approval
    # end
    event :accept do
      transition :processing => :accepted
    end


  def process_print
    # Create a pdf of the purchase order for printing 
    p = Omni::Print.new(:source_model => 'Purchase', :source_id => self.purchase_id)
    p.save
    p.print
  end

  end
  # STATES (End)  


  # STATE HELPERS (Start) =====================================================================
  # def process_costing
  #   reset
  #   # Read each CostDetail for the Cost in the PurchaseDetail row and add a PurchaseCost row
  #   self.purchase_details.each do |pd|
  #     Omni::PurchaseCost.create(:purchase_detail_id => pd.purchase_detail_id)
  #   end
  #   self.state = 'draft'
  #   self.save
  # end

  # def process_release
  #   # the Release event validates that the correct number of PO Approvers has been entered and sends a notification to the first approver


  #     message = Buildit::Comm::Email::Message.create(
  #         subject: "Omni notice: purchase - #{self.purchase_order_nbr} has been released.",
  #         body: Buildit::Email::Manager.generate(self, "purchase_notice"),
  #     )
  #     # email_addresses = Buildit::User.all.collect {|u| u.email_address}
  #     email_addresses = Buildit::User.where(:user_id => self.purchase_approver_1_user_id).first.email_address
  #     message.send_to email_addresses
  #     message.queue

  # end

  def process_accept
    # the Accept event writes StockLedgerAudit rows to update On Order, Oh Hand and receipt history
    # Omni::StockLedgerAudit.create(:)
    # self.purchasae_detail.each do |pd|
    #   sl = Omni::StockLedgerAudit.create(
    #     sl.stockable_type = 'Omni::Purchase'
    #     sl.stockable_id = self.purchase_id
    #     sl.ruleset_id = Omni::Ruleset.where(ruleset_code = 'ApprovePurchase').ruleset_id if ruleset_id
    #     sl.sku_id = pd.sku_id
    #     sl.location_id = self.location_id
    #     sl.supplier_id = self.supplier_id
    #     sl.units = pd.order_units * pd.order_pack_size
    #     sl.cost = pd.supplier_cost / pd.order_cost_units
    #     sl.retail = 0
    #     sl.create_date = Date.today
    #     sl.activity_date = Date.today
    #   )
    # end

  end
  # STATE HELPERS (End)

  # HELPERS (Start) =====================================================================
  # def reset
  #   Omni::PurchaseCost.all.each {|pc| pc.destroy}

  # end

  # def cascading_delete

  # end

  def transition_to_scheduled

  end
  
  def transition_to_processing

  end

  def transition_to_accepted

  end


  # Sends an email notification to the user when the receipt has been accepted
  def send_notice
    message = Buildit::Comm::Email::Message.create(
        subject: "Omni notice: receipt - #{self.display} has been accepted.",
        body: Buildit::Email::Manager.generate(self, "receipt_notice"),
    )
    # email_addresses = Buildit::User.all.collect {|u| u.email_address}
    email_addresses = approver_email
    message.send_to email_addresses
    message.queue
  end

  def approver_email
    # Search event table for user_id of approver
    return 'aaron@buildit.io'
  end

  def print
    Omni::Receipt::Helpers.print(self)
  end

  # HELPERS (End)


end # class Omni::Receipt

