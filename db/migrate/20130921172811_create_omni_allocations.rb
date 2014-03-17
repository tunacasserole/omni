class CreateOmniAllocations < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :allocations if ActiveRecord::Base.connection.tables.include?('allocations')
    create_table(:allocations, :id => false) do |t|
      t.column   :allocation_id,              :string,            null: false,   limit: 32
      t.column   :allocatable_id,             :string,            null: true,   limit: 32
      t.column   :allocatable_type,           :string,            null: true,   limit: 200
      t.column   :sku_id,                     :string,            null: true,    limit: 32
      t.column   :location_id,                :string,            null: true,    limit: 32
      t.column   :inventory_id,               :string,            null: true,    limit: 32
      t.column   :allocation_profile_id,      :string,            null: true,    limit: 32
      t.column   :allocation_nbr,             :string,            null: true,   limit: 200
      t.column   :state,                      :string,            null: true,    limit: 200
      t.column   :display,                    :string,            null: true,   limit: 200
      t.column   :description,                :string,            null: true,    :limit   => 500
      t.column   :units_to_allocate,          :decimal,           null: true,     :precision  => 11, :scale   => 2
      t.column   :is_destroyed,               :boolean,           null: true
    end
  end
end
