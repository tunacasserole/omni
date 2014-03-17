class Omni::PriceChange < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :price_changes
  self.primary_key  = :price_change_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :price_change_id,                  override: false,        with: :guid
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
  has_many     :sku_prices,                      class_name: 'Omni::SkuPrice',                foreign_key: 'price_change_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :display

    text     :display_fulltext, using: :display
  end

  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::PriceChange

