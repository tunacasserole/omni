class CreateOmniProjections < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    #@connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('projections')
      create_table(:projections, :id => false) do |t|
        t.column   :projection_id,                   :string,            :null  =>  false,   :limit   => 32
        t.column   :forecast_profile_id,             :string,            :null  =>  true,    :limit   => 32
        t.column   :region_id,                       :string,            :null  =>  true,    :limit   => 32
        t.column   :district_id,                     :string,            :null  =>  true,    :limit   => 32        
        t.column   :location_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :department_id,                   :string,            :null  =>  true,    :limit   => 32
        t.column   :class_id,                        :string,            :null  =>  true,    :limit   => 32
        t.column   :subclass_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :style_id,                        :string,            :null  =>  true,    :limit   => 32
        t.column   :sku_id,                          :string,            :null  =>  true,    :limit   => 32
        t.column   :color_id,                        :string,            :null  =>  true,    :limit   => 32
        t.column   :state,                           :string,            :null  =>  true,    :limit   => 100
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 300
        t.column   :description,                     :string,            :null  =>  true,    :limit   => 300
        t.column   :plan_year,                       :string,            :null  =>  true,    :limit   => 32
        t.column   :projection_type,                 :string,            :null  =>  true,    :limit   => 32
        t.column   :version,                         :string,            :null  =>  true,    :limit   => 100
        t.column   :audit_updated_at,                :datetime,          :null  =>  true
        t.column   :audit_created_at,                :datetime,          :null  =>  true
        t.column   :audit_created_by,                :string,            :null  =>  true,    :limit   => 100
        t.column   :audit_updated_by,                :string,            :null  =>  true,    :limit   => 100
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
