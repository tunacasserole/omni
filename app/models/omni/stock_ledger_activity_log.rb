class Omni::StockLedgerActivityLog < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :stock_ledger_activity_logs
  self.primary_key  = :stock_ledger_activity_log_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :stock_ledger_activity_log_id,     override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| "#{m.stock_ledger_activity_display} - Log: #{m.stock_ledger_activity_log_nbr} "}
  default      :stock_ledger_activity_log_nbr,                 override: false,        with: :sequence,         named: "STOCK_LEDGER_ACTIVITY_LOG_NBR"
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
  belongs_to   :stock_ledger_activity,           class_name: 'Omni::StockLedgerActivity',     foreign_key: 'stock_ledger_activity_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :stock_ledger_activity_display,          to: 'stock_ledger_activity.display'
  end
  # MAPPED ATTRIBUTES (End)

  # HOOKS (Start) =======================================================================
  # HOOKS (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :stock_ledger_activity_log_nbr
    string   :stock_ledger_activity_id
    string   :model_name
    string   :attribute_name
    string   :rule_action do |x| Buildit::Lookup::Manager.display_for('RULE_ACTION', x.rule_action) end

    text     :stock_ledger_activity_log_nbr_fulltext, using: :stock_ledger_activity_log_nbr
    text     :model_name_fulltext, using: :model_name
    text     :attribute_name_fulltext, using: :attribute_name
    text     :rule_action_fulltext, using: :rule_action
  end
end # class Omni::StockLedgerActivityLog

