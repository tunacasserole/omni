class Omni::Label < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :labels
  self.primary_key  = :label_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true, uniqueness: true
  validates    :label_type,                      lookup: 'LABEL_TYPE', allow_nil: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :label_id,                         override: false,        with: :guid
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
  has_many     :notes,                           class_name: 'Buildit::Note',                     foreign_key: 'notable_id',       as: :notable
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :display
    string   :description
    string   :label_type do |x| Buildit::Lookup::Manager.display_for('LABEL_TYPE', x.label_type) end
    string   :short_name

    text     :display_fulltext, using: :display
    text     :description_fulltext, using: :description
    text     :label_type_fulltext, using: :label_type
    text     :short_name_fulltext, using: :short_name
  end

  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::Label

