class CreateOmniTWuser < ActiveRecord::Migration
  def change
  	# ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	# unless (@connection.columns('t_wuser').count > 0 || @connection.columns('T_WUSER').count > 0)
      create_table(:t_wuser, :id => false) do |t|
        t.column   :id,                              :string,            :null  =>  true,    :limit   => 20
        t.column   :user_id,                         :string,            :null  =>  false
        t.column   :badge_number,                    :string,            :null  =>  true
        t.column   :badge_scan,                      :string,            :null  =>  true
        t.column   :name_first,                      :string,            :null  =>  true,    :limit   => 20
        t.column   :name_last,                       :string,            :null  =>  true,    :limit   => 20
        t.column   :status,                          :string,            :null  =>  true
        t.column   :language_preference,             :string,            :null  =>  true
        t.column   :login_status,                    :string,            :null  =>  true
        t.column   :last_update,                     :string,            :null  =>  true
        t.column   :last_login,                      :string,            :null  =>  true
        t.column   :create_date,                     :string,            :null  =>  true
        t.column   :user_guid,                       :string,            :null  =>  true,    :limit   => 20
        t.column   :temp_id_flag,                    :string,            :null  =>  true
        t.column   :display_name,                    :string,            :null  =>  true,    :limit   => 40
      end
    # end
    # ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
