class CreateDeskTeams < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :teams if ActiveRecord::Base.connection.tables.include?('teams')
    create_table(:teams, :id => false) do |t|
      t.column   :team_id,                    :string,            :null  =>  false,   :limit   => 32
      t.column   :teamable_id,                  :string,            :null  =>  false,   :limit   => 32
      t.column   :teamable_type,                :string,            :null  =>  false,   :limit   => 200
      t.column   :user_id,                      :string,            :null  =>  false,   :limit   => 32
    end
    add_index(:teams,            [:team_id],                              :unique => true)
  end
end
