class CreateOmniOrdersLi < ActiveRecord::Migration
  def change
  #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('orders_li')
      create_table(:orders_li, :id => false) do |t|
        t.column   :lineitemid,                      :integer,           :null  =>  false
        t.column   :order_nbr,                       :integer,           :null  =>  false
        t.column   :stock_nbr,                       :integer,           :null  =>  false
        t.column   :size,                            :string,            :null  =>  false,   :limit   => 3
        t.column   :price,                           :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 7
        t.column   :cost,                            :decimal,           :null  =>  false,   :scale   => 2,          :precision  => 7
        t.column   :qty_ordered,                     :integer,           :null  =>  true
        t.column   :qty_shipped,                     :integer,           :null  =>  true
        t.column   :status,                          :integer,           :null  =>  true
        t.column   :comments,                        :string,            :null  =>  true,    :limit   => 50
        t.column   :discount,                        :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 7
        t.column   :is_percentage,                   :integer,           :null  =>  true
        t.column   :extra_charge,                    :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 7
        t.column   :extra_charge_type,               :integer,           :null  =>  false
        t.column   :extra_charge_comment,            :string,            :null  =>  true,    :limit   => 150
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
