class CreateSkuPrices < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'sku_prices'
      create_table(:sku_prices, :id => false) do |t|
        t.column :sku_price_id,                      :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :sku_id,                            :string,        :limit       => 32,     :null        => true
        t.column :price_book_id,                     :string,        :limit       => 32,     :null        => true
        t.column :effective_date,                    :date,          :null        => true
        t.column :retail_price,                      :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :price_units,                       :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :sales_category,                    :string,        :limit       => 100,    :null        => true
        t.column :price_change_id,                   :string,        :limit       => 32,     :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:sku_prices, [:sku_price_id], :unique => true)

    end
  end
end
