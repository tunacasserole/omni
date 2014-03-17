class CreateDeskTasks < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :tasks if ActiveRecord::Base.connection.tables.include?('tasks')
    create_table(:tasks, id: false) do |t|
      t.column  :task_id,                       :string,        null: false,         :limit => 32
      t.column  :taskable_id,                   :string,        null: true,         :limit => 32
      t.column  :taskable_type,                 :string,        null: true,         :limit => 32
      t.column  :task_nbr,                      :string,        null: true,         :limit => 200
      t.column  :task_type,                     :string,        null: true,         :limit => 200
      t.column  :state,                         :string,        null: true,          :limit => 200
      t.column  :display,                       :string,        null: true,          :limit => 200
      t.column  :description,                   :string,        null: true,          :limit => 4000
      t.column  :task_due,                      :datetime,      null: true
      t.column  :task_start,                    :datetime,      null: true
      t.column  :task_end,                      :datetime,      null: true
      t.column  :owner_id,                      :string,        null: true,          :limit => 32
    end
    add_index(:tasks,            [:task_id],                              :unique => true)
  end
end
