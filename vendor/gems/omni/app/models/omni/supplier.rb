class Omni::Supplier < ActiveRecord::Base

  # MIXINS (Start) ======================================================================

  # MIXINS (End)


  # METADATA (Start) ====================================================================
  self.table_name   = :suppliers
  self.primary_key  = :supplier_id
  # METADATA (End)


  # BEHAVIOR (Start) ====================================================================
  # BEHAVIOR (End)


  # VALIDATIONS (Start) =================================================================
  validates    :supplier_name,                   :presence    => true
  validates    :supplier_name,                   :uniqueness  => true,                         :allow_nil => false 
  # VALIDATIONS (End)


  # DEFAULTS (Start) ====================================================================
  default      :supplier_id,                      :override  =>  false,        :with  => :guid              
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.supplier_name}"}
  default      :supplier_nbr,                     :override  =>  false,        :with  => :sequence,         :named=>"SUPPLIER_NBR"
  default      :supplier_ucc_prefix,              :override  =>  false,        :to    => 0                  
  default      :duns_number,                      :override  =>  false,        :to    => 0                  
  default      :minimum_order_cost,               :override  =>  false,        :to    => 0                  
  default      :minimum_order_units,              :override  =>  false,        :to    => 0                  
  default      :minimum_weight,                   :override  =>  false,        :to    => 0                  
  default      :minimum_cube,                     :override  =>  false,        :to    => 0                  
  default      :is_ship_cancel,                   :override  =>  false,        :to    => false              
  default      :lead_time,                        :override  =>  false,        :to    => 0                  
  default      :safety_stock_days,                :override  =>  false,        :to    => 0                  
  default      :is_calculated_lead_time,          :override  =>  false,        :to    => false              
  default      :is_dynamic_safety_stock,          :override  =>  false,        :to    => false              
  default      :bank_routing_nbr,                 :override  =>  false,        :with  => :sequence,         :named=>"BANK_ROUTING_NBR"
  default      :tax_identifier,                   :override  =>  false,        :to    => 0                  
  default      :is_required_1099,                 :override  =>  false,        :to    => false              
  default      :is_edi_capable,                   :override  =>  false,        :to    => false              
  default      :is_one_time,                      :override  =>  false,        :to    => false              
  default      :is_employee,                      :override  =>  false,        :to    => false              
  default      :is_payee,                         :override  =>  false,        :to    => false              
  default      :is_merchandise,                   :override  =>  false,        :to    => false              
  default      :is_supply,                        :override  =>  false,        :to    => false              
  default      :is_expense,                       :override  =>  false,        :to    => false              
  default      :is_creditor,                      :override  =>  false,        :to    => false              
  default      :is_freight,                       :override  =>  false,        :to    => false              
  default      :is_factory,                       :override  =>  false,        :to    => false              
  default      :is_3pl,                           :override  =>  false,        :to    => false              
  default      :is_agent,                         :override  =>  false,        :to    => false              
  default      :is_outbound_shipper,              :override  =>  false,        :to    => false              
  default      :is_on_payment_hold,               :override  =>  false,        :to    => false              
  default      :is_enabled,                       :override  =>  false,        :to    => false              
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
  belongs_to   :default_ship_thru_supplier,      :class_name => 'Omni::Supplier',                :foreign_key => 'default_ship_thru_supplier_id'
  belongs_to   :default_pay_to_supplier,         :class_name => 'Omni::Supplier',                :foreign_key => 'default_pay_to_supplier_id'
  belongs_to   :gl_account,                      :class_name => 'Omni::GlAccount',               :foreign_key => 'gl_account_id'
  has_many     :notes,                           :class_name => 'Buildit::Note',                     :foreign_key => 'notable_id',       :as => :notable
  # ASSOCIATIONS (End)



  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :default_ship_thru_supplier_display,     :to => 'default_ship_thru_supplier.display'
    map :default_pay_to_supplier_display,        :to => 'default_pay_to_supplier.display'
    map :gl_account_display,                     :to => 'gl_account.display'
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
    string   :supplier_nbr
    string   :supplier_ucc_prefix
    string   :legacy_supplier_code
    string   :line_1
    string   :line_2
    string   :city
    string   :state_code
    string   :zip
    string   :phone
    string   :fax
    string   :display
 
    text     :display_fulltext, :using => :display
    text     :supplier_nbr_fulltext, :using => :supplier_nbr
    text     :supplier_ucc_prefix_fulltext, :using => :supplier_ucc_prefix
    text     :legacy_supplier_code_fulltext, :using => :legacy_supplier_code
    text     :line_1_fulltext, :using => :line_1
    text     :line_2_fulltext, :using => :line_2
    text     :city_fulltext, :using => :city
    text     :state_code_fulltext, :using => :state_code
    text     :zip_fulltext, :using => :zip
    text     :phone_fulltext, :using => :phone
    text     :fax_fulltext, :using => :fax
  end 
  # INDEXING (End)

end # class Omni::Supplier

