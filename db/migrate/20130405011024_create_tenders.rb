class CreateTenders < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'tenders'
      create_table(:tenders, :id => false) do |t|
        t.column :tender_id,                         :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 100,    :null        => false
        t.column :description,                       :string,        :limit       => 300,    :null        => false
        t.column :short_name,                        :string,        :limit       => 100,    :null        => false
        t.column :tender_type,                       :string,        :limit       => 100,    :null        => true
        t.column :is_allow_over_tendering,           :boolean,       :null        => true
        t.column :is_open_cash_drawer,               :boolean,       :null        => true
        t.column :is_required_signature,             :boolean,       :null        => true
        t.column :is_allow_multiple_entry,           :boolean,       :null        => true
        t.column :is_print_duplicate_receipt,        :boolean,       :null        => true
        t.column :is_allow_cash_back,                :boolean,       :null        => true
        t.column :maximum_tender_amount,             :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :display_order,                     :string,        :limit       => 6,      :null        => true
        t.column :is_verify_via_edc,                 :boolean,       :null        => true
        t.column :cash_back_limit,                   :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :cash_back_fee,                     :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :gl_account_id,                     :string,        :limit       => 32,     :null        => true
        t.column :validation_mask,                   :integer,       :null        => true
        t.column :is_credit_card,                    :boolean,       :null        => true
        t.column :is_required_account_holder,        :boolean,       :null        => true
        t.column :is_required_account_number,        :boolean,       :null        => true
        t.column :is_required_expiration_date,       :boolean,       :null        => true
        t.column :is_required_ccv_code,              :boolean,       :null        => true
        t.column :is_required_postal_code,           :boolean,       :null        => true
        t.column :is_required_serial_number,         :boolean,       :null        => true
        t.column :is_required_routing_number,        :boolean,       :null        => true
        t.column :is_required_state,                 :boolean,       :null        => true
        t.column :is_required_license_number,        :boolean,       :null        => true
        t.column :is_required_birth_date,            :boolean,       :null        => true
        t.column :is_required_avs_response,          :boolean,       :null        => true
        t.column :is_update_till,                    :boolean,       :null        => true
        t.column :is_accept_business_credit_card,    :boolean,       :null        => true
        t.column :is_enabled_for_web,                :boolean,       :null        => true
        t.column :is_enabled_for_pos,                :boolean,       :null        => true
        t.column :is_enabled_for_phone,              :boolean,       :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:tenders, [:tender_id], :unique => true)

    end
  end
end
