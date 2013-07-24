class CreateVouchers < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'vouchers'
      create_table(:vouchers, :id => false) do |t|
        t.column :voucher_id,                        :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :customer_id,                       :string,        :limit       => 32,     :null        => false
        t.column :voucher_nbr,                       :string,        :limit       => 11,     :null        => false
        t.column :voucher_type,                      :string,        :limit       => 100,    :null        => true
        t.column :initial_balance,                   :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :current_balance,                   :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :issue_date,                        :date,          :null        => true
        t.column :expiration_date,                   :date,          :null        => true
        t.column :state,                             :string,        :limit       => 100,    :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:vouchers, [:voucher_id], :unique => true)

    end
  end
end
