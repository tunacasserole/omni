class CreateOmniProjectionDetails < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    #@connection = ActiveRecord::Base.connection
    # drop_table :projection_details
  	unless ActiveRecord::Base.connection.tables.include?('projection_details')
      create_table(:projection_details, :id => false) do |t|
        t.column   :projection_detail_id,            :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 200
        t.column   :projection_id,                   :string,            :null  =>  true,    :limit   => 32
        t.column   :projection_line_nbr,             :string,            :null  =>  true,    :limit   => 20
        t.column   :forecast_profile_id,             :string,            :null  =>  true,    :limit   => 32
        t.column   :sku_id,                          :string,            :null  =>  true,    :limit   => 32
        t.column   :location_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :forecast_units,                  :integer,           :null  =>  true
        t.column   :proposed_units,                  :integer,           :null  =>  true
        t.column   :approved_units,                  :integer,           :null  =>  true
        t.column   :closed_units,                    :integer,           :null  =>  true
        t.column   :projection_2_units,              :integer,           :null  =>  true
        t.column   :projection_update_units,         :integer,           :null  =>  true
        t.column   :projection_adjustment_units,      :integer,           :null  =>  true
        t.column   :sale_units_2013,                  :integer,           :null  =>  true
        t.column   :sale_units_2012,                  :integer,           :null  =>  true
        t.column   :sale_units_2011,                  :integer,           :null  =>  true
        t.column   :sale_units_2010,                  :integer,           :null  =>  true
        t.column   :number_of_schools,               :integer,           :null  =>  true
        t.column   :average_contract_year,           :integer,           :null  =>  true
        t.column   :years_active,                    :integer,           :null  =>  true
        t.column   :average_sales,                   :integer,           :null  =>  true
        t.column   :standard_deviation,              :integer,           :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
