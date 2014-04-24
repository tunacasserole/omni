class Omni::Area < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :areas
  self.primary_key  = :area_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :area_id,                         presence: true, uniqueness: true
  validates    :area_nbr,                        presence: true, uniqueness: true
  validates    :display,                         presence: true, uniqueness: true
  validates    :location_id,                     presence: true
  validates    :short_name,                      presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :area_id,                          override: false,        with: :guid
  default      :display,                          override: false,        to: lambda {|m| "#{m.location_display} - Area #{m.area_nbr} - #{m.short_name}"}
  default      :area_nbr,                         override: false,        with: :sequence,         named: "AREA_NBR"
  default      :is_receiving,                     override: false,        to: false
  default      :is_picking,                       override: false,        to: false
  default      :is_reserve,                       override: false,        to: false
  default      :is_putaway,                       override: false,        to: false
  default      :is_supplier_return,               override: false,        to: false
  default      :is_processing,                    override: false,        to: false
  default      :is_shipping,                      override: false,        to: false
  default      :is_put_location,                  override: false,        to: false
  default      :is_special_handling,              override: false,        to: false
  default      :is_quality_control,               override: false,        to: false
  default      :is_quick_case,                    override: false,        to: false
  default      :is_many_sku_per_bin,              override: false,        to: false
  default      :default_cube_capacity,            override: false,        to: 0
  default      :is_request_cube_calculation,      override: false,        to: false
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
  belongs_to   :location,                        class_name: 'Omni::Location',                foreign_key: 'location_id'
  has_many     :notes,                           class_name: 'Buildit::Note',                     foreign_key: 'notable_id',       as: :notable
  has_many     :bins,                            class_name: 'Omni::Bin',                     foreign_key: 'area_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :location_display,                       to: 'location.display'
  end
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :location_display do location.display if location end
    string   :area_nbr
    string   :location_id

    text     :location_display_fulltext, using: :location_display
    text     :area_nbr_fulltext, using: :area_nbr
  end

  # STATES (Start) ====================================================================

  # STATES (End)


  def display_as
    self.display
  end
end # class Omni::Area

