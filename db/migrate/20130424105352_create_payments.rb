class CreatePayments < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'payments'
      create_table(:payments, :id => false) do |t|
        t.column :payment_id,                        :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => true
        t.column :payment_nbr,                       :string,        :limit       => 11,     :null        => false
        t.column :order_id,                          :string,        :limit       => 32,     :null        => true
        t.column :customer_id,                       :string,        :limit       => 32,     :null        => true
        t.column :terminal_id,                       :string,        :limit       => 32,     :null        => true
        t.column :location_id,                       :string,        :limit       => 32,     :null        => true
        t.column :tender_id,                         :string,        :limit       => 32,     :null        => true
        t.column :voucher_id,                        :string,        :limit       => 32,     :null        => true
        t.column :payment_date,                      :date,          :null        => true
        t.column :payment_amount,                    :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :layaway_deposit_amount,            :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :account_holder,                    :string,        :limit       => 100,    :null        => true
        t.column :account_number,                    :string,        :limit       => 100,    :null        => true
        t.column :expiration_date,                   :date,          :null        => true
        t.column :ccv_code,                          :string,        :limit       => 6,      :null        => true
        t.column :serial_number,                     :string,        :limit       => 100,    :null        => true
        t.column :routing_number,                    :integer,       :null        => true
        t.column :state_code,                        :string,        :limit       => 2,      :null        => true
        t.column :license_number,                    :string,        :limit       => 15,     :null        => true
        t.column :birth_date,                        :date,          :null        => true
        t.column :is_prior_authorized_capture,       :boolean,       :null        => true
        t.column :payment_authorization_code,        :string,        :limit       => 15,     :null        => true
        t.column :avs_response,                      :string,        :limit       => 15,     :null        => true
        t.column :state,                             :string,        :limit       => 100,    :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:payments, [:payment_id], :unique => true)

    end
  end
end
