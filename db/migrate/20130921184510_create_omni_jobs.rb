class CreateOmniJobs < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('jobs')
      create_table(:jobs, :id => false) do |t|
        t.column   :job_id,                          :string,            null: false,   limit: 32
        t.column   :display,                         :string,            null: true,   limit: 300
        t.column   :jobable_id,                      :string,            null: true,    limit: 32
        t.column   :jobable_type,                    :string,            null: true,    limit: 200
        t.column   :job_nbr,                         :string,            null: true,   limit: 200
        t.column   :sku_id,                          :string,            null: true,    limit: 32
        t.column   :production_location_id,          :string,            null: true,   limit: 32
        t.column   :supplier_id,                     :string,            null: true,    limit: 32
        t.column   :job_description,                 :string,            null: true,    limit: 300
        t.column   :job_type,                        :string,            null: true,   limit: 200
        t.column   :release_date,                    :datetime,          null: true
        t.column   :start_date,                      :datetime,          null: true
        t.column   :complete_date,                   :datetime,          null: true
        t.column   :target_complete_date,            :datetime,          null: true
        t.column   :request_units,                   :integer,           null: true
        t.column   :complete_units,                  :integer,           null: true
        t.column   :is_cancelled,                    :boolean,           null: true
        t.column   :state,                           :string,            null: true,    limit: 200
        t.column   :weight,                          :decimal,           null: true,    scale: 2, precision: 11
        t.column   :height,                          :decimal,           null: true,    scale: 2, precision: 11
        t.column   :bust,                            :decimal,           null: true,    scale: 2, precision: 11
        t.column   :waist,                           :decimal,           null: true,    scale: 2, precision: 11
        t.column   :high_hip,                        :decimal,           null: true,    scale: 2, precision: 11
        t.column   :hip,                             :decimal,           null: true,    scale: 2, precision: 11
        t.column   :across_shoulder_front,           :decimal,           null: true,    scale: 2, precision: 11
        t.column   :across_shoulder_back,            :decimal,           null: true,    scale: 2, precision: 11
        t.column   :shoulder_length,                 :decimal,           null: true,    scale: 2, precision: 11
        t.column   :back_length,                     :decimal,           null: true,    scale: 2, precision: 11
        t.column   :hps_to_waist,                    :decimal,           null: true,    scale: 2, precision: 11
        t.column   :neck_circumference,              :decimal,           null: true,    scale: 2, precision: 11
        t.column   :arm_circumference,               :decimal,           null: true,    scale: 2, precision: 11
        t.column   :wrist_circumference,             :decimal,           null: true,    scale: 2, precision: 11
        t.column   :inseam,                          :decimal,           null: true,    scale: 2, precision: 11
        t.column   :outseam,                         :decimal,           null: true,    scale: 2, precision: 11
        t.column   :thigh,                           :decimal,           null: true,    scale: 2, precision: 11
        t.column   :arm_length,                      :decimal,           null: true,    scale: 2, precision: 11
        t.column   :total_rise,                      :decimal,           null: true,    scale: 2, precision: 11
        t.column   :head_circumference,              :decimal,           null: true,    scale: 2, precision: 11
        t.column   :is_destroyed,                    :boolean,           null: true
      end
    end
  end
end
