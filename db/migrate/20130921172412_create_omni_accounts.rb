class CreateOmniAccounts < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :accounts if ActiveRecord::Base.connection.tables.include?('accounts')
    create_table(:accounts, :id => false) do |t|
      t.column   :account_id,               :string,            null: false,   limit: 32
      t.column   :site_id,                  :string,            null: true,   limit: 32
      t.column   :display,                  :string,            null: false,   limit: 200
      t.column   :account_name,             :string,            null: true,    limit: 200
      t.column   :description,              :string,            null: true,    limit: 4000
      t.column   :short_name,               :string,            null: true,    limit: 200
      t.column   :state,                    :string,            null: true,    limit: 200
      t.column   :account_nbr,              :string,            null: true,    limit: 200
      t.column   :school_nbr,               :string,            null: true,    limit: 200
      t.column   :account_type,             :string,            null: true,    limit: 200
      t.column   :parent_account_id,        :string,            null: true,    limit: 32
      t.column   :rep_user_id,              :string,            null: true,    limit: 32
      t.column   :webaccount,               :string,            null: true,    limit: 200
      t.column   :location_id,              :string,            null: true,    limit: 32
      t.column   :account_standing,         :string,            null: true,    limit: 200
      t.column   :account_exclusivity,      :string,            null: true,    limit: 200
      t.column   :billing_line_1,           :string,            null: true,    limit: 200
      t.column   :billing_line_2,           :string,            null: true,    limit: 200
      t.column   :billing_city,             :string,            null: true,    limit: 200
      t.column   :billing_state,            :string,            null: true,    limit: 2
      t.column   :billing_zip,              :string,            null: true,    limit: 200
      t.column   :billing_country,          :string,            null: true,    limit: 200
      t.column   :billing_phone,            :string,            null: true,    limit: 200
      t.column   :billing_fax,              :string,            null: true,    limit: 200
      t.column   :shipping_line_1,          :string,            null: true,    limit: 200
      t.column   :shipping_line_2,          :string,            null: true,    limit: 200
      t.column   :shipping_city,            :string,            null: true,    limit: 200
      t.column   :shipping_state,           :string,            null: true,    limit: 2
      t.column   :shipping_zip,             :string,            null: true,    limit: 200
      t.column   :shipping_country,         :string,            null: true,    limit: 200
      t.column   :shipping_phone,           :string,            null: true,    limit: 200
      t.column   :shipping_fax,             :string,            null: true,    limit: 200
      t.column   :school_type,              :string,            null: true,    limit: 200
      t.column   :school_gender,            :string,            null: true,    limit: 200
      t.column   :from_grade_id,            :string,            null: true,    limit: 32
      t.column   :thru_grade_id,            :string,            null: true,    limit: 32
      t.column   :year_established,         :string,            null: true,    limit: 200
      t.column   :number_of_students,       :integer,           null: true,    :limit   => 5
      t.column   :annual_tuition,           :string,            null: true,    limit: 200
      t.column   :design_code,              :string,            null: true,    limit: 200
      t.column   :level_of_income,          :string,            null: true,    limit: 200
      t.column   :uniform_policy,           :string,            null: true,    limit: 200
      t.column   :revenue_band,             :string,            null: true,    limit: 200
      t.column   :school_potential,         :string,            null: true,    limit: 200
      t.column   :prospect_contract_expiration_date, :datetime, null: true
      t.column   :prospect_type,            :string,            null: true,    limit: 200
      t.column   :existing_uniform_provider, :string,            null: true,    limit: 200
      t.column   :contract_type,            :string,            null: true,    limit: 200
      t.column   :rebate,                   :string,            null: true,    limit: 200
      t.column   :is_exclusive,             :boolean,           null: true
      t.column   :is_footwear_program,      :boolean,           null: true
      t.column   :is_red_label_account,     :boolean,           null: true
      t.column   :is_on_campus_store,       :boolean,           null: true
      t.column   :is_on_web,                :boolean,           null: true
      t.column   :is_destroyed,             :boolean,           null: true
    end
  end
end
