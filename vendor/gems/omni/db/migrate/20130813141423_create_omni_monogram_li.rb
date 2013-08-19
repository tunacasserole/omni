class CreateOmniMonogramLi < ActiveRecord::Migration
  def change
  	# #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('monogram_li')
      create_table(:monogram_li, :id => false) do |t|
        t.column   :lineitem_nbr,                    :integer,           :null  =>  false
        t.column   :mg_nbr,                          :integer,           :null  =>  true
        t.column   :size,                            :string,            :null  =>  true,    :limit   => 3
        t.column   :qty_ordered,                     :integer,           :null  =>  true
        t.column   :g_stock_nbr,                     :integer,           :null  =>  true
        t.column   :c_stock_nbr,                     :integer,           :null  =>  true
        t.column   :notes,                           :string,            :null  =>  true,    :limit   => 100
      end
    end
    # #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
