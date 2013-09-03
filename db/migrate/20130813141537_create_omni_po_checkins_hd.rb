class CreateOmniPoCheckinsHd < ActiveRecord::Migration
  def change
  	# #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('po_checkins_hd')
      create_table(:po_checkins_hd, :id => false) do |t|
        t.column   :id,                              :integer,           :null  =>  false
        t.column   :po_nbr,                          :integer,           :null  =>  false
        t.column   :checkin_date,                    :date,              :null  =>  false
        t.column   :packing_slip,                    :string,            :null  =>  false,   :limit   => 255
        t.column   :user_id,                         :integer,           :null  =>  false
      end
    end
    # #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
