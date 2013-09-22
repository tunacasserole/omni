class CreateOmniProductTypes < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('product_types')
      create_table(:product_types, :id => false) do |t|
        t.column   :product_type_id,                 :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 100
        t.column   :description,                     :string,            :null  =>  true,    :limit   => 300
        t.column   :short_name,                      :string,            :null  =>  true,    :limit   => 15
        t.column   :is_fabric,                       :boolean,           :null  =>  true
        t.column   :is_trim,                         :boolean,           :null  =>  true
        t.column   :is_converted,                    :boolean,           :null  =>  true
        t.column   :is_labor,                        :boolean,           :null  =>  true
        t.column   :is_shipping,                     :boolean,           :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
