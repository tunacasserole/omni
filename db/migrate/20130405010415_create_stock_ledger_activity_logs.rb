class CreateStockLedgerActivityLogs < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'stock_ledger_activity_logs'
      create_table(:stock_ledger_activity_logs, :id => false) do |t|
        t.column :stock_ledger_activity_log_id,      :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :stock_ledger_activity_id,          :string,        :limit       => 32,     :null        => false
        t.column :activity_log_nbr,                  :string,        :limit       => 11,     :null        => false
        t.column :model_meta_id,                     :string,        :limit       => 32,     :null        => false
        t.column :attribute_meta_id,                 :string,        :limit       => 32,     :null        => false
        t.column :row_id,                            :string,        :limit       => 32,     :null        => false
        t.column :rule_action,                       :string,        :limit       => 100,    :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:stock_ledger_activity_logs, [:stock_ledger_activity_log_id], :unique => true)

    end
  end
end
