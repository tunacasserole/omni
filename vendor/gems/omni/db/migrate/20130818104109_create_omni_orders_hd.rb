class CreateOmniOrdersHd < ActiveRecord::Migration
  def change
  #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('orders_hd')
      create_table(:orders_hd, :id => false) do |t|
        t.column   :order_nbr,                       :integer,           :null  =>  false
        t.column   :outlet_nbr,                      :integer,           :null  =>  false
        t.column   :school_nbr,                      :integer,           :null  =>  false
        t.column   :status,                          :integer,           :null  =>  false
        t.column   :priority,                        :integer,           :null  =>  true
        t.column   :date_putin,                      :datetime,          :null  =>  false
        t.column   :custid,                          :integer,           :null  =>  false
        t.column   :date_ship,                       :datetime,          :null  =>  true
        t.column   :fill_partial,                    :string,            :null  =>  true,    :limit   => 1
        t.column   :nbr_ships,                       :integer,           :null  =>  true
        t.column   :discount,                        :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 5
        t.column   :entered_by,                      :string,            :null  =>  false,   :limit   => 8
        t.column   :is_percentage,                   :integer,           :null  =>  true
        t.column   :close_date,                      :datetime,          :null  =>  true
        t.column   :closing_id,                      :integer,           :null  =>  false
        t.column   :is_closed,                       :integer,           :null  =>  false
        t.column   :postage,                         :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 5
        t.column   :tax,                             :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 5
        t.column   :comment,                         :string,            :null  =>  true,    :limit   => 250
        t.column   :viewed_by,                       :string,            :null  =>  true,    :limit   => 8
        t.column   :viewed_date,                     :datetime,          :null  =>  true
        t.column   :dbman_order_nbr,                 :integer,           :null  =>  true
        t.column   :allow_partial_fill,              :integer,           :null  =>  false
        t.column   :date_auto_fill_run,              :date,              :null  =>  true
        t.column   :temp_order_nbr,                  :string,            :null  =>  true,    :limit   => 17
        t.column   :total,                           :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 8
        t.column   :web_order,                       :integer,           :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
