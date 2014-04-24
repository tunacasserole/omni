class Omni::ShippingRate < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :shipping_rates
  self.primary_key  = :shipping_rate_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true, uniqueness: true
  validates    :supplier_id,                     presence: true
  validates    :shipping_rate_name,              presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :shipping_rate_id,                 override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| "#{m.supplier_display} - #{m.shipping_rate_name}"}
  default      :shipping_charge,                  override: false,        to: 0
  default      :minimum_sale,                     override: false,        to: 0
  default      :maximum_sale,                     override: false,        to: 0
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
  belongs_to   :supplier,                        class_name: 'Omni::Supplier',                foreign_key: 'supplier_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :supplier_display,                       to: 'supplier.display'
  end
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :supplier_display do supplier.display if supplier end
    integer  :shipping_charge
    integer  :minimum_sale
    integer  :maximum_sale

    text     :supplier_display_fulltext, using: :supplier_display
    text     :shipping_charge_fulltext, using: :shipping_charge
    text     :minimum_sale_fulltext, using: :minimum_sale
    text     :maximum_sale_fulltext, using: :maximum_sale
  end

  def display_as
    self.display
  end
end # class Omni::ShippingRate

