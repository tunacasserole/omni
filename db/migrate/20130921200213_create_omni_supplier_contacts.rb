class CreateOmniSupplierContacts < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('supplier_contacts')
      create_table(:supplier_contacts, :id => false) do |t|
        t.column   :supplier_contact_id,             :string,            null: false,   limit: 32
        t.column   :display,                         :string,            null: true,   limit: 300
        t.column   :supplier_id,                     :string,            null: true,   limit: 32
        t.column   :first_name,                      :string,            null: true,   limit: 200
        t.column   :last_name,                       :string,            null: true,   limit: 200
        t.column   :name_prefix,                     :string,            null: true,    limit: 200
        t.column   :name_suffix,                     :string,            null: true,    limit: 200
        t.column   :department,                      :string,            null: true,    limit: 200
        t.column   :job_title,                       :string,            null: true,    limit: 200
        t.column   :phone,                           :string,            null: true,    limit: 200
        t.column   :fax,                             :string,            null: true,    limit: 200
        t.column   :email_address,                   :string,            null: true,    limit: 200
        t.column   :is_order_contact,                :boolean,           null: true
        t.column   :is_return_contact,               :boolean,           null: true
        t.column   :is_payment_contact,              :boolean,           null: true
        t.column   :is_executive_contact,            :boolean,           null: true
        t.column   :is_destroyed,                    :boolean,           null: true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
