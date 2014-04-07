class CreateOmniSkuSuppliers < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('sku_suppliers')
      create_table(:sku_suppliers, :id => false) do |t|
        t.column   :sku_supplier_id,                 :string,            null: false,   limit: 32
        t.column   :display,                         :string,            null: true,    limit: 300
        t.column   :sku_id,                          :string,            null: true,    limit: 32
        t.column   :supplier_id,                     :string,            null: true,    limit: 32
        t.column   :supplier_item_identifier,        :string,            null: true,    limit: 200
        t.column   :description,                     :string,            null: true,    limit: 300
        t.column   :supplier_cost_units,             :integer,           null: true
        t.column   :supplier_cost,                   :decimal,           null: true,    :scale   => 4,          :precision  => 13
        t.column   :master_pack_units,               :integer,           null: true
        t.column   :master_pack_uom_code,            :string,            null: true,    limit: 200
        t.column   :master_pack_length,              :decimal,           null: true,    scale: 2, precision: 11
        t.column   :master_pack_height,              :decimal,           null: true,    scale: 2, precision: 11
        t.column   :master_pack_width,               :decimal,           null: true,    scale: 2, precision: 11
        t.column   :master_pack_weight,              :decimal,           null: true,    scale: 2, precision: 11
        t.column   :inner_pack_units,                :integer,           null: true
        t.column   :inner_pack_uom_code,             :string,            null: true,    limit: 200
        t.column   :inner_pack_length,               :decimal,           null: true,    scale: 2, precision: 11
        t.column   :inner_pack_height,               :decimal,           null: true,    scale: 2, precision: 11
        t.column   :inner_pack_width,                :decimal,           null: true,    scale: 2, precision: 11
        t.column   :inner_pack_weight,               :decimal,           null: true,    scale: 2, precision: 11
        t.column   :pack_type,                       :string,            null: true,    limit: 200
        t.column   :minimum_order_units,             :integer,           null: true
        t.column   :minimum_order_value,             :decimal,           null: true,    scale: 2, precision: 11
        t.column   :minimum_order_weight,            :decimal,           null: true,    scale: 2, precision: 11
        t.column   :minimum_order_cube,              :decimal,           null: true,    scale: 2, precision: 11
        t.column   :order_multiple_type,             :string,            null: true,    limit: 200
        t.column   :pallet_tie,                      :integer,           null: true
        t.column   :pallet_high,                     :integer,           null: true
        t.column   :pallet_container_id,             :string,            null: true,    limit: 32
        t.column   :extra_cost,                      :decimal,           null: true,    :scale   => 4,          :precision  => 13
        t.column   :cost_id,                         :string,            null: true,    limit: 32
        t.column   :origin_country,                  :string,            null: true,    limit: 200
        t.column   :freight_term,                    :string,            null: true,    limit: 200
        t.column   :is_primary,                      :boolean,           null: true
        t.column   :is_manufacturer,                 :boolean,           null: true
        t.column   :is_discontinued,                 :boolean,           null: true
        t.column   :is_included_extra_cost,          :boolean,           null: true
        t.column   :is_conveyable_master_pack,       :boolean,           null: true
        t.column   :is_conveyable_inner_pack,        :boolean,           null: true
        t.column   :is_destroyed,                    :boolean,           null: true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
