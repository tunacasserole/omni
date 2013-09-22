class CreateOmniPurchases < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('purchases')
      create_table(:purchases, :id => false) do |t|
        t.column   :purchase_id,                     :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :purchase_order_nbr,              :string,            :null  =>  true,    :limit   => 11
        t.column   :supplier_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :location_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :purchase_type,                   :string,            :null  =>  true,    :limit   => 32
        t.column   :purchase_source,                 :string,            :null  =>  true,    :limit   => 32
        t.column   :state,                           :string,            :null  =>  true,    :limit   => 100
        t.column   :order_date,                      :date,              :null  =>  true
        t.column   :ordered_by_user_id,              :string,            :null  =>  true,    :limit   => 32
        t.column   :ship_date,                       :date,              :null  =>  true
        t.column   :delivery_date,                   :date,              :null  =>  true
        t.column   :cancel_not_shipped_by_date,      :date,              :null  =>  true
        t.column   :cancel_not_received_by_date,     :date,              :null  =>  true
        t.column   :approval_1_date,                 :date,              :null  =>  true
        t.column   :approval_2_date,                 :date,              :null  =>  true
        t.column   :approval_3_date,                 :date,              :null  =>  true
        t.column   :first_receipt_date,              :date,              :null  =>  true
        t.column   :cancelled_date,                  :date,              :null  =>  true
        t.column   :payment_term,                    :string,            :null  =>  true,    :limit   => 100
        t.column   :freight_term,                    :string,            :null  =>  true,    :limit   => 100
        t.column   :ship_via,                        :string,            :null  =>  true,    :limit   => 100
        t.column   :fob_point,                       :string,            :null  =>  true,    :limit   => 100
        t.column   :is_phone_order,                  :boolean,           :null  =>  true
        t.column   :confirmed_by_user_id,            :string,            :null  =>  true,    :limit   => 32
        t.column   :master_purchase_id,              :string,            :null  =>  true,    :limit   => 32
        t.column   :carrier_supplier_id,             :string,            :null  =>  true,    :limit   => 32
        t.column   :is_special_order,                :boolean,           :null  =>  true
        t.column   :is_ship_cancel,                  :boolean,           :null  =>  true
        t.column   :estimated_lead_time_days,        :integer,           :null  =>  true
        t.column   :purchase_approver_1_user_id,     :string,            :null  =>  true,    :limit   => 32
        t.column   :purchase_approver_2_user_id,     :string,            :null  =>  true,    :limit   => 32
        t.column   :purchase_approver_3_user_id,     :string,            :null  =>  true,    :limit   => 32
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
        t.column   :purchase_approver_1_location_user_id,:string,            :null  =>  true,    :limit   => 32
        t.column   :purchase_approver_2_location_user_id,:string,            :null  =>  true,    :limit   => 32
        t.column   :purchase_approver_3_location_user_id,:string,            :null  =>  true,    :limit   => 32
        t.column   :audit_created_by,                :string,            :null  =>  true,    :limit   => 100
        t.column   :audit_updated_by,                :string,            :null  =>  true,    :limit   => 100
        t.column   :audit_created_at,                :datetime,          :null  =>  true
        t.column   :audit_updated_at,                :datetime,          :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end