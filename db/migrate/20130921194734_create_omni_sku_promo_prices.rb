class CreateOmniSkuPromoPrices < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('sku_promo_prices')
      create_table(:sku_promo_prices, :id => false) do |t|
        t.column   :sku_promo_price_id,              :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :sku_id,                          :string,            :null  =>  true,    :limit   => 32
        t.column   :price_book_id,                   :string,            :null  =>  true,    :limit   => 32
        t.column   :effective_date,                  :date,              :null  =>  true
        t.column   :end_date,                        :date,              :null  =>  true
        t.column   :regular_units,                   :integer,           :null  =>  true
        t.column   :promo_units,                     :integer,           :null  =>  true
        t.column   :promo_percent,                   :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :promo_amount,                    :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :promo_price,                     :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :maximum_promo_units,             :integer,           :null  =>  true
        t.column   :sales_category,                  :string,            :null  =>  true,    :limit   => 100
        t.column   :promotion_id,                    :string,            :null  =>  true,    :limit   => 32
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
