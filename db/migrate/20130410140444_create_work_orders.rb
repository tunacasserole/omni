class CreateWorkOrders < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'work_orders'
      create_table(:work_orders, :id => false) do |t|
        t.column :work_order_id,                     :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :workable_id,                       :string,        :limit       => 32,     :null        => true
        t.column :workable_type,                     :string,        :limit       => 100,    :null        => true
        t.column :work_order_nbr,                    :string,        :limit       => 11,     :null        => false
        t.column :sku_id,                            :string,        :limit       => 32,     :null        => true
        t.column :production_location_id,            :string,        :limit       => 32,     :null        => false
        t.column :supplier_id,                       :string,        :limit       => 32,     :null        => true
        t.column :work_order_description,            :string,        :limit       => 300,    :null        => true
        t.column :work_order_type,                   :string,        :limit       => 100,    :null        => false
        t.column :release_date,                      :date,          :null        => true
        t.column :start_date,                        :date,          :null        => true
        t.column :complete_date,                     :date,          :null        => true
        t.column :target_complete_date,              :date,          :null        => true
        t.column :request_units,                     :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :complete_units,                    :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :is_cancelled,                      :boolean,       :null        => true
        t.column :state,                             :string,        :limit       => 100,    :null        => true
        t.column :weight,                            :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :height,                            :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :bust,                              :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :waist,                             :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :high_hip,                          :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :hip,                               :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :across_shoulder_front,             :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :across_shoulder_back,              :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :shoulder_length,                   :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :back_length,                       :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :hps_to_waist,                      :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :neck_circumference,                :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :arm_circumference,                 :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :wrist_circumference,               :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :inseam,                            :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :outseam,                           :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :thigh,                             :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :arm_length,                        :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :total_rise,                        :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :head_circumference,                :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:work_orders, [:work_order_id], :unique => true)

    end
  end
end
