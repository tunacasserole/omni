class Omni::Bom < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :boms
  self.primary_key  = :bom_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true, uniqueness: true
  validates    :bom_nbr,                         uniqueness: true,                         allow_nil: true
  validates    :bom_type,                        lookup: 'BOM_TYPE',                   allow_nil: false
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :bom_id,                           override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| "BOM number: #{m.bom_nbr}"}
  default      :bom_nbr,                          override: false,        with: :sequence,         named: "BOM_NBR"
  default      :version,                          override: false,        to: 0
  default      :is_primary_bom,                   override: false,        to: false
  default      :labor_hours,                      override: false,        to: 0
  default      :machine_hours,                    override: false,        to: 0
  default      :construction_hours,               override: false,        to: 0
  default      :is_enabled,                       override: false,        to: false
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
  has_many     :bom_details,                     class_name: 'Omni::BomDetail',               foreign_key: 'bom_id'
  belongs_to   :bomable,                         class_name: 'Omni::Style',                   foreign_key: 'bomable_id'
  belongs_to   :bomable,                         class_name: 'Omni::Sku',                     foreign_key: 'bomable_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :bomable_type
    string   :bomable_id
    string   :bom_nbr
    string   :description
    string   :sku_id

    text     :bomable_type_fulltext, using: :bomable_type
    text     :bomable_id_fulltext, using: :bomable_id
    text     :bom_nbr_fulltext, using: :bom_nbr
    text     :description_fulltext, using: :description
  end

  # STATES (Start) ====================================================================

  # STATES (End)


  def display_as
    self.display
  end
end # class Omni::Bom

