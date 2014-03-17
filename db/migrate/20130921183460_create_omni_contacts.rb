class CreateOmniContacts < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :contacts if ActiveRecord::Base.connection.tables.include?('contacts')
    create_table(:contacts, :id => false) do |t|
      t.column   :contact_id, :string,            null: false,   limit: 32
      t.column   :account_id,       :string,            null: true,    limit: 32
      t.column   :display,          :string,            null: true,   limit: 200
      t.column   :name_prefix,      :string,            null: true,    limit: 200
      t.column   :first_name,       :string,            null: true,    limit: 200
      t.column   :last_name,        :string,            null: true,    limit: 200
      t.column   :name_suffix,      :string,            null: true,    limit: 200
      t.column   :job_title,        :string,            null: true,    limit: 200
      t.column   :line_1,           :string,            null: true,    limit: 200
      t.column   :line_2,           :string,            null: true,    limit: 200
      t.column   :city,             :string,            null: true,    limit: 200
      t.column   :state_code,       :string,            null: true,    limit: 2
      t.column   :zip,              :string,            null: true,    limit: 200
      t.column   :country,          :string,            null: true,    limit: 200
      t.column   :phone,            :string,            null: true,    limit: 200
      t.column   :other_phone,      :string,            null: true,    limit: 200
      t.column   :fax,              :string,            null: true,    limit: 200
      t.column   :email_address,    :string,            null: true,    limit: 200
      t.column   :is_do_not_email,  :boolean,           null: true
      t.column   :is_do_not_mail,   :boolean,           null: true
      t.column   :is_do_not_call,   :boolean,           null: true
      t.column   :is_destroyed,     :boolean,           null: true
    end
  end
end
