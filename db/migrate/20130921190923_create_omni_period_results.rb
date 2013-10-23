class CreateOmniPeriodResults < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('period_results')
      create_table(:period_results, :id => false) do |t|
        t.column   :period_result_id,                :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :sku_id,                          :string,            :null  =>  false,   :limit   => 32
        t.column   :location_id,                     :string,            :null  =>  false,   :limit   => 32
        t.column   :period_id,                       :string,            :null  =>  false,   :limit   => 32
        t.column   :adjusted_cost,                   :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :adjusted_retail,                 :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :adjusted_units,                  :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :backorder_cost,                  :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :backorder_retail,                :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :backorder_units,                 :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :clearance_sale_cost,             :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :clearance_sale_retail,           :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :clearance_sale_units,            :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :consumed_cost,                   :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :consumed_retail,                 :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :consumed_units,                  :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :net_inventory_cost,              :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :net_inventory_retail,            :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :net_inventory_units,             :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :net_sale_cost,                   :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :net_sale_retail,                 :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :net_sale_units,                  :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :produced_cost,                   :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :produced_retail,                 :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :produced_units,                  :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :promo_sale_cost,                 :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :promo_sale_retail,               :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :promo_sale_units,                :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :purchased_cost,                  :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :purchased_retail,                :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :purchased_units,                 :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :received_cost,                   :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :received_retail,                 :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :received_units,                  :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :requested_cost,                  :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :requested_retail,                :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :requested_units,                 :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :return_sale_cost,                :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :return_sale_retail,              :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :return_sale_units,               :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :shipped_cost,                    :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :shipped_retail,                  :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :shipped_units,                   :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :work_in_process_cost,            :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :work_in_process_retail,          :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :work_in_process_units,           :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :professional_discount_cost,      :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :employee_discount_cost,          :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :manager_discount_cost,           :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :ending_inventory_cost,           :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :ending_inventory_retail,         :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :ending_inventory_units,          :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
