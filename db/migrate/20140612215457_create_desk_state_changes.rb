class CreateDeskStateChanges < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :state_changes if ActiveRecord::Base.connection.tables.include?('state_changes')
    create_table(:state_changes, :id => false) do |t|
      t.column :state_change_id,   :string,            :null  =>  false,  :limit   => 32
      t.column :stateable_id,          :string,            :null  =>  true,   :limit   => 32
      t.column :stateable_type,        :string,            :null  =>  true,   :limit   => 200
      t.column :event,                 :string,            :null  =>  true,   :limit   => 200
      t.column :from,                  :string,            :null  =>  true,   :limit   => 200
      t.column :to,                    :string,            :null  =>  true,   :limit   => 200
      t.timestamp :created_at
    end
    add_index(:state_changes,            [:state_change_id],            :unique => true)
  end
end
