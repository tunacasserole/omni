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
  default :display,                              :override  =>  false,        :to   => lambda{|m| "#{m.supplier_display} - Order Number: #{m.purchase_order_nbr}"}
  default :ordered_by_user_id,                                                :to   => lambda{|m| Buildit::User.current.user_id if Buildit::User.current}
  default :payment_term,                                                      :to   => lambda{|m| "#{m.supplier.default_payment_term}"}
  default :freight_term,                                                      :to   => lambda{|m| "#{m.supplier.freight_term}"}
  default :ship_via,                                                          :to   => lambda{|m| "#{m.supplier.ship_via}"}
  # default :fob_point,                                                         :to   => lambda{|m| "#{m.supplier_fob_point}"}
  default :is_ship_cancel,                                                    :to   => lambda{|m| "#{m.supplier.is_ship_cancel}"}
  default :estimated_lead_time_days,                                          :to   => lambda{|m| "#{m.supplier.lead_time}"}
  default :delivery_date,                                                     :to   => lambda{|m| m.order_date + m.estimated_lead_time_days.days}
  default :cancel_not_received_by_date,                                       :to   => lambda{|m| m.delivery_date + 30.days}

  # DEFAULTS (End)


  # ASSOCIATIONS (Start) ================================================================
  has_many     :purchase_details,              :class_name => 'Omni::PurchaseDetail',    :foreign_key => 'purchase_id'
  has_many     :logs,                          :class_name => 'Omni::Log',               :foreign_key => 'logable_id' , :as => :logable
  belongs_to   :location,                      :class_name => 'Omni::Location',          :foreign_key => 'location_id'
  belongs_to   :supplier,                      :class_name => 'Omni::Supplier',          :foreign_key => 'supplier_id'
  belongs_to   :ordered_by_user,               :class_name => 'Buildit::User',           :foreign_key => 'ordered_by_user_id'
  belongs_to   :confirmed_by_user,             :class_name => 'Buildit::User',           :foreign_key => 'confirmed_by_user_id'
  belongs_to   :master_purchase,               :class_name => 'Omni::Purchase',          :foreign_key => 'master_purchase_id'
  belongs_to   :carrier_supplier,              :class_name => 'Omni::Supplier',          :foreign_key => 'carrier_supplier_id'
  belongs_to   :purchase_approver_1_user,      :class_name => 'Buildit::User',           :foreign_key => 'purchase_approver_1_user_id'
  belongs_to   :purchase_approver_2_user,      :class_name => 'Buildit::User',           :foreign_key => 'purchase_approver_2_user_id'
  belongs_to   :purchase_approver_3_user,      :class_name => 'Buildit::User',           :foreign_key => 'purchase_approver_3_user_id'
  belongs_to   :purchase_approver_1_location_user,   :class_name => 'Omni::LocationUser',     :foreign_key => 'purchase_approver_1_location_user_id'
  belongs_to   :purchase_approver_2_location_user,   :class_name => 'Omni::LocationUser',     :foreign_key => 'purchase_approver_2_location_user_id'
  belongs_to   :purchase_approver_3_location_user,   :class_name => 'Omni::LocationUser',     :foreign_key => 'purchase_approver_3_location_user_id'
  # ASSOCIATIONS (End)


  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :ordered_by_user_display,                :to => 'ordered_by_user.display'
    map :confirmed_by_user_display,              :to => 'confirmed_by_user.display'
    map :supplier_display,                       :to => 'supplier.display'
    map :master_purchase_display,                :to => 'master_purchase.display'
    map :carrier_supplier_display,               :to => 'carrier_supplier.display'
    map :location_display,                       :to => 'location.display'
    map :purchase_approver_1_user_display,       :to => 'purchase_approver_1_user.display'
    map :purchase_approver_2_user_display,       :to => 'purchase_approver_2_user.display'
    map :purchase_approver_3_user_display,       :to => 'purchase_approver_3_user.display'
    map :purchase_approver_1_location_user_display,    :to => 'purchase_approver_1_location_user.display'
    map :purchase_approver_2_location_user_display,    :to => 'purchase_approver_2_location_user.display'
    map :purchase_approver_3_location_user_display,    :to => 'purchase_approver_3_location_user.display'

  end
  # MAPPED ATTRIBUTES (End)


  # COMPUTED ATTRIBUTES (Start) =========================================================
  computed_attributes do
    compute :total_order_units,                  :with => :compute_total_order_units
    compute :total_order_cost,                   :with => :compute_total_order_cost

  end

  # COMPUTED ATTRIBUTES (End)`


  # TEMPORARY ATTRIBUTES (Start) ========================================================

  # TEMPORARY ATTRIBUTES (End)

  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc
  # ORDERING (End)

  # FILTERS (Start) =====================================================================

  # FILTERS (End)


  # ORDERING (Start) ====================================================================

  # ORDERING (End)


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
    # string   :purchase_type
    # string   :purchase_source
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

  end

  # INDEXING (End)


  # HOOKS (Start) =======================================================================
  # before_destroy :cascading_delete

  hook :before_update, :recompute_delivery_date, 10
  hook :before_update, :recompute_cancel_date, 20
  # hook :before_create, :recompute_delivery_date, 10
  # hook :before_create, :recompute_cancel_date, 20

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
      validate  :transition_to_pending_approval
    end

    state :open do
      validate  :transition_to_open
    end

    state :costing do

    end

    state :allocating do

    end

  ### CALLBACKS ###
    after_transition :on => :costing, :do => :process_costing
    after_transition :on => :release, :do => :process_release
    after_transition :on => :approve, :do => :process_approve
    after_transition :on => :print,   :do => :process_print

  ### EVENTS ###
    event :costing do
      transition any => :costing
      transition :costing => :draft
    end
    event :release do
      transition :draft => :pending_approval
    end
    event :approve do
      transition :pending_approval => :open
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
    # the Release event validates that the correct number of PO Approvers has been entered and sends a notification to the first approver


      message = Buildit::Comm::Email::Message.create(
          subject: "Omni notice: purchase - #{self.purchase_order_nbr} has been released.",
          body: Buildit::Email::Manager.generate(self, "purchase_notice"),
      )
      # email_addresses = Buildit::User.all.collect {|u| u.email_address}
      email_addresses = Buildit::User.where(:user_id => self.purchase_approver_1_user_id).first.email_address
      message.send_to email_addresses
      message.queue

  end

  def process_approve
    # the Approve event writes StockLedgerAudit rows to update On Order and order history; an approved PO is a legally binding contract with the Supplier
    # Omni::StockLedgerAudit.create(:)
    # self.purchasae_detail.each do |pd|
    #   sl = Omni::StockLedgerAudit.create(
    #     sl.stockable_type = 'Omni::Purchase'
    #     sl.stockable_id = self.purchase_id
    #     sl.ruleset_id = Omni::Ruleset.where(ruleset_code = 'ApprovePurchase').ruleset_id if ruleset_id
    #     sl.sku_id = pd.sku_id
    #     sl.location_id = self.location_id
    #     sl.supplier_id = self.supplier_id
    #     sl.units = pd.order_units * pd.order_pack_size
    #     sl.cost = pd.supplier_cost / pd.order_cost_units
    #     sl.retail = 0
    #     sl.create_date = Date.today
    #     sl.activity_date = Date.today
    #   )
    # end

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

  def transition_to_pending_approval
    if self.total_order_cost < Omni::SystemOption.first.purchase_approval_1_maximum_amount
        errors.add('state', 'approver 1 required') unless self.purchase_approver_1_user_id.length > 1
    else
      if self.total_order_cost < Omni::SystemOption.first.purchase_approval_2_maximum_amount
        errors.add('state', 'approver 1 required') unless self.purchase_approver_1_user_id.length > 1
        errors.add('state', 'approver 2 required') unless self.purchase_approver_2_user_id.length > 1
      else
        errors.add('state', 'approver 1 required') unless self.purchase_approver_1_user_id.length > 1
        errors.add('state', 'approver 2 required') unless self.purchase_approver_2_user_id.length > 1
        errors.add('state', 'approver 3 required') unless self.purchase_approver_3_user_id.length > 1
      end
    end
  end

  def transition_to_open
    # current_user = Buildit::User.current.user_id
    current_user = '1F040E2409C611E3B93028CFE9147CA7'
    puts '*********************'
    approver = false
    if current_user == self.purchase_approver_1_user_id
      approver = true
      puts 'if number 1'
      if !self.approval_1_date
        puts 'if number 2'
        self.approval_1_date = Date.today
        if self.purchase_approver_2_user_id
          puts 'if number 3'
          errors.add('state', 'approval 2 is needed')
              # send notification
        else
        #   # do :write_stock_ledger_activity
          puts 'Stock Ledger Activity 1'
        end
      else
        puts 'if number 4'
        if current_user != self.purchase_approver_2_user_id
          puts 'if number 5'
          errors.add('state', 'approval 1 already done')
        end
      end
    end

    if current_user == self.purchase_approver_2_user_id
      approver = true
      puts 'if number 6'
      if !self.approval_1_date
          errors.add('state', 'approval 1 must be done first')
      else
        if !self.approval_2_date
          self.approval_2_date = Date.today
          if self.purchase_approver_3_user_id
            #    # do :write_stock_ledger_activity
            puts 'Stock Ledger Activity 2'

          else
            puts 'if number 9'
            errors.add('state', 'approval 3 is needed')
               # send notification to approver 3
          end
        else
          if current_user != self.purchase_approver_3_user_id
            errors.add('state', 'approval 2 already done')
          end
        end
      end
    end

    if current_user == self.purchase_approver_3_user_id
      approver = true
      if !self.approval_2_date
          errors.add('state', 'approval 2 must be done first')
      else
        if !self.approval_3_date
          self.approval_3_date = Date.today
              # do :write_stock_ledger_activity
          puts 'Stock Ledger Activity 3'

        else
          errors.add('state', 'approval 3 already done')
        end
      end
    end

    if !approver
        errors.add('state', 'user not authorized to approve this purchase')
    end

  end

  def compute_total_order_units
# Option 1 - Iterate through each detail record
    # :total_order_units = 0
    # :total_order_cost = 0
    # :total_order_weight = 0
    # :total_order_cube = 0
#     self.purchase_details.each do
#       :total_order_units = :total_order_units + (:units_ordered * :order_pack_size)
#       # :total_order_cost = :total_order_cost + ((:units_ordered * :order_pack_size) * (:supplier_cost / :order_cost_units))
#     end

# # Option 2 - Use multiple "sum" statements
    self.purchase_details.sum('units_ordered * order_pack_size') if self.purchase_details

  end

  def compute_total_order_cost
    self.purchase_details.sum('(units_ordered * order_pack_size) * (supplier_cost / order_cost_units)')
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