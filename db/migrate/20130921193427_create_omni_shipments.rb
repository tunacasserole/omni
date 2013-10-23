class CreateOmniShipments < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('shipments')
      create_table(:shipments, :id => false) do |t|
        t.column   :shipment_id,                     :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 300
        t.column   :state,                           :string,            :null  =>  true,    :limit   => 100
        t.column   :shipment_nbr,                    :string,            :null  =>  true,    :limit   => 11
        t.column   :location_id,                     :string,            :null  =>  false,   :limit   => 32
        t.column   :shippable_type,                  :string,            :null  =>  true,    :limit   => 100
        t.column   :shippable_id,                    :string,            :null  =>  true,    :limit   => 32
        t.column   :supplier_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :tracking_number,                 :string,            :null  =>  true,    :limit   => 100
        t.column   :create_date,                     :date,              :null  =>  false
        t.column   :ship_date,                       :date,              :null  =>  true
        t.column   :receipt_date,                    :date,              :null  =>  true
        t.column   :estimated_delivery_date,         :date,              :null  =>  true
        t.column   :shipping_cost,                   :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :ship_name,                       :string,            :null  =>  true,    :limit   => 100
        t.column   :ship_line_1,                     :string,            :null  =>  true,    :limit   => 100
        t.column   :ship_line_2,                     :string,            :null  =>  true,    :limit   => 100
        t.column   :ship_line_3,                     :string,            :null  =>  true,    :limit   => 100
        t.column   :ship_line_4,                     :string,            :null  =>  true,    :limit   => 100
        t.column   :ship_city,                       :string,            :null  =>  true,    :limit   => 100
        t.column   :ship_state_code,                 :string,            :null  =>  true,    :limit   => 2
        t.column   :ship_zip,                        :string,            :null  =>  true,    :limit   => 10
        t.column   :ship_country,                    :string,            :null  =>  true,    :limit   => 100
        t.column   :ship_latitude,                   :string,            :null  =>  true,    :limit   => 15
        t.column   :ship_longitude,                  :string,            :null  =>  true,    :limit   => 15
        t.column   :is_residential,                  :boolean,           :null  =>  true
        t.column   :is_commercial,                   :boolean,           :null  =>  true
        t.column   :phone,                           :string,            :null  =>  true,    :limit   => 30
        t.column   :email_address,                   :string,            :null  =>  true,    :limit   => 200
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
