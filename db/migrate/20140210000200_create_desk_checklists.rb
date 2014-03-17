class CreateDeskChecklists < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :checklists if ActiveRecord::Base.connection.tables.include?('checklists')
    create_table(:checklists, :id => false) do |t|
      t.column   :checklist_id,                    :string,            null: false,   limit: 32
      t.column   :checklist_nbr,                   :string,            null: true,   limit: 200
      t.column   :checklist_type,                  :string,            null: true,   limit: 200
      t.column   :state,                           :string,            null: true,    limit: 200
      t.column   :display,                         :string,            null: true,    limit: 200
      t.column   :description,                     :string,            null: true,    limit: 2000
    end
    add_index(:checklists,            [:checklist_id],                              :unique => true)
  end
end
