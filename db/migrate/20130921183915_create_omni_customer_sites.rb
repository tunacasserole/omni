class CreateOmniCustomerSites < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('customer_sites')
      create_table(:customer_sites, :id => false) do |t|
        t.column   :customer_site_id,                :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :customer_id,                     :string,            :null  =>  false,   :limit   => 32
        t.column   :site_id,                         :string,            :null  =>  false,   :limit   => 32
        t.column   :comment,                         :string,            :null  =>  true,    :limit   => 300
        t.column   :is_site_contact,                 :boolean,           :null  =>  true
        t.column   :is_teacher,                      :boolean,           :null  =>  true
        t.column   :is_administrator,                :boolean,           :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
