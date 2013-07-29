class CreateSizeGroupDetails < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'size_group_details'
      create_table(:size_group_details, :id => false) do |t|
        t.column :size_group_detail_id,              :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :size_group_id,                     :string,        :limit       => 32,     :null        => true
        t.column :size_id,                           :string,        :limit       => 32,     :null        => true
        t.column :display_order,                     :integer,       :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:size_group_details, [:size_group_detail_id], :unique => true)

    end
  end
end
