class Omni::CustomerAccount < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name   = :customer_accounts
  self.primary_key  = :customer_account_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                  presence: true, uniqueness: true
  validates    :customer_id,              presence: true
  validates    :account_id,               presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :customer_account_id,              override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| "#{m.customer_display} - #{m.account_display}"}
  default      :is_contact,               override: false,        to: false
  default      :is_teacher,                       override: false,        to: false
  default      :is_administrator,                 override: false,        to: false
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
  belongs_to   :account,                            class_name: 'Omni::Account',                    foreign_key: 'account_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :customer_display,                       to: 'customer.display'
    map :account_display,                           to: 'account.display'
  end
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string :customer_id
    string :account_id
    string :customer_account_id
    string :comment
  end

  # STATES (Start) ====================================================================

  # STATES (End)


  def display_as
    self.display
  end
end # class Omni::CustomerAccount

