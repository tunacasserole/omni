  class Omni::PurchaseDetail < ActiveRecord::Base

  # METADATA (Start) ====================================================================
  self.table_name                 = :purchase_details
  self.primary_key                = :purchase_detail_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  supports_logical_delete
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates :purchase_detail_id,           presence: true, uniqueness: true
  validates :purchase_id,                  presence: true
  validates :sku_supplier_id,              presence: true
  validates :sku_id,                       presence: true
  validates :units_ordered,               :greater_than => 0
  # validates_numericality_of :order_pack_size,            :greater_than => 0
  # validates_numericality_of :order_cost_units,           :greater_than => 0
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :purchase_detail_id,                                 with: :guid
  default :allocation_profile_id,                              :to   => lambda{|m| "#{m.purchase.allocation_profile_id}" }
  default :purchase_detail_nbr,        override: false,        with: :sequence,  named: "PURCHASE_DETAIL_NBR"
  default :display,                    override: false,        :to   => lambda{|m| "#{m.purchase_display} - #{m.purchase_detail_nbr}"}
  default :sku_id,                :override  =>  false,        :to   => lambda{|m| m.sku_supplier.sku_id if m.sku_supplier}
  default :units_ordered,                                      to: 1
  default :order_pack_size,           override: false,         to: 1
  default :selling_units_approved,                             to: 0
  default :selling_units_received,                             to: 0
  default :selling_units_cancelled,                            to: 0
  # DEFAULTS (End)

  # ASSOCIATIONS (Start) ================================================================
  has_many     :purchase_allocations,          class_name: 'Omni::PurchaseAllocation',  foreign_key: 'purchase_detail_id'
  has_many     :stock_ledger_activities,       class_name: 'Omni::StockLedgerActivity', foreign_key: 'stockable_id' , as: :stockable
  has_many     :unlocked_purchase_allocations, class_name: 'Omni::PurchaseAllocation',  foreign_key: 'purchase_detail_id', :conditions => ["state != 'locked'" ]
  has_many     :receipt_details,               class_name: 'Omni::ReceiptDetail',       foreign_key: 'purchase_detail_id'
  belongs_to   :purchase,                      class_name: 'Omni::Purchase',            foreign_key: 'purchase_id'
  belongs_to   :allocation_profile,            class_name: 'Omni::AllocationProfile',   foreign_key: 'allocation_profile_id'
  belongs_to   :sku_supplier,                  class_name: 'Omni::SkuSupplier',         foreign_key: 'sku_supplier_id'
  belongs_to   :sku,                           class_name: 'Omni::Sku',                 :foreign_key => :sku_id
  has_many     :inventories,                   class_name: 'Omni::Inventory',           :foreign_key => :sku_id,              :primary_key => :sku_id,    :conditions => { is_authorized: true }
  has_many     :locations,                     class_name: 'Omni::Location',            :through     => :inventories
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :sku_display,                   to: 'sku.display'
    map :sku_supplier_display,          to: 'sku_supplier.display'
    map :purchase_display,              to: 'purchase.display'
    map :allocation_profile_display,    to: 'allocation_profile.display'
    map :supplier_id,                   to: 'purchase.supplier_id'
  end
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  computed_attributes do
    compute :open_units,                  with: :compute_open_units
  end
  # COMPUTED ATTRIBUTES (End)`

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
    integer  :purchase_detail_nbr
    integer  :units_ordered
    string   :purchase_id
    string   :sku_id
    string   :sku_supplier_id
    string   :sku_supplier_display
    boolean  :is_destroyed

    text     :display_fulltext,            using: :display
    text     :state_fulltext,              using: :state
    text     :sku_display_fulltext,        using: :sku_display
    text     :sku_supplier_fulltext,       using: :sku_supplier_display
    text     :purchase_display_fulltext,   using: :purchase_display
  end
  # INDEXING (End)

  # HOOKS (Start) =======================================================================
  hook :before_create, :set_defaults, 10
  # HOOKS (End)

  # STATES (Start) ====================================================================
  state_machine :state, initial: :draft do

  ### STATES ###
    state :draft do
    end

    state :open do
      validate :check_active_sku
    end

    state :partial do
    end

    state :complete do
    end

    state :cancelled do
    end

  ### CALLBACKS ###
    after_transition on: :activate, do: :do_activate
    after_transition on: :receive, do: :do_receive
    after_transition on: :release, do: :do_release
    after_transition on: :cancel, do: :do_cancel
    after_transition on: :process, do: :do_process

  ### EVENTS ###
    event :activate do
      transition draft: :open
    end

    event :receive do
      transition [:open, :partial] => same
    end

    event :release do
      transition :complete => :released
    end

    event :process do
      transition [:draft, :open, :partial, :complete] => same
    end

    event :cancel do
      transition [:draft, :open, :partial] => :cancelled
    end
  end
  # STATES (End)

  # STATE HELPERS (Start) =====================================================================
  def allocate_q
    message     = {
      row_id: self.id,
      user_id: Omni::Util::User.id,
      method_name: 'allocate'
    }

    # publish the above message to the omni.events exchange
    Buildit::Messaging::Publisher.push('omni.events', message.to_json, :routing_key => 'purchase_detail')

  end # def allocate_q


  def compute_open_units
    selling_units_approved - selling_units_received - selling_units_cancelled
  end

  def do_release
    # Create an Allocation record corresponding to the PurchaseDetail record.
    # For each PurchaseAllocation record for the PurchaseDetail where allocated_units > 0
    # Create an AllocationDetail record corresponding to the PurchaseAllocation
    # Update PurchaseAllocation.state to transferred
    # me = self
    puts "creating allocation ==>  allocatable_id: #{self.purchase_detail_id}, allocatable_type: Omni::PurchaseDetail, location_id: #{self.purchase.location_id}, sku_id: #{self.sku_id}, :allocation_profile_id => self.allocation_profile_id, :units_to_allocate => self.units_ordered"
    a = Omni::Allocation.create(allocatable_id: self.purchase_detail_id, allocatable_type: "Omni::PurchaseDetail", location_id: self.purchase.location_id, sku_id: self.sku_id, allocation_profile_id: self.allocation_profile_id, units_to_allocate: self.units_ordered)
    if a
      self.purchase_allocations.where('units_allocated > 0').each do |pa|
        Omni::AllocationDetail.create(allocation_id: a.allocation_id, location_id: pa.location_id, units_needed: pa.units_needed, units_allocated: pa.units_allocated)
        pa.state = 'transferred'
        pa.save
      end
    end
  end

  def allocate
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

    units_to_allocate = self.units_ordered * self.order_pack_size
    allocations_to_create = Omni::Allocation.calculate(self.allocation_profile_id, self.sku_id, units_to_allocate, locked_units, locked_locations, nil)
    allocations_to_create.each { |x| pa = Omni::PurchaseAllocation.create(purchase_detail_id: self.purchase_detail_id, location_id: x[:location_id], units_allocated: x[:units_allocated], units_needed: x[:units_needed] ); puts "errors is #{pa.errors.full_messages.to_sentence}" } # unless k = self.purchase.location_id }

    puts "allocations_to_create is #{allocations_to_create.count}"
    puts "created allocations #{self.purchase_allocations.count}"
  end

  def do_receive
    open_units = self.selling_units_approved - self.selling_units_received - self.selling_units_cancelled
    self.state = open_units > 0 ? 'complete' : 'partial'
    self.save
  end

  def do_cancel
    # the Cancel event writes StockLedgerActivity rows for each PurchaseDetail to update On Order and order history
    open_units = self.selling_units_approved - self.selling_units_received - self.selling_units_cancelled
    # Give error because no open units cancelled
    if open_units < 0
      errors.add('state', 'negative units to cancel')
    else
      sl = Omni::StockLedgerActivity.new
      sl.stockable_type = 'Omni::PurchaseDetail'
      sl.stockable_id = self.purchase_detail_id
      sl.ruleset_id = Omni::Ruleset.where(:ruleset_code => 'CancelPurchase').first.ruleset_id if Omni::Ruleset.where(:ruleset_code => 'CancelPurchase').first
      sl.sku_id = self.sku_id
      sl.location_id = self.purchase.location_id
      sl.supplier_id = self.purchase.supplier_id
      sl.units = open_units * -1
      sl.cost = (self.supplier_cost / (self.order_cost_units > 1 ? self.order_cost_units : 1 ))  * open_units
      sl.retail = 0
      # sl.create_date = Date.today
      # sl.activity_date = Date.today
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

  def do_activate
    # the activate event writes StockLedgerActivity rows to update On Order and order history"
    sl = Omni::StockLedgerActivity.new
    sl.stockable_type = 'Omni::Purchase'
    sl.stockable_id = self.purchase_id
    sl.sku_id = self.sku_id
    sl.location_id = self.purchase.location_id
    sl.supplier_id = self.purchase.supplier_id
    sl.units = self.units_ordered * self.order_pack_size
    sl.cost = (self.supplier_cost / (self.order_cost_units > 1 ? self.order_cost_units : 1 )) * sl.units
    # sl.retail = 0
    # sl.create_date = Date.today
    # sl.activity_date = Date.today
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

  def duplicate(new_purchase_id)
    Omni::PurchaseDetail.create(purchase_id: new_purchase_id, units_ordered: self.units_ordered, sku_id: self.sku_id, sku_supplier_id: self.sku_supplier_id, supplier_item_identifier: self.supplier_item_identifier, description: self.description, color_name: self.color_name, size_name: self.size_name, sku_alias: self.sku_alias, allocation_profile_id: self.allocation_profile_id,  order_pack_size: self.order_pack_size, order_pack_type: self.order_pack_type, order_cost_units: self.order_cost_units, order_multiple_type: self.order_multiple_type, order_multiple: self.order_multiple, supplier_cost: self.supplier_cost, extra_cost: self.extra_cost)
  end

  def reset
    self.purchase_allocations.all(:state => 'planning').each {|x| x.destroy}
  end

  def cascading_delete
    # self.purchase_costs.all.each {|x| x.destroy}
    self.purchase_allocations.all.each {|x| x.destroy}
    self.purchase_details.all.each {|x| x.destroy}
  end

  def check_active_sku
    if self.sku.discontinued
      errors.add(:sku_id, 'cannot purchase discontinued skus')
      return false
    else
      return true
    end
  end

  def display_as
    self.display
  end
end # class Omni::PurchaseDetail



