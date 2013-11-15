class CreateOmniTContainerType < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless (@connection.columns('t_container_type').count > 0 || @connection.columns('T_CONTAINER_TYPE').count > 0)
      create_table(:t_container_type, :id => false) do |t|
        t.column   :id,                              :string,            :null  =>  true,    :limit   => 32
        t.column   :container_type_nbr,              :string,            :null  =>  false
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 20
        t.column   :description,                     :string,            :null  =>  true,    :limit   => 20
        t.column   :short_name,                      :string,            :null  =>  true,    :limit   => 20
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
