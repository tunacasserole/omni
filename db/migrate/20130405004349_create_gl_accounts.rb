class CreateGlAccounts < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'gl_accounts'
      create_table(:gl_accounts, :id => false) do |t|
        t.column :gl_account_id,                     :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 100,    :null        => false
        t.column :gl_main_account,                   :string,        :limit       => 4,      :null        => false
        t.column :gl_sub_account,                    :string,        :limit       => 4,      :null        => true
        t.column :is_location_fill,                  :boolean,       :null        => true
        t.column :gl_account_type,                   :string,        :limit       => 100,    :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:gl_accounts, [:gl_account_id], :unique => true)

    end
  end
end
