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
  # supports_audit
  #supports_revisioning
  supports_fulltext

  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates :supplier_id,                        :presence      => true
  validates :display,                            :uniqueness    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default :purchase_id,                                                       :with => :guid
  default :purchase_order_nbr,                   :override  =>  false,        :with => :sequence,  :named=>"PURCHASE_ORDER_NBR"
  default :order_date,                                                        :with => :now
  default :is_special_order,                                                  :to   => false
  default :is_phone_order,                                                    :to   => false
  default :is_update_blank_details,                                           :to   => false
  default :is_update_all_details,                                             :to   => false
  default :display,                              :override  =>  false,        :to   => lambda{|m| "#{m.supplier_display} - Order Number: #{m.purchase_order_nbr}"}
  default :ordered_by_user_id,                                                :to   => lambda{|m| Buildit::User.current.user_id if Buildit::User.current}
  default :payment_term,                                                      :to   => lambda{|m| m.supplier.default_payment_term}
  default :freight_term,                                                      :to   => lambda{|m| m.supplier.freight_term}
  default :ship_via,                                                          :to   => lambda{|m| m.supplier.ship_via}
  # default :fob_point,                                                         :to   => lambda{|m| "#{m.supplier_fob_point}"}
  default :is_ship_cancel,                                                    :to   => lambda{|m| m.supplier.is_ship_cancel}
  default :estimated_lead_time_days,                                          :to   => lambda{|m| m.supplier.lead_time}
  default :delivery_date,                                                     :to   => lambda{|m| m.order_date + m.estimated_lead_time_days.days}
  default :cancel_not_received_by_date,                                       :to   => lambda{|m| m.delivery_date + 30.days}
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
  order_search_by :display => :asc
  # ORDERING (End)

  # FILTERS (Start) =====================================================================

  # FILTERS (End)

  # SCOPES (Start) ======================================================================

  # SCOPES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    # Exact match attributes
    string   :purchase_id
    string   :location_id
    string   :supplier_id
    string   :display
    string   :state
    string   :purchase_order_nbr
    string   :supplier_display
    string   :location_display
    date     :order_date
    date     :ship_date
    date     :delivery_date
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
  # before_destroy :cascading_delete

  hook :before_update, :recompute_delivery_date, 10
  hook :before_update, :recompute_cancel_date, 20
  hook :before_update, :update_allocation_profiles, 30

  # hook :before_create, :set_defaults, 10

  # HOOKS (End)

  # STATES (Start) ====================================================================
  state_machine :state, :initial => :draft do

  ### STATES ###
    state :draft do
    end

    state :pending_approval do
      validates :purchase_order_nbr,                         :presence => true
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
      validate  :validate_release
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
    # after_transition :on => :costing, :do => :process_costing
    after_transition :on => :cancel,  :do => :process_cancel
    after_transition :on => :release, :do => :process_release
    # after_transition :on => :approve, :do => :process_approve
    # after_transition :on => :open, :do => :process_open
    after_transition :on => :print,   :do => :process_print

  ### EVENTS ###
    event :release do
      transition :draft => :pending_approval
    end

    event :cancel do
      transition [:open, :partial] => :cancelled
    end
    # event :open do
    #   transition :pending_approval => :open
    # end

  end
  # STATES (End)


  # STATE HELPERS (Start) =====================================================================
  def process_cancel
    # the Cancel event writes StockLedgerActivity rows for each PurchaseDetail
    # to update On Order and order history
     self.purchase_details.each {|pd| pd.cancel}
     self.cancelled_date = Date.today
     self.save
  end

  def process_release
    # the Release event validates that the correct number of PO Approvers has been entered and sends a notification to the first approver

      # message = Buildit::Comm::Email::Message.create(
      #     subject: "Omni notice: purchase - #{self.purchase_order_nbr} has been released.",
      #     body: Buildit::Email::Manager.generate(self, "purchase_notice")
      # )
      # # email_addresses = Buildit::User.all.collect {|u| u.email_address}
      # email_addresses = Buildit::User.where(:user_id => self.purchase_approver_1_user_id).first.email_address
      # message.send_to email_addresses
      # message.queue

  end

  def process_open
       self.state = "open"
       self.save
       self.purchase_details.each {|pd| pd.approve}
  end

  # STATE HELPERS (End)

  # HELPERS (Start) =====================================================================
   def approve
      case self.approval_level
        when 1
          self.approval_1_date = Date.today
          self.save
          if self.purchase_approver_2_user_id
  #         notify approver 2
          else
            self.process_open
          end
        when 2
          self.approval_2_date = Date.today
          self.save
          if self.purchase_approver_3_user_id
  #         notify approver 3
          else
            self.process_open
          end
        when 3
          self.approval_3_date = Date.today
          self.save
          self.process_open
      end
   end

  def approval_level
    # Determine current user

    current_user_id = (Buildit::User.current ? Buildit::User.current.user_id : '811166D4D50A11E2B45820C9D04AARON') # aaron

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

  def queue
    # self.purchase_costs.all.each {|x| x.destroy}
    self.purchase_allocations.all.each {|x| x.destroy}
    self.purchase_details.all.each {|x| x.destroy}
  end

  def validate_release

    if self.total_order_cost.to_i < Omni::SystemOption.first.purchase_approval_1_maximum_amount
        errors.add("approver 1", "can't be blank") unless self.purchase_approver_1_user_id
    else
      if self.total_order_cost < Omni::SystemOption.first.purchase_approval_2_maximum_amount
        errors.add("approver 1", "can't be blank") unless self.purchase_approver_1_user_id
        errors.add("approver 2", "can't be blank") unless self.purchase_approver_2_user_id
      else
        errors.add("approver 1", "can't be blank") unless self.purchase_approver_1_user_id
        errors.add("approver 2", "can't be blank") unless self.purchase_approver_2_user_id
        errors.add("approver 3", "can't be blank") unless self.purchase_approver_3_user_id
      end
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

  # Get the email address
  def approver_email
  # Search event table for user_id of approver
    return 'aaron@buildit.io'
  end

  def print
    Omni::Purchase::Helpers.print(self)
  end

  def process_print
    # Create a pdf of the purchase order for printing
    p = Omni::Print.new(:source_model => 'Purchase', :source_id => self.purchase_id)
    p.save
    p.print
  end

  # HELPERS (End)

end # class Omni::Purchase

