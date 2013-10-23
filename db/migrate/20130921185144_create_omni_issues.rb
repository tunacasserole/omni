class CreateOmniIssues < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('issues')
      create_table(:issues, :id => false) do |t|
        t.column   :issue_id,                        :string,            :null  =>  false,   :limit   => 32
        t.column   :issue_nbr,                       :string,            :null  =>  true,    :limit   => 100
        t.column   :state,                           :string,            :null  =>  true,    :limit   => 100
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 200
        t.column   :description,                     :string,            :null  =>  true,    :limit   => 2000
        t.column   :severity,                        :string,            :null  =>  true,    :limit   => 100
        t.column   :assignee_id,                     :string,            :null  =>  true,    :limit   => 32
        t.column   :creator_id,                      :string,            :null  =>  true,    :limit   => 32
        t.column   :issue_type,                      :string,            :null  =>  true,    :limit   => 100
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
