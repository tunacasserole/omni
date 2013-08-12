class CreateOmniCosts < ActiveRecord::Migration
  def change
  	# ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('costs')
      create_table(:costs, :id => false) do |t|
        t.column   :cost_id,                         :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 100
        t.column   :short_name,                      :string,            :null  =>  true,    :limit   => 30
        t.column   :description,                     :string,            :null  =>  true,    :limit   => 300
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    # ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
