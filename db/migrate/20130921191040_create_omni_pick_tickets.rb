class CreateOmniPickTickets < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('pick_tickets')
      create_table(:pick_tickets, :id => false) do |t|
        t.column   :pick_ticket_id,                  :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 300
        t.column   :state,                           :string,            :null  =>  true,    :limit   => 100
        t.column   :pick_ticket_nbr,                 :string,            :null  =>  true,    :limit   => 11
        t.column   :pickable_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :pickable_type,                   :string,            :null  =>  true,    :limit   => 100
        t.column   :fulfillment_location_id,         :string,            :null  =>  true,    :limit   => 32
        t.column   :work_order_id,                   :string,            :null  =>  true,    :limit   => 32
        t.column   :request_units,                   :integer,           :null  =>  true
        t.column   :complete_units,                  :integer,           :null  =>  true
        t.column   :release_date,                    :date,              :null  =>  true
        t.column   :start_date,                      :date,              :null  =>  true
        t.column   :complete_date,                   :date,              :null  =>  true
        t.column   :ship_date,                       :date,              :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
