class Omni::AdjustmentReason < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :adjustment_reasons
  self.primary_key  = :adjustment_reason_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true, uniqueness: true
  validates    :ruleset_id,                      presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :adjustment_reason_id,             override: false,        with: :guid
  default      :is_allowed_cost_entry,            override: false,        to: false
  default      :is_cost_adjustment,               override: false,        to: false
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
  has_many     :adjustments,                     class_name: 'Omni::Adjustment',              foreign_key: 'adjustment_reason_id'
  belongs_to   :ruleset,                         class_name: 'Omni::Ruleset',                 foreign_key: 'ruleset_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :ruleset_display,                        to: 'ruleset.display'
  end
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :display
    string   :description
    string   :short_name
    string   :ruleset_display do ruleset.display if ruleset end

    text     :display_fulltext, using: :display
    text     :description_fulltext, using: :description
    text     :short_name_fulltext, using: :short_name
    text     :ruleset_display_fulltext, using: :ruleset_display
  end


  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::AdjustmentReason

