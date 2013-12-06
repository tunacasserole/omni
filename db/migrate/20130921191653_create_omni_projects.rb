class CreateOmniProjects < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('projects')
      create_table(:projects, :id => false) do |t|
        t.column   :project_id,                      :string,            :null  =>  false,   :limit   => 32
        t.column   :state,                           :string,            :null  =>  true,    :limit   => 100
        t.column   :display,                         :string,            :null  =>  true,    :limit   => 200
        t.column   :description,                     :string,            :null  =>  true,    :limit   => 2000
        t.column   :release_date,                    :datetime,          :null  =>  true
        t.column   :is_destroyed,                    :boolean,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
