class CreateOmniOrders < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('orders')
      create_table(:orders, :id => false) do |t|
        t.column   :order_id,                        :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 300
        t.column   :location_id,                     :string,            :null  =>  false,   :limit   => 32
        t.column   :terminal_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :customer_order_nbr,              :string,            :null  =>  true,    :limit   => 11
        t.column   :customer_id,                     :string,            :null  =>  false,   :limit   => 32
        t.column   :order_start_date,                :date,              :null  =>  true
        t.column   :order_date,                      :date,              :null  =>  false
        t.column   :price_lookup_date,               :date,              :null  =>  true
        t.column   :user_id,                         :string,            :null  =>  true,    :limit   => 32
        t.column   :order_source,                    :string,            :null  =>  false,   :limit   => 100
        t.column   :is_tax_exempt_date,              :boolean,           :null  =>  true
        t.column   :is_tax_exempt_customer,          :boolean,           :null  =>  true
        t.column   :is_trade_discount_order,         :boolean,           :null  =>  true
        t.column   :order_total,                     :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :state,                           :string,            :null  =>  true,    :limit   => 100
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
