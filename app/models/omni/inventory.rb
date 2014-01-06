  class Omni::Inventory < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name   = :inventories
  self.primary_key  = :inventory_id
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  validates    :display,                         :presence    => true
  validates    :sku_id,                          :presence    => true
  validates    :location_id,                     :presence    => true
  validates    :replenishment_method,            :lookup      => 'REPLENISHMENT_METHOD',       :allow_nil => true
  validates    :replenishment_source,            :lookup      => 'REPLENISHMENT_SOURCE',       :allow_nil => true
  validates    :location_id, uniqueness: { scope: :sku_id, message: "Inventory record already exists for this Location and SKU." }
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default      :inventory_id,                     :override  =>  false,        :with  => :guid
  default      :display,                          :override  =>  false,        :to    => lambda{|m| "#{m.sku_display} - #{m.location_display}"}
  default      :on_hand_units,                    :override  =>  false,        :to    => 0
  default      :in_transit_units,                 :override  =>  false,        :to    => 0
  default      :non_sellable_units,               :override  =>  false,        :to    => 0
  default      :allocated_units,                  :override  =>  false,        :to    => 0
  default      :reserved_units,                   :override  =>  false,        :to    => 0
  default      :shipping_units,                   :override  =>  false,        :to    => 0
  default      :work_in_process_units,            :override  =>  false,        :to    => 0
  default      :requested_units,                  :override  =>  false,        :to    => 0
  default      :frozen_units,                     :override  =>  false,        :to    => 0
  default      :supplier_on_order_units,          :override  =>  false,        :to    => 0
  default      :warehouse_on_order_units,         :override  =>  false,        :to    => 0
  default      :cost_pool,                        :override  =>  false,        :to    => 0
  default      :retail_pool,                      :override  =>  false,        :to    => 0
  default      :boy_units,                        :override  =>  false,        :to    => 0
  default      :boy_cost,                         :override  =>  false,        :to    => 0
  default      :boy_retail,                       :override  =>  false,        :to    => 0
  default      :last_inventory_units,             :override  =>  false,        :to    => 0
  default      :last_inventory_cost,              :override  =>  false,        :to    => 0
  default      :last_inventory_retail,            :override  =>  false,        :to    => 0
  default      :sale_units_py1,                   :override  =>  false,        :to    => 0
  default      :sale_units_py2,                   :override  =>  false,        :to    => 0
  default      :sale_units_py3,                   :override  =>  false,        :to    => 0
  default      :sale_units_ytd,                   :override  =>  false,        :to    => 0
  default      :is_authorized,                    :override  =>  false,        :to    => false
  default      :is_taxable,                       :override  =>  false,        :to    => false
  default      :is_special_order,                 :override  =>  false,        :to    => false
  default      :is_discontinued,                  :override  =>  false,        :to    => false
  default      :safety_stock_units,               :override  =>  false,        :to    => 0
  default      :safety_stock_days,                :override  =>  false,        :to    => 0
  default      :smoothing_factor,                 :override  =>  false,        :to    => 0
  default      :minimum_units,                    :override  =>  false,        :to    => 0
  default      :maximum_units,                    :override  =>  false,        :to    => 0
  default      :forecast,                         :override  =>  false,        :to    => 0
  default      :standard_deviation,               :override  =>  false,        :to    => 0
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
  belongs_to   :sku,                             :class_name => 'Omni::Sku',                     :foreign_key => 'sku_id'
  belongs_to   :location,                        :class_name => 'Omni::Location',                :foreign_key => 'location_id'
  belongs_to   :department,                      :class_name => 'Omni::Department',              :foreign_key => 'department_id'
  belongs_to   :supplier,                        :class_name => 'Omni::Supplier',                :foreign_key => 'supplier_id'
  belongs_to   :forecast_profile,                :class_name => 'Omni::ForecastProfile',         :foreign_key => 'forecast_profile_id'
  belongs_to   :seasonal_index,                  :class_name => 'Omni::SeasonalIndex',           :foreign_key => 'seasonal_index_id'
  has_many     :projection_details,              :class_name => 'Omni::ProjectionDetail',        :foreign_key => :inventory_id#           :primary_key => :sku_id,           :conditions => proc {"projection_details.location_id = '#{send(:location_id)}'"}
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  mapped_attributes do
    map :sku_display,                            :to => 'sku.display'
    map :location_display,                       :to => 'location.display'
    map :department_display,                     :to => 'department.display'
    map :supplier_display,                       :to => 'supplier.display'
    map :forecast_profile_display,               :to => 'forecast_profile.display'
    map :seasonal_index_display,                 :to => 'seasonal_index.display'
    map :source,                                 :to => 'sku.source'
    map :source_id,                              :to => 'sku.source_id'
  end
  # MAPPED ATTRIBUTES (End)

  # COMPUTED ATTRIBUTES (Start) =========================================================
  # COMPUTED ATTRIBUTES (End)

  # TEMPORARY ATTRIBUTES (Start) ========================================================
  # TEMPORARY ATTRIBUTES (End)

  # ORDERING (Start) ====================================================================
  order_search_by :sku_display => :asc
  # ORDERING (End)

  # SCOPES (Start) ======================================================================
  # SCOPES (End)

  # HOOKS (Start) =======================================================================
  def self.source_hash
     # legacy_source = 'PARKER'
    to_hash = {}
    ActiveRecord::Base.connection.execute("select inventory_id, location_id, sku_id from inventories").each {|x| to_hash["#{x[1]},#{x[2]}"] = x[0]} # MRI
    # ActiveRecord::Base.connection.execute("select inventory_id, location_id, sku_id from inventories").each {|x| to_hash["#{x['location_id']},#{x['sku_displayid']}"] = x['inventory_id']}  # JRUBY!!!
    to_hash
    # sku_id = 'FC01B0200EE811E3BB7020C9D047DD15'
    # location_id = '540ADAA2AC3E11E2947800FF58D32228'
    # inventory_id = @inventories["#{location_id},#{sku_id}"]
  end
  # HOOKS (End)


  # INDEXING (Start) ====================================================================
  searchable do
    string   :sku_id
    string   :sku_display do sku.display if sku end
    string   :location_id
    string   :location_display do location.display if location end
    # # string   :department_id
    # # string   :department_display do department.display if department end
    # # string   :supplier_id
    # # string   :supplier_display do supplier.display if supplier end
    # string   :forecast_profile_id
    # string   :forecast_profile_display do forecast_profile.display if forecast_profile end
    # string   :source_id
    # string   :source
    # string   :display
    string   :on_hand_units
    string   :work_in_process_units
    string   :in_transit_units
    string   :allocated_units

    text     :sku_display_fulltext, :using => :sku_display
    text     :location_display_fulltext, :using => :location_display
    # text     :department_display_fulltext, :using => :department_display
    # text     :supplier_display_fulltext, :using => :supplier_display
    # text     :forecast_profile_display_fulltext, :using => :forecast_profile_display
    # text     :source_fulltext, :using => :source
    # text     :source_id_fulltext, :using => :source_id
  end
  # INDEXING (End)


  # STATES (Start) ====================================================================

  # STATES (End)

end # class Omni::Inventory

