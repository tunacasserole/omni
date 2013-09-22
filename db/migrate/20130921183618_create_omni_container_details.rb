class CreateOmniContainerDetails < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('container_details')
      create_table(:container_details, :id => false) do |t|
        t.column   :container_detail_id,             :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :container_detail_nbr,            :string,            :null  =>  true,    :limit   => 11
        t.column   :container_id,                    :string,            :null  =>  true,    :limit   => 32
        t.column   :state,                           :string,            :null  =>  true,    :limit   => 100
        t.column   :sku_id,                          :string,            :null  =>  true,    :limit   => 32
        t.column   :selling_units,                   :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :commited_units,                  :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :pack_type,                       :string,            :null  =>  true,    :limit   => 100
        t.column   :sell_units_per_pack,             :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :container_inventory_source,      :string,            :null  =>  true,    :limit   => 100
        t.column   :container_detail_source,         :string,            :null  =>  true,    :limit   => 100
        t.column   :purchase_detail_id,              :string,            :null  =>  true,    :limit   => 32
        t.column   :supplier_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :supplier_item_identifier,        :string,            :null  =>  true,    :limit   => 100
        t.column   :lot_identifier,                  :string,            :null  =>  true,    :limit   => 100
        t.column   :work_order_id,                   :string,            :null  =>  true,    :limit   => 32
        t.column   :receipt_detail_id,               :string,            :null  =>  true,    :limit   => 32
        t.column   :pick_ticket_id,                  :string,            :null  =>  true,    :limit   => 32
        t.column   :origin_container_detail_id,      :string,            :null  =>  true,    :limit   => 32
        t.column   :is_quality_hold,                 :boolean,           :null  =>  true
        t.column   :is_duty_paid,                    :boolean,           :null  =>  true
        t.column   :last_activity_date,              :date,              :null  =>  true
        t.column   :last_count_date,                 :date,              :null  =>  true
        t.column   :is_audited,                      :boolean,           :null  =>  true
        t.column   :is_inspected,                    :boolean,           :null  =>  true
        t.column   :Inspection_date,                 :date,              :null  =>  true
        t.column   :create_date,                     :date,              :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
