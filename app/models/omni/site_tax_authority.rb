class Omni::SiteTaxAuthority < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :site_tax_authorities
  self.primary_key  = :site_tax_authority_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  supports_fulltext    
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :site_id,                         :presence    => true
  validates    :tax_authority_id,                :presence    => true
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :site_tax_authority_id,            :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.site_display} - #{m.tax_authority_display}"}
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
  belongs_to   :site,                            :class_name => 'Omni::Site',                    :foreign_key => 'site_id'
  belongs_to   :tax_authority,                   :class_name => 'Omni::TaxAuthority',            :foreign_key => 'tax_authority_id'
  has_many     :notes,                           :class_name => 'Buildit::Note',                     :foreign_key => 'notable_id',       :as => :notable
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :site_display,                           :to => 'site.display'
    map :tax_authority_display,                  :to => 'tax_authority.display'
  end
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
    string   :site_display do site.display if site end
    string   :tax_authority_display do tax_authority.display if tax_authority end
 
    text     :site_display_fulltext, :using => :site_display
    text     :tax_authority_display_fulltext, :using => :tax_authority_display
  end 
  # INDEXING (End)


end # class Omni::SiteTaxAuthority

