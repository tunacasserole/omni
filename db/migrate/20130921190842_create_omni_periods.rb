class CreateOmniPeriods < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('periods')
      create_table(:periods, :id => false) do |t|
        t.column   :period_id,                       :string,            :null  =>  false,   :limit   => 32
        t.column   :display,                         :string,            :null  =>  false,   :limit   => 100
        t.column   :start_date,                      :date,              :null  =>  false
        t.column   :end_date,                        :date,              :null  =>  false
        t.column   :year_number,                     :string,            :null  =>  false,   :limit   => 4
        t.column   :period_number,                   :string,            :null  =>  false,   :limit   => 2
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
