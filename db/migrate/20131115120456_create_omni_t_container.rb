class CreateOmniTContainer < ActiveRecord::Migration
  def change
  	# ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	# unless (@connection.columns('t_container').count > 0 || @connection.columns('T_CONTAINER').count > 0)
      create_table(:t_container, :id => false) do |t|
        t.column   :container_id,                    :string,            :null  =>  true,    :limit   => 20
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 200
        t.column   :container_nbr,                   :string,            :null  =>  false
        t.column   :description,                     :string,            :null  =>  true
        t.column   :container_type,                  :string,            :null  =>  true,    :limit   => 20
        t.column   :parent_container_id,             :string,            :null  =>  true,    :limit   => 32
        t.column   :container_type_id,               :string,            :null  =>  true,    :limit   => 32
        t.column   :is_labeled,                      :string,            :null  =>  true
        t.column   :location_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :status,                          :string,            :null  =>  true,    :limit   => 1
        t.column   :create_date,                     :string,            :null  =>  true
        t.column   :last_update_date,                :string,            :null  =>  true
        t.column   :is_located,                      :string,            :null  =>  true
        t.column   :is_moving,                       :string,            :null  =>  true
        t.column   :is_in_transit,                   :string,            :null  =>  true
        t.column   :bin_id,                          :string,            :null  =>  true,    :limit   => 32
        t.column   :vehicle_id,                      :string,            :null  =>  true,    :limit   => 32
        t.column   :capacity,                        :string,            :null  =>  true
        t.column   :inside_length,                   :string,            :null  =>  true
        t.column   :inside_height,                   :string,            :null  =>  true
        t.column   :inside_width,                    :string,            :null  =>  true
        t.column   :has_outside_dimensions,          :string,            :null  =>  true
        t.column   :outside_length,                  :string,            :null  =>  true
        t.column   :outside_height,                  :string,            :null  =>  true
        t.column   :outside_width,                   :string,            :null  =>  true
        t.column   :tare_weight,                     :string,            :null  =>  true
        t.column   :fill_percent,                    :string,            :null  =>  true
        t.column   :capacity_weight,                 :string,            :null  =>  true
        t.column   :carton_count,                    :string,            :null  =>  true
        t.column   :actual_weight,                   :string,            :null  =>  true
        t.column   :actual_cube,                     :string,            :null  =>  true
        t.column   :filled_percent,                  :string,            :null  =>  true
        t.column   :container_lost,                  :string,            :null  =>  true
        t.column   :last_location_verify,            :string,            :null  =>  true
        t.column   :last_update,                     :string,            :null  =>  true
        t.column   :is_destroyed,                    :string,            :null  =>  true
        t.column   :SSCC,                            :string,            :null  =>  true,    :limit   => 20
        t.column   :inventory_good,                  :string,            :null  =>  true
        t.column   :is_empty,                        :string,            :null  =>  true
        t.column   :carton_type,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :Recovered_Flag,                  :string,            :null  =>  true
        t.column   :is_arch_select,                  :string,            :null  =>  true
      end
    # end
    # ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
