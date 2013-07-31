class CreateOmniCosts < ActiveRecord::Migration
  def change
  	# ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    #@connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('costs')
      create_table(:costs, :id => false) do |t|
        t.column   :cost_id,                         :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :first_cost,                      :decimal,           :null  =>  false,   :scale   => 4,          :precision  => 9
        t.column   :last_cost,                       :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 9
        t.column   :average_cost,                    :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 9
        t.column   :on_hand_units,                   :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 9
        t.column   :cost_pool,                       :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 9
        t.column   :retail_pool,                     :decimal,           :null  =>  true,    :scale   => 4,          :precision  => 9
        t.column   :is_updated_average_cost,         :boolean,           :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    # ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
