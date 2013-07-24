class CreateSuppliers < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'suppliers'
      create_table(:suppliers, :id => false) do |t|
        t.column :supplier_id,                       :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => true
        t.column :supplier_name,                     :string,        :limit       => 100,    :null        => false
        t.column :supplier_nbr,                      :string,        :limit       => 11,     :null        => true
        t.column :supplier_ucc_prefix,               :integer,       :null        => true
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :short_name,                        :string,        :limit       => 15,     :null        => true
        t.column :legacy_supplier_code,              :string,        :limit       => 4,      :null        => true
        t.column :duns_number,                       :integer,       :null        => true
        t.column :line_1,                            :string,        :limit       => 100,    :null        => true
        t.column :line_2,                            :string,        :limit       => 100,    :null        => true
        t.column :line_3,                            :string,        :limit       => 100,    :null        => true
        t.column :line_4,                            :string,        :limit       => 100,    :null        => true
        t.column :city,                              :string,        :limit       => 100,    :null        => true
        t.column :state_code,                        :string,        :limit       => 2,      :null        => true
        t.column :zip,                               :string,        :limit       => 10,     :null        => true
        t.column :country,                           :string,        :limit       => 100,    :null        => true
        t.column :latitude,                          :string,        :limit       => 15,     :null        => true
        t.column :longitude,                         :string,        :limit       => 15,     :null        => true
        t.column :phone,                             :string,        :limit       => 30,     :null        => true
        t.column :fax,                               :string,        :limit       => 30,     :null        => true
        t.column :supplier_url,                      :string,        :limit       => 100,    :null        => true
        t.column :default_ship_thru_supplier_id,     :string,        :limit       => 32,     :null        => true
        t.column :shipping_point,                    :string,        :limit       => 100,    :null        => true
        t.column :ship_via,                          :string,        :limit       => 100,    :null        => true
        t.column :freight_term,                      :string,        :limit       => 100,    :null        => true
        t.column :minimum_order_cost,                :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :minimum_order_units,               :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :minimum_weight,                    :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :minimum_cube,                      :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :is_ship_cancel,                    :boolean,       :null        => true
        t.column :return_policy,                     :string,        :limit       => 300,    :null        => true
        t.column :lead_time,                         :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :safety_stock_days,                 :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :is_calculated_lead_time,           :boolean,       :null        => true
        t.column :replenishment_method,              :string,        :limit       => 100,    :null        => true
        t.column :is_dynamic_safety_stock,           :boolean,       :null        => true
        t.column :default_pay_to_supplier_id,        :string,        :limit       => 32,     :null        => true
        t.column :default_payment_term,              :string,        :limit       => 100,    :null        => true
        t.column :bank_name,                         :string,        :limit       => 100,    :null        => true
        t.column :bank_account_name,                 :string,        :limit       => 100,    :null        => true
        t.column :bank_account_type,                 :string,        :limit       => 100,    :null        => true
        t.column :bank_routing_nbr,                  :integer,       :null        => true
        t.column :bank_account,                      :string,        :limit       => 15,     :null        => true
        t.column :gl_account_id,                     :string,        :limit       => 32,     :null        => true
        t.column :tax_identifier,                    :integer,       :null        => true
        t.column :is_required_1099,                  :boolean,       :null        => true
        t.column :is_edi_capable,                    :boolean,       :null        => true
        t.column :is_one_time,                       :boolean,       :null        => true
        t.column :is_employee,                       :boolean,       :null        => true
        t.column :is_payee,                          :boolean,       :null        => true
        t.column :is_merchandise,                    :boolean,       :null        => true
        t.column :is_supply,                         :boolean,       :null        => true
        t.column :is_expense,                        :boolean,       :null        => true
        t.column :is_creditor,                       :boolean,       :null        => true
        t.column :is_freight,                        :boolean,       :null        => true
        t.column :is_factory,                        :boolean,       :null        => true
        t.column :is_3pl,                            :boolean,       :null        => true
        t.column :is_agent,                          :boolean,       :null        => true
        t.column :is_outbound_shipper,               :boolean,       :null        => true
        t.column :is_on_payment_hold,                :boolean,       :null        => true
        t.column :is_enabled,                        :boolean,       :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:suppliers, [:supplier_id], :unique => true)

    end
  end
end
