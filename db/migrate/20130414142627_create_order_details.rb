class CreateOrderDetails < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'order_details'
      create_table(:order_details, :id => false) do |t|
        t.column :ship_longitude,                    :string,        :limit       => 15,     :null        => true
        t.column :is_residential,                    :boolean,       :null        => true
        t.column :is_commercial,                     :boolean,       :null        => true
        t.column :phone,                             :string,        :limit       => 30,     :null        => true
        t.column :email_address,                     :string,        :limit       => 200,    :null        => true
        t.column :site_id,                           :string,        :limit       => 32,     :null        => true
        t.column :grade_id,                          :string,        :limit       => 32,     :null        => true
        t.column :gender,                            :string,        :limit       => 100,    :null        => true
        t.column :sales_user_id,                     :string,        :limit       => 32,     :null        => true
        t.column :promised_date,                     :date,          :null        => true
        t.column :state,                             :string,        :limit       => 100,    :null        => true
        t.column :serial_number,                     :string,        :limit       => 100,    :null        => true
        t.column :order_units,                       :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :retail_price,                      :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :sale_price,                        :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :sales_tax_rate,                    :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :price_type,                        :string,        :limit       => 100,    :null        => true
        t.column :is_taxable_product,                :boolean,       :null        => true
        t.column :is_tax_charged,                    :boolean,       :null        => true
        t.column :shipping_amount,                   :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :discount_percent,                  :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :discount_amount,                   :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :customer_discount_reason,          :string,        :limit       => 100,    :null        => true
        t.column :customer_return_reason,            :string,        :limit       => 100,    :null        => true
        t.column :customer_cancel_reason,            :string,        :limit       => 100,    :null        => true
        t.column :cancel_date,                       :date,          :null        => true
        t.column :reference_order_detail_id,         :string,        :limit       => 32,     :null        => true
        t.column :is_cancelled,                      :boolean,       :null        => true
        t.column :is_layaway,                        :boolean,       :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
        t.column :order_detail_id,                   :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => true
        t.column :order_id,                          :string,        :limit       => 32,     :null        => true
        t.column :order_line_nbr,                    :string,        :limit       => 11,     :null        => true
        t.column :sku_id,                            :string,        :limit       => 32,     :null        => false
        t.column :sku_alias_id,                      :string,        :limit       => 32,     :null        => false
        t.column :delivery_method,                   :string,        :limit       => 100,    :null        => false
        t.column :pickup_location_id,                :string,        :limit       => 32,     :null        => true
        t.column :ship_to_name,                      :string,        :limit       => 100,    :null        => true
        t.column :ship_line_1,                       :string,        :limit       => 100,    :null        => true
        t.column :ship_line_2,                       :string,        :limit       => 100,    :null        => true
        t.column :ship_line_3,                       :string,        :limit       => 100,    :null        => true
        t.column :ship_line_4,                       :string,        :limit       => 100,    :null        => true
        t.column :ship_city,                         :string,        :limit       => 100,    :null        => true
        t.column :ship_state_code,                   :string,        :limit       => 2,      :null        => true
        t.column :ship_zip,                          :string,        :limit       => 10,     :null        => true
        t.column :ship_country,                      :string,        :limit       => 100,    :null        => true
        t.column :ship_latitude,                     :string,        :limit       => 15,     :null        => true
      end
      add_index(:order_details, [:order_detail_id], :unique => true)

    end
  end
end
