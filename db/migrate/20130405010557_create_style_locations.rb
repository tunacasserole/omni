class CreateStyleLocations < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'style_locations'
      create_table(:style_locations, :id => false) do |t|
        t.column :style_location_id,                 :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :state,                              :string,       :limit => 100,                 :null => true           
        t.column :style_id,                          :string,        :limit       => 32,     :null        => true
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
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:style_locations, [:style_location_id], :unique => true)

    end
  end
end
