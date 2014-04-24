class Omni::Voucher < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :vouchers
  self.primary_key  = :voucher_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :voucher_nbr,                     presence: true, uniqueness: true
  # validates    :display,                         presence: true, uniqueness: true
  validates    :customer_id,                     presence: true
  validates    :expiration_date,                 presence: true
  validates    :initial_balance,                 presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :voucher_id,                       override: false,        with: :guid
  default      :voucher_nbr,                      override: false,        with: :sequence,    named: "VOUCHER_NBR"
  default      :display,                          override: false,        to: lambda{|m| "#{m.voucher_type} - #{m.voucher_nbr}"}
  default      :current_balance,                  override: false,        to: lambda { |m| m.initial_balance }
  default      :initial_balance,                  override: false,        to: 0
  default      :expiration_date,                  override: false,        to: lambda { |m| Date.today + 12.months }
  default      :issue_date,                       override: false,        with: :today
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
  belongs_to   :customer,                        class_name: 'Omni::Customer',                foreign_key: 'customer_id'
  has_many     :notes,                           class_name: 'Buildit::Note',                 foreign_key: 'notable_id',       as: :notable
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :customer_display,                       to: 'customer.display'
  end
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :voucher_id
    string   :customer_id
    string   :customer_display do customer.display if customer end
    string   :voucher_nbr

    text     :customer_display_fulltext, using: :customer_display
    text     :voucher_nbr_fulltext, using: :voucher_nbr
  end
  order_search_by voucher_nbr: :desc
  # INDEXING (End)

  # STATES (Start) ====================================================================
  state_machine :state, initial: :draft do

  ### CALLBACKS ###
    after_transition on: :verify, do: :after_verify

  ### EVENTS ###
    event :verify do
      transition draft: :same
    end
  end
  # STATES (End)

  # STATE HANDLERS (Start) ====================================================================

  # verify => draft to final
  def after_verify

  end # def after_validate


  # use => draft to used
  def charge(amount)
    self.current_balance -= amount
    self.state = 'complete' if self.current_balance < 0.01
    save
  end # def after_use

  # STATE HANDLERS (End)
  def display_as
    display
  end

  # def verify_voucher
  #   errors.add(:voucher_id, 'voucher expired') if expiration_date < Date.yesterday
  #   errors.add(:voucher_id, 'voucher expired') if state == 'expired'
  #   errors.add(:voucher_id, 'no remaining balance on voucher') if state == 'complete'
  #   errors.add(:voucher_id, 'no remaining balance on voucher') if current_balance < 0.01
  # end

  def display_as
    self.display
  end


  def display_as
    self.display
  end
end # class Omni::OrderDetail

