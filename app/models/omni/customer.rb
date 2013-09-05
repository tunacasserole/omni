class Omni::Customer < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :customers
  self.primary_key  = :customer_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :customer_nbr,                    :presence    => true
  validates    :last_name,                       :presence    => true
  validates    :customer_nbr,                    :uniqueness  => true,                         :allow_nil => false 
  validates    :name_prefix,                     :lookup      => 'NAME_PREFIX',                :allow_nil => true  
  validates    :name_suffix,                     :lookup      => 'NAME_SUFFIX',                :allow_nil => true  
  validates    :gender,                          :lookup      => 'GENDER',                     :allow_nil => true  
  validates    :state_code,                      :lookup      => 'STATE_CODE',                 :allow_nil => true  
  validates    :ship_state_code,                 :lookup      => 'STATE_CODE',                 :allow_nil => true  
  validates    :customer_account_type,           :lookup      => 'CUSTOMER_ACCOUNT_TYPE',      :allow_nil => true  
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :customer_id,                      :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.last_name}, #{m.first_name} - #{m.customer_nbr}"}
  default      :customer_nbr,                     :override  =>  false,        :with  => :sequence,         :named=>"CUSTOMER_NBR"
  default      :is_tax_exempt,                    :override  =>  false,        :to    => false              
  default      :is_employee,                      :override  =>  false,        :to    => false              
  default      :employee_nbr,                     :override  =>  false,        :with  => :sequence,         :named=>"EMPLOYEE_NBR"
  default      :is_contractor,                    :override  =>  false,        :to    => false              
  default      :contractor_nbr,                   :override  =>  false,        :with  => :sequence,         :named=>"CONTRACTOR_NBR"
  default      :is_student,                       :override  =>  false,        :to    => false              
  default      :is_analyst,                       :override  =>  false,        :to    => false              
  default      :is_developer,                     :override  =>  false,        :to    => false              
  default      :is_validated,                     :override  =>  false,        :to    => false              
  default      :is_residential,                   :override  =>  false,        :to    => false              
  default      :is_commercial,                    :override  =>  false,        :to    => false              
  default      :is_do_not_mail_to,                :override  =>  false,        :to    => false              
  default      :is_do_not_call,                   :override  =>  false,        :to    => false              
  default      :is_verified,                      :override  =>  false,        :to    => false              
  default      :is_do_not_email,                  :override  =>  false,        :to    => false              
  default      :customer_account_nbr,             :override  =>  false,        :with  => :sequence,         :named=>"CUSTOMER_ACCOUNT_NBR"
  default      :credit_limit,                     :override  =>  false,        :to    => 0                  
  default      :is_on_hold,                       :override  =>  false,        :to    => false              
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
  has_many     :vouchers,                        :class_name => 'Omni::Voucher',                 :foreign_key => 'customer_id'
  belongs_to   :user,                            :class_name => 'Buildit::User',                     :foreign_key => 'user_id'
  has_many     :notes,                           :class_name => 'Buildit::Note',                     :foreign_key => 'notable_id',       :as => :notable
  has_many     :shipments,                       :class_name => 'Omni::Shipment',                :foreign_key => 'shippable_id',     :as => :shippable
  has_many     :customer_sites,                  :class_name => 'Omni::CustomerSite',            :foreign_key => 'customer_id'
  has_many     :payments,                        :class_name => 'Omni::Payment',                 :foreign_key => 'customer_id'
  has_many     :orders,                          :class_name => 'Omni::Order',                   :foreign_key => 'customer_id'
  has_many     :stock_ledger_activities,         :class_name => 'Omni::StockLedgerActivity',     :foreign_key => 'customer_id'
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :user_display,                           :to => 'user.full_name'
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
    string   :customer_nbr
    date     :registration_date
    string   :line_1
    string   :city
    string   :state_code do |x| Buildit::Lookup::Manager.display_for('STATE_CODE', x.state_code) end
    string   :zip
    string   :phone
    string   :email_address
 
    text     :customer_nbr_fulltext, :using => :customer_nbr
    text     :line_1_fulltext, :using => :line_1
    text     :city_fulltext, :using => :city
    text     :state_code_fulltext, :using => :state_code
    text     :zip_fulltext, :using => :zip
    text     :phone_fulltext, :using => :phone
    text     :email_address_fulltext, :using => :email_address
  end 
  # INDEXING (End)






  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::Customer
