class CreateOmniCustomerAccounts < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('customer_accounts')
      create_table(:customer_accounts, :id => false) do |t|
        t.column   :customer_account_id,             :string,            null: false,  limit: 32
        t.column   :display,                         :string,            null: true,   limit: 300
        t.column   :customer_id,                     :string,            null: true,   limit: 32
        t.column   :account_id,                      :string,            null: true,   limit: 32
        t.column   :comment,                         :string,            null: true,   limit: 4000
        t.column   :is_contact,                      :boolean,           null: true
        t.column   :is_teacher,                      :boolean,           null: true
        t.column   :is_administrator,                :boolean,           null: true
        t.column   :is_destroyed,                    :boolean,           null: true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
