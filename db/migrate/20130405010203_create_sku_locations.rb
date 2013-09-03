class CreateSkuLocations < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'sku_locations'
      create_table(:sku_locations, :id => false) do |t|
        t.column :sku_location_id,                   :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :sku_id,                            :string,        :limit       => 32,     :null        => true
        t.column :location_id,                       :string,        :limit       => 32,     :null        => true
        t.column :is_authorized,                     :boolean,       :null        => true
        t.column :is_taxable,                        :boolean,       :null        => true
        t.column :is_special_order,                  :boolean,       :null        => true
        t.column :is_discontinued,                   :boolean,       :null        => true
        t.column :replenishment_method,              :string,        :limit       => 100,    :null        => true
        t.column :replenishment_source,              :string,        :limit       => 100,    :null        => true
        t.column :supplier_id,                       :string,        :limit       => 32,     :null        => true
        t.column :safety_stock_units,                :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :safety_stock_days,                 :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :is_override_demand_exception,      :boolean,       :null        => true
        t.column :smoothing_factor,                  :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :forecast_profile_id,               :string,        :limit       => 32,     :null        => true
        t.column :is_soq_override,                   :boolean,       :null        => true
        t.column :minimum_units,                     :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :maximum_units,                     :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :seasonal_index_id,                 :string,        :limit       => 32,     :null        => true
        t.column :forecast,                          :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :economic_order,                    :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :demand_filter_count,               :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :tracking_signal_count,             :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :tracking_signal,                   :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :tracking_signal_signed_deviation,  :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :tracking_signal_absolute_deviation,:decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :next_review_date,                  :date,          :null        => true
        t.column :velocity_code,                     :string,        :limit       => 6,      :null        => true
        t.column :standard_deviation,                :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :order_point,                       :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:sku_locations, [:sku_location_id], :unique => true)

    end
  end
end
