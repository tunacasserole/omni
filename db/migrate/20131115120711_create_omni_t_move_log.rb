class CreateOmniTMoveLog < ActiveRecord::Migration
  def change
  	# ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	# unless (@connection.columns('t_move_log').count > 0 || @connection.columns('T_MOVE_LOG').count > 0)
      create_table(:t_move_log, :id => false) do |t|
        t.column   :ID,                              :string,            null: true,    limit: 200
        t.column   :move_log_number,                 :string,            null: false
        t.column   :display,                         :string,            null: true,    limit: 200
        t.column   :message_type_id,                 :string,            null: true,    limit: 200
        t.column   :message_type_code,               :string,            null: true,    limit: 200
        t.column   :message_template,                :string,            null: true,    limit: 200
        t.column   :severity,                        :string,            null: true,    :limit   => 1
        t.column   :timestamp_date,                  :string,            null: true
        t.column   :language_code,                   :string,            null: true
        t.column   :location_id,                     :string,            null: true,    limit: 32
        t.column   :location_short_name,             :string,            null: true,    limit: 200
        t.column   :parent_container_id,             :string,            null: true,    limit: 32
        t.column   :parent_container_number,         :string,            null: true
        t.column   :parent_container_type,           :string,            null: true
        t.column   :parent_barcode_id,               :string,            null: true,    limit: 32
        t.column   :parent_barcode_number,           :string,            null: true
        t.column   :container_id,                    :string,            null: true,    limit: 32
        t.column   :container_number,                :string,            null: true
        t.column   :container_type,                  :string,            null: true
        t.column   :barcode_id,                      :string,            null: true,    limit: 32
        t.column   :barcode,                         :string,            null: true,    limit: 200
        t.column   :device_name,                     :string,            null: true,    limit: 200
        t.column   :vehcicle_id,                     :string,            null: true,    limit: 32
        t.column   :vehicle_name,                    :string,            null: true,    limit: 200
        t.column   :user_id,                         :string,            null: true,    limit: 32
        t.column   :user_name,                       :string,            null: true,    limit: 200
        t.column   :log_text,                        :string,            null: true,    limit: 200
        t.column   :p1_name,                         :string,            null: true,    limit: 200
        t.column   :p1,                              :string,            null: true,    limit: 200
        t.column   :p2_name,                         :string,            null: true,    limit: 200
        t.column   :p2,                              :string,            null: true,    limit: 200
        t.column   :p3_name,                         :string,            null: true,    limit: 200
        t.column   :p3,                              :string,            null: true,    limit: 200
        t.column   :p4_name,                         :string,            null: true,    limit: 200
        t.column   :p4,                              :string,            null: true,    limit: 200
        t.column   :p5_name,                         :string,            null: true,    limit: 200
        t.column   :p5,                              :string,            null: true,    limit: 200
        t.column   :p6_name,                         :string,            null: true,    limit: 200
        t.column   :p6,                              :string,            null: true,    limit: 200
        t.column   :p7_name,                         :string,            null: true,    limit: 200
        t.column   :p7,                              :string,            null: true,    limit: 200
        t.column   :p8_name,                         :string,            null: true,    limit: 200
        t.column   :p8,                              :string,            null: true,    limit: 200
        t.column   :p9_name,                         :string,            null: true,    limit: 200
        t.column   :p9,                              :string,            null: true,    limit: 200
        t.column   :p10_name,                        :string,            null: true,    limit: 200
        t.column   :p10,                             :string,            null: true,    limit: 200
        t.column   :is_destroyed,                    :string,            null: true
        t.column   :user_number,                     :string,            null: true
      end
    # end
    # ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
