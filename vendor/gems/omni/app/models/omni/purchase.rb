class Omni::Purchase < ActiveRecord::Base


  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  #self.establish_connection       Buildit::Util::Data::Connection.for 'BUILDIT'
  self.table_name                 = :purchases
  self.primary_key                = :purchase_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  #supports_logical_delete
  #supports_audit
  #supports_revisioning
  #supports_fulltext
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates :purchase_id,                        :presence      => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default :purchase_id,                          :with => :guid
  # DEFAULTS (End)


  # ASSOCIATIONS (Start) ================================================================
  has_many     :purchase_details,              :class_name => 'Omni::PurchaseDetail',    :foreign_key => 'purchase_id'  
  has_many     :purchase_costs,                 :class_name => 'Omni::PurchaseCost',       :foreign_key => 'purchase_cost_id'  
  has_many     :logs,                            :class_name => 'Omni::Log',                 :foreign_key => 'logable_id' , :as => :logable
  belongs_to   :location,                        :class_name => 'Omni::Location',            :foreign_key => 'location_id'  
  belongs_to   :supplier,                      :class_name => 'Omni::Supplier',          :foreign_key => 'supplier_id'  
  belongs_to   :ordered_by_user,                  :class_name => 'Buildit::User',      :foreign_key => 'ordered_by_user_id'  
  belongs_to   :confirmed_by_user,                  :class_name => 'Buildit::User',      :foreign_key => 'confirmed_by_user_id'  
  belongs_to   :master_purchase,                  :class_name => 'Omni:Purchase',      :foreign_key => 'master_purchase_id'    
  belongs_to   :carrier_supplier,           :class_name => 'Omni::Supplier',               :foreign_key => 'carrier_supplier_id'              
  # ASSOCIATIONS (End)


  # MAPPED ATTRIBUTES (Start) ===========================================================
    mapped_attributes do
    map :ordered_by_user_display,                :to => 'ordered_by_user.display'
    map :confirmed_by_user_display,              :to => 'confirmed_by_user.display'     
    map :ordered_by_user_display,                :to => 'ordered_by_user.display'    
    map :supplier_display,                       :to => 'supplier.display'
    map :master_purchase_display,                :to => 'master_purchase.display'
    map :carrier_supplier_display,               :to => 'supplier.display'    
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
    string   :purchase_id
    string   :display
    string   :state
    text     :display_fulltext, :using => :display
  end 
  # INDEXING (End)


  # HOOKS (Start) =======================================================================
  before_destroy :cascading_delete
  # HOOKS (End)


  # STATES (Start) ====================================================================
  state_machine :state, :initial => :planning do

  ### CALLBACKS ###
    after_transition :on => :costing, :do => :process_costing
    after_transition :on => :release, :do => :process_approve

  ### EVENTS ###
    event :costing do
      transition any => :costing
      transition :costing => :planning
    end
    event :release do
      transition any => :draft
    end
    event :approve do
      transition any => :open
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
    self.state = 'planning'
    self.save
  end

  def process_release
    send_notice
  end

  def process_approve
    # the Approve event writes StockLedgerAudit rows to update On Order and order history; an approved PO is a legally binding contract with the Supplier
    # Omni::StockLedgerAudit.create(:)
  end
  # STATE HELPERS (End)

  # HELPERS (Start) =====================================================================
  def reset
    Omni::PurchaseCost.all.each {|pc| pc.destroy}
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

end # class Omni::Purchase