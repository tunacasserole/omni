class CreateOmniSkus < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :skus if ActiveRecord::Base.connection.tables.include?('skus')
    drop_table :sku_costs if ActiveRecord::Base.connection.tables.include?('sku_costs')
      create_table(:skus, :id => false) do |t|
        t.column   :sku_id,                          :string,            null: false,   limit: 32
        t.column   :source,                          :string,            null: true,    limit: 200
        t.column   :source_id,                       :string,            null: true,    limit: 200
        t.column   :mark_stock,                      :string,            null: true,    limit: 200
        t.column   :mark_size,                       :string,            null: true,    limit: 200
        t.column   :sku_nbr,                         :string,            null: true,    limit: 200
        t.column   :state,                           :string,            null: true,    limit: 200
        t.column   :display,                         :string,            null: true,   limit: 200
        t.column   :description,                     :string,            null: true,    limit: 300
        t.column   :short_name,                      :string,            null: true,    :limit   => 15
        t.column   :pos_name,                        :string,            null: true,    limit: 200
        t.column   :design_code,                     :string,            null: true,    :limit   => 10
        t.column   :maintenance_level,               :string,            null: true,    limit: 200
        t.column   :conversion_type,                 :string,            null: true,    limit: 200
        t.column   :generic_sku_id,                  :string,            null: true,    limit: 32
        t.column   :add_on_sku_id,                   :string,            null: true,    limit: 32
        t.column   :account_id,                         :string,            null: true,    limit: 32
        t.column   :style_color_size_id,             :string,            null: true,    limit: 32
        t.column   :style_id,                        :string,            null: true,    limit: 32
        t.column   :size_id,                         :string,            null: true,    limit: 32
        t.column   :subclass_id,                     :string,            null: true,    limit: 32
        t.column   :classification_id,               :string,            null: true,    :limit => 32
        t.column   :department_id,                   :string,            null: true,    :limit => 32
        t.column   :buyer_user_id,                   :string,            null: true,    limit: 32
        t.column   :product_type_id,                 :string,            null: true,    limit: 32
        t.column   :supplier_id,                     :string,            null: true,    limit: 32
        t.column   :color_id,                        :string,            null: true,    limit: 32
        t.column   :color_name,                      :string,            null: true,    limit: 200
        t.column   :color_short_name,                :string,            null: true,    :limit   => 15
        t.column   :brand,                           :string,            null: true,    limit: 200
        t.column   :effective_date,                  :datetime,          null: true
        t.column   :discontinued_date,               :datetime,          null: true
        t.column   :out_of_stock_date,               :datetime,          null: true
        t.column   :fabric_content,                  :string,            null: true,    limit: 200
        t.column   :initial_retail_price,            :decimal,           null: true,    scale: 2, precision: 11
        t.column   :suggested_retail_price,          :decimal,           null: true,    scale: 2, precision: 11
        t.column   :smoothing_factor,                :decimal,           null: true,    scale: 2, precision: 11
        t.column   :replenishment_method,            :string,            null: true,    limit: 200
        t.column   :minimum_on_hand_units,           :integer,           null: true
        t.column   :maximum_on_hand_units,           :integer,           null: true
        t.column   :pack_type,                       :string,            null: true,    limit: 200
        t.column   :replenishment_source,            :string,            null: true,    limit: 200
        t.column   :sell_unit_uom_code,              :string,            null: true,    limit: 200
        t.column   :sell_unit_length,                :decimal,           null: true,    scale: 2, precision: 11
        t.column   :sell_unit_height,                :decimal,           null: true,    scale: 2, precision: 11
        t.column   :sell_unit_width,                 :decimal,           null: true,    scale: 2, precision: 11
        t.column   :sell_unit_weight,                :decimal,           null: true,    scale: 2, precision: 11
        t.column   :order_uom_code,                  :string,            null: true,    limit: 200
        t.column   :order_package_type,              :string,            null: true,    limit: 200
        t.column   :garment_pieces,                  :integer,           null: true
        t.column   :stock_nbr,                       :string,            null: true,    limit: 200
        t.column   :conversion_cost,                 :decimal,           null: true,    :scale   => 4,          :precision  => 13
        t.column   :first_cost,                      :decimal,           null: true,    :scale   => 4,          :precision  => 13
        t.column   :last_cost,                       :decimal,           null: true,    :scale   => 4,          :precision  => 13
        t.column   :average_cost,                    :decimal,           null: true,    :scale   => 4,          :precision  => 13
        t.column   :on_hand_units,                   :decimal,           null: true,    scale: 2, precision: 11
        t.column   :cost_pool,                       :decimal,           null: true,    :scale   => 4,          :precision  => 13
        t.column   :retail_pool,                     :decimal,           null: true,    :scale   => 4,          :precision  => 13
        t.column   :is_not_stocked,                  :boolean,           null: true
        t.column   :is_converted,                    :boolean,           null: true
        t.column   :is_enabled,                      :boolean,           null: true
        t.column   :is_conveyable_sell_unit,         :boolean,           null: true
        t.column   :is_discountable,                 :boolean,           null: true
        t.column   :is_taxable,                      :boolean,           null: true
        t.column   :is_updated_average_cost,         :boolean,           null: true
        t.column   :is_special_order,                :boolean,           null: true
        t.column   :is_special_size,                 :boolean,           null: true
        t.column   :is_destroyed,                    :boolean,           null: true
        t.column   :is_indexed,                      :boolean,           null: true
      end
  end
end
