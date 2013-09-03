class CreateInventories < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'inventories'
      create_table(:inventories, :id => false) do |t|
        t.column :inventory_id,                      :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :sku_id,                            :string,        :limit       => 32,     :null        => false
        t.column :location_id,                       :string,        :limit       => 32,     :null        => false
        t.column :on_hand_units,                     :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :in_transit_units,                  :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :non_sellable_units,                :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :allocated_units,                   :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :reserved_units,                    :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :shipping_units,                    :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :work_in_process_units,             :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :requested_units,                   :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :frozen_units,                      :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :supplier_on_order_units,           :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :warehouse_on_order_units,          :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :cost_pool,                         :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :retail_pool,                       :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :boy_units,                         :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :boy_cost,                          :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :boy_retail,                        :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :last_inventory_units,              :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :last_inventory_cost,               :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :last_inventory_retail,             :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :reserve_end_date,                  :date,          :null        => true
        t.column :first_receipt_date,                :date,          :null        => true
        t.column :last_receipt_date,                 :date,          :null        => true
        t.column :first_sale_date,                   :date,          :null        => true
        t.column :last_sale_date,                    :date,          :null        => true
        t.column :last_inventory_date,               :date,          :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:inventories, [:inventory_id], :unique => true)

    end
  end
end
