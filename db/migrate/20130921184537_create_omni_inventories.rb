class CreateOmniInventories < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('inventories')
      create_table(:inventories, :id => false) do |t|
        t.column   :inventory_id,                    :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :sku_id,                          :string,            :null  =>  false,   :limit   => 32
        t.column   :location_id,                     :string,            :null  =>  false,   :limit   => 32
        t.column   :on_hand_units,                   :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :in_transit_units,                :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :non_sellable_units,              :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :allocated_units,                 :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :reserved_units,                  :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :shipping_units,                  :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :work_in_process_units,           :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :requested_units,                 :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :frozen_units,                    :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :supplier_on_order_units,         :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :warehouse_on_order_units,        :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :cost_pool,                       :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :retail_pool,                     :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :boy_units,                       :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :boy_cost,                        :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :boy_retail,                      :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :last_inventory_units,            :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :last_inventory_cost,             :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :last_inventory_retail,           :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :reserve_end_date,                :date,              :null  =>  true
        t.column   :first_receipt_date,              :date,              :null  =>  true
        t.column   :last_receipt_date,               :date,              :null  =>  true
        t.column   :first_sale_date,                 :date,              :null  =>  true
        t.column   :last_sale_date,                  :date,              :null  =>  true
        t.column   :last_inventory_date,             :date,              :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
