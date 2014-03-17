class CreateOmniTSkuScan < ActiveRecord::Migration
  def change
  	# ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	# unless (@connection.columns('t_sku_scan').count > 0 || @connection.columns('T_SKU_SCAN').count > 0)
      create_table(:t_sku_scan, :id => false) do |t|
        t.column   :ID,                              :string,            null: false
        t.column   :SKU_ID,                          :string,            null: true
        t.column   :stock_nbr,                       :string,            null: true
        t.column   :size,                            :string,            null: true,    limit: 200
        t.column   :SKU_Scan,                        :string,            null: true,    limit: 200
        t.column   :Scan_Type,                       :string,            null: true,    :limit   => 1
      end
    end
    # ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  # end
end
