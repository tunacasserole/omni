class CreateOmniPurchaseDetails < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :purchase_details if ActiveRecord::Base.connection.tables.include?('purchase_details')
    create_table(:purchase_details, :id => false) do |t|
      t.column   :purchase_detail_id,              :string,            null: false,   limit: 32
      t.column   :display,                         :string,            null: true,    limit: 300
      t.column   :purchase_id,                     :string,            null: true,    limit: 32
      t.column   :purchase_detail_nbr,             :string,            null: true,    limit: 200
      t.column   :state,                           :string,            null: true,    limit: 200
      t.column   :sku_id,                          :string,            null: true,    limit: 32
      t.column   :sku_supplier_id,                 :string,            null: true,    limit: 32
      t.column   :supplier_item_identifier,        :string,            null: true,    limit: 200
      t.column   :description,                     :string,            null: true,    limit: 2000
      t.column   :color_name,                      :string,            null: true,    limit: 200
      t.column   :size_name,                       :string,            null: true,    limit: 200
      t.column   :sku_alias,                       :string,            null: true,    limit: 200
      t.column   :allocation_profile_id,           :string,            null: true,    limit: 32
      t.column   :order_multiple_type,             :string,            null: true,    limit: 200
      t.column   :order_pack_type,                 :string,            null: true,    limit: 200
      t.column   :units_ordered,                   :decimal,           null: true,    scale: 2, precision: 11
      t.column   :order_pack_size,                 :decimal,           null: true,    scale: 2, precision: 11
      t.column   :order_cost_units,                :decimal,           null: true,    scale: 2, precision: 11
      t.column   :order_multiple,                  :decimal,           null: true,    scale: 2, precision: 11
      t.column   :selling_units_approved,          :decimal,           null: true,    scale: 2, precision: 11
      t.column   :selling_units_cancelled,         :decimal,           null: true,    scale: 2, precision: 11
      t.column   :selling_units_received,          :decimal,           null: true,    scale: 2, precision: 11
      t.column   :supplier_cost,                   :decimal,           null: true,    :scale   => 4,          :precision  => 13
      t.column   :invoice_cost,                    :decimal,           null: true,    :scale   => 4,          :precision  => 13
      t.column   :inventory_cost,                  :decimal,           null: true,    :scale   => 4,          :precision  => 13
      t.column   :extra_cost,                      :decimal,           null: true,    :scale   => 4,          :precision  => 13
      t.column   :is_destroyed,                    :boolean,           null: true
    end
  end
end
