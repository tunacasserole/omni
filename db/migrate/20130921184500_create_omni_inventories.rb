class CreateOmniInventories < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :inventories if ActiveRecord::Base.connection.tables.include?('inventories')
    drop_table :sku_locations if ActiveRecord::Base.connection.tables.include?('sku_locations')
    create_table(:inventories, :id => false) do |t|
        t.column   :inventory_id,                    :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :sku_id,                          :string,            :null  =>  false,   :limit   => 32
        t.column   :department_id,                   :string,            :null  =>  false,   :limit   => 32
        t.column   :location_id,                     :string,            :null  =>  false,   :limit   => 32
        t.column   :supplier_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :forecast_profile_id,             :string,            :null  =>  true,    :limit   => 32
        t.column   :seasonal_index_id,               :string,            :null  =>  true,    :limit   => 32
        t.column   :on_hand_units,                   :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :work_in_process_units,           :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :supplier_on_order_units,         :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :warehouse_on_order_units,        :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :in_transit_units,                :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :non_sellable_units,              :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :allocated_units,                 :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :reserved_units,                  :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :shipping_units,                  :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :requested_units,                 :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :frozen_units,                    :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :cost_pool,                       :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :retail_pool,                     :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :boy_units,                       :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :boy_cost,                        :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :boy_retail,                      :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :last_inventory_units,            :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :last_inventory_cost,             :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :last_inventory_retail,           :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :sale_units_ytd,           :decimal,           :null  =>  true,    :precision  => 11,    :scale   => 2
        t.column   :sale_units_py1,           :decimal,           :null  =>  true,    :precision  => 11,    :scale   => 2
        t.column   :sale_units_py2,           :decimal,           :null  =>  true,    :precision  => 11,    :scale   => 2
        t.column   :sale_units_py3,           :decimal,           :null  =>  true,    :precision  => 11,    :scale   => 2
        t.column   :sale_retail_ytd,           :decimal,           :null  =>  true,    :precision  => 11,    :scale   => 2
        t.column   :sale_retail_py1,           :decimal,           :null  =>  true,    :precision  => 11,    :scale   => 2
        t.column   :sale_retail_py2,           :decimal,           :null  =>  true,    :precision  => 11,    :scale   => 2
        t.column   :sale_retail_py3,           :decimal,           :null  =>  true,    :precision  => 11,    :scale   => 2
        t.column   :sale_cost_ytd,           :decimal,           :null  =>  true,    :precision  => 11,    :scale   => 2
        t.column   :sale_cost_py1,           :decimal,           :null  =>  true,    :precision  => 11,    :scale   => 2
        t.column   :sale_cost_py2,           :decimal,           :null  =>  true,    :precision  => 11,    :scale   => 2
        t.column   :sale_cost_py3,           :decimal,           :null  =>  true,    :precision  => 11,    :scale   => 2
        t.column   :reserve_end_date,                :date,              :null  =>  true
        t.column   :first_receipt_date,              :date,              :null  =>  true
        t.column   :last_receipt_date,               :date,              :null  =>  true
        t.column   :first_sale_date,                 :date,              :null  =>  true
        t.column   :last_sale_date,                  :date,              :null  =>  true
        t.column   :last_inventory_date,             :date,              :null  =>  true
        t.column   :replenishment_method,            :string,            :null  =>  true,    :limit   => 100
        t.column   :replenishment_source,            :string,            :null  =>  true,    :limit   => 100
        t.column   :safety_stock_units,              :integer,           :null  =>  true
        t.column   :safety_stock_days,               :integer,           :null  =>  true
        t.column   :smoothing_factor,                :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :minimum_units,                   :integer,           :null  =>  true
        t.column   :maximum_units,                   :integer,           :null  =>  true
        t.column   :forecast,                        :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :velocity_code,                   :string,            :null  =>  true,    :limit   => 6
        t.column   :standard_deviation,              :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :is_authorized,                   :boolean,           :null  =>  true
        t.column   :is_taxable,                      :boolean,           :null  =>  true
        t.column   :is_special_order,                :boolean,           :null  =>  true
        t.column   :is_discontinued,                 :boolean,           :null  =>  true
        t.column   :is_destroyed,                 :boolean,           :null  =>  true
    end
  end
end
