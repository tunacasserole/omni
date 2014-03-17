class CreateOmniTasks < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('tasks')
      create_table(:tasks, :id => false) do |t|
        t.column   :task_id,                         :string,            null: false,   limit: 32
        t.column   :project_id,                      :string,            null: true,    limit: 32
        t.column   :task_nbr,                        :string,            null: true,    limit: 200
        t.column   :task_type,                       :string,            null: true,    limit: 200
        t.column   :state,                           :string,            null: true,    limit: 200
        t.column   :display,                         :string,            null: true,    limit: 200
        t.column   :description,                     :string,            null: true,    limit: 2000
        t.column   :importance,                      :string,            null: true,    limit: 200
        t.column   :points,                          :integer,           null: true
        t.column   :assignee_id,                     :string,            null: true,    limit: 32
        t.column   :creator_id,                      :string,            null: true,    limit: 32
        t.column   :target_release,                  :datetime,          null: true
        t.column   :actual_release,                  :datetime,          null: true
        t.column   :is_destroyed,                    :boolean,           null: true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
