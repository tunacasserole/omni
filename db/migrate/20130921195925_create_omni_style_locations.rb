class CreateOmniStyleLocations < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('style_locations')
      create_table(:style_locations, :id => false) do |t|
        t.column   :style_location_id,               :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :state,                           :string,            :null  =>  true,    :limit   => 100
        t.column   :style_id,                        :string,            :null  =>  true,    :limit   => 32
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
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
