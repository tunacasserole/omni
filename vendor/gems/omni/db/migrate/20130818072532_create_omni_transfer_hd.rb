class CreateOmniTransferHd < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('transfer_hd')
      create_table(:transfer_hd, :id => false) do |t|
        t.column   :id,                              :integer,           :null  =>  false
        t.column   :from_outlet_nbr,                 :integer,           :null  =>  false
        t.column   :to_outlet_nbr,                   :integer,           :null  =>  false
        t.column   :date,                            :date,              :null  =>  false
        t.column   :tracking_nbr,                    :string,            :null  =>  true,    :limit   => 30
        t.column   :status_id,                       :integer,           :null  =>  false
        t.column   :user_id,                         :integer,           :null  =>  false
        t.column   :ship_date,                       :date,              :null  =>  true
        t.column   :accepted_user_id,                :integer,           :null  =>  true
        t.column   :comment,                         :string,            :null  =>  true,    :limit   => 150
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
