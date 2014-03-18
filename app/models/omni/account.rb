class Omni::Account < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name   = :accounts
  self.primary_key  = :account_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # DEFAULTS (Start) ====================================================================
  default      :account_id,                       override: false,        with: :guid
  default      :account_nbr,                      override: false,        with: :sequence, named: "ACCOUNT_NBR"
  default      :display,                          override: false,        to: lambda{|m| "#{m.account_name} - #{m.account_nbr}"}
  default      :billing_country,                  override: false,        :to  => "USA"
  default      :shipping_country,                 override: false,        :to  => "USA"
  default      :is_footwear_program,              override: false,        to: false
  default      :is_red_label_account,             override: false,        to: false
  default      :is_on_campus_store,               override: false,        to: false
  default      :is_on_web,                        override: false,        to: false
  default      :is_destroyed,                     override: false,        to: false
  # DEFAULTS (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true, uniqueness: true
  validates    :account_nbr,                     presence: true, uniqueness: true
  validates    :account_name,                    presence: true
  validates    :account_type,                    lookup: 'ACCOUNT_TYPE',               allow_nil: true
  validates    :school_type,                     lookup: 'SCHOOL_TYPE',                allow_nil: true
  validates    :prospect_type,                   lookup: 'PROSPECT_TYPE',              allow_nil: true
  validates    :contract_type,                   lookup: 'CONTRACT_TYPE',              allow_nil: true
  validates    :school_gender,                  lookup: 'ACCOUNT_GENDER',             allow_nil: true
  validates    :account_standing,                lookup: 'ACCOUNT_STANDING',           allow_nil: true
  validates    :account_exclusivity,             lookup: 'ACCOUNT_EXCLUSIVITY',        allow_nil: true
  validates    :annual_tuition,                  lookup: 'ANNUAL_TUITION',             allow_nil: true
  validates    :level_of_income,                 lookup: 'LEVEL_OF_INCOME',            allow_nil: true
  validates    :revenue_band,                    lookup: 'REVENUE_BAND',               allow_nil: true
  validates    :school_potential,                lookup: 'SCHOOL_POTENTIAL',           allow_nil: true
  validates    :billing_state,                   lookup: 'STATE_CODE',                 allow_nil: true
  validates    :shipping_state,                  lookup: 'STATE_CODE',                 allow_nil: true
  # VALIDATIONS (End)

  # REFERENCE (Start) ===================================================================
  reference do
    display_attribute  :display
    query_attribute    :display
    item_template      '{display}'
  end
  # REFERENCE (End)

  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :parent_account,                  class_name: 'Omni::Account',                 foreign_key: 'parent_account_id'
  belongs_to   :rep_user,                        class_name: 'Buildit::User',                 foreign_key: 'rep_user_id'
  belongs_to   :location,                        class_name: 'Omni::Location',                foreign_key: 'location_id'
  belongs_to   :from_grade,                      class_name: 'Omni::Grade',                   foreign_key: 'from_grade_id'
  belongs_to   :thru_grade,                      class_name: 'Omni::Grade',                   foreign_key: 'thru_grade_id'
  has_many     :contacts,                class_name: 'Omni::Contact',          foreign_key: 'account_id'
  has_many     :donations,               class_name: 'Omni::Donation',         foreign_key: 'account_id'
  has_many     :enrollments,             class_name: 'Omni::Enrollment',       foreign_key: 'account_id'
  has_many     :grades,                  class_name: 'Omni::AccountGrade',            foreign_key: 'account_id'
  has_many     :tax_authorities,         class_name: 'Omni::AccountTaxAuthority',     foreign_key: 'account_id'
  has_many     :customers,               class_name: 'Omni::CustomerAccount',         foreign_key: 'account_id'
  has_many     :order_details,                   class_name: 'Omni::OrderDetail',             foreign_key: 'account_id'
  has_many     :stock_ledger_activities,         class_name: 'Omni::StockLedgerActivity',     foreign_key: 'account_id'
  has_many     :uniforms,                        class_name: 'Omni::Uniform',                 foreign_key: 'account_id'
  has_many     :notes,                           class_name: 'Buildit::Note',                 foreign_key: 'notable_id',    as: :notable
  # has_many     :events,                           class_name: 'Buildit::Event',                 foreign_key: 'eventable_id',    as: :eventable
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :parent_account_display,                    to: 'parent_account.display'
    map :location_display,                       to: 'location.display'
  end
  # MAPPED ATTRIBUTES (End)

  # HOOKS (Start) =======================================================================
  hook  :after_create,      :note,             10
  hook  :after_update,      :note,             20

  def note
    if self.state_changed?
      user = Buildit::User.current ? Buildit::User.current.full_name : "the system"
      self.notes.create(detail: "state changed to #{state} by #{user} on #{Date.today.to_s}")
    end
  end
  # HOOKS (End)

  # INDEXING (Start) ====================================================================
  order_search_by :display => :asc

  searchable do
    string   :account_id
    string   :display
    string   :account_name
    string   :account_nbr
    string   :location_display do location.display if location end
    string   :billing_city
    string   :shipping_city
    # string   :billing_state do |x| Buildit::Lookup::Manager.display_for('STATE_CODE', x.billing_state) end
    # string   :shipping_state do |x| Buildit::Lookup::Manager.display_for('STATE_CODE', x.shipping_state) end

    # text     :display_fulltext, using: :display
    text     :account_name_fulltext, using: :account_name
    text     :account_nbr_fulltext, using: :account_nbr
    # text     :location_display_fulltext, using: :location_display
    text     :billing_city_fulltext, using: :billing_city
    # text     :shipping_city _fulltext, using: :shipping_city
    # text     :billing_state_fulltext, using: :billing_state
    # text     :shipping_state_fulltext, using: :shipping_state
  end
  # INDEXING (End)

  # STATES (Start) ====================================================================
  state_machine :state, initial: :draft do
    # store_audit_trail
  ### STATES ###
    state :draft do
    end

    state :active do
      # validate  :validate_approvals
      # validates :account_nbr,              :presence => true
    end

    state :closed do
      # validate  :validate_approve
    end

    ### CALLBACKS ###
    after_transition on: :activate, do: :do_activate
    after_transition on: :close, do: :do_close
    # after_transition :event
    # around_transition :event

    ### EVENTS ###
    # event :crash do
    #   transition all - [:parked, :stalled] => :stalled, :if => lambda {|vehicle| !vehicle.passed_inspection?}
    # end

    # event :repair do
    #   # The first transition that matches the state and passes its conditions
    #   # will be used
    #   transition :stalled => :parked, :unless => :auto_shop_busy
    #   transition :stalled => same
    # end

    event :activate do
      transition draft: :active # if current_user has privilege purchase_release
    end

    event :close do
      transition [:draft, :active, :closed] => :closed
    end

  end
  # STATES (End)


  # STATE HELPERS (Start) =====================================================================
  def do_activate
  #   self.account_details.each {|x| x.activate}
  end

  def do_close

  end

  def sync_grades
    # puts "\n***** syncing grades ********\n"
    if self.from_grade_id_changed? || self.thru_grade_id_changed?
      self.grades.each {|x| x.destroy}
      grade_count = Omni::Grade.where('grade_order >= ? and grade_order <= ?', from_grade.grade_order, thru_grade.grade_order).count
      Omni::Grade.where('grade_order >= ? and grade_order <= ?', from_grade.grade_order, thru_grade.grade_order).each {|g| Omni::AccountGrade.create(account_id: self.account_id, grade_id: g.grade_id, grade_order: g.grade_order, grade_name: g.grade_name)} if self.from_grade && self.thru_grade
      # count = Omni::AccountGrade.where(account_id: self.account_id).count
    end

  end

  # STATES HELPERS (End)

  # HOOKS (Start) =======================================================================
  hook :before_create, :sync_grades, 10
  hook :before_update, :sync_grades, 20
  # HOOKS (End)

end # class Omni::Account

