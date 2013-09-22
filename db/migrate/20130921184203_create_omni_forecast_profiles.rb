class CreateOmniForecastProfiles < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('forecast_profiles')
      create_table(:forecast_profiles, :id => false) do |t|
        t.column   :forecast_profile_id,             :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :sales_2012_weight,               :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :sales_2011_weight,               :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :sales_2010_weight,               :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :contract_year_1_weight,          :string,            :null  =>  true,    :limit   => 100
        t.column   :contract_year_2_weight,          :string,            :null  =>  true,    :limit   => 100
        t.column   :contract_year_3_weight,          :string,            :null  =>  true,    :limit   => 100
        t.column   :contract_year_4_weight,          :string,            :null  =>  true,    :limit   => 100
        t.column   :contract_year_5_weight,          :string,            :null  =>  true,    :limit   => 100
        t.column   :forecast_formula,                :string,            :null  =>  true,    :limit   => 100
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
