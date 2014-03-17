class CreateOmniDonations < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :donations if ActiveRecord::Base.connection.tables.include?('donations')
    create_table(:donations, :id => false) do |t|
      t.column   :donation_id, :string,         null: false,   limit: 32
      t.column   :display,          :string,            null: true,   limit: 200
      t.column   :account_id,       :string,            null: true, limit: 32
      t.column   :donation_date,    :datetime,          null: true
      t.column   :donation_amount,  :decimal,           null: true,   scale: 2, precision: 11
      t.column   :is_destroyed,     :boolean,           null: true
    end
  end
end
