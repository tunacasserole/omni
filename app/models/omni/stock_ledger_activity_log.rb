class Omni::StockLedgerActivityLog < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :stock_ledger_activity_logs
  self.primary_key  = :stock_ledger_activity_log_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  supports_fulltext    
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :stock_ledger_activity_id,        :presence    => true
  validates    :activity_log_nbr,                :presence    => true
  validates    :model_meta_id,                   :presence    => true
  validates    :attribute_meta_id,               :presence    => true
  validates    :row_id,                          :presence    => true
  validates    :activity_log_nbr,                :uniqueness  => true,                         :allow_nil => false 
  validates    :rule_action,                     :lookup      => 'RULE_ACTION',                :allow_nil => true  
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :stock_ledger_activity_log_id,     :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.stock_ledger_activity_display} - Log: #{m.activity_log_nbr} "}
  default      :activity_log_nbr,                 :override  =>  false,        :with  => :sequence,         :named=>"ACTIVITY_LOG_NBR"
  default      :is_destroyed,                     :override  =>  false,        :to    => false              
  # DEFAULTS (End)


  # REFERENCE (Start) ===================================================================
  reference do
    display_attribute  :display
    query_attribute    :display
    item_template      '{display}'
  end
  # REFERENCE (End)


  # ASSOCIATIONS (Start) ================================================================
  belongs_to   :stock_ledger_activity,           :class_name => 'Omni::StockLedgerActivity',     :foreign_key => 'stock_ledger_activity_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :stock_ledger_activity_display,          :to => 'stock_ledger_activity.display'
    map :model_meta_display,                     :to => 'model_meta.display'
    map :attribute_meta_display,                 :to => 'attribute_meta.display'
    map :row_display,                            :to => 'row.display'
  end
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  # COMPUTED ATTRIBUTES (End)

  # TEMPORARY ATTRIBUTES (Start) ========================================================
  # TEMPORARY ATTRIBUTES (End)


  # SCOPES (Start) ======================================================================

  # SCOPES (End)


  # HOOKS (Start) =======================================================================
  # HOOKS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :activity_log_nbr
    string   :stock_ledger_activity_id
    string   :model_meta_display do model_meta.display if model_meta end
    string   :attribute_meta_display do attribute_meta.display if attribute_meta end
    string   :row_display do row.display if row end
    string   :rule_action do |x| Buildit::Lookup::Manager.display_for('RULE_ACTION', x.rule_action) end
 
    text     :activity_log_nbr_fulltext, :using => :activity_log_nbr
    text     :model_meta_display_fulltext, :using => :model_meta_display
    text     :attribute_meta_display_fulltext, :using => :attribute_meta_display
    text     :row_display_fulltext, :using => :row_display
    text     :rule_action_fulltext, :using => :rule_action
  end 
  # INDEXING (End)


end # class Omni::StockLedgerActivityLog

