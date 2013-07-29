class CreateOrders < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'orders'
      create_table(:orders, :id => false) do |t|
        t.column :order_id,                          :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => true
        t.column :location_id,                       :string,        :limit       => 32,     :null        => false
        t.column :terminal_id,                       :string,        :limit       => 32,     :null        => true
        t.column :customer_order_nbr,                :string,        :limit       => 11,     :null        => true
        t.column :customer_id,                       :string,        :limit       => 32,     :null        => false
        t.column :order_start_date,                  :date,          :null        => true
        t.column :order_date,                        :date,          :null        => false
        t.column :price_lookup_date,                 :date,          :null        => true
        t.column :user_id,                           :string,        :limit       => 32,     :null        => true
        t.column :order_source,                      :string,        :limit       => 100,    :null        => false
        t.column :is_tax_exempt_date,                :boolean,       :null        => true
        t.column :is_tax_exempt_customer,            :boolean,       :null        => true
        t.column :is_trade_discount_order,           :boolean,       :null        => true
        t.column :order_total,                       :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :state,                             :string,        :limit       => 100,    :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:orders, [:order_id], :unique => true)

    end
  end
end
