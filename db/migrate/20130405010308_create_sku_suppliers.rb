class CreateSkuSuppliers < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'sku_suppliers'
      create_table(:sku_suppliers, :id => false) do |t|
        t.column :sku_supplier_id,                   :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => true
        t.column :sku_id,                            :string,        :limit       => 32,     :null        => true
        t.column :supplier_id,                       :string,        :limit       => 32,     :null        => true
        t.column :supplier_item_identifier,          :string,        :limit       => 30,     :null        => true
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :is_primary_supplier,               :boolean,       :null        => true
        t.column :is_manufacturer,                   :boolean,       :null        => true
        t.column :is_discontinued,                   :boolean,       :null        => true
        t.column :supplier_cost_units,               :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :supplier_cost,                     :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :master_pack_units,                 :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :master_pack_uom_code,              :string,        :limit       => 100,    :null        => true
        t.column :master_pack_length,                :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :master_pack_height,                :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :master_pack_width,                 :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :master_pack_weight,                :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :inner_pack_units,                  :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :inner_pack_uom_code,               :string,        :limit       => 100,    :null        => true
        t.column :inner_pack_length,                 :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :inner_pack_height,                 :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :inner_pack_width,                  :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :inner_pack_weight,                 :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :pack_type,                         :string,        :limit       => 100,    :null        => true
        t.column :minimum_order_units,               :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :minimum_order_value,               :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :minimum_order_weight,              :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :minimum_order_cube,                :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :order_multiple_type,               :string,        :limit       => 100,    :null        => true
        t.column :extra_cost,                        :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :is_included_extra_cost,            :boolean,       :null        => true
        t.column :cost_id,                           :string,        :limit       => 32,     :null        => true
        t.column :origin_country,                    :string,        :limit       => 100,    :null        => true
        t.column :freight_term,                      :string,        :limit       => 100,    :null        => true
        t.column :is_conveyable_master_pack,         :boolean,       :null        => true
        t.column :is_conveyable_inner_pack,          :boolean,       :null        => true
        t.column :pallet_tie,                        :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :pallet_high,                       :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :pallet_container_id,               :string,        :limit       => 32,     :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:sku_suppliers, [:sku_supplier_id], :unique => true)

    end
  end
end
