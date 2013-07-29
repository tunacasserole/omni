class CreateStyleColors < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'style_colors'
      create_table(:style_colors, :id => false) do |t|
        t.column :style_color_id,                    :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :state,                              :string,       :limit => 100,                 :null => true   
        t.column :style_id,                          :string,        :limit       => 32,     :null        => true
        t.column :color_id,                          :string,        :limit       => 32,     :null        => true
        t.column :short_name,                        :string,        :limit       => 15,     :null        => true
        t.column :concatenated_name,                 :string,        :limit       => 6,      :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:style_colors, [:style_color_id], :unique => true)

    end
  end
end
