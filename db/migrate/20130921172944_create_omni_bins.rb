class CreateOmniBins < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('bins')
      create_table(:bins, :id => false) do |t|
        t.column   :bin_id,                          :string,            null: false,   limit: 32
        t.column   :display,                         :string,            null: true,   limit: 300
        t.column   :location_id,                     :string,            null: true,   limit: 32
        t.column   :area_id,                         :string,            null: true,   limit: 32
        t.column   :aisle,                           :string,            null: true,    limit: 200
        t.column   :section,                         :string,            null: true,    limit: 200
        t.column   :level,                           :string,            null: true,    limit: 200
        t.column   :position,                        :string,            null: true,    limit: 200
        t.column   :bin_nbr,                         :string,            null: true,    limit: 200
        t.column   :bin_code,                        :string,            null: true,    limit: 200
        t.column   :description,                     :string,            null: true,    limit: 300
        t.column   :bin_type,                        :string,            null: true,    limit: 200
        t.column   :last_activity_date,              :datetime,          null: true
        t.column   :is_many_sku_per_bin,             :boolean,           null: true
        t.column   :pick_sequence,                   :integer,           null: true
        t.column   :zone,                            :string,            null: true,    limit: 200
        t.column   :pick_zone,                       :string,            null: true,    limit: 200
        t.column   :cube_capacity,                   :integer,           null: true
        t.column   :is_area,                         :boolean,           null: true
        t.column   :is_count_cartons,                :boolean,           null: true
        t.column   :is_empty,                        :boolean,           null: true
        t.column   :carton_count,                    :integer,           null: true
        t.column   :on_hand_cube,                    :decimal,           null: true,    scale: 2, precision: 11
        t.column   :due_in_cube,                     :decimal,           null: true,    scale: 2, precision: 11
        t.column   :due_out_cube,                    :decimal,           null: true,    scale: 2, precision: 11
        t.column   :is_request_label_print,          :boolean,           null: true
        t.column   :bin_label_type,                  :string,            null: true,    limit: 200
        t.column   :is_enabled,                      :boolean,           null: true
        t.column   :is_destroyed,                    :boolean,           null: true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
