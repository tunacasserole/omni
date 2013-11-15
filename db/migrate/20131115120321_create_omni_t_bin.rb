class CreateOmniTBin < ActiveRecord::Migration
  def change
  	# ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	# unless (@connection.columns('t_bin').count > 0 || @connection.columns('T_BIN').count > 0)
      create_table(:t_bin, :id => false) do |t|
        t.column   :bin_id,                          :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 40
        t.column   :location_id,                     :string,            :null  =>  false,   :limit   => 32
        t.column   :area_id,                         :string,            :null  =>  true,    :limit   => 32
        t.column   :area_short_name,                 :string,            :null  =>  false,   :limit   => 20
        t.column   :aisle,                           :string,            :null  =>  true,    :limit   => 20
        t.column   :section,                         :string,            :null  =>  true,    :limit   => 20
        t.column   :level,                           :string,            :null  =>  true,    :limit   => 20
        t.column   :position,                        :string,            :null  =>  true,    :limit   => 20
        t.column   :bin_nbr,                         :string,            :null  =>  false
        t.column   :bin_code,                        :string,            :null  =>  false,   :limit   => 3
        t.column   :description,                     :string,            :null  =>  true,    :limit   => 200
        t.column   :bin_type,                        :string,            :null  =>  false
        t.column   :last_activity_date,              :string,            :null  =>  false
        t.column   :is_many_sku_per_bin,             :string,            :null  =>  true
        t.column   :pick_sequence,                   :string,            :null  =>  true
        t.column   :zone,                            :string,            :null  =>  true,    :limit   => 20
        t.column   :pick_zone,                       :string,            :null  =>  true,    :limit   => 20
        t.column   :cube_capacity,                   :string,            :null  =>  true
      end
    # end
    # ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
