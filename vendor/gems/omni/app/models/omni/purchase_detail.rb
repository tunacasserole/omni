class Omni::PurchaseDetail < ActiveRecord::Base


  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  #self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :purchase_details
  self.primary_key                = :purchase_detail_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  #supports_audit
  #supports_revisioning
  #supports_fulltext
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates :display,                         :uniqueness  => true
  validates :purchase_id,                     :uniqueness  => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default :purchase_detail_id,                                 :with => :guid
  default :display,               :override  =>  false,        :to   => lambda{|m| "#{m.purchase_display} - #{m.purchase_line_nbr}"}
  default :purchase_line_nbr,     :override  =>  false,        :with => :sequence,  :named=>"PURCHASE_LINE_NBR"
  default :units_ordered,                                      :to   => 0
  default :description,                                        :to   => lambda{|m| "#{m.sku_description}"}

  # DEFAULTS (End)


  # ASSOCIATIONS (Start) ================================================================
  has_many     :purchase_allocations, :class_name => 'Omni::PurchaseAllocation',  :foreign_key => 'purchase_detail_id'
  has_many     :purchase_costs,       :class_name => 'Omni::PurchaseCost',        :foreign_key => 'purchase_detail_id'
  has_many     :receipt_details,      :class_name => 'Omni::ReceiptDetail',       :foreign_key => 'purchase_detail_id'
  belongs_to   :purchase,             :class_name => 'Omni::Purchase',            :foreign_key => 'purchase_id'  
  belongs_to   :sku,                  :class_name => 'Omni::Sku',                 :foreign_key => 'sku_id'
  # ASSOCIATIONS (End)


  # MAPPED ATTRIBUTES (Start) ===========================================================
  map :sku_description,               :to => 'sku.sku_description'


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
  state_machine :state, :initial => :draft do

  ### CALLBACKS ###
    after_transition :on => :allocate, :do => :process_allocate

  ### EVENTS ###
    event :allocate do
      transition :draft => :allocating
      transition :open => :allocating      
    end
  end
  # STATES (End)  
  
  # STATE HELPERS (Start) =====================================================================
  def process_costing
    reset
    # Read each CostDetail for the Cost in the PurchaseDetail row and add a PurchaseCost row
    self.purchase_details.each do |pd|
      Omni::PurchaseCost.create(:purchase_detail_id => pd.purchase_detail_id)
    end
    self.state = 'draft'
    self.save
  end

  def process_release
    send_notice
  end

  def process_approve
    # the Approve event writes StockLedgerAudit rows to update On Order and order history; an approved PO is a legally binding contract with the Supplier
    # Add a PurchaseAllocation row for every authorized Location for the PurchaseDetail SKU (unless one already exists in locked state)
    # Calulate the total PurchaseAllocation units from the PurchaseAllocation rows that are in locked state and subtract from PurchaseDetail units to equal "remaining units".
    # Calculate the allocation of the "remaining units" to every PurchaseAllocation that is in draft state.
  end
  # STATE HELPERS (End)

  # HELPERS (Start) =====================================================================
  def reset
    self.purchase_allocations.all(:state => 'planning').each {|x| x.destroy}
  end

  def cascading_delete
    self.purchase_costs.all.each {|x| x.destroy}
    self.purchase_allocations.all.each {|x| x.destroy}    
    self.purchase_details.all.each {|x| x.destroy}    
  end

  # Sends an email notification to the user when the purchase has finished running
  def send_notice
    message = Buildit::Comm::Email::Message.create(
        subject: "Omni notice: purchase - #{self.display} has been released.",
        body: Buildit::Email::Manager.generate(self, "purchase_notice"),
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
  # HELPERS (End)
end # class Omni::PurchaseDetail