class CreateOmniTransfers < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('transfers')
      create_table(:transfers, :id => false) do |t|
        t.column   :transfer_id,                     :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 300
        t.column   :state,                           :string,            :null  =>  true,    :limit   => 100
        t.column   :transfer_nbr,                    :string,            :null  =>  true,    :limit   => 11
        t.column   :requesting_location_id,          :string,            :null  =>  false,   :limit   => 32
        t.column   :fulfillment_location_id,         :string,            :null  =>  false,   :limit   => 32
        t.column   :description,                     :string,            :null  =>  true,    :limit   => 300
        t.column   :sku_id,                          :string,            :null  =>  false,   :limit   => 32
        t.column   :transfer_reason_id,              :string,            :null  =>  false,   :limit   => 32
        t.column   :request_units,                   :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :request_date,                    :date,              :null  =>  true
        t.column   :request_user_id,                 :string,            :null  =>  true,    :limit   => 32
        t.column   :ship_date,                       :date,              :null  =>  true
        t.column   :cancel_date,                     :date,              :null  =>  true
        t.column   :cancel_user_id,                  :string,            :null  =>  true,    :limit   => 32
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
