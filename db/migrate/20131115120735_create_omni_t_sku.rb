class CreateOmniTSku < ActiveRecord::Migration
  def change
  	# ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	# unless (@connection.columns('t_sku').count > 0 || @connection.columns('T_SKU').count > 0)
      create_table(:t_sku, :id => false) do |t|
        t.column   :ID,                              :string,            null: false
        t.column   :stock_nbr,                       :string,            null: false
        t.column   :size,                            :string,            null: false,   limit: 200
        t.column   :status,                          :string,            null: true,    limit: 200
        t.column   :SKU,                             :string,            null: true,    limit: 200
        t.column   :description,                     :string,            null: true,    limit: 200
        t.column   :separator,                       :string,            null: true,    :limit   => 1
        t.column   :default_separator,               :string,            null: true
        t.column   :dummy_sku,                       :string,            null: true
        t.column   :empty_sku,                       :string,            null: true
        t.column   :OSKU_ID,                         :string,            null: true,    limit: 32
        t.column   :update_ts,                       :string,            null: true
        t.column   :Mark_QOH,                        :string,            null: true
        t.column   :Mark_Inv_ts,                     :string,            null: true
        t.column   :Mark_QOH_Prior,                  :string,            null: true
        t.column   :Mark_Prior_Inv_ts,               :string,            null: true
        t.column   :sales_units,                     :string,            null: true
        t.column   :sales_units_located,             :string,            null: true
        t.column   :containers_in_question,          :string,            null: true
        t.column   :Inventory_talley_ts,             :string,            null: true
        t.column   :container_count,                 :string,            null: true
        t.column   :Alt_mark_SKU,                    :string,            null: true,    limit: 200
        t.column   :OMNI_SKU,                        :string,            null: true,    limit: 2000
        t.column   :TG_SKU,                          :string,            null: true,    limit: 2000
      end
    # end
    # ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
