class CreateOmniShipmentDetails < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('shipment_details')
      create_table(:shipment_details, :id => false) do |t|
        t.column   :shipment_detail_id,              :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :shipment_id,                     :string,            :null  =>  false,   :limit   => 32
        t.column   :pick_ticket_id,                  :string,            :null  =>  false,   :limit   => 32
        t.column   :ship_units,                      :integer,           :null  =>  true
        t.column   :received_units,                  :integer,           :null  =>  true
        t.column   :container_id,                    :string,            :null  =>  true,    :limit   => 32
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
