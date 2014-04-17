class CreateOmniContainers < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('containers')
      create_table(:containers, :id => false) do |t|
        t.column   :container_id,                    :string,            null: false,   limit: 32
        t.column   :display,                         :string,            null: true,   limit: 300
        t.column   :container_nbr,                   :string,            null: true,   limit: 200
        t.column   :description,                     :string,            null: true,    limit: 300
        t.column   :container_type,                  :string,            null: true,    limit: 200
        t.column   :parent_container_id,             :string,            null: true,    limit: 32
        t.column   :is_labeled,                      :boolean,           null: true
        t.column   :barcode_nbr,                     :string,            null: true,    limit: 200
        t.column   :location_id,                     :string,            null: true,    limit: 32
        t.column   :state,                           :string,            null: true,    limit: 200
        t.column   :create_date,                     :datetime,          null: true
        t.column   :last_update_date,                :datetime,          null: true
        t.column   :is_located,                      :boolean,           null: true
        t.column   :is_moving,                       :boolean,           null: true
        t.column   :is_in_transit,                   :boolean,           null: true
        t.column   :bin_id,                          :string,            null: true,    limit: 32
        t.column   :is_container_lost,               :boolean,           null: true
        t.column   :last_verify_date,                :datetime,          null: true
        t.column   :capacity,                        :decimal,           null: true,    :scale   => 4,          :precision  => 13
        t.column   :capacity_weight,                 :decimal,           null: true,    scale: 2, precision: 11
        t.column   :inside_length,                   :decimal,           null: true,    scale: 2, precision: 11
        t.column   :inside_height,                   :decimal,           null: true,    scale: 2, precision: 11
        t.column   :inside_width,                    :decimal,           null: true,    scale: 2, precision: 11
        t.column   :is_outside_dimensions,           :boolean,           null: true
        t.column   :outside_length,                  :decimal,           null: true,    scale: 2, precision: 11
        t.column   :outside_height,                  :decimal,           null: true,    scale: 2, precision: 11
        t.column   :outside_width,                   :decimal,           null: true,    scale: 2, precision: 11
        t.column   :tare_weight,                     :decimal,           null: true,    scale: 2, precision: 11
        t.column   :fill_percent,                    :decimal,           null: true,    scale: 2, precision: 11
        t.column   :carton_count,                    :decimal,           null: true,    scale: 2, precision: 11
        t.column   :actual_weight,                   :decimal,           null: true,    scale: 2, precision: 11
        t.column   :actual_cube,                     :decimal,           null: true,    :scale   => 4,          :precision  => 13
        t.column   :filled_percent,                  :decimal,           null: true,    scale: 2, precision: 11
        t.column   :is_destroyed,                    :boolean,           null: true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
