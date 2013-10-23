class CreateOmniTenders < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('tenders')
      create_table(:tenders, :id => false) do |t|
        t.column   :tender_id,                       :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 100
        t.column   :description,                     :string,            :null  =>  false,   :limit   => 300
        t.column   :short_name,                      :string,            :null  =>  false,   :limit   => 100
        t.column   :tender_type,                     :string,            :null  =>  true,    :limit   => 100
        t.column   :is_allow_over_tendering,         :boolean,           :null  =>  true
        t.column   :is_open_cash_drawer,             :boolean,           :null  =>  true
        t.column   :is_required_signature,           :boolean,           :null  =>  true
        t.column   :is_allow_multiple_entry,         :boolean,           :null  =>  true
        t.column   :is_print_duplicate_receipt,      :boolean,           :null  =>  true
        t.column   :is_allow_cash_back,              :boolean,           :null  =>  true
        t.column   :maximum_tender_amount,           :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :display_order,                   :string,            :null  =>  true,    :limit   => 6
        t.column   :is_verify_via_edc,               :boolean,           :null  =>  true
        t.column   :cash_back_limit,                 :integer,           :null  =>  true
        t.column   :cash_back_fee,                   :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :gl_account_id,                   :string,            :null  =>  true,    :limit   => 32
        t.column   :validation_mask,                 :integer,           :null  =>  true
        t.column   :is_credit_card,                  :boolean,           :null  =>  true
        t.column   :is_required_account_holder,      :boolean,           :null  =>  true
        t.column   :is_required_account_number,      :boolean,           :null  =>  true
        t.column   :is_required_expiration_date,     :boolean,           :null  =>  true
        t.column   :is_required_ccv_code,            :boolean,           :null  =>  true
        t.column   :is_required_postal_code,         :boolean,           :null  =>  true
        t.column   :is_required_serial_number,       :boolean,           :null  =>  true
        t.column   :is_required_routing_number,      :boolean,           :null  =>  true
        t.column   :is_required_state,               :boolean,           :null  =>  true
        t.column   :is_required_license_number,      :boolean,           :null  =>  true
        t.column   :is_required_birth_date,          :boolean,           :null  =>  true
        t.column   :is_required_avs_response,        :boolean,           :null  =>  true
        t.column   :is_update_till,                  :boolean,           :null  =>  true
        t.column   :is_accept_business_credit_card,  :boolean,           :null  =>  true
        t.column   :is_enabled_for_web,              :boolean,           :null  =>  true
        t.column   :is_enabled_for_pos,              :boolean,           :null  =>  true
        t.column   :is_enabled_for_phone,            :boolean,           :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
