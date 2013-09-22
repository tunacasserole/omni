class CreateOmniSkuLocations < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('sku_locations')
      create_table(:sku_locations, :id => false) do |t|
        t.column   :sku_location_id,                 :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :sku_id,                          :string,            :null  =>  true,    :limit   => 32
        t.column   :location_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :is_authorized,                   :boolean,           :null  =>  true
        t.column   :is_taxable,                      :boolean,           :null  =>  true
        t.column   :is_special_order,                :boolean,           :null  =>  true
        t.column   :is_discontinued,                 :boolean,           :null  =>  true
        t.column   :replenishment_method,            :string,            :null  =>  true,    :limit   => 100
        t.column   :replenishment_source,            :string,            :null  =>  true,    :limit   => 100
        t.column   :supplier_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :safety_stock_units,              :integer,           :null  =>  true
        t.column   :safety_stock_days,               :integer,           :null  =>  true
        t.column   :is_override_demand_exception,    :boolean,           :null  =>  true
        t.column   :smoothing_factor,                :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :forecast_profile_id,             :string,            :null  =>  true,    :limit   => 32
        t.column   :is_soq_override,                 :boolean,           :null  =>  true
        t.column   :minimum_units,                   :integer,           :null  =>  true
        t.column   :maximum_units,                   :integer,           :null  =>  true
        t.column   :seasonal_index_id,               :string,            :null  =>  true,    :limit   => 32
        t.column   :forecast,                        :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :economic_order,                  :integer,           :null  =>  true
        t.column   :demand_filter_count,             :integer,           :null  =>  true
        t.column   :tracking_signal_count,           :integer,           :null  =>  true
        t.column   :tracking_signal,                 :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :tracking_signal_signed_deviation,:decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :tracking_signal_absolute_deviation,:decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :next_review_date,                :date,              :null  =>  true
        t.column   :velocity_code,                   :string,            :null  =>  true,    :limit   => 6
        t.column   :standard_deviation,              :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :order_point,                     :integer,           :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
