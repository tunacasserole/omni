class CreateOmniSkuPriceRequests < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('sku_price_requests')
      create_table(:sku_price_requests, :id => false) do |t|
        t.column   :sku_price_request_id,            :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 300
        t.column   :state,                           :string,            :null  =>  true,    :limit   => 100
        t.column   :user_id,                         :string,            :null  =>  true,    :limit   => 32
        t.column   :request_date,                    :date,              :null  =>  true
        t.column   :sku_id,                          :string,            :null  =>  true,    :limit   => 32
        t.column   :location_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :customer_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :site_id,                         :string,            :null  =>  true,    :limit   => 32
        t.column   :request_price_book_id,           :string,            :null  =>  true,    :limit   => 32
        t.column   :price_date,                      :date,              :null  =>  true
        t.column   :permanent_sku_retail,            :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :permanent_units,                 :integer,           :null  =>  true
        t.column   :price_book_id,                   :string,            :null  =>  true,    :limit   => 32
        t.column   :sku_price_id,                    :string,            :null  =>  true,    :limit   => 32
        t.column   :promo_sku_retail,                :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :promo_percent,                   :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :promo_amount,                    :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :promo_units,                     :integer,           :null  =>  true
        t.column   :regular_units,                   :integer,           :null  =>  true
        t.column   :maximum_promo_units,             :integer,           :null  =>  true
        t.column   :sku_promo_price_id,              :string,            :null  =>  true,    :limit   => 32
        t.column   :sales_category,                  :string,            :null  =>  true,    :limit   => 100
        t.column   :professional_discount_percent,   :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :employee_discount_percent,       :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :school_discount_percent,         :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
