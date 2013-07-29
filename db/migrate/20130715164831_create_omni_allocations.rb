class CreateOmniAllocations < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    #@connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('allocations')
      create_table(:allocations, :id => false) do |t|
        t.column   :allocation_id,                   :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 200
        t.column   :allocation_nbr,                  :string,            :null  =>  true,    :limit   => 200
        t.column   :state,                           :string,            :null  =>  true,    :limit   => 200
        t.column   :location_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
