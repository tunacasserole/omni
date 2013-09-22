class CreateOmniShippingRates < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('shipping_rates')
      create_table(:shipping_rates, :id => false) do |t|
        t.column   :shipping_rate_id,                :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :supplier_id,                     :string,            :null  =>  false,   :limit   => 32
        t.column   :shipping_rate_name,              :string,            :null  =>  false,   :limit   => 100
        t.column   :shipping_charge,                 :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :minimum_sale,                    :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :maximum_sale,                    :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
