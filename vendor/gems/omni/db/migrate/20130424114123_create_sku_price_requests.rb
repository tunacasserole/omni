class CreateSkuPriceRequests < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'sku_price_requests'
      create_table(:sku_price_requests, :id => false) do |t|
        t.column :sku_price_request_id,              :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => true
        t.column :state,                             :string,        :limit       => 100,    :null        => true
        t.column :user_id,                           :string,        :limit       => 32,     :null        => true
        t.column :request_date,                      :date,          :null        => true
        t.column :sku_id,                            :string,        :limit       => 32,     :null        => true
        t.column :location_id,                       :string,        :limit       => 32,     :null        => true
        t.column :customer_id,                       :string,        :limit       => 32,     :null        => true
        t.column :site_id,                           :string,        :limit       => 32,     :null        => true
        t.column :request_price_book_id,             :string,        :limit       => 32,     :null        => true
        t.column :price_date,                        :date,          :null        => true
        t.column :permanent_sku_retail,              :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :permanent_units,                   :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :price_book_id,                     :string,        :limit       => 32,     :null        => true
        t.column :sku_price_id,                      :string,        :limit       => 32,     :null        => true
        t.column :promo_sku_retail,                  :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :promo_percent,                     :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :promo_amount,                      :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :promo_units,                       :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :regular_units,                     :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :maximum_promo_units,               :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :sku_promo_price_id,                :string,        :limit       => 32,     :null        => true
        t.column :sales_category,                    :string,        :limit       => 100,    :null        => true
        t.column :professional_discount_percent,     :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :employee_discount_percent,         :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :school_discount_percent,           :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:sku_price_requests, [:sku_price_request_id], :unique => true)

    end
  end
end
