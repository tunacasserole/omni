class CreateProgramColors < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'program_colors'
      create_table(:program_colors, :id => false) do |t|
        t.column :program_color_id,                  :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :program_style_id,                  :string,        :limit       => 32,     :null        => false
        t.column :style_color_id,                    :string,        :limit       => 32,     :null        => false
        t.column :is_active,                         :boolean,       :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
        t.column :style_id,                          :string,        :limit       => 32,     :null        => true
        t.column :color_id,                          :string,        :limit       => 32,     :null        => true
      end
      add_index(:program_colors, [:program_color_id], :unique => true)

    end
  end
end
