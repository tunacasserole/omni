class CreateOmniReceiptAllocations < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :receipt_allocations if ActiveRecord::Base.connection.tables.include?('receipt_allocations')
    create_table(:receipt_allocations, :id => false) do |t|
      t.column   :receipt_allocation_id,           :string,            null: false,   limit: 32
      t.column   :receipt_allocation_nbr,          :string,            null: true,    limit: 200
      t.column   :receipt_detail_id,               :string,            null: true,    limit: 32
      t.column   :location_id,                     :string,            null: true,    limit: 32
      t.column   :display,                         :string,            null: true,   limit: 300
      t.column   :state,                           :string,            null: true,   limit: 300
      t.column   :units_needed,                    :decimal,           null: true,     :precision  => 11, :scale   => 2
      t.column   :units_allocated,                 :decimal,           null: true,     :precision  => 11, :scale   => 2
      t.column   :units_shipped,                   :decimal,           null: true,     :precision  => 11, :scale   => 2
      t.column   :is_destroyed,                    :boolean,           null: true
    end
  end
end
