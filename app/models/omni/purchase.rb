class Omni::Purchase < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name                 = :purchases
  self.primary_key                = :purchase_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  supports_audit
  # supports_logical_delete
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates :purchase_id,               presence: true, uniqueness: true
  validates :purchase_nbr,              presence: true, uniqueness: true
  validates :display,                   presence: true, uniqueness: true
  validates :allocation_profile_id,     presence: true
  validates :supplier_id,               presence: true
  validates :location_id,               presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :purchase_id,                                                       with: :guid
  default :purchase_nbr,                   override: false,        with: :sequence,  named: "PURCHASE_NBR"
  default :order_date,                                                        with: :now
  default :is_special_order,                                                  to: false
  default :is_phone_order,                                                    to: false
  default :is_update_blank_details,                                           to: false
  default :is_update_all_details,                                             to: false
  # default :estimated_lead_time_days,       :override => false,                to: 0
  default :display,                              override: false,        :to   => lambda{|m| "#{m.supplier_display} - Order Number: #{m.purchase_nbr}"}
  default :ordered_by_user_id,                                                :to   => lambda{|m| Buildit::User.current.user_id if Buildit::User.current}
  default :allocation_profile_id,                                             :to   => lambda{|m| Omni::AllocationProfile.default_profile }
  default :payment_term,                                                      :to   => lambda{|m| m.supplier.default_payment_term}
  default :freight_term,                                                      :to   => lambda{|m| m.supplier.freight_term}
  default :ship_via,                                                          :to   => lambda{|m| m.supplier.ship_via}
  default :is_ship_cancel,                                                    :to   => lambda{|m| m.supplier.is_ship_cancel}
  # default :estimated_lead_time_days,                                          :to   => lambda{|m| m.supplier.lead_time} # only works as a before_create hook for some reason
  # default :delivery_date,                                                     :to   => lambda{|m| m.order_date + (m.estimated_lead_time_days.days || 0 )}
  # default :cancel_not_received_by_date,                                       :to   => lambda{|m| m.delivery_date + 30.days}
  default :supplier_address_1,                                                :to   => lambda{|m| m.supplier.line_1}
  default :supplier_address_2,                                                :to   => lambda{|m| m.supplier.line_2}
  default :supplier_address_3,                                                :to   => lambda{|m| m.supplier.line_3}
  default :supplier_address_4,                                                :to   => lambda{|m| m.supplier.line_4}
  default :supplier_city,                                                     :to   => lambda{|m| m.supplier.city}
  default :supplier_state_code,                                               :to   => lambda{|m| m.supplier.state_code}
  default :supplier_zip,                                                      :to   => lambda{|m| m.supplier.zip}
  default :supplier_country,                                                  :to   => lambda{|m| m.supplier.country}
  default :ship_thru_supplier_id,                                             :to   => lambda{|m| m.supplier.default_ship_thru_supplier_id}
  default :pay_to_supplier_id,                                                :to   => lambda{|m| m.supplier.default_pay_to_supplier_id}
  # DEFAULTS (End)


  # ASSOCIATIONS (Start) ================================================================
  has_many     :purchase_details,                    class_name: 'Omni::PurchaseDetail',    foreign_key: 'purchase_id'
  has_many     :purchase_allocations,                through: :purchase_details #class_name: 'Omni::PurchaseDetail',    foreign_key: 'purchase_id'
  has_many     :notes,                               class_name: 'Buildit::Note',                 foreign_key: 'notable_id',       as: :notable
  has_many     :approvals,                           class_name: 'Desk::Approval',               foreign_key: 'approvable_id'
  # has_many     :logs,                                class_name: 'Omni::Log',               foreign_key: 'logable_id' , as: :logable
  has_many     :stock_ledger_activities,             class_name: 'Omni::StockLedgerActivity', foreign_key: 'stockable_id' , as: :stockable
  belongs_to   :location,                            class_name: 'Omni::Location',          foreign_key: 'location_id'
  belongs_to   :supplier,                            class_name: 'Omni::Supplier',          foreign_key: 'supplier_id'
  belongs_to   :allocation_profile,                  class_name: 'Omni::AllocationProfile', foreign_key: 'allocation_profile_id'
  belongs_to   :pay_to_supplier,                     class_name: 'Omni::Supplier',          foreign_key: 'pay_to_supplier_id'
  belongs_to   :ship_thru_supplier,                  class_name: 'Omni::Supplier',          foreign_key: 'ship_thru_supplier_id'
  belongs_to   :ordered_by_user,                     class_name: 'Buildit::User',           foreign_key: 'ordered_by_user_id'
  belongs_to   :confirmed_by_user,                   class_name: 'Buildit::User',           foreign_key: 'confirmed_by_user_id'
  belongs_to   :master_purchase,                     class_name: 'Omni::Purchase',          foreign_key: 'master_purchase_id'
  belongs_to   :carrier_supplier,                    class_name: 'Omni::Supplier',          foreign_key: 'carrier_supplier_id'
  belongs_to   :purchase_approver_1_user,            class_name: 'Buildit::User',           foreign_key: 'purchase_approver_1_user_id'
  belongs_to   :purchase_approver_2_user,            class_name: 'Buildit::User',           foreign_key: 'purchase_approver_2_user_id'
  belongs_to   :purchase_approver_3_user,            class_name: 'Buildit::User',           foreign_key: 'purchase_approver_3_user_id'
  belongs_to   :purchase_approver_1_location_user,   class_name: 'Omni::LocationUser',      foreign_key: 'purchase_approver_1_location_user_id'
  belongs_to   :purchase_approver_2_location_user,   class_name: 'Omni::LocationUser',      foreign_key: 'purchase_approver_2_location_user_id'
  belongs_to   :purchase_approver_3_location_user,   class_name: 'Omni::LocationUser',      foreign_key: 'purchase_approver_3_location_user_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :ordered_by_user_display,                       to: 'ordered_by_user.display'
    map :confirmed_by_user_display,                     to: 'confirmed_by_user.display'
    map :supplier_display,                              to: 'supplier.display'
    map :allocation_profile_display,                    to: 'allocation_profile.display'
    map :pay_to_supplier_display,                       to: 'ship_thru_supplier.display'
    map :ship_thru_supplier_display,                    to: 'pay_to_supplier.display'
    map :master_purchase_display,                       to: 'master_purchase.display'
    map :carrier_supplier_display,                      to: 'carrier_supplier.display'
    map :location_display,                              to: 'location.display'
    map :purchase_approver_1_user_display,              to: 'purchase_approver_1_user.display'
    map :purchase_approver_2_user_display,              to: 'purchase_approver_2_user.display'
    map :purchase_approver_3_user_display,              to: 'purchase_approver_3_user.display'
    map :purchase_approver_1_location_user_display,     to: 'purchase_approver_1_location_user.display'
    map :purchase_approver_2_location_user_display,     to: 'purchase_approver_2_location_user.display'
    map :purchase_approver_3_location_user_display,     to: 'purchase_approver_3_location_user.display'
  end
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  computed_attributes do
    compute :total_order_units,                  with: :compute_total_order_units
    compute :total_order_cost,                   with: :compute_total_order_cost
    compute :allocations_count,                  with: :compute_allocations
  end
  # COMPUTED ATTRIBUTES (End)`

  # TEMPORARY ATTRIBUTES (Start) ========================================================
  temporary_attributes do
    config :is_update_blank_details
    config :is_update_all_details
  end
  # TEMPORARY ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    # Exact match attributes
    string   :purchase_id
    string   :location_id
    string   :supplier_id
    string   :display
    string   :state
    string   :purchase_nbr
    string   :supplier_display
    string   :location_display
    # date     :order_date
    # date     :ship_date
    # date     :delivery_date
    # boolean  :is_destroyed
    # Partial match (contains) attributes
    text     :display_fulltext,            using: :display
    text     :supplier_fulltext,           using: :supplier_display
    text     :location_fulltext,           using: :location_display
  end
  order_search_by :purchase_nbr => :desc
  # INDEXING (End)

  # HOOKS (Start) =======================================================================
  hook :before_create, :set_defaults_from_supplier, 00
  hook :before_update, :recompute_delivery_date, 10
  hook :before_update, :recompute_cancel_date, 20
  # hook :before_update, :update_allocation_profiles, 30
  # hook :before_destroy, :cascading_delete, 40

  def set_defaults_from_supplier
    self.estimated_lead_time_days = supplier.lead_time || 0 # JASON - why won't the lambda work for this field?  see above
    self.delivery_date = self.order_date + self.estimated_lead_time_days.days
    self.cancel_not_received_by_date = self.delivery_date + 30.days
  end
  # HOOKS (End)

  # STATES (Start) ====================================================================
  state_machine :state, initial: :draft do

  ### STATES ###
    state :draft do
    end

    state :pending_approval do
      validates :location_id,                                presence: true
      validates :purchase_type,                              presence: true
      validates :purchase_source,                            presence: true
      validates :ordered_by_user_id,                         presence: true
      validates :order_date,                                 presence: true
      validates :delivery_date,                              presence: true
      validates :payment_term,                               presence: true
      validates :freight_term,                               presence: true
      validates :ship_via,                                   presence: true
      validates :fob_point,                                  presence: true
    end

    state :open do
      validate  :approved
    end

    state :partial do
    end

    state :complete do
    end

    state :cancelled do
    end

    ### CALLBACKS ###
    # after_transition on: :release, do: :do_release
    after_transition on: :activate, do: :do_activate
    after_transition on: :cancel,  do: :do_cancel


    ### EVENTS ###
    event :release do
      transition draft: :pending_approval
    end

    event :activate do
      # transition :pending_approval => :open, :if => :approved
      transition :pending_approval => :open
    end

    event :cancel do
      transition [:draft, :pending_approval, :open, :partial] => :cancelled
    end

    # event :repair do
    #   # The first transition that matches the state and passes its conditions will be used
    #   transition :stalled => same
    #   transition :stalled => :parked, :unless => :auto_shop_busy
    #   transition all - [:parked, :stalled] => :stalled, :if => lambda {|vehicle| !vehicle.passed_inspection?}
    # end

  end
  # STATES (End)


  # STATE HELPERS (Start) =====================================================================
  def allocate
    self.purchase_details.each {|x| x.allocate }
  end

  def do_cancel
     self.purchase_details.each {|pd| pd.cancel}
     self.send('cancelled_date=', 'Date.today')
  end

  def do_activate
    # activate purchase details
    self.purchase_details.each {|pd| pd.activate}
  end
  # STATE HELPERS (End)

  # HELPERS (Start) =====================================================================
  def mass_update
    self.notes.create(detail: "really mass updating")
    self.send(self.mass_update_type.downcase)
  end

  def mass_update_q
    if self.mass_update_type
      message     = { method_name: 'mass_update', purchase_id: self.id, user_id: Omni::Util::User.id }
    else
      errors.add('mass_update_type','mass update type is required for mass update')
    end

    # publish the above message to the omni.events exchange
    Buildit::Messaging::Publisher.push('omni.events', message.to_json, :routing_key => 'purchase')
  end

  def units
    self.notes.create(detail: "adjusted units by #{self.adjustment_percent}")
    self.purchase_details.each do |pd|
      pd.units_ordered *= self.adjustment_percent / 100 if self.adjustment_percent
      pd.save
    end
  end

  def add
    self.notes.create(detail: "automatically added purchase details.")
    self.supplier.sku_suppliers.each do |ss|
      next if Omni::PurchaseDetail.where(purchase_id: self.purchase_id, sku_id: ss.sku_id).first
      i = Omni::Inventory.where(location_id: self.location_id, sku_id: ss.sku_id).first if self.location_id
      units = i ? units_to_order(i,ss) : 1
      pd = Omni::PurchaseDetail.create(units_ordered: units, purchase_id: self.purchase_id, sku_id: ss.sku_id, sku_supplier_id: ss.sku_supplier_id, supplier_item_identifier: ss.supplier_item_identifier)
      self.notes.create(detail: pd.errors.full_messages.to_sentence)
    end
    Sunspot.commit_if_dirty
  end


  def duplicate
    new_purchase = Omni::Purchase.create(supplier_id: self.supplier_id, location_id: self.location_id, purchase_type: self.purchase_type, purchase_source: self.purchase_source, ship_via: self.ship_via, fob_point: self.fob_point, master_purchase_id: self.master_purchase_id, carrier_supplier_id: self.carrier_supplier_id, is_special_order: self.is_special_order, estimated_lead_time_days: self.estimated_lead_time_days, purchase_approver_1_user_id: self.purchase_approver_1_user_id, purchase_approver_1_location_user_id: self.purchase_approver_1_location_user_id, purchase_approver_1_user_id: self.purchase_approver_1_user_id, purchase_approver_2_location_user_id: self.purchase_approver_2_location_user_id, purchase_approver_3_user_id: self.purchase_approver_3_user_id, purchase_approver_3_location_user_id: self.purchase_approver_3_location_user_id, payment_term: self.payment_term, freight_term: self.freight_term, pay_to_supplier_id: self.pay_to_supplier_id, ship_thru_supplier_id: self.ship_thru_supplier_id, supplier_address_1: self.supplier_address_1, supplier_address_2: self.supplier_address_2, supplier_address_3: self.supplier_address_3, supplier_address_4: self.supplier_address_4, supplier_city: self.supplier_city, supplier_state_code: self.supplier_state_code, supplier_zip: self.supplier_zip, supplier_country: self.supplier_country)
    new_purchase.notes.create(detail: "cloned from purchase number #{self.purchase_nbr}")
    self.purchase_details.each do |pd|
      new_detail = pd.duplicate(new_purchase.purchase_id)
      puts new_detail.errors.full_messages.to_sentence if new_detail.errors.count > 1
    end
    Sunspot.commit_if_dirty
    # notify
  end

  def duplicate_q
    message     = {
      purchase_id: self.id,
      user_id: Omni::Util::User.id,
      method_name: 'duplicate'
    }

    # publish the above message to the omni.events exchange
    Buildit::Messaging::Publisher.push('omni.events', message.to_json, :routing_key => 'purchase')
  end

  def units_to_order(i, ss)
    units_to_order = self.is_use_need_units ? i.projection_details.joins(:projection).where(:projections => {plan_year: '2014'}).sum('current_approved_units') : 1
    units_to_order *= self.adjustment_percent / 100 if self.adjustment_percent
    units_to_order /= ss.order_pack_size
    [units_to_order, 1].max.round
  end

  def notify

  end

  def sku_meets_criteria?(sku)
    # puts "sku is #{sku.display} - #{sku.sku_id}"
    # return false unless sku.style_id == self.style_id if self.style_id
    # return false unless sku.subclass_id == self.subclass_id if self.subclass_id
    # return false unless sku.subclass.classification_id == self.classification_id if self.classification_id
    # return false unless sku.subclass.classification.department_id == self.department_id if self.department_id
    # return false if sku.is_converted unless self.is_include_conversions
    # return false unless Omni::SkuSupplier.where(supplier_id: self.supplier_id, sku_id: sku.sku_id, is_discontinued: false).first
    return true
  end

# If an Allocation Profile is set or changed, update all the Purchase Details
  def profile
    # puts "allocation_profile_id is #{allocation_profile_id}"
    if self.allocation_profile_id.nil?
      errors.add('allocation_profile_id','allocation profile is required for updating allocation profiles via mass update.')
      raise 'allocation profile is required for updating allocation profiles via mass update'
    else
      # puts "self.is_update_all_details is #{self.is_update_all_details}"
      # puts "self.is_update_blank_details is #{self.is_update_blank_details}"
      if self.is_update_all_details
        # puts "self.purchase_details.count is #{self.purchase_details.count}"
        self.purchase_details.each do |pd|
          pd.allocation_profile_id = self.allocation_profile_id
          pd.save
        end
      end
      if self.is_update_blank_details
        self.purchase_details.where(:allocation_profile_id => nil).each do |pd|
          pd.allocation_profile_id = self.allocation_profile_id
          pd.save
        end
      end
    end
  end # end of profile method

  # def order_pack_size(ss)
  #   case ss.pack_type
  #     when "M"
  #       ss.master_pack_units
  #     when "I"
  #       ss.inner_pack_units
  #     else
  #       1
  #   end
  # end

  def approved
    # puts "total_order_cost is #{total_order_cost.to_s}"
    # puts "approvals count is #{self.approvals.count}"
    o = Omni::PurchaseOption.first
    case
      when total_order_cost < o.approver_1_limit
        errors.add(:approvals, "Missing approval from #{o.approver_1_display} for order cost of $#{total_order_cost.to_s}") unless approvals.find_by_approver_id(o.approver_1_id)

      when total_order_cost < o.approver_2_limit
        errors.add(:approvals, "Missing approval from #{o.approver_1_display} for order cost of $#{total_order_cost.to_s}") unless approvals.find_by_approver_id(o.approver_1_id)
        errors.add(:approvals, "Missing approval from #{o.approver_2_display} for order cost of $#{total_order_cost.to_s}") unless approvals.find_by_approver_id(o.approver_2_id)

      when total_order_cost >= o.approver_2_limit
        errors.add(:approvals, "Missing approval from #{o.approver_1_display} for order cost of $#{total_order_cost.to_s}") unless approvals.find_by_approver_id(o.approver_1_id)
        errors.add(:approvals, "Missing approval from #{o.approver_2_display} for order cost of $#{total_order_cost.to_s}") unless approvals.find_by_approver_id(o.approver_2_id)
        errors.add(:approvals, "Missing approval from #{o.approver_3_display} for order cost of $#{total_order_cost.to_s}") unless approvals.find_by_approver_id(o.approver_3_id)
    end
    # puts "\nerrors are #{errors.full_messages.to_sentence}"
    # return false
    # return errors.count == 0
  end

  def compute_allocations
    self.purchase_allocations.count
  end

  def compute_total_order_units
    self.purchase_details.sum('units_ordered * order_pack_size') if self.purchase_details
  end

  def compute_total_order_cost
    toc = self.purchase_details.sum('(units_ordered * order_pack_size) * (supplier_cost / order_cost_units)')
    # puts "\n\n\n\n*****************#{toc}"
    return toc
  end

  def set_defaults
    self.delivery_date = self.order_date + self.estimated_lead_time_days.days
    self.cancel_not_received_by_date = self.delivery_date + 30.days
  end

  def recompute_delivery_date
    # puts "recomputing delivery date"
    if self.order_date_changed? || self.estimated_lead_time_days_changed?
      self.delivery_date = self.order_date + self.estimated_lead_time_days.days
    end
  end

  def recompute_cancel_date
    if self.delivery_date_changed?
      self.cancel_not_received_by_date = self.delivery_date + 30.days
    end
  end


  def cascading_delete
    # Delete all associated child rows in ReceiptDetail, ReceiptPurchase and ReceiptAllocation.
    if ['draft'].include? self.state
      purchase_details.all.each { |x| x.purchase_allocations.all.each  { |y| y.destroy } }
      purchase_details.all.each { |x| x.destroy }
    else
      errors.add('state','only records in draft state may be deleted.')
      raise ActiveRecord::Rollback
    end
  end
  # HOOKS (End)

  def print_purchase
    # Create a pdf of the purchase order for printing
    # p = Omni::Print.new(:source_model => 'Purchase', :source_id => self.purchase_id)
    # p.save
    # p.print
    # Omni::Purchase::Helpers.print(self)
  end

  def display_as
    self.display
  end
  # HELPERS (End)
end # class Omni::Purchase
