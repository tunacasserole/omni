class CreateOmniSuppliers < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('suppliers')
      create_table(:suppliers, :id => false) do |t|
        t.column   :supplier_id,                     :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 300
        t.column   :supplier_name,                   :string,            :null  =>  false,   :limit   => 100
        t.column   :supplier_nbr,                    :string,            :null  =>  true,    :limit   => 11
        t.column   :supplier_ucc_prefix,             :integer,           :null  =>  true
        t.column   :description,                     :string,            :null  =>  true,    :limit   => 300
        t.column   :short_name,                      :string,            :null  =>  true,    :limit   => 15
        t.column   :legacy_supplier_code,            :string,            :null  =>  true,    :limit   => 4
        t.column   :duns_number,                     :integer,           :null  =>  true
        t.column   :line_1,                          :string,            :null  =>  true,    :limit   => 100
        t.column   :line_2,                          :string,            :null  =>  true,    :limit   => 100
        t.column   :line_3,                          :string,            :null  =>  true,    :limit   => 100
        t.column   :line_4,                          :string,            :null  =>  true,    :limit   => 100
        t.column   :city,                            :string,            :null  =>  true,    :limit   => 100
        t.column   :state_code,                      :string,            :null  =>  true,    :limit   => 2
        t.column   :zip,                             :string,            :null  =>  true,    :limit   => 10
        t.column   :country,                         :string,            :null  =>  true,    :limit   => 100
        t.column   :latitude,                        :string,            :null  =>  true,    :limit   => 15
        t.column   :longitude,                       :string,            :null  =>  true,    :limit   => 15
        t.column   :phone,                           :string,            :null  =>  true,    :limit   => 30
        t.column   :fax,                             :string,            :null  =>  true,    :limit   => 30
        t.column   :supplier_url,                    :string,            :null  =>  true,    :limit   => 100
        t.column   :default_ship_thru_supplier_id,   :string,            :null  =>  true,    :limit   => 32
        t.column   :shipping_point,                  :string,            :null  =>  true,    :limit   => 100
        t.column   :ship_via,                        :string,            :null  =>  true,    :limit   => 100
        t.column   :freight_term,                    :string,            :null  =>  true,    :limit   => 100
        t.column   :minimum_order_cost,              :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :minimum_order_units,             :integer,           :null  =>  true
        t.column   :minimum_weight,                  :integer,           :null  =>  true
        t.column   :minimum_cube,                    :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :is_ship_cancel,                  :boolean,           :null  =>  true
        t.column   :return_policy,                   :string,            :null  =>  true,    :limit   => 300
        t.column   :lead_time,                       :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :safety_stock_days,               :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :is_calculated_lead_time,         :boolean,           :null  =>  true
        t.column   :replenishment_method,            :string,            :null  =>  true,    :limit   => 100
        t.column   :is_dynamic_safety_stock,         :boolean,           :null  =>  true
        t.column   :default_pay_to_supplier_id,      :string,            :null  =>  true,    :limit   => 32
        t.column   :default_payment_term,            :string,            :null  =>  true,    :limit   => 100
        t.column   :bank_name,                       :string,            :null  =>  true,    :limit   => 100
        t.column   :bank_account_name,               :string,            :null  =>  true,    :limit   => 100
        t.column   :bank_account_type,               :string,            :null  =>  true,    :limit   => 100
        t.column   :bank_routing_nbr,                :integer,           :null  =>  true
        t.column   :bank_account,                    :string,            :null  =>  true,    :limit   => 15
        t.column   :gl_account_id,                   :string,            :null  =>  true,    :limit   => 32
        t.column   :tax_identifier,                  :integer,           :null  =>  true
        t.column   :is_required_1099,                :boolean,           :null  =>  true
        t.column   :is_edi_capable,                  :boolean,           :null  =>  true
        t.column   :is_one_time,                     :boolean,           :null  =>  true
        t.column   :is_employee,                     :boolean,           :null  =>  true
        t.column   :is_payee,                        :boolean,           :null  =>  true
        t.column   :is_merchandise,                  :boolean,           :null  =>  true
        t.column   :is_supply,                       :boolean,           :null  =>  true
        t.column   :is_expense,                      :boolean,           :null  =>  true
        t.column   :is_creditor,                     :boolean,           :null  =>  true
        t.column   :is_freight,                      :boolean,           :null  =>  true
        t.column   :is_factory,                      :boolean,           :null  =>  true
        t.column   :is_3pl,                          :boolean,           :null  =>  true
        t.column   :is_agent,                        :boolean,           :null  =>  true
        t.column   :is_outbound_shipper,             :boolean,           :null  =>  true
        t.column   :is_on_payment_hold,              :boolean,           :null  =>  true
        t.column   :is_enabled,                      :boolean,           :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
