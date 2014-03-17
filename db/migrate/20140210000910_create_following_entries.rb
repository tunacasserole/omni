class CreateFollowingEntries < ActiveRecord::Migration
  def change
    create_table(:following_entries, :id => false) do |t|

      t.column :following_entry_id,              :string,    :null => false,     :limit => 32
      t.column :followable_type,                 :string,    :null => false,     :limit => 100
      t.column :followable_id,                   :string,    :null => false,     :limit => 32

      t.column :user_id,                         :string,    :null => false,     :limit => 32
      t.column :performed_by_id,                 :string,    :null => true,      :limit => 32
      t.column :performed_by_name,               :string,    :null => true,      :limit => 100
      t.column :performed_at,                    :datetime,  :null => false

      t.column :operation,                       :string,    :null => false,     :limit => 100
      t.column :description,                     :text,      :null => false

    end

    add_index(:following_entries, [:following_entry_id], :unique => true)
    add_index(:following_entries, [:followable_id],      :name => :followable_id)
  end
end
