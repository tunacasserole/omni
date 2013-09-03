class CreateLabels < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'labels'
      create_table(:labels, :id => false) do |t|
        t.column :label_id,                          :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 100,    :null        => false
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :label_type,                        :string,        :limit       => 100,    :null        => false
        t.column :short_name,                        :string,        :limit       => 15,     :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:labels, [:label_id], :unique => true)

    end
  end
end
