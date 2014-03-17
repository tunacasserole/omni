class CreateOmniAllocationDetails < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :allocation_details if ActiveRecord::Base.connection.tables.include?('allocation_details')
    create_table(:allocation_details, :id => false) do |t|
      t.column   :allocation_detail_id,     :string,            null: false,   limit: 32
      t.column   :transfer_id,              :string,            null: true,    limit: 32
      t.column   :location_id,              :string,            null: true,    limit: 32
      t.column   :allocation_id,            :string,            null: true,    limit: 32
      t.column   :allocation_detail_nbr,    :string,            null: true,   limit: 200
      t.column   :state,                    :string,            null: true,    limit: 200
      t.column   :display,                  :string,            null: true,    limit: 200
      t.column   :units_needed,             :decimal,           null: true,     :precision  => 11, :scale   => 2
      t.column   :units_allocated,          :decimal,           null: true,     :precision  => 11, :scale   => 2
      t.column   :units_shipped,            :decimal,           null: true,     :precision  => 11, :scale   => 2
      t.column   :is_destroyed,             :boolean,           null: true
    end
  end
end
