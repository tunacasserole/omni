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
  validates :purchase_detail_id,              :uniqueness  => true
  validates :sku_supplier_id,                 :presence    => true
  validates :units_ordered,                   :numericality => {:greater_than => 0}

  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default :purchase_detail_id,                                 :with => :guid
  default :purchase_line_nbr,     :override  =>  false,        :with => :sequence,  :named=>"PURCHASE_LINE_NBR"
  default :display,               :override  =>  false,        :to   => lambda{|m| "#{m.purchase_display} - #{m.purchase_line_nbr}"}
  default :units_ordered,                                      :to   => 0

  # DEFAULTS (End)


  # ASSOCIATIONS (Start) ================================================================
  has_many     :purchase_allocations, :class_name => 'Omni::PurchaseAllocation',  :foreign_key => 'purchase_detail_id'
  has_many     :purchase_costs,       :class_name => 'Omni::PurchaseCost',        :foreign_key => 'purchase_detail_id'
  has_many     :receipt_details,      :class_name => 'Omni::ReceiptDetail',       :foreign_key => 'purchase_detail_id'
  belongs_to   :purchase,             :class_name => 'Omni::Purchase',            :foreign_key => 'purchase_id'  
  belongs_to   :sku_supplier,         :class_name => 'Omni::SkuSupplier',         :foreign_key => 'sku_supplier_id'
  belongs_to   :sku,                  :class_name => 'Omni::Sku',                 :foreign_key => 'sku_id'

  # ASSOCIATIONS (End)


  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :sku_display,                   :to => 'sku.display'
    map :sku_supplier_display,          :to => 'sku_supplier.display'
    map :purchase_display,              :to => 'purchase.display'

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
    string   :sku_display
    integer  :purchase_line_nbr
    integer  :units_ordered
    string   :purchase_id
    string   :sku_id
    string   :sku_supplier_id
    string   :sku_supplier_display

    text     :display_fulltext,            :using => :display
    text     :state_fulltext,              :using => :state
    text     :sku_display_fulltext,        :using => :sku_display
    text     :sku_supplier_fulltext,       :using => :sku_supplier_display
    text     :purchase_display_fulltext,   :using => :purchase_display

  end 

  # INDEXING (End)


  # HOOKS (Start) =======================================================================
    hook :before_create, :set_defaults, 10
  
  # HOOKS (End)


  # STATES (Start) ====================================================================
  state_machine :state, :initial => :draft do

  ### CALLBACKS ###
    after_transition :on => :allocate, :do => :process_allocate

  ### EVENTS ###
    event :allocate do
      transition :draft => :allocating
      transition :open =>  :allocating      
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

    # user = current_user
    # if user.privileges.include? "Approve Orders"
    # the Approve event writes StockLedgerAudit rows to update On Order and order history; an approved PO is a legally binding contract with the Supplier
    # Add a PurchaseAllocation row for every authorized Location for the PurchaseDetail SKU (unless one already exists in locked state)
    # Calulate the total PurchaseAllocation units from the PurchaseAllocation rows that are in locked state and subtract from PurchaseDetail units to equal "remaining units".
    # Calculate the allocation of the "remaining units" to every PurchaseAllocation that is in draft state.
  end
  # STATE HELPERS (End)

  # HELPERS (Start) =====================================================================
  def set_defaults
    # default PurchaseDetail fields from Sku and SkuSupplier
    if self.new_record?
      if self.sku_supplier
        self.sku_id = self.sku_supplier.sku_id 
        self.supplier_item_identifier = self.sku_supplier.supplier_item_identifier
        self.description = self.sku_supplier.description
        self.color_name = self.sku.color_name
        # self.size_name = self.sku.size_name
        self.order_pack_type = self.sku_supplier.pack_type
        case self.order_pack_type
          when "M"
            self.order_pack_size = self.sku_supplier.master_pack_units
          when "I"
            self.order_pack_size = self.sku_supplier.inner_pack_units 
          else
            self.order_pack_size = 1
        end
        self.order_cost_units = self.sku_supplier.supplier_cost_units
        self.order_multiple_type = self.sku_supplier.order_multiple_type
        case self.order_multiple_type
          when "M"
            self.order_multiple = self.sku_supplier.master_pack_units
          when "I"
            self.order_multiple = self.sku_supplier.inner_pack_units
          else
            self.order_multiple = 1
        end
        self.supplier_cost = self.sku_supplier.supplier_cost
        self.inventory_cost = self.supplier_cost / self.order_cost_units        
      end
    end
  end

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
