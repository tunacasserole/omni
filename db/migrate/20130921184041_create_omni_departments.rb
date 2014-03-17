class CreateOmniDepartments < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('departments')
      create_table(:departments, :id => false) do |t|
        t.column   :department_id,                   :string,            null: false,   limit: 32
        t.column   :display,                         :string,            null: false,   limit: 200
        t.column   :department_nbr,                  :string,            null: true,    limit: 200
        t.column   :description,                     :string,            null: true,    limit: 300
        t.column   :short_name,                      :string,            null: true,    :limit   => 15
        t.column   :buyer_user_id,                   :string,            null: true,    limit: 32
        t.column   :company_id,                      :string,            null: true,   limit: 32
        t.column   :is_destroyed,                    :boolean,           null: true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
