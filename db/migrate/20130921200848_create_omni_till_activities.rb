class CreateOmniTillActivities < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('till_activities')
      create_table(:till_activities, :id => false) do |t|
        t.column   :till_activity_id,                :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 300
        t.column   :till_id,                         :string,            :null  =>  true,    :limit   => 32
        t.column   :till_activity_nbr,               :string,            :null  =>  true,    :limit   => 11
        t.column   :till_activity_date,              :datetime,          :null  =>  true
        t.column   :till_activity_reason,            :string,            :null  =>  true,    :limit   => 100
        t.column   :tender_id,                       :string,            :null  =>  true,    :limit   => 32
        t.column   :activity_count,                  :integer,           :null  =>  true
        t.column   :activity_amount,                 :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11
        t.column   :payment_id,                      :string,            :null  =>  true,    :limit   => 32
        t.column   :user_id,                         :string,            :null  =>  true,    :limit   => 32
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
