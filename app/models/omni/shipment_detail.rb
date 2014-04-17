  class Omni::ShipmentDetail < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :shipment_details
  self.primary_key  = :shipment_detail_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :shipment_detail_id,              presence: true, uniqueness: true
  validates    :display,                         presence: true, uniqueness: true
  validates    :shipment_id,                     presence: true
  # validates    :pick_id,                         presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :shipment_detail_id,               override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| "#{m.shipment_display} - #{m.pick_display}"}
  default      :ship_units,                       override: false,        to: 0
  default      :received_units,                   override: false,        to: 0
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
  belongs_to   :shipment,                        class_name: 'Omni::Shipment',                foreign_key: 'shipment_id'
  belongs_to   :pick,                     class_name: 'Omni::Pick',              foreign_key: 'pick_id'
  belongs_to   :container,                       class_name: 'Omni::Container',               foreign_key: 'container_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :shipment_display,                       to: 'shipment.display'
    map :pick_display,                    to: 'pick.display'
    map :container_display,                      to: 'container.display'
  end
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :shipment_id
    string   :shipment_detail_id
    string   :pick_id
    string   :shipment_display do shipment.display if shipment end
    string   :pick_display do pick.display if pick end
    # integer  :ship_units
    # string   :container_display do container.display if container end

    # text     :shipment_display_fulltext, using: :shipment_display
    # text     :pick_display_fulltext, using: :pick_display
    # text     :ship_units_fulltext, using: :ship_units
    # text     :container_display_fulltext, using: :container_display
  end

  def display_as
    display
  end
end # class Omni::ShipmentDetail

