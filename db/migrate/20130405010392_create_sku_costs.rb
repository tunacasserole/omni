class CreateSkuCosts < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'sku_costs'
      create_table(:sku_costs, :id => false) do |t|
        t.column :sku_cost_id,                       :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :sku_id,                            :string,        :limit       => 32,     :null        => false
        t.column :first_cost,                        :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :last_cost,                         :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :average_cost,                      :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :on_hand_units,                     :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :cost_pool,                         :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :retail_pool,                       :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :is_updated_average_cost,           :boolean,       :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:sku_costs, [:sku_cost_id], :unique => true)
    end
  end
end
