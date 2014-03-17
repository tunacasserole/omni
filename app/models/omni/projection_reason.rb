class Omni::ProjectionReason < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :projection_reasons
  self.primary_key  = :projection_reason_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :projection_reason_id,             override: false,        with: :guid
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
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :display
    string   :description
    string   :short_name

    text     :display_fulltext, using: :display
    text     :description_fulltext, using: :description
    text     :short_name_fulltext, using: :short_name
  end
end # class Omni::ProjectionReason

