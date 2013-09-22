class CreateOmniAllocationProfiles < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('allocation_profiles')
      create_table(:allocation_profiles, :id => false) do |t|
        t.column   :allocation_profile_id,           :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 100
        t.column   :description,                     :string,            :null  =>  true,    :limit   => 300
        t.column   :allocation_formula,              :string,            :null  =>  true,    :limit   => 100
        t.column   :percent_to_allocate,             :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :excess_demand_option,            :string,            :null  =>  true,    :limit   => 100
        t.column   :excess_supply_option,            :string,            :null  =>  true,    :limit   => 100
        t.column   :rounding_option,                 :string,            :null  =>  true,    :limit   => 100
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
