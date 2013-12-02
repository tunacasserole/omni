  class Omni::PurchaseDetail < ActiveRecord::Base

  # METADATA (Start) ====================================================================
  self.table_name                 = :purchase_details
  self.primary_key                = :purchase_detail_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates :display,                         :uniqueness  => true
  validates :purchase_detail_id,              :uniqueness  => true
  validates :sku_supplier_id,                 :presence    => true
  validates_numericality_of :units_ordered,              :greater_than => 0
  # validates_numericality_of :order_pack_size,            :greater_than => 0
  # validates_numericality_of :order_cost_units,           :greater_than => 0
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :purchase_detail_id,                                 :with => :guid
  default :allocation_profile_id,                              :to   => lambda{|m| m.purchase.allocation_profile_id}
  default :purchase_line_nbr,     :override  =>  false,        :with => :sequence,  :named=>"PURCHASE_DETAIL_NBR"
  default :display,               :override  =>  false,        :to   => lambda{|m| "#{m.purchase_display} - #{m.purchase_line_nbr}"}
  default :sku_id,                :override  =>  false,        :to   => lambda{|m| m.sku_supplier.sku_id}
  default :units_ordered,                                      :to   => 0
  default :selling_units_approved,                             :to   => 0
  default :selling_units_received,                             :to   => 0
  default :selling_units_cancelled,                            :to   => 0
  # DEFAULTS (End)

  # ASSOCIATIONS (Start) ================================================================
  has_many     :purchase_allocations, :class_name => 'Omni::PurchaseAllocation',  :foreign_key => 'purchase_detail_id'
  has_many     :unlocked_purchase_allocations, :class_name => 'Omni::PurchaseAllocation',  :foreign_key => 'purchase_detail_id', :conditions => ["state != 'locked'" ]
  has_many     :receipt_details,      :class_name => 'Omni::ReceiptDetail',       :foreign_key => 'purchase_detail_id'
  belongs_to   :purchase,             :class_name => 'Omni::Purchase',            :foreign_key => 'purchase_id'
  belongs_to   :allocation_profile,   :class_name => 'Omni::AllocationProfile',   :foreign_key => 'allocation_profile_id'
  belongs_to   :sku_supplier,         :class_name => 'Omni::SkuSupplier',         :foreign_key => 'sku_supplier_id'
  belongs_to   :sku,                  :class_name => 'Omni::Sku',                 :foreign_key => :sku_id
  has_many     :inventories,          :class_name => 'Omni::Inventory',           :foreign_key => :sku_id,              :primary_key => :sku_id,    :conditions => { is_authorized: true }
  has_many     :locations,            :class_name => 'Omni::Location',            :through     => :inventories
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :sku_display,                   :to => 'sku.display'
    map :sku_supplier_display,          :to => 'sku_supplier.display'
    map :purchase_display,              :to => 'purchase.display'
    map :allocation_profile_display,    :to => 'allocation_profile.display'
  end
  # MAPPED ATTRIBUTES (End)

  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc
  # ORDERING (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :purchase_detail_id
    string   :display
    string   :state
    string   :sku_display
    string   :supplier_cost
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
    after_transition :on => :approve, :do => :do_approve
    after_transition :on => :receive, :do => :do_receive
    after_transition :on => :cancel, :do => :do_cancel
    after_transition :on => :process, :do => :do_process

  ### EVENTS ###
    event :approve do
      transition :draft => :open
    end

    event :receive do
      transition [:open, :partial] => same
    end

    event :process do
      transition [:draft, :open, :partial, :complete] => same
    end

    event :cancel do
      transition [:open, :partial] => :cancelled
    end
  end
  # STATES (End)

  # STATE HELPERS (Start) =====================================================================
  # def open_units?
  #   selling_units_approved - selling_units_received - selling_units_cancelled > 0 ? true : false
  # end

  def allocate
    do_allocate
  end

  def do_allocate
    #  Read all existing PurchaseAllocation records for the PurchaseDetail.  If the state is draft, then delete the record.
    #  If the state is locked, then add the units_allocated to locked_units parameter and add the location_id to the locked_locations hash.
    locked_units = 0
    locked_locations = [self.purchase.location_id]
    purchase_allocations.each do |x|
      case x.state
        when 'draft'
          x.delete

        when 'locked'
          locked_units += x.units_allocated
          locked_locations << x.location_id

      end
    end

    # puts "\n\nself.purchase.location_id is #{self.purchase.location_id}\n\n"
    units_to_allocate = units_ordered * order_pack_size

    allocations_to_create = Omni::Allocation.calculate(allocation_profile_id, sku_id, units_to_allocate, locked_units, locked_locations, nil)
    allocations_to_create.each { |k,v| Omni::PurchaseAllocation.create(purchase_detail_id: purchase_detail_id, location_id: k, units_allocated: (v ? v : 0)) } # unless k = self.purchase.location_id }
  end

  def do_receive
    open_units = selling_units_approved - selling_units_received - selling_units_cancelled
    state = open_units > 0 ? 'complete' : 'partial'
    self.save
  end

  def do_cancel
    # Write SLA
    open_units = self.selling_units_approved - self.selling_units_received - self.selling_units_cancelled
    # Give error because no open units cancelled
    if open_units < 0
      errors.add('state', 'negative units to cancel')
    else
      sl = Omni::StockLedgerActivity.new
      sl.stockable_type = 'Omni::Purchase'
      sl.stockable_id = self.purchase_id
      sl.ruleset_id = Omni::Ruleset.where(:ruleset_code => 'CancelPurchase').first.ruleset_id if Omni::Ruleset.where(:ruleset_code => 'CancelPurchase').first
      sl.sku_id = self.sku_id
      sl.location_id = self.purchase.location_id
      sl.supplier_id = self.purchase.supplier_id
      sl.units = open_units * -1
      sl.cost = (self.supplier_cost / (self.order_cost_units > 1 ? self.order_cost_units : 1 ))  * open_units
      sl.retail = 0
      sl.create_date = Date.today
      sl.activity_date = Date.today
      sl.save
      # update selling units cancelled += open units
      self.selling_units_cancelled += open_units * -1
      self.save
    end
  end

  def do_process
    # Create an Allocation record corresponding to the PurchaseDetail record.
    inv_id = Omni::Inventory.where(sku_id: self.sku_id, location_id: self.purchase.location_id).first ? Omni::Inventory.where(sku_id: self.sku_id, location_id: self.purchase.location_id).first.inventory_id : nil
    units_to_allocate = self.selling_units_approved - self.selling_units_received - self.selling_units_cancelled
    a = Omni::Allocation.create(allocatable_type: "Omni::PurchaseDetail", allocatable_id: self.purchase_detail_id, sku_id: self.sku_id, location_id: self.purchase.location_id, inventory_id: inv_id, allocation_profile_id: self.allocation_profile_id, units_to_allocate: units_to_allocate )

    # For each PurchaseAllocation record allocations.allocated_units > 0 for the PurchaseDetail where
    self.purchase_allocations.where("units_allocated > ? and state = 'draft'", 0).each do |x|
    # Create an AllocationDetail record corresponding to the PurchaseAllocation
      Omni::AllocationDetail.create(allocation_id: a.allocation_id, location_id: self.purchase.location_id, units_needed: x.units_needed, units_allocated: x.units_allocated,  units_shipped: x.units_shipped)
    # Update PurchaseAllocation.state to transferred
      x.state = 'transferred'
      x.save
    end

  end

  def do_approve
    # the Approve event writes StockLedgerActivity rows to update On Order and order history"
    sl = Omni::StockLedgerActivity.new
    sl.stockable_type = 'Omni::Purchase'
    sl.stockable_id = self.purchase_id
    sl.sku_id = self.sku_id
    sl.location_id = self.purchase.location_id
    sl.supplier_id = self.purchase.supplier_id
    sl.units = self.units_ordered * self.order_pack_size
    sl.cost = (self.supplier_cost / (self.order_cost_units > 1 ? self.order_cost_units : 1 )) * sl.units
    # sl.retail = 0
    sl.create_date = Date.today
    sl.activity_date = Date.today
    sl.ruleset_id = Omni::Ruleset.where(:ruleset_code => 'ApprovePurchase').first.ruleset_id if Omni::Ruleset.where(:ruleset_code => 'ApprovePurchase').first
    sl.save

    self.selling_units_approved = sl.units
    self.save # ???
  end
  # STATE HELPERS (End)

  # HELPERS (Start) =====================================================================
  def set_defaults
    # default PurchaseDetail fields from Sku and SkuSupplier
    if self.new_record?
      if self.sku_supplier
        # puts "\n\n SKU IS #{self.sku_supplier.sku_id}"
        self.sku_id = self.sku_supplier.sku_id
        self.supplier_item_identifier = self.sku_supplier.supplier_item_identifier
        self.description = self.sku_supplier.description
        self.color_name = self.sku.color_name || self.sku.color_display
        self.size_name = self.sku.size.display if self.sku.size
        self.order_pack_type = self.sku_supplier.pack_type
        self.extra_cost = self.sku_supplier.extra_cost
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
        self.inventory_cost = self.order_cost_units > 0 ? self.supplier_cost / self.order_cost_units : self.inventory_cost = 0
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

end # class Omni::PurchaseDetail



