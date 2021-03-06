class Omni::LocationTaxHoliday < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :location_tax_holidays
  self.primary_key  = :location_tax_holiday_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true, uniqueness: true
  validates    :location_id,                     :presence      => true
  validates    :short_name,                      :presence      => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :location_tax_holiday_id,          override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| "#{m.location_display} - #{m.short_name}, #{m.effective_date}"}
  default      :is_tax_holiday,                   override: false,        to: false
  default      :price_cutoff,                     override: false,        to: 0
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
  belongs_to   :location,     class_name: 'Omni::Location',  foreign_key: 'location_id'
  has_many     :notes,        class_name: 'Buildit::Note',   foreign_key: 'notable_id',       as: :notable
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :location_display,                       to: 'location.display'
  end
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    # Exact match attributes
    string   :location_id
    string   :location_display do location.display if location end
    date     :effective_date
    date     :end_date
    boolean  :is_tax_holiday
    integer  :price_cutoff

    # Partial match (contains) attributes
    text     :location_display_fulltext,  using: :location_display
  end

  # STATES (Start) ====================================================================

  # STATES (End)


  def display_as
    self.display
  end
end # class Omni::LocationTaxHoliday

