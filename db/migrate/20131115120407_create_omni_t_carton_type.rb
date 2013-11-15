class CreateOmniTCartonType < ActiveRecord::Migration
  def change
  	# ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	# unless (@connection.columns('t_carton_type').count > 0 || @connection.columns('T_CARTON_TYPE').count > 0)
      create_table(:t_carton_type, :id => false) do |t|
        t.column   :ID,                              :string,            :null  =>  true,    :limit   => 32
        t.column   :carton_type_id,                  :string,            :null  =>  true,    :limit   => 20
        t.column   :carton_nbr,                      :string,            :null  =>  false
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 20
        t.column   :description,                     :string,            :null  =>  true,    :limit   => 200
        t.column   :short_name,                      :string,            :null  =>  true,    :limit   => 40
        t.column   :length,                          :string,            :null  =>  true
        t.column   :width,                           :string,            :null  =>  true
        t.column   :depth,                           :string,            :null  =>  true
        t.column   :last_update_date,                :string,            :null  =>  true
        t.column   :last_update_user,                :string,            :null  =>  true
      end
    # end
    # ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
