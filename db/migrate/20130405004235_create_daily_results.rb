class CreateDailyResults < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'daily_results'
      create_table(:daily_results, :id => false) do |t|
        t.column :daily_result_id,                   :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :sku_id,                            :string,        :limit       => 32,     :null        => false
        t.column :location_id,                       :string,        :limit       => 32,     :null        => false
        t.column :date,                              :date,          :null        => false
        t.column :adjusted_cost,                     :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :adjusted_retail,                   :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :adjusted_units,                    :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :backorder_cost,                    :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :backorder_retail,                  :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :backorder_units,                   :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :clearance_sale_cost,               :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :clearance_sale_retail,             :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :clearance_sale_units,              :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :consumed_cost,                     :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :consumed_retail,                   :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :consumed_units,                    :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :net_inventory_cost,                :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :net_inventory_retail,              :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :net_inventory_units,               :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :net_sale_cost,                     :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :net_sale_retail,                   :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :net_sale_units,                    :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :produced_cost,                     :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :produced_retail,                   :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :produced_units,                    :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :promo_sale_cost,                   :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :promo_sale_retail,                 :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :promo_sale_units,                  :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :purchased_cost,                    :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :purchased_retail,                  :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :purchased_units,                   :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :received_cost,                     :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :received_retail,                   :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :received_units,                    :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :requested_cost,                    :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :requested_retail,                  :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :requested_units,                   :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :return_sale_cost,                  :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :return_sale_retail,                :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :return_sale_units,                 :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :shipped_cost,                      :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :shipped_retail,                    :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :shipped_units,                     :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :work_in_process_cost,              :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :work_in_process_retail,            :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :work_in_process_units,             :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:daily_results, [:daily_result_id], :unique => true)

    end
  end
end
