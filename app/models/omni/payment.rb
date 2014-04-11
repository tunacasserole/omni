class Omni::Payment < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :payments
  self.primary_key  = :payment_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :payment_nbr,                     presence: true, uniqueness: true
  validates    :display,                         presence: true, uniqueness: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :payment_id,                       override: false,        with: :guid
  default      :payment_nbr,                      override: false,        with: :sequence,         named: "PAYMENT_NBR"
  default      :display,                          override: false,        to: lambda{|m| "Payment: #{m.payment_nbr}"}
  default      :payment_amount,                   override: false,        to: 0
  default      :layaway_deposit_amount,           override: false,        to: 0
  default      :routing_number,                   override: false,        to: 0
  default      :is_prior_authorized_capture,      override: false,        to: false
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
  belongs_to   :order,                           class_name: 'Omni::Order',                   foreign_key: 'order_id'
  belongs_to   :customer,                        class_name: 'Omni::Customer',                foreign_key: 'customer_id'
  belongs_to   :terminal,                        class_name: 'Omni::Terminal',                foreign_key: 'terminal_id'
  belongs_to   :location,                        class_name: 'Omni::Location',                foreign_key: 'location_id'
  belongs_to   :tender,                          class_name: 'Omni::Tender',                  foreign_key: 'tender_id'
  belongs_to   :voucher,                         class_name: 'Omni::Voucher',                 foreign_key: 'voucher_id'
  has_many     :notes,                           class_name: 'Buildit::Note',                     foreign_key: 'notable_id',       as: :notable
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :order_display,                          to: 'order.display'
    map :customer_display,                       to: 'customer.display'
    map :terminal_display,                       to: 'terminal.display'
    map :location_display,                       to: 'location.display'
    map :tender_display,                         to: 'tender.display'
    map :voucher_display,                        to: 'voucher.display'
  end
  # MAPPED ATTRIBUTES (End)

  # SCOPES (Start) ======================================================================

  # SCOPES (End)


  # HOOKS (Start) =======================================================================
  hook :before_update, :set_till_totals, 10

  def set_till_totals

  end
  # HOOKS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :payment_id
    string   :order_id
    string   :customer_id
    string   :terminal_id
    string   :location_id
    string   :voucher_id
    string   :order_display do order.display if order end
    string   :customer_display do customer.display if customer end
    string   :terminal_display do terminal.display if terminal end
    string   :location_display do location.display if location end
    string   :tender_display do tender.display if tender end
    string   :state

    text     :order_display_fulltext, using: :order_display
    text     :customer_display_fulltext, using: :customer_display
    text     :terminal_display_fulltext, using: :terminal_display
    text     :location_display_fulltext, using: :location_display
    text     :tender_display_fulltext, using: :tender_display
  end
  # INDEXING (End)

  # STATES (Start) ====================================================================
  state_machine :state, initial: :draft do

  ### CALLBACKS ###
    after_transition on: :approve, do: :after_approve
    after_transition on: :decline, do: :after_decline

  ### EVENTS ###
    event :approve do
      transition draft: :approved
    end
    event :decline do
      transition draft: :declined
    end
  end
  # STATES (End)

  # STATE HANDLERS (Start) ====================================================================

  # approve => draft to complete
  def after_approve

  end # def after_approve


  # decline => draft to declined
  def after_decline

  end # def after_decline

  # STATE HANDLERS (End)
end # class Omni::Payment

