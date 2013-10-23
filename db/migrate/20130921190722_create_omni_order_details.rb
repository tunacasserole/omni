class CreateOmniOrderDetails < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('order_details')
      create_table(:order_details, :id => false) do |t|
        t.column   :ship_longitude,                  :string,            :null  =>  true,    :limit   => 15
        t.column   :is_residential,                  :boolean,           :null  =>  true
        t.column   :is_commercial,                   :boolean,           :null  =>  true
        t.column   :phone,                           :string,            :null  =>  true,    :limit   => 30
        t.column   :email_address,                   :string,            :null  =>  true,    :limit   => 200
        t.column   :site_id,                         :string,            :null  =>  true,    :limit   => 32
        t.column   :grade_id,                        :string,            :null  =>  true,    :limit   => 32
        t.column   :gender,                          :string,            :null  =>  true,    :limit   => 100
        t.column   :sales_user_id,                   :string,            :null  =>  true,    :limit   => 32
        t.column   :promised_date,                   :date,              :null  =>  true
        t.column   :state,                           :string,            :null  =>  true,    :limit   => 100
        t.column   :serial_number,                   :string,            :null  =>  true,    :limit   => 100
        t.column   :order_units,                     :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :retail_price,                    :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :sale_price,                      :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :sales_tax_rate,                  :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :price_type,                      :string,            :null  =>  true,    :limit   => 100
        t.column   :is_taxable_product,              :boolean,           :null  =>  true
        t.column   :is_tax_charged,                  :boolean,           :null  =>  true
        t.column   :shipping_amount,                 :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :discount_percent,                :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :discount_amount,                 :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :customer_discount_reason,        :string,            :null  =>  true,    :limit   => 100
        t.column   :customer_return_reason,          :string,            :null  =>  true,    :limit   => 100
        t.column   :customer_cancel_reason,          :string,            :null  =>  true,    :limit   => 100
        t.column   :cancel_date,                     :date,              :null  =>  true
        t.column   :reference_order_detail_id,       :string,            :null  =>  true,    :limit   => 32
        t.column   :is_cancelled,                    :boolean,           :null  =>  true
        t.column   :is_layaway,                      :boolean,           :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
        t.column   :order_detail_id,                 :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 300
        t.column   :order_id,                        :string,            :null  =>  true,    :limit   => 32
        t.column   :order_line_nbr,                  :string,            :null  =>  true,    :limit   => 11
        t.column   :sku_id,                          :string,            :null  =>  false,   :limit   => 32
        t.column   :sku_alias_id,                    :string,            :null  =>  false,   :limit   => 32
        t.column   :delivery_method,                 :string,            :null  =>  false,   :limit   => 100
        t.column   :pickup_location_id,              :string,            :null  =>  true,    :limit   => 32
        t.column   :ship_to_name,                    :string,            :null  =>  true,    :limit   => 100
        t.column   :ship_line_1,                     :string,            :null  =>  true,    :limit   => 100
        t.column   :ship_line_2,                     :string,            :null  =>  true,    :limit   => 100
        t.column   :ship_line_3,                     :string,            :null  =>  true,    :limit   => 100
        t.column   :ship_line_4,                     :string,            :null  =>  true,    :limit   => 100
        t.column   :ship_city,                       :string,            :null  =>  true,    :limit   => 100
        t.column   :ship_state_code,                 :string,            :null  =>  true,    :limit   => 2
        t.column   :ship_zip,                        :string,            :null  =>  true,    :limit   => 10
        t.column   :ship_country,                    :string,            :null  =>  true,    :limit   => 100
        t.column   :ship_latitude,                   :string,            :null  =>  true,    :limit   => 15
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
