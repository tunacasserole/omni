class CreateLocationUsers < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'location_users'
      create_table(:location_users, :id => false) do |t|
        t.column :location_user_id,                  :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :user_id,                           :string,        :limit       => 32,     :null        => false
        t.column :location_id,                       :string,        :limit       => 32,     :null        => false
        t.column :is_manager,                        :boolean,       :null        => true
        t.column :is_cashier,                        :boolean,       :null        => true
        t.column :is_sales,                          :boolean,       :null        => true
        t.column :is_back_office,                    :boolean,       :null        => true
        t.column :short_password,                    :string,        :limit       => 10,     :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:location_users, [:location_user_id], :unique => true)

    end
  end
end
