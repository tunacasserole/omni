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
  default :purchase_line_nbr,     :override  =>  false,        :with => :sequence,  :named=>"PURCHASE_LINE_NBR"
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
  has_many     :inventories,        :class_name => 'Omni::Inventory',         :foreign_key => :sku_id,              :primary_key => :sku_id,    :conditions => { is_authorized: true }
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
    after_transition :on => :receive, :do => :process_receive
    after_transition :on => :cancel, :do => :process_cancel

  ### EVENTS ###
    event :approve do
      transition :draft => :open
    end

    event :receive do
      transition [:open, :partial] => :partial, :if => :open_units?
      transition [:open, :partial] => :complete, :unless => :open_units?
    end

    event :cancel do
      transition [:open, :partial] => :cancelled
      # transition :open => :cancelled
      # transition :partial => :cancelled
    end
  end
  # STATES (End)

  # STATE HELPERS (Start) =====================================================================
  def open_units?
    selling_units_approved - selling_units_received - selling_units_cancelled > 0 ? true : false
  end

  def allocate
    process_allocation
  end

  def process_receive
    errors.add('Not Ready','Feature is not yet implemented.')
  end

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

  def do_release
    # send_notice
  end

  def process_approve
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
        # puts "\n\n SKU IS #{self.sku_id}"
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
          self.inventory_cost = 0
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

  def process_allocate
    # def calculate(self.allocation_profile, self.sku_id, units_to_allocate, locked_units, locked_locations, purchase_detail_id)
    Omni::Allocation.calculate(self.allocation_profile, self.sku_id, units_ordered * order_pack_size, 0, locked_locations, purchase_detail_id)
  end
  # The purpose of purchase allocation is to take the units ordered of a SKU on a
  # PurchaseDetail and figure out how they are going to be distributed out to the
  # stores after the purchase is received.  The distribution to each store is based on
  # each store's demand.  Store demand can come from a number of different sources,
  # such as the BTS report or Projections.
  # The system uses Allocation Profiles to control various parts of the allocation calculations,
  # such as the source for store demand.
  #
  # The Allocate action may be run multiple times for a PurchaseDetail, so it starts by
  # deleting any existing PurchaseAllocation rows for the PurchaseDetail that are in
  # draft state.  Purchase Allocation rows that are in locked state are not deleted.
  #
  # Calculate "locked units" as the total PurchaseAllocation.units_allocated from the
  # remaining PurchaseAllocation rows that are in locked state.
  #
  # Calculate the "selling units available" to allocate as PurchaseDetail.order_units x
  # PurchaseDetail.order_pack_size x AllocationProfile.percent_to_allocate/100.
  #
  # Subtract "locked units" from "selling units available" to get "allocatable units".
  #
  # def process_allocation
  #   return if self.allocation_profile.nil?

  #   # remove any purchase allocations that are not locked. Locked is defined as having a
  #   # state equal to 'locked'
  #   self.purchase_allocations.each {|x| x.delete}
  #   # abort "error => purchase allocations not deleted.  expected: 0, actual: #{self.purchase_allocations.count.to_s}" unless self.purchase_allocations.count == 0

  #   # determine the sum of the locked units allocated
  #   units_locked = self.purchase_allocations.empty? ? 0 : self.purchase_allocations.sum(:units_allocated)

  #   # compute the total amount available to allocate
  #   selling_units_available = (self.units_ordered * (self.order_pack_size || 1) )* self.allocation_profile.percent_to_allocate / 100
  #   puts "selling_units_available is #{selling_units_available}"
  #   # derive the number of units available to allocate by removing the number of locked_units already allocated
  #   allocatable_units       = selling_units_available - units_locked

  #   # counter for the total number of units needed by each of the new purchase allocations
  #   total_units_needed      = 0

  #   temp_purchase_allocations = {}

  #   # create a new PurchaseAllocation entry for each location that does not already
  #   # have an existing one
  #   self.inventories.each do |inventory|

  #     # determine if there is aleady a purchase allocation for the current location
  #     unless self.purchase_allocations.select(:location_id).include?(inventory.location_id)

  #       allocation_profile_formula = self.allocation_profile.allocation_formula
  #       puts allocation_profile_formula

  #       case allocation_profile_formula

  #         when /PROJECTION_\d_UNITS/
  #           phase = allocation_profile_formula.downcase.chop.chop.chop.chop.chop.chop
  #           puts "phase is #{phase}"
  #           projection_detail = inventory.projection_details.joins(:projection).where(:projections => {state: phase}).first
  #           units_needed =  projection_detail ? projection_detail.send(allocation_profile_formula.downcase) : 0
  #           temp_purchase_allocations.merge!(inventory.location_id => units_needed)

  #         when 'LAST_FORECAST_UNITS'
  #           projection_detail = inventory.projection_details.joins(:projection).where(:projections => {state: 'forecast'}).first
  #           units_needed =  projection_detail ? projection_detail.send("last_forecast_units") : 0
  #           puts "units need is #{units_needed.to_s}"
  #           temp_purchase_allocations.merge!(inventory.location_id => units_needed)

  #         when 'APPROVED_PROJECTION'
  #           projection_detail = inventory.projection_details.joins(:projection).where(:projections => {state: 'active'}).first
  #           units_needed =  projection_detail ? projection.send("last_forecast_units") : 0
  #           temp_purchase_allocations.merge!(inventory.location_id => units_needed)

  #         when 'ALLOCATED_UNITS'
  #           projection_detail = inventory.projection_details.joins(:projection).where(:projections => {state: 'active'}).first
  #           units_needed =  projection_detail ? projection_detail.send("last_forecast_units") : 0
  #           temp_purchase_allocations.merge!(inventory.location_id => units_needed)

  #       end

  #     end

  #   end # self.locations.each

  #   total_units_needed = (temp_purchase_allocations.map {|k,v| v}).sum
  #   puts "total_units_needed is #{total_units_needed.to_s}"
  #   puts "allocatable_units is #{allocatable_units.to_s}"
  #   puts "allocation_profile.excess_supply_option is #{allocation_profile.excess_supply_option}"
  #   if total_units_needed < allocatable_units # EXCESS SUPPLY

  #     case allocation_profile.excess_supply_option
  #     when 'APPORTION_TO_STORES'
  #       difference = allocatable_units - total_units_needed
  #       proportions = temp_purchase_allocations.inject({}) { |h, (k, v)| h[k] = BigDecimal.new(v)/BigDecimal.new(total_units_needed).floor; h }

  #       residual = allocatable_units - (proportions.map{|k,v| v}).sum
  #       while residual > 0
  #         proportions.each do |k,v|
  #           proportions[k] += 1
  #           residual -= 1
  #           break if residual == 0
  #         end
  #       end

  #       temp_purchase_allocations = proportions
  #     when 'LEAVE_IN_WAREHOUSE'

  #     end


  #   elsif total_units_needed > allocatable_units # EXCESS DEMAND
  #   case allocation_profile.excess_demand_option
  #     when 'APPORTION_BY_PERCENT'

  #     when 'FILL_LARGEST_DEMAND'

  #   end


  #     case allocation_profile.excess_demand_option
  #       when 'APPORTION_BY_PERCENT'

  #      # for each location in hash, calculate its percent_of_demand as units_needed / total_units_needed
  #      # multiply the percent_of_demand x allocatable_units to get the location's allocated_units

  #       when 'FILL_LARGEST_DEMAND'

  #      # sort location hash descending by units_needed
  #      # start at first entry in hash and give the allocation all of its units_needed
  #      # continue throught the hash giving each locattion all of its needed units until all allocatable_units have been allocated

  #     end

  #   end

  #   # process the locations and their corresponding units and create
  #   # a purchase allocation record to this purchase detail
  #   temp_purchase_allocations.each do |location_id, units_allocated|
  #     # puts "units_allocated: #{units_allocated.to_s}"
  #     self.purchase_allocations.create(
  #       location_id: location_id,
  #       units_allocated: units_allocated
  #     )
  #   end


  # end # process_allocation


  # HELPERS (End)

end # class Omni::PurchaseDetail
