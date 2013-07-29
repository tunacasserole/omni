class CreateCategories < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'categories'
      create_table(:categories, :id => false) do |t|
        t.column :category_id,                       :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 100,    :null        => false
        t.column :category_code,                     :string,        :limit       => 100,    :null        => false
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :category_type,                     :string,        :limit       => 100,    :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:categories, [:category_id], :unique => true)

    end
  end
end
