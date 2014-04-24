class Omni::LocationTaxAuthority < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name   = :location_tax_authorities
  self.primary_key  = :location_tax_authority_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                   presence: true, uniqueness: true
  validates    :location_id,               presence: true
  validates    :tax_authority_id,          presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :location_tax_authority_id,        override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| "#{m.location_display} - #{m.tax_authority_display}"}
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
  belongs_to   :tax_authority,                   class_name: 'Omni::TaxAuthority',            foreign_key: 'tax_authority_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :location_display,                       to: 'location.display'
    map :tax_authority_display,                  to: 'tax_authority.display'
  end
  # MAPPED ATTRIBUTES (End)

  # HOOKS (Start) =======================================================================
  # HOOKS (End)

  # INDEXING (Start) ====================================================================
  searchable do
    # Exact match attributes
    string   :location_id
    string   :tax_authority_id
    string   :location_display do location.display if location end
    string   :tax_authority_display do tax_authority.display if tax_authority end

    # Partial match (contains) attributes
    text     :location_display_fulltext, using: :location_display
    text     :tax_authority_display_fulltext, using: :tax_authority_display
  end

  # STATES (Start) ====================================================================

  # STATES (End)


  def display_as
    self.display
  end
end # class Omni::LocationTaxAuthority

