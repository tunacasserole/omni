class Omni::Contact < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name   = :contacts
  self.primary_key  = :contact_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :account_id,                      presence: true
  validates    :display,                         presence: true, uniqueness: true
  validates    :name_prefix,                     lookup: 'NAME_PREFIX',           allow_nil: true
  validates    :name_suffix,                     lookup: 'NAME_SUFFIX',           allow_nil: true
  validates    :state_code,                     lookup: 'STATE_CODE',           allow_nil: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :contact_id,               override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| "#{m.last_name}, #{m.first_name}, #{m.email_address}"}
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
    string   :account_id
    string   :display
    string   :account_display do account.display if account end

    text     :display_fulltext, using: :display
    text     :account_display_fulltext, using: :account_display
  end
  # INDEXING (End) ====================================================================

  def display_as
    self.display
  end
end # class Omni::Contact

