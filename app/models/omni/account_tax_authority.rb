class Omni::AccountTaxAuthority < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :account_tax_authorities
  self.primary_key  = :account_tax_authority_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true, uniqueness: true
  validates    :account_id,                      presence: true
  validates    :tax_authority_id,                presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :account_tax_authority_id,         override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| "#{m.account_display} - #{m.tax_authority_display}"}
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
  belongs_to   :tax_authority,                   class_name: 'Omni::TaxAuthority',            foreign_key: 'tax_authority_id'
  has_many     :notes,                           class_name: 'Buildit::Note',                     foreign_key: 'notable_id',       as: :notable
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :account_display,                           to: 'account.display'
    map :tax_authority_display,                  to: 'tax_authority.display'
  end
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :account_id
    string   :tax_authority_id
    string   :display
    string   :account_display do account.display if account end
    string   :tax_authority_display do tax_authority.display if tax_authority end

    text     :display_fulltext, using: :display
    # text     :account_display_fulltext, using: :account_display
    # text     :tax_authority_display_fulltext, using: :tax_authority_display
  end
  # INDEXING (End) ====================================================================
end # class Omni::AccountTaxAuthority

