class CreateOmniDistricts < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('districts')
      create_table(:districts, :id => false) do |t|
        t.column   :district_id,                     :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 100
        t.column   :district_nbr,                    :string,            :null  =>  true,    :limit   => 6
        t.column   :description,                     :string,            :null  =>  true,    :limit   => 300
        t.column   :short_name,                      :string,            :null  =>  true,    :limit   => 15
        t.column   :region_id,                       :string,            :null  =>  false,   :limit   => 32
        t.column   :user_id,                         :string,            :null  =>  true,    :limit   => 32
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
