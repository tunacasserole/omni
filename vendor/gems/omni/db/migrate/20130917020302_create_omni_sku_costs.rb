class CreateOmniSkuCosts < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('sku_costs')
      create_table(:sku_costs, :id => false) do |t|
        t.column   :sku_cost_id,                     :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :sku_id,                          :string,            :null  =>  false,   :limit   => 32
        t.column   :first_cost,                      :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :last_cost,                       :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :average_cost,                    :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :on_hand_units,                   :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :cost_pool,                       :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :retail_pool,                     :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :is_updated_average_cost,         :boolean,           :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
