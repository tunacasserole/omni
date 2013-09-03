class CreateSkuPromoPrices < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'sku_promo_prices'
      create_table(:sku_promo_prices, :id => false) do |t|
        t.column :sku_promo_price_id,                :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :sku_id,                            :string,        :limit       => 32,     :null        => true
        t.column :price_book_id,                     :string,        :limit       => 32,     :null        => true
        t.column :effective_date,                    :date,          :null        => true
        t.column :end_date,                          :date,          :null        => true
        t.column :regular_units,                     :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :promo_units,                       :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :promo_percent,                     :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :promo_amount,                      :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :promo_price,                       :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :maximum_promo_units,               :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :sales_category,                    :string,        :limit       => 100,    :null        => true
        t.column :promotion_id,                      :string,        :limit       => 32,     :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:sku_promo_prices, [:sku_promo_price_id], :unique => true)

    end
  end
end
