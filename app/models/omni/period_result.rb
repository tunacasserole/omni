class Omni::PeriodResult < ActiveRecord::Base
# METADATA (Start) ====================================================================
  self.table_name   = :period_results
  self.primary_key  = :period_result_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         presence: true
  validates    :sku_id,                          presence: true
  validates    :location_id,                     presence: true
  validates    :period_id,                       presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :period_result_id,                 override: false,        with: :guid
  default      :display,                          override: false,        to: lambda{|m| "#{m.sku_display} - #{m.location_display} - #{m.period_display}"}
  default      :adjusted_cost,                    override: false,        to: 0
  default      :adjusted_retail,                  override: false,        to: 0
  default      :adjusted_units,                   override: false,        to: 0
  default      :backorder_cost,                   override: false,        to: 0
  default      :backorder_retail,                 override: false,        to: 0
  default      :backorder_units,                  override: false,        to: 0
  default      :clearance_sale_cost,              override: false,        to: 0
  default      :clearance_sale_retail,            override: false,        to: 0
  default      :clearance_sale_units,             override: false,        to: 0
  default      :consumed_cost,                    override: false,        to: 0
  default      :consumed_retail,                  override: false,        to: 0
  default      :consumed_units,                   override: false,        to: 0
  default      :net_inventory_cost,               override: false,        to: 0
  default      :net_inventory_retail,             override: false,        to: 0
  default      :net_inventory_units,              override: false,        to: 0
  default      :net_sale_cost,                    override: false,        to: 0
  default      :net_sale_retail,                  override: false,        to: 0
  default      :net_sale_units,                   override: false,        to: 0
  default      :produced_cost,                    override: false,        to: 0
  default      :produced_retail,                  override: false,        to: 0
  default      :produced_units,                   override: false,        to: 0
  default      :promo_sale_cost,                  override: false,        to: 0
  default      :promo_sale_retail,                override: false,        to: 0
  default      :promo_sale_units,                 override: false,        to: 0
  default      :purchased_cost,                   override: false,        to: 0
  default      :purchased_retail,                 override: false,        to: 0
  default      :purchased_units,                  override: false,        to: 0
  default      :received_cost,                    override: false,        to: 0
  default      :received_retail,                  override: false,        to: 0
  default      :received_units,                   override: false,        to: 0
  default      :requested_cost,                   override: false,        to: 0
  default      :requested_retail,                 override: false,        to: 0
  default      :requested_units,                  override: false,        to: 0
  default      :return_sale_cost,                 override: false,        to: 0
  default      :return_sale_retail,               override: false,        to: 0
  default      :return_sale_units,                override: false,        to: 0
  default      :shipped_cost,                     override: false,        to: 0
  default      :shipped_retail,                   override: false,        to: 0
  default      :shipped_units,                    override: false,        to: 0
  default      :work_in_process_cost,             override: false,        to: 0
  default      :work_in_process_retail,           override: false,        to: 0
  default      :work_in_process_units,            override: false,        to: 0
  default      :professional_discount_cost,       override: false,        to: 0
  default      :employee_discount_cost,           override: false,        to: 0
  default      :manager_discount_cost,            override: false,        to: 0
  default      :ending_inventory_cost,            override: false,        to: 0
  default      :ending_inventory_retail,          override: false,        to: 0
  default      :ending_inventory_units,           override: false,        to: 0
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
  belongs_to   :sku,                             class_name: 'Omni::Sku',                     foreign_key: 'sku_id'
  belongs_to   :location,                        class_name: 'Omni::Location',                foreign_key: 'location_id'
  belongs_to   :period,                          class_name: 'Omni::Period',                  foreign_key: 'period_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :sku_display,                            to: 'sku.display'
    map :location_display,                       to: 'location.display'
    map :period_display,                         to: 'period.display'
    map :year_number,                            to: 'period.year_number'
    map :period_number,                          to: 'period.period_number'
    map :style_id,                               to: 'sku.style_id'
    map :style_display,                           to: 'sku.style_display'
  end
  # MAPPED ATTRIBUTES (End)

  # SCOPES (Start) ======================================================================

  # SCOPES (End)

  # SCOPES (Start) ======================================================================
  order_search_by :display => :asc
  # SCOPES (End)

  # HOOKS (Start) =======================================================================
  # HOOKS (End)

  # HELPERS (Start) =======================================================================
  def self.to_hash
    etl_hash = {}
    ActiveRecord::Base.connection.execute("select period_result_id, period_id, location_id, sku_id from period_results").each {|x| etl_hash["#{x[1]},#{x[2]},#{x[3]}"] = x[0]} #MRI
    etl_hash
  end
  # HELPERS (End) =======================================================================

  # INDEXING (Start) ====================================================================
  searchable do
    string   :period_display do period.display if period end
    string   :location_display do location.display if location end
    string   :sku_display do sku.display if sku end
    string   :location_id
    # string   :period_display
    string   :sku_id
    string   :period_number
    string   :year_number
    string   :display

    text     :period_display_fulltext, using: :period_display
    text     :location_display_fulltext, using: :location_display
    text     :sku_display_fulltext, using: :sku_display

    # order_search_by :period_display => :asc
  end
  # STATES (Start) ====================================================================

  # STATES (End)

  # ORDERING (Start) ====================================================================

  # ORDERING (End)

  # FILTERS (Start) =====================================================================
  filter :year_2010,            :with => {year_number: {equal_to: '2010'}},       :priority => 10
  filter :year_2011,            :with => {year_number: {equal_to: '2011'}},       :priority => 20
  filter :year_2012,            :with => {year_number: {equal_to: '2012'}},       :priority => 30
  filter :year_2013,            :with => {year_number: {equal_to: '2013'}},       :priority => 40
  filter :p1,             :with => {period_number: {equal_to: '1'}},        :priority => 10
  # FILTERS (End)

end # class Omni::PeriodResult

