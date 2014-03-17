class Omni::BomDetail < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :bom_details
  self.primary_key  = :bom_detail_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true
  validates    :uom_code,                        lookup: 'UOM_CODE',                   allow_nil: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :bom_detail_id,                    override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| "#{m.bom_display} - #{m.color_display} - #{m.sku_display}"}
  default      :quantity,                         override: false,        to: 0
  default      :waste_percent,                    override: false,        to: 0
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
  belongs_to   :bom,                             class_name: 'Omni::Bom',                     foreign_key: 'bom_id'
  belongs_to   :color,                           class_name: 'Omni::Color',                   foreign_key: 'color_id'
  belongs_to   :sku,                             class_name: 'Omni::Sku',                     foreign_key: 'sku_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :bom_display,                            to: 'bom.display'
    map :color_display,                          to: 'color.display'
    map :sku_display,                            to: 'sku.display'
  end
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :bom_display do bom.display if bom end
    string   :color_display do color.display if color end
    string   :sku_display do sku.display if sku end
    integer  :quantity
    integer  :waste_percent
    string   :uom_code do |x| Buildit::Lookup::Manager.display_for('UOM_CODE', x.uom_code) end

    text     :bom_display_fulltext, using: :bom_display
    text     :color_display_fulltext, using: :color_display
    text     :sku_display_fulltext, using: :sku_display
    text     :quantity_fulltext, using: :quantity
    text     :waste_percent_fulltext, using: :waste_percent
    text     :uom_code_fulltext, using: :uom_code
  end

  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::BomDetail

