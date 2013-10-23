class CreateOmniSystemOptions < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('system_options')
      create_table(:system_options, :id => false) do |t|
        t.column   :system_option_id,                :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 100
        t.column   :price_book_id,                   :string,            :null  =>  false,   :limit   => 32
        t.column   :professional_discount_percent,   :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :employee_discount_percent,       :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :regular_sale_ruleset_id,         :string,            :null  =>  true,    :limit   => 32
        t.column   :promo_sale_ruleset_id,           :string,            :null  =>  true,    :limit   => 32
        t.column   :clearance_sale_ruleset_id,       :string,            :null  =>  true,    :limit   => 32
        t.column   :transfer_request_ruleset_id,     :string,            :null  =>  true,    :limit   => 32
        t.column   :transfer_ship_ruleset_id,        :string,            :null  =>  true,    :limit   => 32
        t.column   :transfer_transit_ruleset_id,     :string,            :null  =>  true,    :limit   => 32
        t.column   :transfer_receive_ruleset_id,     :string,            :null  =>  true,    :limit   => 32
        t.column   :transfer_close_ruleset_id,       :string,            :null  =>  true,    :limit   => 32
        t.column   :transfer_cancel_ruleset_id,      :string,            :null  =>  true,    :limit   => 32
        t.column   :is_charge_ship_location,         :boolean,           :null  =>  true
        t.column   :transfer_gl_account_id,          :string,            :null  =>  true,    :limit   => 32
        t.column   :discrepancy_gl_account_id,       :string,            :null  =>  true,    :limit   => 32
        t.column   :overage_gl_account_id,           :string,            :null  =>  true,    :limit   => 32
        t.column   :shortage_gl_account_id,          :string,            :null  =>  true,    :limit   => 32
        t.column   :sales_tax_gl_account_id,         :string,            :null  =>  true,    :limit   => 32
        t.column   :consecutive_invalid_login_attempts,:integer,           :null  =>  true
        t.column   :purchase_approval_1_maximum_amount,:integer,           :null  =>  true
        t.column   :purchase_approval_2_maximum_amount,:integer,           :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
