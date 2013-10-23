class CreateOmniLogs < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('logs')
      create_table(:logs, :id => false) do |t|
        t.column   :log_id,                          :string,            :null  =>  false,   :limit   => 32
        t.column   :logable_id,                      :string,            :null  =>  false,   :limit   => 32
        t.column   :logable_type,                    :string,            :null  =>  true,    :limit   => 200
        t.column   :log_nbr,                         :string,            :null  =>  true,    :limit   => 20
        t.column   :log_type,                        :string,            :null  =>  true,    :limit   => 200
        t.column   :log_title,                       :string,            :null  =>  true,    :limit   => 200
        t.column   :log_message,                     :string,            :null  =>  true,    :limit   => 1000
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
