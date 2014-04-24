class Omni::DailyResult < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name   = :daily_results
  self.primary_key  = :daily_result_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  # validates    :display,                         presence: true
  validates    :sku_id,                          presence: true
  validates    :location_id,                     presence: true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :daily_result_id,                  override: false,        with: :guid
  default      :date,                             override: false,        :with  => :now
  # default      :display,                          override: false,        to: lambda{|m| "#{m.sku_display} - #{m.location_display} - #{m.date}"}
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
  belongs_to   :sku,                               class_name: 'Omni::Sku',                     foreign_key: 'sku_id'
  belongs_to   :location,                        class_name: 'Omni::Location',                foreign_key: 'location_id'
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :sku_display,                            to: 'sku.display'
    map :location_display,                       to: 'location.display'
  end
  # MAPPED ATTRIBUTES (End)


  # SCOPES (Start) ======================================================================

  # SCOPES (End)


  # HOOKS (Start) =======================================================================
  hook :before_create, :set_defaults, 10

  def set_defaults
    # self.display = self.sku.display + ' - ' + self.location.display
  end
  # HOOKS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :sku_display do sku.display if sku end
    string   :location_display do location.display if location end
    date     :date
    integer  :year
    double   :net_sale_units

    text     :sku_display_fulltext, using: :sku_display
    text     :location_display_fulltext, using: :location_display
  end

  def self.to_hash
    etl_hash = {}; ActiveRecord::Base.connection.execute("select daily_result_id, location_id, sku_id, date from daily_results").each {|x| etl_hash["#{x[1]},#{x[2]},#{x[3].to_s}"] = x[0]}
    etl_hash
  end
  order_search_by :sku_display => :asc
  # INDEXING (End) ====================================================================


  # STATES (Start) ====================================================================

  # STATES (End)


  def display_as
    self.display
  end
end # class Omni::DailyResult

