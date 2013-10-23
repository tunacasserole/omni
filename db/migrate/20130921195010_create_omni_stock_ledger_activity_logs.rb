class CreateOmniStockLedgerActivityLogs < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('stock_ledger_activity_logs')
      create_table(:stock_ledger_activity_logs, :id => false) do |t|
        t.column   :stock_ledger_activity_log_id,    :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 300
        t.column   :stock_ledger_activity_id,        :string,            :null  =>  true,    :limit   => 32
        t.column   :activity_log_nbr,                :string,            :null  =>  true,    :limit   => 11
        t.column   :model_name,                      :string,            :null  =>  true,    :limit   => 200
        t.column   :attribute_name,                  :string,            :null  =>  true,    :limit   => 200
        t.column   :row_id,                          :string,            :null  =>  true,    :limit   => 32
        t.column   :rule_action,                     :string,            :null  =>  true,    :limit   => 100
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
