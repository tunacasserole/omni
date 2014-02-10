class CreateDeskApprovals < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :approvals if ActiveRecord::Base.connection.tables.include?('approvals')
    create_table(:approvals, id: false) do |t|
      t.column  :approval_id,                       :string,        :null => false,         :limit => 32
      t.column  :approver_id,                       :string,        :null => true,          :limit => 32
      t.column  :approvable_id,                     :string,        :null => true,         :limit => 32
      t.column  :approvable_type,                   :string,        :null => true,         :limit => 32
      t.column  :approval_nbr,                      :string,        :null => true,         :limit => 200
      t.column  :approval_type,                     :string,        :null => true,         :limit => 200
      t.column  :state,                             :string,        :null => true,          :limit => 200
      t.column  :display,                           :string,        :null => true,          :limit => 200
      t.column  :description,                       :string,        :null => true,          :limit => 4000
      t.column  :approval_date,                     :datetime,      :null => true
    end
    add_index(:approvals,            [:approval_id],                              :unique => true)
  end
end
