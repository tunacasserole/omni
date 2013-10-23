class CreateOmniAreas < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('areas')
      create_table(:areas, :id => false) do |t|
        t.column   :area_id,                         :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 300
        t.column   :location_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :area_nbr,                        :string,            :null  =>  true,    :limit   => 11
        t.column   :description,                     :string,            :null  =>  true,    :limit   => 300
        t.column   :short_name,                      :string,            :null  =>  true,    :limit   => 100
        t.column   :is_receiving,                    :boolean,           :null  =>  true
        t.column   :is_picking,                      :boolean,           :null  =>  true
        t.column   :is_reserve,                      :boolean,           :null  =>  true
        t.column   :is_putaway,                      :boolean,           :null  =>  true
        t.column   :is_supplier_return,              :boolean,           :null  =>  true
        t.column   :is_processing,                   :boolean,           :null  =>  true
        t.column   :is_shipping,                     :boolean,           :null  =>  true
        t.column   :is_put_location,                 :boolean,           :null  =>  true
        t.column   :is_special_handling,             :boolean,           :null  =>  true
        t.column   :is_quality_control,              :boolean,           :null  =>  true
        t.column   :is_quick_case,                   :boolean,           :null  =>  true
        t.column   :is_many_sku_per_bin,             :boolean,           :null  =>  true
        t.column   :default_cube_capacity,           :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :is_request_cube_calculation,     :boolean,           :null  =>  true
        t.column   :last_utilization_calc_date,      :date,              :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
