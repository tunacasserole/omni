class CreatePurchases < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'purchases'
      create_table(:purchases, :id => false) do |t|
        t.column :purchase_id,                       :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :purchase_order_nbr,                :string,        :limit       => 11,     :null        => true
        t.column :supplier_id,                       :string,        :limit       => 32,     :null        => true
        t.column :location_id,                       :string,        :limit       => 32,     :null        => true
        t.column :purchase_type,                     :string,        :limit       => 32,     :null        => true
        t.column :purchase_source,                   :string,        :limit       => 32,     :null        => true
        t.column :state,                             :string,        :limit       => 100,    :null        => true
        t.column :order_date,                        :date,          :null        => true
        t.column :ordered_by_user_id,                :string,        :limit       => 32,     :null        => true
        t.column :ship_date,                         :date,          :null        => true
        t.column :delivery_date,                     :date,          :null        => true
        t.column :cancel_not_shipped_by_date,        :date,          :null        => true
        t.column :cancel_not_received_by_date,       :date,          :null        => true
        t.column :approval_date,                     :date,          :null        => true
        t.column :first_receipt_date,                :date,          :null        => true
        t.column :cancelled_date,                    :date,          :null        => true
        t.column :payment_term,                      :string,        :limit       => 100,    :null        => true
        t.column :freight_term,                      :string,        :limit       => 100,    :null        => true
        t.column :ship_via,                          :string,        :limit       => 100,    :null        => true
        t.column :fob_point,                         :string,        :limit       => 100,    :null        => true        
        t.column :is_phone_order,                    :boolean,       :null        => true
        t.column :confirmed_by_user_id,              :string,        :limit       => 32,     :null        => true
        t.column :master_purchase_id,                :string,        :limit       => 32,     :null        => true
        t.column :carrier_supplier_id,               :string,        :limit       => 32,     :null        => true
        t.column :is_special_order,                  :boolean,       :null        => true
        t.column :is_ship_cancel,                    :boolean,       :null        => true
        t.column :estimated_lead_time_days,          :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:purchases, [:purchase_id], :unique => true)

    end
  end
end
