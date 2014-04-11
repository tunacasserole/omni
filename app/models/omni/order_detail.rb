class Omni::OrderDetail < ActiveRecord::Base

  # METADATA (Start) ====================================================================
  self.table_name   = :order_details
  self.primary_key  = :order_detail_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :order_detail_nbr,            presence: true, uniqueness: true
  # validates    :display,                     presence: true, uniqueness: true
  validates    :sku_id,                      presence: true
  validates    :delivery_method,             presence: true
  validates    :price_type,                  lookup: 'PRICE_TYPE', allow_nil: true
  validates    :customer_discount_reason,    lookup: 'CUSTOMER_DISCOUNT_REASON', allow_nil: true
  validates    :customer_return_reason,      lookup: 'CUSTOMER_RETURN_REASON', allow_nil: true

  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :order_detail_id,                  override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| "#{m.order_display} - #{m.order_detail_nbr} - #{m.sku_display}"}
  default      :order_detail_nbr,                 override: false,        with: :sequence,  named: "ORDER_DETAIL_NBR"
  default      :is_residential,                   override: false,        to: false
  default      :is_commercial,                    override: false,        to: false
  default      :order_units,                      override: false,        to: 0
  default      :retail_price,                     override: false,        to: 0
  default      :sale_price,                       override: false,        to: 0
  default      :sales_tax_rate,                   override: false,        to: 0
  default      :is_taxable_product,               override: false,        to: false
  default      :is_tax_charged,                   override: false,        to: false
  default      :shipping_amount,                  override: false,        to: 0
  default      :discount_percent,                 override: false,        to: 0
  default      :discount_amount,                  override: false,        to: 0
  default      :is_cancelled,                     override: false,        to: false
  default      :is_layaway,                       override: false,        to: false
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
  belongs_to   :order,                           class_name: 'Omni::Order',                   foreign_key: 'order_id'
  belongs_to   :sku,                             class_name: 'Omni::Sku',                     foreign_key: 'sku_id'
  belongs_to   :sku_alias,                       class_name: 'Omni::SkuAlias',                foreign_key: 'sku_alias_id'
  belongs_to   :pickup_location,                 class_name: 'Omni::Location',                foreign_key: 'pickup_location_id'
  belongs_to   :account,                         class_name: 'Omni::Account',                    foreign_key: 'account_id'
  belongs_to   :grade,                           class_name: 'Omni::Grade',                   foreign_key: 'grade_id'
  belongs_to   :sales_user,                      class_name: 'Buildit::User',                     foreign_key: 'sales_user_id'
  belongs_to   :reference_order_detail,          class_name: 'Omni::OrderDetail',             foreign_key: 'reference_order_detail_id'
  has_many     :notes,                           class_name: 'Buildit::Note',                     foreign_key: 'notable_id',       as: :notable
  has_many     :picks,                           class_name: 'Omni::Pick',              foreign_key: 'pickable_id',      as: :pickable
  has_one      :job,                             class_name: 'Omni::Job',               foreign_key: 'jobable_id',      as: :jobable
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :order_display,                          to: 'order.display'
    map :sku_display,                            to: 'sku.display'
    map :sku_alias_display,                      to: 'sku_alias.display'
    map :pickup_location_display,                to: 'pickup_location.display'
    map :account_display,                           to: 'account.display'
    map :grade_display,                          to: 'grade.display'
    map :sales_user_display,                     to: 'sales_user.full_name'
    map :reference_order_detail_display,         to: 'reference_order_detail.display'
  end
  # MAPPED ATTRIBUTES (End)

  # SCOPES (Start) ======================================================================

  # SCOPES (End)


  # HOOKS (Start) =======================================================================
  # hook :before_update, :create_job, 10
  # hook :before_update, :create_pick, 20
  # hook :before_validation, :check_update_allowed, 10
  # HOOKS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :order_id
    string   :order_detail_id
    string   :order_detail_nbr
    string   :sku_id
    string   :sku_display do sku.display if sku end
    string   :pickup_location_display do pickup_location.display if pickup_location end
    string   :account_display do account.display if account end

    text     :order_detail_nbr_fulltext, using: :order_detail_nbr
    text     :sku_display_fulltext, using: :sku_display
    text     :account_display_fulltext, using: :account_display
  end
  # INDEXING (End)

  # STATES (Start) ====================================================================
  state_machine :state, initial: :draft do

  ### CALLBACKS ###
    after_transition on: :finalize, do: :after_finalize
    after_transition on: :cancel, do: :after_cancel

  ### EVENTS ###
    event :finalize do
      transition draft: :final
    end
    event :cancel do
      transition draft: :cancelled
    end
  end
  # STATES (End)

  # STATE HANDLERS (Start) ====================================================================

  # finalize => draft to final
  def after_finalize
    # Add Pick Ticket
    self.picks.create
  end # def after_finalize


  # cancel => draft to cancelled
  def after_cancel
    self.picks.first.cancel if self.picks.first
    self.job.cancel if self.job
  end # def after_cancel

  # STATE HANDLERS (End)

end # class Omni::OrderDetail

