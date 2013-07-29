class CreateStockLedgerActivities < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'stock_ledger_activities'
      create_table(:stock_ledger_activities, :id => false) do |t|
        t.column :stock_ledger_activity_id,          :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :stockable_type,                    :string,        :limit       => 100,    :null        => false
        t.column :stockable_id,                      :string,        :limit       => 32,     :null        => false
        t.column :ruleset_id,                        :string,        :limit       => 32,     :null        => false
        t.column :sku_id,                            :string,        :limit       => 32,     :null        => false
        t.column :location_id,                       :string,        :limit       => 32,     :null        => false
        t.column :supplier_id,                       :string,        :limit       => 32,     :null        => true
        t.column :customer_id,                       :string,        :limit       => 32,     :null        => true
        t.column :site_id,                           :string,        :limit       => 32,     :null        => true
        t.column :units,                             :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :cost,                              :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :retail,                            :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :create_date,                       :date,          :null        => true
        t.column :activity_date,                     :date,          :null        => true
        t.column :posted_date,                       :date,          :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:stock_ledger_activities, [:stock_ledger_activity_id], :unique => true)

    end
  end
end
