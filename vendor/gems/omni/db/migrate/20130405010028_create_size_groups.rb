class CreateSizeGroups < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'size_groups'
      create_table(:size_groups, :id => false) do |t|
        t.column :size_group_id,                     :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 100,    :null        => false
        t.column :size_group_nbr,                    :string,        :limit       => 6,      :null        => true
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :short_name,                        :string,        :limit       => 100,    :null        => true
        t.column :concatenated_name,                 :string,        :limit       => 6,      :null        => false
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:size_groups, [:size_group_id], :unique => true)

    end
  end
end
