class CreateShipments < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'shipments'
      create_table(:shipments, :id => false) do |t|
        t.column :shipment_id,                       :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => true
        t.column :state,                             :string,        :limit       => 100,    :null        => true
        t.column :shipment_nbr,                      :string,        :limit       => 11,     :null        => true
        t.column :location_id,                       :string,        :limit       => 32,     :null        => false
        t.column :shippable_type,                    :string,        :limit       => 100,    :null        => true
        t.column :shippable_id,                      :string,        :limit       => 32,     :null        => true
        t.column :supplier_id,                       :string,        :limit       => 32,     :null        => true
        t.column :tracking_number,                   :string,        :limit       => 100,    :null        => true
        t.column :create_date,                       :date,          :null        => false
        t.column :ship_date,                         :date,          :null        => true
        t.column :receipt_date,                      :date,          :null        => true
        t.column :estimated_delivery_date,           :date,          :null        => true
        t.column :shipping_cost,                     :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :ship_name,                         :string,        :limit       => 100,    :null        => true
        t.column :ship_line_1,                       :string,        :limit       => 100,    :null        => true
        t.column :ship_line_2,                       :string,        :limit       => 100,    :null        => true
        t.column :ship_line_3,                       :string,        :limit       => 100,    :null        => true
        t.column :ship_line_4,                       :string,        :limit       => 100,    :null        => true
        t.column :ship_city,                         :string,        :limit       => 100,    :null        => true
        t.column :ship_state_code,                   :string,        :limit       => 2,      :null        => true
        t.column :ship_zip,                          :string,        :limit       => 10,     :null        => true
        t.column :ship_country,                      :string,        :limit       => 100,    :null        => true
        t.column :ship_latitude,                     :string,        :limit       => 15,     :null        => true
        t.column :ship_longitude,                    :string,        :limit       => 15,     :null        => true
        t.column :is_residential,                    :boolean,       :null        => true
        t.column :is_commercial,                     :boolean,       :null        => true
        t.column :phone,                             :string,        :limit       => 30,     :null        => true
        t.column :email_address,                     :string,        :limit       => 200,    :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:shipments, [:shipment_id], :unique => true)

    end
  end
end
