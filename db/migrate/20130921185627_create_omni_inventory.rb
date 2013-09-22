class CreateOmniInventory < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('inventory')
      create_table(:inventory, :id => false) do |t|
        t.column   :outlet_nbr,                      :integer,           :null  =>  false
        t.column   :stock_nbr,                       :integer,           :null  =>  false
        t.column   :size,                            :string,            :null  =>  false,   :limit   => 3
        t.column   :qoh,                             :integer,           :null  =>  true
        t.column   :drop_ship,                       :integer,           :null  =>  true
        t.column   :id,                              :integer,           :null  =>  false
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
