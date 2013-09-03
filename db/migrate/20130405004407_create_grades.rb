class CreateGrades < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'grades'
      create_table(:grades, :id => false) do |t|
        t.column :grade_id,                          :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :gradeset,                          :string,        :limit       => 100,    :null        => true
        t.column :grade_name,                        :string,        :limit       => 100,    :null        => true
        t.column :short_name,                        :string,        :limit       => 15,     :null        => true
        t.column :grade_order,                       :integer,       :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:grades, [:grade_id], :unique => true)

    end
  end
end
