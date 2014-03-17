class CreateOmniVouchers < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :vouchers if ActiveRecord::Base.connection.tables.include?('vouchers')
    create_table(:vouchers, :id => false) do |t|
      t.column   :voucher_id,                    :string,            null: false,   limit: 32
      t.column   :display,                       :string,            null: true,   limit: 200
      t.column   :customer_id,                   :string,            null: true,   limit: 32
      t.column   :voucher_nbr,                   :string,            null: true,   limit: 200
      t.column   :voucher_type,                  :string,            null: true,    limit: 200
      t.column   :initial_balance,               :decimal,           null: true,    :scale   => 2,  :precision  => 11
      t.column   :current_balance,               :decimal,           null: true,    :scale   => 2,  :precision  => 11
      t.column   :issue_date,                    :datetime,          null: true
      t.column   :expiration_date,               :datetime,          null: true
      t.column   :state,                         :string,            null: true,   limit: 200
      t.column   :is_destroyed,                  :boolean,           null: true
    end
  end
end
