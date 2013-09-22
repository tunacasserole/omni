class CreateOmniSites < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('sites')
      create_table(:sites, :id => false) do |t|
        t.column   :site_id,                         :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :site_name,                       :string,            :null  =>  false,   :limit   => 100
        t.column   :parent_site_id,                  :string,            :null  =>  true,    :limit   => 32
        t.column   :school_nbr,                      :string,            :null  =>  true,    :limit   => 11
        t.column   :description,                     :string,            :null  =>  true,    :limit   => 300
        t.column   :short_name,                      :string,            :null  =>  true,    :limit   => 15
        t.column   :concatenated_name,               :string,            :null  =>  true,    :limit   => 6
        t.column   :site_type,                       :string,            :null  =>  true,    :limit   => 100
        t.column   :location_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :is_on_web,                       :boolean,           :null  =>  true
        t.column   :gradeset,                        :string,            :null  =>  true,    :limit   => 100
        t.column   :site_gender,                     :string,            :null  =>  true,    :limit   => 100
        t.column   :line_1,                          :string,            :null  =>  true,    :limit   => 100
        t.column   :line_2,                          :string,            :null  =>  true,    :limit   => 100
        t.column   :line_3,                          :string,            :null  =>  true,    :limit   => 100
        t.column   :line_4,                          :string,            :null  =>  true,    :limit   => 100
        t.column   :city,                            :string,            :null  =>  true,    :limit   => 100
        t.column   :state_code,                      :string,            :null  =>  true,    :limit   => 2
        t.column   :zip,                             :string,            :null  =>  true,    :limit   => 10
        t.column   :country,                         :string,            :null  =>  true,    :limit   => 100
        t.column   :latitude,                        :string,            :null  =>  true,    :limit   => 15
        t.column   :longitude,                       :string,            :null  =>  true,    :limit   => 15
        t.column   :phone,                           :string,            :null  =>  true,    :limit   => 30
        t.column   :fax,                             :string,            :null  =>  true,    :limit   => 30
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
