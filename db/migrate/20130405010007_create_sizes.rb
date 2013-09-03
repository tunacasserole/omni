class CreateSizes < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'sizes'
      create_table(:sizes, :id => false) do |t|
        t.column :size_id,                           :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 100,    :null        => false
        t.column :size_nbr,                          :string,        :limit       => 6,      :null        => true
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :size_type,                         :string,        :limit       => 100,    :null        => false
        t.column :short_name,                        :string,        :limit       => 15,     :null        => true
        t.column :concatenated_name,                 :string,        :limit       => 6,      :null        => false
        t.column :dimension_1,                       :string,        :limit       => 15,     :null        => true
        t.column :dimension_2,                       :string,        :limit       => 15,     :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:sizes, [:size_id], :unique => true)

    end
  end
end
