class CreateClassifications < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'classifications'
      create_table(:classifications, :id => false) do |t|
        t.column :classification_id,                 :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 100,    :null        => false
        t.column :classification_nbr,                :string,        :limit       => 6,      :null        => true
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :short_name,                        :string,        :limit       => 15,     :null        => true
        t.column :planner_user_id,                   :string,        :limit       => 32,     :null        => true
        t.column :department_id,                     :string,        :limit       => 32,     :null        => false
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:classifications, [:classification_id], :unique => true)

    end
  end
end
