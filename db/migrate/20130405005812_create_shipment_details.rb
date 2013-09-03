class CreateShipmentDetails < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'shipment_details'
      create_table(:shipment_details, :id => false) do |t|
        t.column :shipment_detail_id,                :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :shipment_id,                       :string,        :limit       => 32,     :null        => false
        t.column :pick_ticket_id,                    :string,        :limit       => 32,     :null        => false
        t.column :ship_units,                        :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :received_units,                    :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :container_id,                      :string,        :limit       => 32,     :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:shipment_details, [:shipment_detail_id], :unique => true)

    end
  end
end
