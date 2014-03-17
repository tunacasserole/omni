class Omni::Ruleset < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name   = :rulesets
  self.primary_key  = :ruleset_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true, uniqueness: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :ruleset_id,                       override: false,        with: :guid
  default      :is_active,                        override: false,        to: false
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
  has_many     :system_options,                  class_name: 'Omni::SystemOption',            foreign_key: 'ruleset_id'
  has_many     :notes,                           class_name: 'Buildit::Note',                 foreign_key: 'notable_id',       as: :notable
  has_many     :rules,                           class_name: 'Omni::Rule',                    foreign_key: 'ruleset_id'
  has_many     :adjustment_reasons,              class_name: 'Omni::AdjustmentReason',        foreign_key: 'ruleset_id'
  has_many     :stock_ledger_activities,         class_name: 'Omni::StockLedgerActivity',     foreign_key: 'ruleset_id'
  # ASSOCIATIONS (End)

  # ORDERING (Start) ====================================================================
  order_search_by :display =>:asc
  # ORDERING (End)

  # HOOKS (Start) =======================================================================
  # HOOKS (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :display
    string   :ruleset_code
    string   :description
    string   :ruleset_id
    boolean  :is_active

    text     :display_fulltext, using: :display
    text     :ruleset_code_fulltext, using: :ruleset_code
    text     :description_fulltext, using: :description
  end
  # INDEXING (End)

end # class Omni::Ruleset
