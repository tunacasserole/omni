class CreateOmniTMasterPackCodes < ActiveRecord::Migration
  def change
  	# ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	# unless (@connection.columns('t_master_pack_codes').count > 0 || @connection.columns('T_MASTER_PACK_CODES').count > 0)
      create_table(:t_master_pack_codes, :id => false) do |t|
        t.column   :id,                              :string,            :null  =>  true,    :limit   => 32
        t.column   :master_pack_uom_nbr,             :string,            :null  =>  false
        t.column   :description,                     :string,            :null  =>  true,    :limit   => 200
        t.column   :short_name,                      :string,            :null  =>  true,    :limit   => 30
        t.column   :master_pack_uom_code,            :string,            :null  =>  true,    :limit   => 20
      end
    # end
    # ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
