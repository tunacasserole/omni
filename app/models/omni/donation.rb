class Omni::Donation < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name   = :donations
  self.primary_key  = :donation_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :account_id,                      presence: true
  validates    :display,                         presence: true, uniqueness: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :donation_id,              override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| "#{m.account_display} - #{m.donation_date}"}
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
  belongs_to   :account,                            class_name: 'Omni::Account',                    foreign_key: 'account_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :account_display,                           to: 'account.display'
  end
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :display
    string   :account_id
    string   :account_display do account.display if account end

    text     :account_display_fulltext, using: :account_display
    text     :display_fulltext, using: :display
  end
end # class Omni::Donation

