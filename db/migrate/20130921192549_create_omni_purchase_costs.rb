class CreateOmniPurchaseCosts < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('purchase_costs')
      create_table(:purchase_costs, :id => false) do |t|
        t.column   :purchase_cost_id,                :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 200
        t.column   :purchase_detail_id,              :string,            :null  =>  true,    :limit   => 32
        t.column   :cost_detail_id,                  :string,            :null  =>  true,    :limit   => 32
        t.column   :cost_type,                       :string,            :null  =>  true,    :limit   => 200
        t.column   :cost_amount,                     :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :cost_percent,                    :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :estimated_cost,                  :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :actual_cost,                     :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
