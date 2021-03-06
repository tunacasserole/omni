class Omni::Uniform < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :uniforms
  self.primary_key  = :uniform_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  # validates    :display,                         presence: true, uniqueness: true
  validates    :uniform_nbr,                     presence: true, uniqueness: true
  validates    :account_id,                      presence: true
  validates    :school_year,                     presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :uniform_id,                       override: false,        with: :guid
  default      :uniform_nbr,                      override: false,        with: :sequence,         named: "UNIFORM_NBR"
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
    display_attribute  :display_as
    query_attribute    :display_as
    item_template      '{display_as}'
  end
  # REFERENCE (End)

  # ASSOCIATIONS (Start) ================================================================
  has_many     :uniform_details,                class_name: 'Omni::UniformDetail',          foreign_key: 'uniform_id'#, :dependent => :delete_all
  has_many     :uniform_lookups,                class_name: 'Omni::UniformLookup',          foreign_key: 'uniform_id'#, :dependent => :delete_all
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
  order_search_by :display => :asc

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
    after_transition on: :activate, do: :activate_q
    after_transition on: :close, do: :close_q

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
      transition [:draft, :active, :closed] => :active
    end

    event :close do
      transition [:draft, :active, :closed] => :closed
    end

  end
  # STATES (End)


  # STATE HELPERS (Start) =====================================================================
  def activate_q
    self.send('state=','active')
    message     = { method_name: 'do_activate', uniform_id: self.id, user_id: Omni::Util::User.id }
    Buildit::Messaging::Publisher.push('omni.events', message.to_json, :routing_key => 'uniform')
  end

  def close_q
    self.send('state=','closed')
    message     = { method_name: 'do_close', uniform_id: self.id, user_id: Omni::Util::User.id }
    Buildit::Messaging::Publisher.push('omni.events', message.to_json, :routing_key => 'uniform')
  end

  def do_activate
    # # delete all uniform_lookups for account
    Omni::UniformLookup.where(account_id: self.account_id).each { |x| x.destroy }
    # active all uniform uniform_details"
    self.uniform_details.each { |x| x.activate }
    # log an approval
    self.approvals.create(approvable_type: 'Omni::Uniform', display: 'uniform was approved')
    # closing any other active uniforms to ensure only 1 active uniform per account
    self.account.uniforms.each {|x| x.close if x.state?(:active) unless x == self} if self.account
  end

  def do_close
    self.uniform_details.each {|x| x.close}
  end
  # STATES HELPERS (End)

  # HELPERS (Start) =====================================================================
  def ppl
    # retrieve the style display name, pos name, description, and price
    ppl = []
    self.uniform_details.each do |x|
      pl = [x.style.display, x.style.pos_name, x.style.description, x.style.initial_retail_price.to_s]
      # puts pl.to_s
      ppl << pl
    end
    ppl
  end
  # HELPERS (End)

  def display_as
    self.uniform_name
  end
end # class Omni::Uniform

