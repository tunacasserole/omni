class CreateOmniCustomers < ActiveRecord::Migration
  def change
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
    drop_table :customers if ActiveRecord::Base.connection.tables.include?('customers')
    create_table(:customers, :id => false) do |t|
      t.column   :customer_id,                     :string,            null: false,   limit: 32
      t.column   :display,                         :string,            null: false,   limit: 300
      t.column   :customer_nbr,                    :string,            null: true,    limit: 200
      t.column   :registration_date,               :datetime,          null: true
      t.column   :user_id,                         :string,            null: true,    limit: 32
      t.column   :name_prefix,                     :string,            null: true,    limit: 200
      t.column   :first_name,                      :string,            null: true,    limit: 200
      t.column   :middle_name,                     :string,            null: true,    limit: 200
      t.column   :last_name,                       :string,            null: true,    limit: 200
      t.column   :name_suffix,                     :string,            null: true,    limit: 200
      t.column   :company,                         :string,            null: true,    limit: 200
      t.column   :department,                      :string,            null: true,    limit: 200
      t.column   :job_title,                       :string,            null: true,    limit: 200
      t.column   :is_tax_exempt,                   :boolean,           null: true
      t.column   :tax_exempt_state,                :string,            null: true,    limit: 2
      t.column   :tax_exempt_certificate,          :string,            null: true,    limit: 200
      t.column   :is_employee,                     :boolean,           null: true
      t.column   :employee_nbr,                    :string,            null: true,    limit: 200
      t.column   :is_contractor,                   :boolean,           null: true
      t.column   :contractor_nbr,                  :string,            null: true,    limit: 200
      t.column   :is_student,                      :boolean,           null: true
      t.column   :birth_date,                      :datetime,          null: true
      t.column   :gender,                          :string,            null: true,    limit: 200
      t.column   :terms,                           :string,            null: true,    limit: 4000
      t.column   :details,                         :string,            null: true,    limit: 4000
      t.column   :line_1,                          :string,            null: true,    limit: 200
      t.column   :line_2,                          :string,            null: true,    limit: 200
      t.column   :line_3,                          :string,            null: true,    limit: 200
      t.column   :line_4,                          :string,            null: true,    limit: 200
      t.column   :city,                            :string,            null: true,    limit: 200
      t.column   :state_code,                      :string,            null: true,    limit: 2
      t.column   :zip,                             :string,            null: true,    :limit   => 10
      t.column   :country,                         :string,            null: true,    limit: 200
      t.column   :latitude,                        :string,            null: true,    :limit   => 15
      t.column   :longitude,                       :string,            null: true,    :limit   => 15
      t.column   :is_validated,                    :boolean,           null: true
      t.column   :is_residential,                  :boolean,           null: true
      t.column   :is_commercial,                   :boolean,           null: true
      t.column   :is_do_not_mail_to,               :boolean,           null: true
      t.column   :ship_line_1,                     :string,            null: true,    limit: 200
      t.column   :ship_line_2,                     :string,            null: true,    limit: 200
      t.column   :ship_line_3,                     :string,            null: true,    limit: 200
      t.column   :ship_line_4,                     :string,            null: true,    limit: 200
      t.column   :ship_city,                       :string,            null: true,    limit: 200
      t.column   :ship_state_code,                 :string,            null: true,    limit: 2
      t.column   :ship_zip,                        :string,            null: true,    :limit   => 10
      t.column   :ship_country,                    :string,            null: true,    limit: 200
      t.column   :ship_latitude,                   :string,            null: true,    :limit   => 15
      t.column   :ship_longitude,                  :string,            null: true,    :limit   => 15
      t.column   :phone_1,                         :string,            null: true,    limit: 200
      t.column   :phone_type_1,                    :string,            null: true,    limit: 200
      t.column   :phone_2,                         :string,            null: true,    limit: 200
      t.column   :phone_type_2,                    :string,            null: true,    limit: 200
      t.column   :phone_3,                         :string,            null: true,    limit: 200
      t.column   :phone_type_3,                    :string,            null: true,    limit: 200
      # t.column   :fax_1,                           :string,            null: true,    limit: 200
      # t.column   :fax_2,                           :string,            null: true,    limit: 200
      t.column   :is_do_not_call,                  :boolean,           null: true
      t.column   :email_address,                   :string,            null: true,    limit: 200
      t.column   :is_verified,                     :boolean,           null: true
      t.column   :is_do_not_email,                 :boolean,           null: true
      t.column   :customer_account_nbr,            :string,            null: true,    limit: 200
      t.column   :customer_account_type,           :string,            null: true,    limit: 200
      t.column   :customer_account_name,           :string,            null: true,    limit: 200
      t.column   :account_open_date,               :datetime,          null: true
      t.column   :account_close_date,              :datetime,          null: true
      t.column   :credit_limit,                    :integer,           null: true
      t.column   :is_on_hold,                      :boolean,           null: true
      t.column   :is_destroyed,                    :boolean,           null: true
    end
  end
end
