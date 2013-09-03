class CreateSeasonalIndexes < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'seasonal_indexes'
      create_table(:seasonal_indexes, :id => false) do |t|
        t.column :seasonal_index_id,                 :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :seasonal_index_name,               :string,        :limit       => 100,    :null        => false
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:seasonal_indexes, [:seasonal_index_id], :unique => true)

    end
  end
end
