class CreateTills < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'tills'
      create_table(:tills, :id => false) do |t|
        t.column :till_id,                           :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :location_id,                       :string,        :limit       => 32,     :null        => false
        t.column :till_nbr,                          :string,        :limit       => 6,      :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:tills, [:till_id], :unique => true)

    end
  end
end
