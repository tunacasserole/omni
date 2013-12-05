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
  validates :supplier_id,                        :presence      => true
  # validates :display,                            :uniqueness    => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :purchase_id,                                                       :with => :guid
  default :purchase_nbr,                   :override  =>  false,        :with => :sequence,  :named=>"PURCHASE_NBR"
  default :order_date,                                                        :with => :now
  default :is_special_order,                                                  :to   => false
  default :is_phone_order,                                                    :to   => false
  default :is_update_blank_details,                                           :to   => false
  default :is_update_all_details,                                             :to   => false
  # default :estimated_lead_time_days,       :override => false,                :to   => 0
  default :display,                              :override  =>  false,        :to   => lambda{|m| "#{m.supplier_display} - Order Number: #{m.purchase_nbr}"}
  default :ordered_by_user_id,                                                :to   => lambda{|m| Buildit::User.current.user_id if Buildit::User.current}
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
  has_many     :purchase_details,                    :class_name => 'Omni::PurchaseDetail',    :foreign_key => 'purchase_id'
  has_many     :logs,                                :class_name => 'Omni::Log',               :foreign_key => 'logable_id' , :as => :logable
  belongs_to   :location,                            :class_name => 'Omni::Location',          :foreign_key => 'location_id'
  belongs_to   :supplier,                            :class_name => 'Omni::Supplier',          :foreign_key => 'supplier_id'
  belongs_to   :allocation_profile,                  :class_name => 'Omni::AllocationProfile', :foreign_key => 'allocation_profile_id'
  belongs_to   :pay_to_supplier,                     :class_name => 'Omni::Supplier',          :foreign_key => 'pay_to_supplier_id'
  belongs_to   :ship_thru_supplier,                  :class_name => 'Omni::Supplier',          :foreign_key => 'ship_thru_supplier_id'
  belongs_to   :ordered_by_user,                     :class_name => 'Buildit::User',           :foreign_key => 'ordered_by_user_id'
  belongs_to   :confirmed_by_user,                   :class_name => 'Buildit::User',           :foreign_key => 'confirmed_by_user_id'
  belongs_to   :master_purchase,                     :class_name => 'Omni::Purchase',          :foreign_key => 'master_purchase_id'
  belongs_to   :carrier_supplier,                    :class_name => 'Omni::Supplier',          :foreign_key => 'carrier_supplier_id'
  belongs_to   :purchase_approver_1_user,            :class_name => 'Buildit::User',           :foreign_key => 'purchase_approver_1_user_id'
  belongs_to   :purchase_approver_2_user,            :class_name => 'Buildit::User',           :foreign_key => 'purchase_approver_2_user_id'
  belongs_to   :purchase_approver_3_user,            :class_name => 'Buildit::User',           :foreign_key => 'purchase_approver_3_user_id'
  belongs_to   :purchase_approver_1_location_user,   :class_name => 'Omni::LocationUser',      :foreign_key => 'purchase_approver_1_location_user_id'
  belongs_to   :purchase_approver_2_location_user,   :class_name => 'Omni::LocationUser',      :foreign_key => 'purchase_approver_2_location_user_id'
  belongs_to   :purchase_approver_3_location_user,   :class_name => 'Omni::LocationUser',      :foreign_key => 'purchase_approver_3_location_user_id'
  # ASSOCIATIONS (End)


  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :ordered_by_user_display,                       :to => 'ordered_by_user.display'
    map :confirmed_by_user_display,                     :to => 'confirmed_by_user.display'
    map :supplier_display,                              :to => 'supplier.display'
    map :allocation_profile_display,                    :to => 'allocation_profile.display'
    map :pay_to_supplier_display,                       :to => 'ship_thru_supplier.display'
    map :ship_thru_supplier_display,                    :to => 'pay_to_supplier.display'
    map :master_purchase_display,                       :to => 'master_purchase.display'
    map :carrier_supplier_display,                      :to => 'carrier_supplier.display'
    map :location_display,                              :to => 'location.display'
    map :purchase_approver_1_user_display,              :to => 'purchase_approver_1_user.display'
    map :purchase_approver_2_user_display,              :to => 'purchase_approver_2_user.display'
    map :purchase_approver_3_user_display,              :to => 'purchase_approver_3_user.display'
    map :purchase_approver_1_location_user_display,     :to => 'purchase_approver_1_location_user.display'
    map :purchase_approver_2_location_user_display,     :to => 'purchase_approver_2_location_user.display'
    map :purchase_approver_3_location_user_display,     :to => 'purchase_approver_3_location_user.display'
  end
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  computed_attributes do
    compute :total_order_units,                  :with => :compute_total_order_units
    compute :total_order_cost,                   :with => :compute_total_order_cost
  end
  # COMPUTED ATTRIBUTES (End)`

  # TEMPORARY ATTRIBUTES (Start) ========================================================
  temporary_attributes do
    config :is_update_blank_details
    config :is_update_all_details
  end
  # TEMPORARY ATTRIBUTES (End)

  # ORDERING (Start) ====================================================================
  order_search_by :purchase_nbr => :desc
  # ORDERING (End)

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
    date     :order_date
    date     :ship_date
    date     :delivery_date
    boolean  :is_destroyed
    # Partial match (contains) attributes
    text     :display_fulltext,            :using => :display
    text     :state_fulltext,              :using => :state
    text     :supplier_fulltext,           :using => :supplier_display
    text     :location_fulltext,           :using => :location_display
    text     :master_purchase_fulltext,    :using => :master_purchase_display
    text     :carrier_supplier_fulltext,   :using => :carrier_supplier_display
    text     :ship_thru_supplier_fulltext, :using => :ship_thru_supplier_display
    text     :pay_to_supplier_fulltext,    :using => :pay_to_supplier_display
  end
  # INDEXING (End)

  # HOOKS (Start) =======================================================================
  hook :before_create, :set_defaults_from_supplier, 00
  hook :before_update, :recompute_delivery_date, 10
  hook :before_update, :recompute_cancel_date, 20
  hook :before_update, :update_allocation_profiles, 30
  hook :before_destroy, :cascading_delete, 40

  def set_defaults_from_supplier
    self.estimated_lead_time_days = supplier.lead_time || 0 # JASON - why won't the lambda work for this field?  see above
    self.delivery_date = self.order_date + self.estimated_lead_time_days.days
    self.cancel_not_received_by_date = self.delivery_date + 30.days
  end
  # HOOKS (End)

  # STATES (Start) ====================================================================
  state_machine :state, :initial => :draft do

  ### STATES ###
    state :draft do
    end

    state :pending_approval do
      validates :purchase_nbr,                         :presence => true
      validates :supplier_id,                                :presence => true
      validates :location_id,                                :presence => true
      validates :purchase_type,                              :presence => true
      validates :purchase_source,                            :presence => true
      validates :ordered_by_user_id,                         :presence => true
      validates :order_date,                                 :presence => true
      validates :delivery_date,                              :presence => true
      validates :payment_term,                               :presence => true
      validates :freight_term,                               :presence => true
      validates :ship_via,                                   :presence => true
      validates :fob_point,                                  :presence => true
      validate  :validate_approvals
    end

    state :open do
      # validate  :validate_approve
    end

    state :partial do
    end

    state :complete do
    end

    state :cancelled do
    end

    ### CALLBACKS ###
    # after_transition :on => :costing, :do => :do_costing
    after_transition :on => :cancel,  :do => :do_cancel
    after_transition :on => :release, :do => :do_release
    after_transition :on => :approve, :do => :do_approve
    # after_transition :on => :open, :do => :do_open
    after_transition :on => :print,   :do => :do_print

    ### EVENTS ###
    event :release do
      transition :draft => :pending_approval
    end

    event :cancel do
      transition [:open, :partial] => :cancelled
    end

    event :allocate do
      transition [:draft, :pending, :approval, :open] => same
    end

    event :approve do
      transition :pending_approval => :pending_approval
    end

  end
  # STATES (End)


  # STATE HELPERS (Start) =====================================================================
  def allocate
    self.purchase_details.each {|x| x.allocate}
  end

  # Read all existing PurchaseAllocation records for the PurchaseDetail.  If the state is draft, then delete the record.
  # If the state is locked, then add the units_allocated to locked_units parameter and add the location_id to the locked_locations hash.
  def do_cancel
    # the Cancel event writes StockLedgerActivity rows for each PurchaseDetail
    # to update On Order and order history
     self.purchase_details.each {|pd| pd.cancel}
     self.cancelled_date = Date.today
     self.save
  end

  def do_release
    # the Release event validates that the correct number of PO Approvers has been entered and sends a notification to the first approver
  end

  def do_open
    self.state = "open"
    self.save
    self.purchase_details.each {|pd| pd.approve}
  end
  # STATE HELPERS (End)

  # HELPERS (Start) =====================================================================
  def mass_update
    if self.mass_update_type
      self.send(mass_update_type.downcase)
      # Blank out mass update paramaters after completing the mass update
      ['department_id', 'classification_id', 'subclass_id', 'style_id', 'is_include_conversions', 'mass_update_type', 'adjustment_percent', 'is_use_need_units'].each {|x| self.send("#{x}=", nil)}
      self.save
    else
      errors.add('mass_update_type','mass update type is required for mass update')
      raise 'mass update type is required for mass update'
    end
  end

  def sku_meets_criteria?(sku)
    return false unless sku.style_id == self.style_id if self.style_id
    return false unless sku.subclass_id == self.subclass_id if self.subclass_id
    return false unless sku.subclass.classification_id == self.classification_id if self.classification_id
    return false unless sku.subclass.classification.department_id == self.department_id if self.department_id
    return false if sku.is_converted unless self.is_include_conversions
    return false unless Omni::SkuSupplier.where(supplier_id: self.supplier_id, sku_id: sku.sku_id, is_discontinued: false).first
    return true
  end

  def adjust
    self.purchase_details.each do |pd|
      pd.units_ordered *= self.adjustment_percent / 100 if self.adjustment_percent
      pd.save
    end
  end

  def add
    # puts '000'
    self.supplier.sku_suppliers.each do |ss|
      # puts 100
      next if Omni::PurchaseDetail.where(purchase_id: self.purchase_id, sku_id: ss.sku_id).first
      # puts 200
      next unless sku_meets_criteria? ss.sku
      # puts 300
      next unless i = Omni::Inventory.where(location_id: self.location_id, sku_id: ss.sku_id, is_authorized: true).first
      # puts 400
      a=Omni::PurchaseDetail.create(units_ordered: units_to_order(i,ss), purchase_id: self.purchase_id, sku_id: ss.sku_id, sku_supplier_id: ss.sku_supplier_id, supplier_item_identifier: ss.supplier_item_identifier)
    end
    # puts 500
  end

  def clone
    new_purchase = Omni::Purchase.create(supplier_id: self.supplier_id, location_id: self.location_id, purchase_type: self.purchase_type, purchase_source: self.purchase_source, ship_via: self.ship_via, fob_point: self.fob_point, master_purchase_id: self.master_purchase_id, carrier_supplier_id: self.carrier_supplier_id, is_special_order: self.is_special_order, estimated_lead_time_days: self.estimated_lead_time_days, purchase_approver_1_user_id: self.purchase_approver_1_user_id, purchase_approver_1_location_user_id: self.purchase_approver_1_location_user_id, purchase_approver_1_user_id: self.purchase_approver_1_user_id, purchase_approver_2_location_user_id: self.purchase_approver_2_location_user_id, purchase_approver_3_user_id: self.purchase_approver_3_user_id, purchase_approver_3_location_user_id: self.purchase_approver_3_location_user_id, payment_term: self.payment_term, freight_term: self.freight_term, pay_to_supplier_id: self.pay_to_supplier_id, ship_thru_supplier_id: self.ship_thru_supplier_id, supplier_address_1: self.supplier_address_1, supplier_address_2: self.supplier_address_2, supplier_address_3: self.supplier_address_3, supplier_address_4: self.supplier_address_4, supplier_city: self.supplier_city, supplier_state_code: self.supplier_state_code, supplier_zip: self.supplier_zip, supplier_country: self.supplier_country)
    self.purchase_details.each do |pd|
      next if Omni::PurchaseDetail.where(purchase_id: self.purchase_id, sku_id: pd.sku_id).first
      next unless sku_meets_criteria? pd.sku
      next unless i = Omni::Inventory.where(location_id: self.location_id, sku_id: pd.sku_id, is_authorized: true).first
      units = units_to_order(i, pd.sku_supplier)
      pd.clone(new_purchase.purchase_id, units)
    end
  end

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

  def units_to_order(i, ss)
    units_to_order = self.is_use_need_units ? i.projection_details.joins(:projection).where(:projections => {plan_year: '2014'}).sum('current_approved_units') : 0
    units_to_order *= self.adjustment_percent / 100 if self.adjustment_percent
    units_to_order /= ss.order_pack_size
    [units_to_order, 1].max.round
  end

  def do_approve
    case self.approval_level
      when 1
        self.approval_1_date = Date.today
        self.save
        if self.purchase_approver_2_user_id
#         notify approver 2
        else
          self.do_open
        end
      when 2
        self.approval_2_date = Date.today
        self.save
        if self.purchase_approver_3_user_id
#         notify approver 3
        else
          self.do_open
        end
      when 3
        self.approval_3_date = Date.today
        self.save
        self.do_open
    end
 end

  def approval_level
    # Determine current user

    current_user_id = (Buildit::User.current ? Buildit::User.current.user_id : '811166D4D50A11E2B45820C9D04AARON') # aaron
    # puts "\ncurrent_user_id is #{current_user_id}"
    #  Determine whether this is the final approval or if the next approver needs to be notified
    approval_level = 0
     #  Determine which approval is needed (1, 2 or 3) and whether the user is authorized to do the approval
    if !self.approval_1_date
       errors.add("user", "may not authorize this purchase1") unless current_user_id == self.purchase_approver_1_user_id
       approval_level = 1
    else
       if !self.approval_2_date
          errors.add("user", "may not authorize this purchase2") unless current_user_id == self.purchase_approver_2_user_id
          approval_level = 2
       else
          if !self.approval_3_date
            errors.add("user", "may not authorize this purchase3") unless current_user_id == self.purchase_approver_3_user_id
             approval_level = 3
          else
             errors.add("purchase", "cannot be approved") unless current_user_id == self.purchase_approver_3_user_id
          end
       end
    end
    # puts "errors count is #{errors.count}"
    approval_level = 0 if errors.count > 0
    return approval_level
  end

  def validate_approvals
    # puts "total_order_cost is #{total_order_cost.to_s}"
    case
      when total_order_cost < Omni::SystemOption.first.purchase_approval_1_maximum_amount
        errors.add(:purchase_approver_1_user_id, "can't be blank") unless self.purchase_approver_1_user_id

      when total_order_cost < Omni::SystemOption.first.purchase_approval_2_maximum_amount
        errors.add(:purchase_approver_1_user_id, "can't be blank") unless self.purchase_approver_1_user_id
        errors.add(:purchase_approver_2_user_id, "can't be blank") unless self.purchase_approver_2_user_id

      when total_order_cost >= Omni::SystemOption.first.purchase_approval_2_maximum_amount
        errors.add(:purchase_approver_1_user_id, "can't be blank") unless self.purchase_approver_1_user_id
        errors.add(:purchase_approver_2_user_id, "can't be blank") unless self.purchase_approver_2_user_id
        errors.add(:purchase_approver_3_user_id, "can't be blank") unless self.purchase_approver_3_user_id
    end
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

# If an Allocation Profile is set or changed, update all the Purchase Details
  def update_allocation_profiles
    return if self.allocation_profile_id.nil?
    if self.allocation_profile_id_changed?
      if self.is_update_blank_details
          self.purchase_details.where(:allocation_profile_id => nil).each do |pd|
            pd.allocation_profile_id = self.allocation_profile_id
            pd.save
          end
      else
        if self.is_update_all_details
          self.purchase_details.each do |pd|
            pd.allocation_profile_id = self.allocation_profile_id
            pd.save
          end
        end
      end
    end
  end

  def cascading_delete
    # Delete all associated child rows in ReceiptDetail, ReceiptPurchase and ReceiptAllocation.
    if ['draft'].include? self.state
      self.purchase_details.all.each {|x| x.purchase_allocations.all.each {|x| x.destroy}}
      self.purchase_details.all.each {|x| x.destroy}
    else
      errors.add('state','only records in draft state may be deleted.')
      raise ActiveRecord::Rollback
    end
  end
  # HOOKS (End)

  def print
    Omni::Purchase::Helpers.print(self)
  end

  def do_print
    # Create a pdf of the purchase order for printing
    p = Omni::Print.new(:source_model => 'Purchase', :source_id => self.purchase_id)
    p.save
    p.print
  end

  # HELPERS (End)

end # class Omni::Purchase


  # def request(params={})
  #   @params = params
  #   self.send(params['request_type'])
  # end
