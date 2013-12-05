class Omni::Rule < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name   = :rules
  self.primary_key  = :rule_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :ruleset_id,                      :presence    => true
  validates    :rule_type,                       :lookup      => 'RULE_TYPE',                  :allow_nil => true
  validates    :rule_action,                     :lookup      => 'RULE_ACTION',                :allow_nil => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :rule_id,                          :override  =>  false,        :with  => :guid
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.ruleset_display} - #{m.rule_action} to #{m.model_name} with #{m.attribute_name}"}
  default      :is_active,                        :override  =>  false,        :to    => false
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
  belongs_to   :ruleset,                         :class_name => 'Omni::Ruleset',                 :foreign_key => 'ruleset_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :ruleset_display,                        :to => 'ruleset.display'
  end
  # MAPPED ATTRIBUTES (End)

  # ORDERING (Start) ====================================================================
  order_search_by :rule_seq =>:asc
  # ORDERING (End)

  # HELPERS (Start) =======================================================================
  # HELPERS (End)

  # HOOKS (Start) =======================================================================
  # HOOKS (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :ruleset_display do ruleset.display if ruleset end
    # string   :rule_type do |x| Buildit::Lookup::Manager.display_for('RULE_TYPE', x.rule_type) end
    string   :input_attribute
    string   :ruleset_id
    string   :model_name
    string   :attribute_name
    # string   :rule_action do |x| Buildit::Lookup::Manager.display_for('RULE_ACTION', x.rule_action) end
    # boolean  :is_active
    string   :ruleset_id
    string   :rule_seq

    text     :ruleset_display_fulltext, :using => :ruleset_display
    text     :rule_type_fulltext, :using => :rule_type
    text     :input_attribute_fulltext, :using => :input_attribute
    text     :model_name_fulltext, :using => :model_name
    text     :attribute_name_fulltext, :using => :attribute_name
    text     :rule_action_fulltext, :using => :rule_action
    text     :rule_seq_fulltext, :using => :rule_seq
  end
  # INDEXING (End)

end # class Omni::Rule

