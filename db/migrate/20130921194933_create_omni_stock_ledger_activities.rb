class CreateOmniStockLedgerActivities < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :stock_ledger_activities if ActiveRecord::Base.connection.tables.include?('stock_ledger_activities')
 	# unless ActiveRecord::Base.connection.tables.include?('stock_ledger_activities')
      create_table(:stock_ledger_activities, :id => false) do |t|
        t.column   :stock_ledger_activity_id,        :string,            null: false,   limit: 32
        t.column   :display,                         :string,            null: true,    limit: 300
        t.column   :stockable_type,                  :string,            null: true,    limit: 200
        t.column   :stockable_id,                    :string,            null: true,    limit: 32
        t.column   :ruleset_id,                      :string,            null: true,    limit: 32
        t.column   :sku_id,                          :string,            null: true,    limit: 32
        t.column   :location_id,                     :string,            null: true,    limit: 32
        t.column   :supplier_id,                     :string,            null: true,    limit: 32
        t.column   :customer_id,                     :string,            null: true,    limit: 32
        t.column   :account_id,                         :string,            null: true,    limit: 32
        t.column   :units,                           :decimal,           null: true,    scale: 2, precision: 11
        t.column   :cost,                            :decimal,           null: true,    :scale   => 4,          :precision  => 13
        t.column   :retail,                          :decimal,           null: true,    :scale   => 4,          :precision  => 13
        t.column   :create_date,                     :datetime,          null: true
        t.column   :activity_date,                   :datetime,          null: true
        t.column   :posted_date,                     :datetime,          null: true
        t.column   :is_destroyed,                    :boolean,           null: true
      end
    # end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
