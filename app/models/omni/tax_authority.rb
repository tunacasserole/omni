class Omni::TaxAuthority < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :tax_authorities
  self.primary_key  = :tax_authority_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :state_code,                      :presence    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :tax_authority_id,                 :override  =>  false,        :with  => :guid              
  default      :is_tax_when_no_presence,          :override  =>  false,        :to    => false              
  default      :is_destroyed,                     :override  =>  false,        :to    => false              
  # DEFAULTS (End)


  # REFERENCE (Start) ===================================================================
  reference do
    display_attribute  :display
    query_attribute    :display
    item_template      '{display}'
  end
  # REFERENCE (End)


  # ASSOCIATIONS (Start) ================================================================
  has_many     :tax_authority_rates,             :class_name => 'Omni::TaxAuthorityRate',        :foreign_key => 'tax_authority_id'
  has_many     :location_tax_authorities,        :class_name => 'Omni::LocationTaxAuthority',    :foreign_key => 'tax_authority_id'
  has_many     :site_tax_authorities,            :class_name => 'Omni::SiteTaxAuthority',        :foreign_key => 'tax_authority_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  # COMPUTED ATTRIBUTES (End)

  # TEMPORARY ATTRIBUTES (Start) ========================================================
  # TEMPORARY ATTRIBUTES (End)


  # SCOPES (Start) ======================================================================

  # SCOPES (End)


  # HOOKS (Start) =======================================================================
  # HOOKS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :display
    string   :description
    string   :tax_authority_type
    string   :short_name
    string   :state_code
    string   :filing_frequency
 
    text     :display_fulltext, :using => :display
    text     :description_fulltext, :using => :description
    text     :tax_authority_type_fulltext, :using => :tax_authority_type
    text     :short_name_fulltext, :using => :short_name
    text     :state_code_fulltext, :using => :state_code
    text     :filing_frequency_fulltext, :using => :filing_frequency
  end 
  # INDEXING (End)


end # class Omni::TaxAuthority

