class CreateSkus < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'skus'
      create_table(:skus, :id => false) do |t|
        t.column :sku_id,                            :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 100,    :null        => false
        t.column :sku_nbr,                           :string,        :limit       => 11,     :null        => true
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :short_name,                        :string,        :limit       => 15,     :null        => true
        t.column :pos_name,                          :string,        :limit       => 30,     :null        => true
        t.column :design_code,                       :string,        :limit       => 10,     :null        => true
        t.column :state,                             :string,        :limit       => 100,    :null        => true
        t.column :maintenance_level,                 :string,        :limit       => 100,    :null        => true
        t.column :is_converted,                      :boolean,       :null        => true
        t.column :generic_sku_id,                    :string,        :limit       => 32,     :null        => true
        t.column :add_on_sku_id,                     :string,        :limit       => 32,     :null        => true
        t.column :site_id,                           :string,        :limit       => 32,     :null        => true
        t.column :conversion_type,                   :string,        :limit       => 100,    :null        => true
        t.column :style_color_size_id,               :string,        :limit       => 32,     :null        => true
        t.column :style_id,                          :string,        :limit       => 32,     :null        => true
        t.column :color_id,                          :string,        :limit       => 32,     :null        => true
        t.column :color_name,                        :string,        :limit       => 100,    :null        => true
        t.column :color_short_name,                  :string,        :limit       => 15,     :null        => true
        t.column :size_id,                           :string,        :limit       => 32,     :null        => true
        t.column :effective_date,                    :date,          :null        => true
        t.column :discontinued_date,                 :date,          :null        => true
        t.column :out_of_stock_date,                 :date,          :null        => true
        t.column :is_enabled,                        :boolean,       :null        => true
        t.column :subclass_id,                       :string,        :limit       => 32,     :null        => true
        t.column :buyer_user_id,                     :string,        :limit       => 32,     :null        => true
        t.column :brand,                             :string,        :limit       => 100,    :null        => true
        t.column :product_type_id,                   :string,        :limit       => 32,     :null        => true
        t.column :fabric_content,                    :string,        :limit       => 100,    :null        => true
        t.column :initial_retail_price,              :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :suggested_retail_price,            :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :smoothing_factor,                  :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :replenishment_method,              :string,        :limit       => 100,    :null        => true
        t.column :minimum_on_hand_units,             :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :maximum_on_hand_units,             :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :pack_type,                         :string,        :limit       => 100,    :null        => true
        t.column :replenishment_source,              :string,        :limit       => 100,    :null        => true
        t.column :is_not_stocked,                    :boolean,       :null        => true
        t.column :sell_unit_uom_code,                :string,        :limit       => 100,    :null        => true
        t.column :sell_unit_length,                  :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :sell_unit_height,                  :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :sell_unit_width,                   :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :sell_unit_weight,                  :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :is_conveyable_sell_unit,           :boolean,       :null        => true
        t.column :is_discountable,                   :boolean,       :null        => true
        t.column :is_taxable,                        :boolean,       :null        => true
        t.column :supplier_id,                       :string,        :limit       => 32,     :null        => true
        t.column :order_uom_code,                    :string,        :limit       => 100,    :null        => true
        t.column :order_package_type,                :string,        :limit       => 100,    :null        => true
        t.column :garment_pieces,                    :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :stock_nbr,                          :string,        :limit       => 100,     :null        => true        
        t.column :is_special_order,                  :boolean,       :null        => true
        t.column :is_special_size,                   :boolean,       :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:skus, [:sku_id], :unique => true)

    end
  end
end
