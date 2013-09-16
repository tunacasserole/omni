class CreateOmniGlAccounts < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('gl_accounts')
      create_table(:gl_accounts, :id => false) do |t|
        t.column   :gl_account_id,                   :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 100
        t.column   :gl_main_account,                 :string,            :null  =>  false,   :limit   => 4
        t.column   :gl_sub_account,                  :string,            :null  =>  true,    :limit   => 4
        t.column   :is_location_fill,                :boolean,           :null  =>  true
        t.column   :gl_account_type,                 :string,            :null  =>  true,    :limit   => 100
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
