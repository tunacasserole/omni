class CreateOmniLocationUsers < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('location_users')
      create_table(:location_users, :id => false) do |t|
        t.column   :location_user_id,                :string,            null: false,    limit: 32
        t.column   :display,                         :string,            null: true,    limit: 300
        t.column   :user_id,                         :string,            null: true,    limit: 32
        t.column   :location_id,                     :string,            null: true,    limit: 32
        t.column   :is_manager,                      :boolean,           null: true
        t.column   :is_cashier,                      :boolean,           null: true
        t.column   :is_sales,                        :boolean,           null: true
        t.column   :is_back_office,                  :boolean,           null: true
        t.column   :short_password,                  :string,            null: true,    :limit   => 10
        t.column   :is_destroyed,                    :boolean,           null: true
        t.column   :is_purchase_approver_1,          :boolean,           null: true
        t.column   :is_purchase_approver_2,          :boolean,           null: true
        t.column   :is_purchase_approver_3,          :boolean,           null: true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
