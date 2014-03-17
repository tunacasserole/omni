class CreateDeskProjects < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :projects if ActiveRecord::Base.connection.tables.include?('projects')
    create_table(:projects, :id => false) do |t|
      t.column   :project_id,                      :string,            null: false,   limit: 32
      t.column   :project_nbr,                     :string,            null: true,   limit: 200
      t.column   :project_type,                    :string,            null: true,    limit: 200
      t.column   :state,                           :string,            null: true,    limit: 200
      t.column   :display,                         :string,            null: true,    limit: 200
      t.column   :description,                     :string,            null: true,    limit: 2000
      t.column   :release_date,                    :datetime,          null: true
      t.column   :estimated_days,                 :decimal,     null: true,      :default => 0,      :precision => 11, :scale => 4
      t.column   :actual_days,                    :decimal,     null: true,      :default => 0,      :precision => 11, :scale => 4
    end
    add_index(:projects,            [:project_id],                              :unique => true)
  end
end
