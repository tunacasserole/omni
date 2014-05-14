class CreateDeskProjects < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :projects if ActiveRecord::Base.connection.tables.include?('projects')
    create_table(:projects, :id => false) do |t|
      t.column   :project_id,                      :string,            :null  =>  false,   :limit   => 32
      t.column   :project_nbr,                     :string,            :null  =>  true,    :limit   => 200
      t.column   :project_type,                    :string,            :null  =>  true,    :limit   => 200
      t.column   :owner_id,                        :string,            :null  =>  true,   :limit   => 32
      t.column   :reviewer_id,                     :string,            :null  =>  true,   :limit   => 32
      t.column   :state,                           :string,            :null  =>  true,    :limit   => 200
      t.column   :display,                         :string,            :null  =>  true,    :limit   => 200
      t.column   :description,                     :string,            :null  =>  true,    :limit   => 2000
      t.column   :is_private,                     :boolean,            :null  =>  true
      t.column   :target_date,                    :datetime,          :null  =>  true
    end
    add_index(:projects,            [:project_id],                              :unique => true)
  end
end
