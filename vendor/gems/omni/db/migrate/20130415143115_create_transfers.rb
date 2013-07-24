class CreateTransfers < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'transfers'
      create_table(:transfers, :id => false) do |t|
        t.column :transfer_id,                       :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => true
        t.column :state,                             :string,        :limit       => 100,    :null        => true
        t.column :transfer_nbr,                      :string,        :limit       => 11,     :null        => true
        t.column :requesting_location_id,            :string,        :limit       => 32,     :null        => false
        t.column :fulfillment_location_id,           :string,        :limit       => 32,     :null        => false
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :sku_id,                            :string,        :limit       => 32,     :null        => false
        t.column :transfer_reason_id,                :string,        :limit       => 32,     :null        => false
        t.column :request_units,                     :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :request_date,                      :date,          :null        => true
        t.column :request_user_id,                   :string,        :limit       => 32,     :null        => true
        t.column :ship_date,                         :date,          :null        => true
        t.column :cancel_date,                       :date,          :null        => true
        t.column :cancel_user_id,                    :string,        :limit       => 32,     :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:transfers, [:transfer_id], :unique => true)

    end
  end
end
