class CreateOmniCostDetails < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('cost_details')
      create_table(:cost_details, :id => false) do |t|
        t.column   :cost_detail_id,                  :string,            null: false,   limit: 32
        t.column   :display,                         :string,            null: true,    limit: 300
        t.column   :cost_id,                         :string,            null: true,   limit: 32
        t.column   :cost_detail_name,                :string,            null: true,   limit: 200
        t.column   :cost_source,                     :string,            null: true,    limit: 200
        t.column   :cost_type,                       :string,            null: true,    limit: 200
        t.column   :cost_amount,                     :decimal,           null: true,    :scale   => 4,          :precision  => 13
        t.column   :cost_percent,                    :decimal,           null: true,    :scale   => 4,          :precision  => 13
        t.column   :cost_calculation,                :string,            null: true,    limit: 200
        t.column   :is_update_inventory_cost,        :boolean,           null: true
        t.column   :is_update_invoice_cost,          :boolean,           null: true
        t.column   :is_destroyed,                    :boolean,           null: true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
