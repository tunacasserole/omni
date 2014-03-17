class CreateOmniContracts < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('contracts')
      create_table(:contracts, :id => false) do |t|
        t.column   :contract_id,              :string,            null: false,   limit: 32
        t.column   :display,                  :string,            null: false,   limit: 200
        t.column   :account_id,               :string,            null: true,    limit: 32
        t.column   :contract_nbr,             :string,            null: true,    limit: 200
        t.column   :state,                    :string,            null: true,    limit: 200
        t.column   :description,              :string,            null: true,    limit: 4000
        t.column   :contract_term,            :string,            null: true,    limit: 32
        t.column   :rep_user_id,              :string,            null: true,    limit: 32
        t.column   :parker_signed_by_user_id, :string,            null: true,    limit: 32
        t.column   :customer_signed_by_user_id,:string,           null: true,    limit: 32
        t.column   :customer_signed_by_title,  :string,           null: true,    limit: 200
        t.column   :activated_by_user_id,      :string,           null: true,    limit: 32
        t.column   :expiration_notice_window,  :string,           null: true,    limit: 200
        t.column   :special_terms,             :string,           null: true,    limit: 200
        t.column   :teacher_discount_percent,  :decimal,          null: true,    scale: 2, precision: 11
        t.column   :administrator_discount_percent,:decimal,      null: true,    scale: 2, precision: 11
        t.column   :is_exclusive,              :boolean,          null: true
        t.column   :is_discount_in_store,      :boolean,          null: true
        t.column   :is_discount_on_web,        :boolean,          null: true
        t.column   :effective_date,            :datetime,         null: true
        t.column   :end_date,                  :datetime,         null: true
        t.column   :parker_signed_by_date,     :datetime,         null: true
        t.column   :customer_signed_by_date,   :datetime,         null: true
        t.column   :activated_date,            :datetime,         null: true
        t.column   :last_approved_date,        :datetime,         null: true
        t.column   :contract_sent_date,        :datetime,         null: true
        t.column   :contract_received_date,    :datetime,         null: true
        t.column   :order_form_sent_date_date, :datetime,         null: true
        t.column   :contract_won_date,         :datetime,         null: true
        t.column   :contract_lost_date,        :datetime,         null: true
        t.column   :is_destroyed,              :boolean,          null: true
      end
    end
  end
end
