class CreateOmniWorkOrders < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('work_orders')
      create_table(:work_orders, :id => false) do |t|
        t.column   :work_order_id,                   :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :workable_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :workable_type,                   :string,            :null  =>  true,    :limit   => 100
        t.column   :work_order_nbr,                  :string,            :null  =>  false,   :limit   => 11
        t.column   :sku_id,                          :string,            :null  =>  true,    :limit   => 32
        t.column   :production_location_id,          :string,            :null  =>  false,   :limit   => 32
        t.column   :supplier_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :work_order_description,          :string,            :null  =>  true,    :limit   => 300
        t.column   :work_order_type,                 :string,            :null  =>  false,   :limit   => 100
        t.column   :release_date,                    :datetime,          :null  =>  true
        t.column   :start_date,                      :datetime,          :null  =>  true
        t.column   :complete_date,                   :datetime,          :null  =>  true
        t.column   :target_complete_date,            :datetime,          :null  =>  true
        t.column   :request_units,                   :integer,           :null  =>  true
        t.column   :complete_units,                  :integer,           :null  =>  true
        t.column   :is_cancelled,                    :boolean,           :null  =>  true
        t.column   :state,                           :string,            :null  =>  true,    :limit   => 100
        t.column   :weight,                          :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :height,                          :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :bust,                            :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :waist,                           :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :high_hip,                        :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :hip,                             :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :across_shoulder_front,           :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :across_shoulder_back,            :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :shoulder_length,                 :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :back_length,                     :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :hps_to_waist,                    :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :neck_circumference,              :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :arm_circumference,               :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :wrist_circumference,             :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :inseam,                          :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :outseam,                         :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :thigh,                           :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :arm_length,                      :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :total_rise,                      :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :head_circumference,              :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
