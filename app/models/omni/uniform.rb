class Omni::Uniform < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :uniforms
  self.primary_key  = :uniform_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true, uniqueness: true
  validates    :uniform_nbr,                     presence: true, uniqueness: true
  validates    :account_id,                      presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :uniform_id,                       override: false,        with: :guid
  default      :uniform_nbr,                      override: false,        with: :sequence,         named: "UNIFORM_NBR"
  default      :display,                          override: false,        to: lambda{|m| "#{m.uniform_name} - #{m.uniform_nbr}"}
  default      :discount_percent,                 override: false,        to: 0
  default      :teacher_discount_percent,         override: false,        to: 0
  default      :administrator_discount_percent,   override: false,        to: 0
  default      :is_discount_in_store,             override: false,        to: false
  default      :is_discount_on_web,               override: false,        to: false
  default      :is_free_shipping,                 override: false,        to: false
  default      :is_destroyed,                     override: false,        to: false
  # DEFAULTS (End)

  # REFERENCE (Start) ===================================================================
  reference do
    display_attribute  :display
    query_attribute    :display
    item_template      '{display}'
  end
  # REFERENCE (End)

  # ASSOCIATIONS (Start) ================================================================
  has_many     :details,                class_name: 'Omni::UniformDetail',          foreign_key: 'uniform_id'#, :dependent => :delete_all
  has_many     :lookups,                class_name: 'Omni::UniformLookup',          foreign_key: 'uniform_id'#, :dependent => :delete_all
  belongs_to   :account,                class_name: 'Omni::Account',                foreign_key: 'account_id'
  has_many     :approvals,              class_name: 'Desk::Approval',               foreign_key: 'approvable_id'
  has_many     :notes,                  class_name: 'Buildit::Note',                foreign_key: 'notable_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :account_display,                           to: 'account.display'
  end
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :uniform_id
    string   :account_id
    string   :display
    string   :uniform_nbr

    text     :display_fulltext, using: :display
    text     :uniform_nbr_fulltext, using: :uniform_nbr
  end

 # STATES (Start) ====================================================================
  state_machine :state, initial: :draft do

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
    # active all uniform details
    self.details.each {|x| x.activate}
    # log an approval
    self.approvals.create(approvable_type: 'Omni::Uniform', display: 'uniform was approved')
    # closing any other active uniforms to ensure only 1 active uniform per account
    self.account.uniforms.each {|x| x.close if x.state?(:active) unless x == self} if self.account
  end

  def do_close
    self.details.each {|x| x.close}
  end
  # STATES HELPERS (End)

end # class Omni::Uniform

