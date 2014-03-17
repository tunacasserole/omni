class Omni::Voucher < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :vouchers
  self.primary_key  = :voucher_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  # validates    :voucher_nbr,                     presence: true, uniqueness: true
  # validates    :display,                         presence: true, uniqueness: true
  validates    :customer_id,                     presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :voucher_id,                       override: false,        with: :guid
  default      :voucher_nbr,                      override: false,        with: :sequence,    named: "VOUCHER_NBR"
  default      :display,                          override: false,        to: lambda{|m| "#{m.voucher_type} - #{m.voucher_nbr}"}
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
    string   :customer_display do customer.display if customer end
    string   :voucher_nbr

    text     :customer_display_fulltext, using: :customer_display
    text     :voucher_nbr_fulltext, using: :voucher_nbr
  end
  # INDEXING (End)

  # STATES (Start) ====================================================================
  state_machine :state, initial: :draft do

  ### CALLBACKS ###
    after_transition on: :verify, do: :after_verify
    after_transition on: :use, do: :after_use

  ### EVENTS ###
    event :verify do
      transition draft: :same
    end
    event :use do
      transition draft: :complete
    end
  end
  # STATES (End)

  # STATE HANDLERS (Start) ====================================================================

  # verify => draft to final
  def after_verify

  end # def after_validate


  # use => draft to used
  def after_use
  end # def after_use

  # STATE HANDLERS (End)

end # class Omni::OrderDetail

