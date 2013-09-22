class CreateOmniStockLedgerActivities < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('stock_ledger_activities')
      create_table(:stock_ledger_activities, :id => false) do |t|
        t.column   :stock_ledger_activity_id,        :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 300
        t.column   :stockable_type,                  :string,            :null  =>  true,    :limit   => 100
        t.column   :stockable_id,                    :string,            :null  =>  true,    :limit   => 32
        t.column   :ruleset_id,                      :string,            :null  =>  true,    :limit   => 32
        t.column   :sku_id,                          :string,            :null  =>  true,    :limit   => 32
        t.column   :location_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :supplier_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :customer_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :site_id,                         :string,            :null  =>  true,    :limit   => 32
        t.column   :units,                           :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :cost,                            :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :retail,                          :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 13
        t.column   :create_date,                     :date,              :null  =>  true
        t.column   :activity_date,                   :date,              :null  =>  true
        t.column   :posted_date,                     :date,              :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
