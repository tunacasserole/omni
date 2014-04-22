class Omni::Contract < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name   = :contracts
  self.primary_key  = :contract_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                  presence: true, uniqueness: true
  validates    :contract_nbr,             presence: true, uniqueness: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :contract_id,            override: false,        with: :guid
  default      :contract_nbr,           override: false,        with: :sequence, named: "CONTRACT_NBR"
  default      :display,                override: false,        to: lambda{|m| "#{m.account_display}, Contract: #{m.contract_nbr} - #{m.effective_date}"}
  default      :rep_user_id,            override: false,        to: lambda{|m| m.account.rep_user_id if m.account}
  default      :is_exclusive,           override: false,        to: false
  default      :is_discount_in_store,   override: false,        to: false
  default      :is_discount_on_web,     override: false,        to: false
  default      :is_destroyed,           override: false,        to: false
  # DEFAULTS (End)

  # REFERENCE (Start) ===================================================================
  reference do
    display_attribute  :display
    query_attribute    :display
    item_template      '{display}'
  end
  # REFERENCE (End)

  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :account,                  class_name: 'Omni::Account',                 foreign_key: 'account_id'
  belongs_to   :rep_user,                 class_name: 'Buildit::User',                 foreign_key: 'rep_user_id'
  belongs_to   :parker_signed_by_user,    class_name: 'Buildit::User',                 foreign_key: 'parker_signed_by_user_id'
  belongs_to   :customer_signed_by_user,  class_name: 'Buildit::User',                 foreign_key: 'customer_signed_by_user_id'
  belongs_to   :activated_by_user,        class_name: 'Buildit::User',                 foreign_key: 'activated_by_user_id'
  has_many     :notes,                    class_name: 'Buildit::Note',                 foreign_key: 'notable_id',    as: :notable
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :account_display,                      to: 'account.display'
    map :rep_user_display,                     to: 'rep_user.display'
    map :parker_signed_by_user_display,        to: 'parker_signed_by_user.display'
    map :customer_signed_by_user_display,      to: 'customer_signed_by_user.display'
    map :activated_by_user_display,            to: 'activated_by_user.display'
  end
  # MAPPED ATTRIBUTES (End)

  # HOOKS (Start) =======================================================================
  # HOOKS (End)

  # INDEXING (Start) ====================================================================
  order_search_by :display => :asc

  searchable do
    string   :account_id
    string   :display
    string   :account_display do account.display if account end

    text     :display_fulltext, using: :display
    text     :account_display_fulltext, using: :account_display
  end
  # INDEXING (End) ====================================================================

 # STATES (Start) ====================================================================
  state_machine :state, initial: :draft do

  ### STATES ###
    state :draft do
    end

    state :active do
      # validate  :validate_approvals
      # validates :account_nbr,              presence: true
    end

    state :closed do
      # validate  :validate_approve
    end

    ### CALLBACKS ###
    after_transition on: :activate, do: :do_activate
    after_transition on: :close, do: :do_close

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
  # STATES HELPERS (End)
end # class Omni::Contract

