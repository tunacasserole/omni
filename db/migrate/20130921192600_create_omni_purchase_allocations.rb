class CreateOmniPurchaseAllocations < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('purchase_allocations')
      create_table(:purchase_allocations, :id => false) do |t|
        t.column   :purchase_allocation_id,       :string,            :null  =>  false,   :limit   => 32
        t.column   :purchase_detail_id,             :string,            :null  =>  true,    :limit   => 32
        t.column   :allocation_id,                      :string,            :null  =>  true,    :limit   => 32
        t.column   :location_id,                         :string,            :null  =>  true,    :limit   => 32
        t.column   :display,                               :string,            :null  =>  true,    :limit   => 200
        t.column   :purchase_allocation_nbr,    :string,            :null  =>  true,    :limit   => 200
        t.column   :state,                                   :string,            :null  =>  true,    :limit   => 200
        t.column   :units_allocated,                   :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :units_shipped,                     :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :is_destroyed,                       :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
