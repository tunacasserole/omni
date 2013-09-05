class CreateAdjustmentReasons < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'adjustment_reasons'
      create_table(:adjustment_reasons, :id => false) do |t|
        t.column :adjustment_reason_id,              :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 100,    :null        => false
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :short_name,                        :string,        :limit       => 15,     :null        => true
        t.column :ruleset_id,                        :string,        :limit       => 32,     :null        => false
        t.column :is_allowed_cost_entry,             :boolean,       :null        => true
        t.column :is_cost_adjustment,                :boolean,       :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:adjustment_reasons, [:adjustment_reason_id], :unique => true)

    end
  end
end