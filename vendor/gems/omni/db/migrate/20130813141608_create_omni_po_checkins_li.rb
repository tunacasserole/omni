class CreateOmniPoCheckinsLi < ActiveRecord::Migration
  def change
  	# #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('po_checkins_li')
      create_table(:po_checkins_li, :id => false) do |t|
        t.column   :id,                              :integer,           :null  =>  false
        t.column   :po_checkin_id,                   :integer,           :null  =>  false
        t.column   :stock_nbr,                       :integer,           :null  =>  false
        t.column   :size,                            :string,            :null  =>  false,   :limit   => 3
        t.column   :qty,                             :integer,           :null  =>  false
      end
    end
    # #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
