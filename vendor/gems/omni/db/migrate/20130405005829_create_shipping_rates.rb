class CreateShippingRates < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'shipping_rates'
      create_table(:shipping_rates, :id => false) do |t|
        t.column :shipping_rate_id,                  :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :supplier_id,                       :string,        :limit       => 32,     :null        => false
        t.column :shipping_rate_name,                :string,        :limit       => 100,    :null        => false
        t.column :shipping_charge,                   :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :minimum_sale,                      :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :maximum_sale,                      :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:shipping_rates, [:shipping_rate_id], :unique => true)

    end
  end
end
