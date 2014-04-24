class Omni::TaxAuthorityRate < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :tax_authority_rates
  self.primary_key  = :tax_authority_rate_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true, uniqueness: true
  validates    :tax_authority_id,                presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :tax_authority_rate_id,            override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| "#{m.tax_authority_display} - #{m.effective_date}"}
  default      :tax_percent,                      override: false,        to: 0
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
  belongs_to   :tax_authority,                   class_name: 'Omni::TaxAuthority',            foreign_key: 'tax_authority_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :tax_authority_display,                  to: 'tax_authority.display'
  end
  # MAPPED ATTRIBUTES (End)

  # INDEXING (Start) ====================================================================
  searchable do
    string   :tax_authority_display do tax_authority.display if tax_authority end
    date     :effective_date
    date     :end_date
    integer  :tax_percent

    text     :tax_authority_display_fulltext, using: :tax_authority_display
    text     :tax_percent_fulltext, using: :tax_percent
  end

  def display_as
    self.display
  end
end # class Omni::TaxAuthorityRate

