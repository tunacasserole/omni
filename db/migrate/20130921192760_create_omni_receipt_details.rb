class CreateOmniReceiptDetails < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :receipt_details if ActiveRecord::Base.connection.tables.include?('receipt_details')
    create_table(:receipt_details, :id => false) do |t|
      t.column   :receipt_detail_id,               :string,            null: false,   limit: 32
      t.column   :receipt_id,                      :string,            null: true,    limit: 32
      t.column   :receipt_line_nbr,                :string,            null: true,    limit: 200
      t.column   :purchase_id,                     :string,            null: true,    limit: 32
      t.column   :purchase_detail_id,              :string,            null: true,    limit: 32
      t.column   :allocation_profile_id,           :string,            null: true,    limit: 32
      t.column   :sku_id,                          :string,            null: true,    limit: 32
      t.column   :sku_alias,                       :string,            null: true,    limit: 32
      t.column   :display,                         :string,            null: true,   limit: 300
      t.column   :state,                           :string,            null: true,    limit: 200
      t.column   :received_units,                  :decimal,           null: true,    scale: 2, precision: 11
      t.column   :receipt_pack_size,               :decimal,           null: true,    scale: 2, precision: 11
      t.column   :receipt_pack_type,               :string,            null: true,    limit: 200
      t.column   :is_destroyed,                    :boolean,           null: true
    end
  end
end
