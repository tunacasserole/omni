class CreateOmniReceiptPurchases < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :receipt_purchases if ActiveRecord::Base.connection.tables.include?('receipt_purchases')
    create_table(:receipt_purchases, :id => false) do |t|
      t.column   :receipt_purchase_id,             :string,            null: false,   limit: 32
      t.column   :display,                         :string,            null: true,   limit: 300
      t.column   :receipt_id,                      :string,            null: true,    limit: 32
      t.column   :purchase_id,                     :string,            null: true,    limit: 32
      t.column   :is_destroyed,                    :boolean,           null: true
    end
  end
end
