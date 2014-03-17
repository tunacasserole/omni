class CreateOmniTContainerDetail < ActiveRecord::Migration
  def change
  	# ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	# unless (@connection.columns('t_container_detail').count > 0 || @connection.columns('T_CONTAINER_DETAIL').count > 0)
      create_table(:t_container_detail, :id => false) do |t|
        t.column   :id,                              :string,            null: true,    limit: 32
        t.column   :display,                         :string,            null: true,    limit: 200
        t.column   :container_detail_nbr,            :string,            null: false
        t.column   :description,                     :string,            null: true,    limit: 200
        t.column   :parent_container_id,             :string,            null: true,    limit: 32
        t.column   :status,                          :string,            null: false
        t.column   :SKU_ID,                          :string,            null: false
        t.column   :sales_units,                     :string,            null: false
        t.column   :master_packs,                    :string,            null: true
        t.column   :master_pack_qty,                 :string,            null: true
        t.column   :master_pack_type,                :string,            null: true,    limit: 200
        t.column   :create_date,                     :string,            null: false
        t.column   :last_update_date,                :string,            null: false
        t.column   :inventory_source,                :string,            null: true,    limit: 32
        t.column   :container_source,                :string,            null: true,    limit: 32
        t.column   :is_destroyed,                    :string,            null: true
        t.column   :parent_container_nbr,            :string,            null: true
        t.column   :inventory_good,                  :string,            null: false
        t.column   :OSKU_ID,                         :string,            null: true,    limit: 200
        t.column   :Recovered_Flag,                  :string,            null: true
        t.column   :is_arch_select,                  :string,            null: true
      end
    # end
    # ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
