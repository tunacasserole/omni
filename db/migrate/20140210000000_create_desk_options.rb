class CreateDeskOptions < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :desk_options if ActiveRecord::Base.connection.tables.include?('desk_options')
      create_table(:desk_options, :id => false) do |t|
        t.column :desk_option_id,              :string,            :null  =>  false,   :limit   => 32
        t.column :summary,                     :string,            :null  =>  true,    :limit   => 200
        t.column :default_project_id,          :string,            :null  =>  true,    :limit   => 32
      end
    add_index(:desk_options,            [:desk_option_id],                              :unique => true)

  end
end
