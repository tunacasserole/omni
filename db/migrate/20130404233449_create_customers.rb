class CreateCustomers < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'customers'
      create_table(:customers, :id => false) do |t|
        t.column :customer_id,                       :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :customer_nbr,                      :string,        :limit       => 11,     :null        => false
        t.column :registration_date,                 :date,          :null        => true
        t.column :user_id,                           :string,        :limit       => 32,     :null        => true
        t.column :name_prefix,                       :string,        :limit       => 100,    :null        => true
        t.column :first_name,                        :string,        :limit       => 100,    :null        => true
        t.column :middle_name,                       :string,        :limit       => 100,    :null        => true
        t.column :last_name,                         :string,        :limit       => 100,    :null        => false
        t.column :name_suffix,                       :string,        :limit       => 100,    :null        => true
        t.column :company,                           :string,        :limit       => 100,    :null        => true
        t.column :department,                        :string,        :limit       => 100,    :null        => true
        t.column :job_title,                         :string,        :limit       => 100,    :null        => true
        t.column :is_tax_exempt,                     :boolean,       :null        => true
        t.column :tax_exempt_state,                  :string,        :limit       => 2,      :null        => true
        t.column :tax_exempt_certificate,            :string,        :limit       => 100,    :null        => true
        t.column :is_employee,                       :boolean,       :null        => true
        t.column :employee_nbr,                      :string,        :limit       => 11,     :null        => true
        t.column :is_contractor,                     :boolean,       :null        => true
        t.column :contractor_nbr,                    :string,        :limit       => 11,     :null        => true
        t.column :is_student,                        :boolean,       :null        => true
        t.column :birth_date,                        :date,          :null        => true
        t.column :gender,                            :string,        :limit       => 100,    :null        => true
        t.column :is_analyst,                        :boolean,       :null        => true
        t.column :is_developer,                      :boolean,       :null        => true
        t.column :line_1,                            :string,        :limit       => 100,    :null        => true
        t.column :line_2,                            :string,        :limit       => 100,    :null        => true
        t.column :line_3,                            :string,        :limit       => 100,    :null        => true
        t.column :line_4,                            :string,        :limit       => 100,    :null        => true
        t.column :city,                              :string,        :limit       => 100,    :null        => true
        t.column :state_code,                        :string,        :limit       => 2,      :null        => true
        t.column :zip,                               :string,        :limit       => 10,     :null        => true
        t.column :country,                           :string,        :limit       => 100,    :null        => true
        t.column :latitude,                          :string,        :limit       => 15,     :null        => true
        t.column :longitude,                         :string,        :limit       => 15,     :null        => true
        t.column :is_validated,                      :boolean,       :null        => true
        t.column :is_residential,                    :boolean,       :null        => true
        t.column :is_commercial,                     :boolean,       :null        => true
        t.column :is_do_not_mail_to,                 :boolean,       :null        => true
        t.column :ship_line_1,                       :string,        :limit       => 100,    :null        => true
        t.column :ship_line_2,                       :string,        :limit       => 100,    :null        => true
        t.column :ship_line_3,                       :string,        :limit       => 100,    :null        => true
        t.column :ship_line_4,                       :string,        :limit       => 100,    :null        => true
        t.column :ship_city,                         :string,        :limit       => 100,    :null        => true
        t.column :ship_state_code,                   :string,        :limit       => 2,      :null        => true
        t.column :ship_zip,                          :string,        :limit       => 10,     :null        => true
        t.column :ship_country,                      :string,        :limit       => 100,    :null        => true
        t.column :ship_latitude,                     :string,        :limit       => 15,     :null        => true
        t.column :ship_longitude,                    :string,        :limit       => 15,     :null        => true
        t.column :phone,                             :string,        :limit       => 30,     :null        => true
        t.column :phone_extension,                   :string,        :limit       => 10,     :null        => true
        t.column :is_do_not_call,                    :boolean,       :null        => true
        t.column :fax,                               :string,        :limit       => 30,     :null        => true
        t.column :email_address,                     :string,        :limit       => 200,    :null        => true
        t.column :is_verified,                       :boolean,       :null        => true
        t.column :is_do_not_email,                   :boolean,       :null        => true
        t.column :customer_account_nbr,              :string,        :limit       => 11,     :null        => true
        t.column :customer_account_type,             :string,        :limit       => 100,    :null        => true
        t.column :customer_account_name,             :string,        :limit       => 100,    :null        => true
        t.column :account_open_date,                 :date,          :null        => true
        t.column :account_close_date,                :date,          :null        => true
        t.column :credit_limit,                      :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :is_on_hold,                        :boolean,       :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:customers, [:customer_id], :unique => true)

    end
  end
end
