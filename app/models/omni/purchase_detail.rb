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
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates :display,                         :uniqueness  => true
  validates :purchase_detail_id,              :uniqueness  => true
  validates :sku_supplier_id,                 :presence    => true
  validates :units_ordered,                   :numericality => {:greater_than => 0}
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :purchase_detail_id,                :with => :guid
  default :purchase_line_nbr,                :override  =>  false,        :with => :sequence,  :named=>"PURCHASE_LINE_NBR"
  default :display,                                 :override  =>  false,        :to   => lambda{|m| "#{m.purchase_display} - #{m.purchase_line_nbr}"}
  default :units_ordered,                      :to   => 0
  default :selling_units_approved,                      :to   => 0
  default :selling_units_received,                      :to   => 0
  default :selling_units_cancelled,                      :to   => 0
  # DEFAULTS (End)

  # ASSOCIATIONS (Start) ================================================================
  has_many     :purchase_allocations, :class_name => 'Omni::PurchaseAllocation',  :foreign_key => 'purchase_detail_id'
  # has_many     :purchase_costs,       :class_name => 'Omni::PurchaseCost',        :foreign_key => 'purchase_detail_id'
  has_many     :receipt_details,      :class_name => 'Omni::ReceiptDetail',       :foreign_key => 'purchase_detail_id'
  belongs_to   :purchase,             :class_name => 'Omni::Purchase',            :foreign_key => 'purchase_id'
  belongs_to   :allocation_profile,             :class_name => 'Omni::AllocationProfile',            :foreign_key => 'allocation_profile_id'
  belongs_to   :sku_supplier,         :class_name => 'Omni::SkuSupplier',         :foreign_key => 'sku_supplier_id'
  belongs_to   :sku,                  :class_name => 'Omni::Sku',                 :foreign_key => 'sku_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :sku_display,                   :to => 'sku.display'
    map :sku_supplier_display,          :to => 'sku_supplier.display'
    map :purchase_display,              :to => 'purchase.display'
    map :allocation_profile_display,              :to => 'allocation_profile.display'
  end
  # MAPPED ATTRIBUTES (End)


  # COMPUTED ATTRIBUTES (Start) =========================================================

  # COMPUTED ATTRIBUTES (End)


  # TEMPORARY ATTRIBUTES (Start) ========================================================

  # TEMPORARY ATTRIBUTES (End)


  # FILTERS (Start) =====================================================================

  # FILTERS (End)


  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc
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

  ### STATES ###
    state :draft do
    end

    state :open do
    end

    state :partial do
    end

    state :complete do
    end

    state :cancelled do
    end

  ### CALLBACKS ###
    after_transition :on => :approve, :do => :process_approve
    after_transition :on => :cancel, :do => :process_cancel

  ### EVENTS ###
    event :approve do
      transition :draft => :open
    end

    event :cancel do
      transition [:open, :partial] => :cancelled
      # transition :open => :cancelled
      # transition :partial => :cancelled
    end
  end
  # STATES (End)

  # STATE HELPERS (Start) =====================================================================
  def process_cancel
    # Write SLA
    open_units = self.selling_units_approved - self.selling_units_received - self.selling_units_cancelled
    # Give error because no open units cancelled
    if open_units < 0
      errors.add('state', 'negative units to cancel')
    else
      sl = Omni::StockLedgerActivity.new
      sl.stockable_type = 'Omni::Purchase'
      sl.stockable_id = self.purchase_id
      ruleset = Omni::Ruleset.where(:ruleset_code => 'CancelPurchase').first
      ruleset_id = ruleset.ruleset_id if ruleset
      sl.sku_id = self.sku_id
      sl.location_id = self.purchase.location_id
      sl.supplier_id = self.purchase.supplier_id
      sl.units = open_units * -1
      sl.cost = (self.supplier_cost / self.order_cost_units) * open_units
      sl.retail = 0
      sl.create_date = Date.today
      sl.activity_date = Date.today
      sl.save
      # update selling units cancelled += open units
      self.selling_units_cancelled += open_units * -1
      self.save
    end
  end

  def process_release
    send_notice
  end

  def process_approve
    # the Approve event writes StockLedgerActivity rows to update On Order and order history
      myself = self
      sl = Omni::StockLedgerActivity.new
      sl.stockable_type = 'Omni::Purchase'
      sl.stockable_id = myself.purchase_id
      sl.sku_id = myself.sku_id
      sl.location_id = myself.purchase.location_id
      sl.supplier_id = myself.purchase.supplier_id
      sl.units = myself.units_ordered * myself.order_pack_size
      sl.cost = (myself.supplier_cost / myself.order_cost_units) * sl.units
      sl.retail = 0
      sl.create_date = Date.today
      sl.activity_date = Date.today
      ruleset = Omni::Ruleset.where(:ruleset_code => 'ApprovePurchase').first
      sl.ruleset_id = ruleset.ruleset_id if ruleset
      sl.save

      myself.selling_units_approved = sl.units
      myself.save # ???
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
        size_id = Omni::Sku.where(:sku_id => self.sku_id).first.size_id
        self.size_name = Omni::Size.where(:size_id => size_id).first.size_nbr
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
        if self.order_cost_units.is_a? Integer and self.order_cost_units > 0
          self.inventory_cost = self.supplier_cost / self.order_cost_units
        else
          self.invoice_cost = 0
        end
        self.invoice_cost = self.supplier_cost
      end
    end
  end

  def reset
    self.purchase_allocations.all(:state => 'planning').each {|x| x.destroy}
  end

  def cascading_delete
    # self.purchase_costs.all.each {|x| x.destroy}
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