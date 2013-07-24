class Omni::Site < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :sites
  self.primary_key  = :site_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :site_name,                       :presence    => true
  validates    :school_nbr,                      :presence    => true
  validates    :site_type,                       :presence    => true
  validates    :line_1,                          :presence    => true
  validates    :city,                            :presence    => true
  validates    :zip,                             :presence    => true
  validates    :phone,                           :presence    => true
  validates    :school_nbr,                      :uniqueness  => true,                         :allow_nil => false 
  validates    :site_type,                       :lookup      => 'SITE_TYPE',                  :allow_nil => false 
  validates    :gradeset,                        :lookup      => 'GRADESET',                   :allow_nil => true  
  validates    :site_gender,                     :lookup      => 'SITE_GENDER',                :allow_nil => true  
  validates    :state_code,                      :lookup      => 'STATE_CODE',                 :allow_nil => true  
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :site_id,                          :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.site_name} - #{m.school_nbr}"}
  default      :school_nbr,                       :override  =>  false,        :with  => :sequence,         :named=>"SCHOOL_NBR"
  default      :is_on_web,                        :override  =>  false,        :to    => false              
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
  belongs_to   :parent_site,                     :class_name => 'Omni::Site',                    :foreign_key => 'parent_site_id'
  belongs_to   :location,                        :class_name => 'Omni::Location',                :foreign_key => 'location_id'
  has_many     :notes,                           :class_name => 'Buildit::Note',                     :foreign_key => 'notable_id',       :as => :notable
  has_many     :customer_sites,                  :class_name => 'Omni::CustomerSite',            :foreign_key => 'site_id'
  has_many     :order_details,                   :class_name => 'Omni::OrderDetail',             :foreign_key => 'site_id'
  has_many     :stock_ledger_activities,         :class_name => 'Omni::StockLedgerActivity',     :foreign_key => 'site_id'
  has_many     :programs,                        :class_name => 'Omni::Program',                 :foreign_key => 'site_id'
  has_many     :site_tax_authorities,            :class_name => 'Omni::SiteTaxAuthority',        :foreign_key => 'site_id'
  has_many     :conversions,                     :class_name => 'Omni::Conversion',              :foreign_key => 'site_id'
  has_many     :site_enrollments,                :class_name => 'Omni::SiteEnrollment',          :foreign_key => 'site_id'
  has_many     :site_donations,                  :class_name => 'Omni::SiteDonation',            :foreign_key => 'site_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :parent_site_display,                    :to => 'parent_site.display'
    map :location_display,                       :to => 'location.display'
  end
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  # COMPUTED ATTRIBUTES (End)

  # TEMPORARY ATTRIBUTES (Start) ========================================================
  # TEMPORARY ATTRIBUTES (End)


  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc
  # ORDERING (End)


  # HOOKS (Start) =======================================================================
  # HOOKS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :location_display do location.display if location end
    string   :gradeset do |x| Buildit::Lookup::Manager.display_for('GRADESET', x.gradeset) end
    string   :site_gender do |x| Buildit::Lookup::Manager.display_for('SITE_GENDER', x.site_gender) end
    string   :line_1
    string   :city
    string   :state_code do |x| Buildit::Lookup::Manager.display_for('STATE_CODE', x.state_code) end
    string   :phone
    string   :display
 
    text     :display_fulltext, :using => :display
    text     :location_display_fulltext, :using => :location_display
    text     :gradeset_fulltext, :using => :gradeset
    text     :site_gender_fulltext, :using => :site_gender
    text     :line_1_fulltext, :using => :line_1
    text     :city_fulltext, :using => :city
    text     :state_code_fulltext, :using => :state_code
    text     :phone_fulltext, :using => :phone
    text     :display_fulltext, :using => :display
  end 
  # INDEXING (End)

  # CUSTOM INDEXING (Start) ====================================================================
  searchable do
    string   :school_nbr
    string   :display
  end 
  # INDEXING (End)


end # class Omni::Site

