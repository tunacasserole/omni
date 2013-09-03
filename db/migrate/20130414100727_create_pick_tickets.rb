class CreatePickTickets < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'pick_tickets'
      create_table(:pick_tickets, :id => false) do |t|
        t.column :pick_ticket_id,                    :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => true
        t.column :state,                             :string,        :limit       => 100,    :null        => true
        t.column :pick_ticket_nbr,                   :string,        :limit       => 11,     :null        => true
        t.column :pickable_id,                       :string,        :limit       => 32,     :null        => true
        t.column :pickable_type,                     :string,        :limit       => 100,    :null        => true
        t.column :fulfillment_location_id,           :string,        :limit       => 32,     :null        => true
        t.column :work_order_id,                     :string,        :limit       => 32,     :null        => true
        t.column :request_units,                     :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :complete_units,                    :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :release_date,                      :date,          :null        => true
        t.column :start_date,                        :date,          :null        => true
        t.column :complete_date,                     :date,          :null        => true
        t.column :ship_date,                         :date,          :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:pick_tickets, [:pick_ticket_id], :unique => true)

    end
  end
end
