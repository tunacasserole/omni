class CreatePurchaseDetails < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'purchase_details'
      create_table(:purchase_details, :id => false) do |t|
        t.column :supplier_cost,                     :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :invoice_cost,                      :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :inventory_cost,                    :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :extra_cost,                        :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
        t.column :purchase_detail_id,                :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :purchase_id,                       :string,        :limit       => 32,     :null        => true
        t.column :purchase_line_nbr,                 :string,        :limit       => 11,     :null        => true
        t.column :sku_id,                            :string,        :limit       => 32,     :null        => true
        t.column :supplier_item_identifier,          :string,        :limit       => 30,     :null        => true
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :color_name,                        :string,        :limit       => 100,    :null        => true
        t.column :size_name,                         :string,        :limit       => 100,    :null        => true
        t.column :sku_alias,                         :string,        :limit       => 30,     :null        => true
        t.column :state,                             :string,        :limit       => 100,    :null        => true
        t.column :units_ordered,                     :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :order_pack_size,                   :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :order_pack_type,                   :string,        :limit       => 100,    :null        => true
        t.column :order_cost_units,                  :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :order_multiple_type,               :string,        :limit       => 100,    :null        => true
        t.column :order_multiple,                    :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :units_approved,                    :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :units_cancelled,                   :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :cost_id,                           :string,        :limit       => 32,     :null        => true
      end
      add_index(:purchase_details, [:purchase_detail_id], :unique => true)

    end
  end
end
