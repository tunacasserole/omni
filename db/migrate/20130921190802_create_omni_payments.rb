class CreateOmniPayments < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('payments')
      create_table(:payments, :id => false) do |t|
        t.column   :payment_id,                      :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 300
        t.column   :payment_nbr,                     :string,            :null  =>  false,   :limit   => 11
        t.column   :order_id,                        :string,            :null  =>  true,    :limit   => 32
        t.column   :customer_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :terminal_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :location_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :tender_id,                       :string,            :null  =>  true,    :limit   => 32
        t.column   :voucher_id,                      :string,            :null  =>  true,    :limit   => 32
        t.column   :payment_date,                    :date,              :null  =>  true
        t.column   :payment_amount,                  :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :layaway_deposit_amount,          :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :account_holder,                  :string,            :null  =>  true,    :limit   => 100
        t.column   :account_number,                  :string,            :null  =>  true,    :limit   => 100
        t.column   :expiration_date,                 :date,              :null  =>  true
        t.column   :ccv_code,                        :string,            :null  =>  true,    :limit   => 6
        t.column   :serial_number,                   :string,            :null  =>  true,    :limit   => 100
        t.column   :routing_number,                  :integer,           :null  =>  true
        t.column   :state_code,                      :string,            :null  =>  true,    :limit   => 2
        t.column   :license_number,                  :string,            :null  =>  true,    :limit   => 15
        t.column   :birth_date,                      :date,              :null  =>  true
        t.column   :is_prior_authorized_capture,     :boolean,           :null  =>  true
        t.column   :payment_authorization_code,      :string,            :null  =>  true,    :limit   => 15
        t.column   :avs_response,                    :string,            :null  =>  true,    :limit   => 15
        t.column   :state,                           :string,            :null  =>  true,    :limit   => 100
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
