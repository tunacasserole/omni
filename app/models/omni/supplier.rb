class Omni::Supplier < ActiveRecord::Base

  # METADATA (Start) ====================================================================
  self.table_name   = :suppliers
  self.primary_key  = :supplier_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         uniqueness: true, presence: true
  validates    :supplier_name,                   uniqueness: true, presence: true
  validates    :supplier_nbr,                    uniqueness: true, presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :supplier_id,                      override: false,        with: :guid
  default      :supplier_nbr,                     override: false,        with: :sequence,  named: "SUPPLIER_NBR"
  default      :display,                          override: false,        to: lambda{|m| "#{m.supplier_name} - #{m.supplier_nbr}"}
  default      :supplier_ucc_prefix,              override: false,        to: 0
  default      :duns_number,                      override: false,        to: 0
  default      :minimum_order_cost,               override: false,        to: 0
  default      :minimum_order_units,              override: false,        to: 0
  default      :minimum_weight,                   override: false,        to: 0
  default      :minimum_cube,                     override: false,        to: 0
  default      :is_ship_cancel,                   override: false,        to: false
  default      :lead_time,                        override: false,        to: 0
  default      :safety_stock_days,                override: false,        to: 0
  default      :is_calculated_lead_time,          override: false,        to: false
  default      :is_dynamic_safety_stock,          override: false,        to: false
  # default      :bank_routing_nbr,                 override: false,        with: :sequence,         named: "BANK_ROUTING_NBR"
  default      :tax_identifier,                   override: false,        to: 0
  default      :is_required_1099,                 override: false,        to: false
  default      :is_edi_capable,                   override: false,        to: false
  default      :is_one_time,                      override: false,        to: false
  default      :is_employee,                      override: false,        to: false
  default      :is_payee,                         override: false,        to: false
  default      :is_merchandise,                   override: false,        to: false
  default      :is_supply,                        override: false,        to: false
  default      :is_expense,                       override: false,        to: false
  default      :is_creditor,                      override: false,        to: false
  default      :is_freight,                       override: false,        to: false
  default      :is_factory,                       override: false,        to: false
  default      :is_3pl,                           override: false,        to: false
  default      :is_agent,                         override: false,        to: false
  default      :is_outbound_shipper,              override: false,        to: false
  default      :is_on_payment_hold,               override: false,        to: false
  default      :is_enabled,                       override: false,        to: false
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
  belongs_to   :default_ship_thru_supplier,      class_name: 'Omni::Supplier',                foreign_key: 'default_ship_thru_supplier_id'
  belongs_to   :default_pay_to_supplier,         class_name: 'Omni::Supplier',                foreign_key: 'default_pay_to_supplier_id'
  belongs_to   :gl_account,                      class_name: 'Omni::GlAccount',               foreign_key: 'gl_account_id'
  has_many     :notes,                           class_name: 'Buildit::Note',                 foreign_key: 'notable_id',       as: :notable
  has_many     :style_suppliers,                 class_name: 'Omni::StyleSupplier',           foreign_key: 'supplier_id'
  has_many     :sku_suppliers,                   class_name: 'Omni::SkuSupplier',             foreign_key: 'supplier_id'
  has_many     :purchases,                       class_name: 'Omni::Purchase',                foreign_key: 'supplier_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :default_ship_thru_supplier_display,     to: 'default_ship_thru_supplier.display'
    map :default_pay_to_supplier_display,        to: 'default_pay_to_supplier.display'
    map :gl_account_display,                     to: 'gl_account.display'
  end
  # MAPPED ATTRIBUTES (End)

  # ORDERING (Start) ====================================================================
  order_search_by :display => :asc
  # ORDERING (End)


  # HOOKS (Start) =======================================================================
  # HOOKS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :display
    string   :supplier_name
    string   :supplier_nbr
    string   :legacy_supplier_code
    string   :line_1
    string   :city
    string   :state_code
    boolean  :is_enabled

    text     :display_fulltext, using: :display
    text     :supplier_nbr_fulltext, using: :supplier_nbr
    text     :supplier_name_fulltext, using: :supplier_name
    text     :legacy_supplier_code_fulltext, using: :legacy_supplier_code
    text     :line_1_fulltext, using: :line_1
    text     :state_code_fulltext, using: :state_code
  end
  # INDEXING (End)

end # class Omni::Supplier

