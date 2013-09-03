class CreateStyleSupplierColors < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'style_supplier_colors'
      create_table(:style_supplier_colors, :id => false) do |t|
        t.column :style_supplier_color_id,           :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :style_supplier_id,                 :string,        :limit       => 32,     :null        => true
        t.column :style_color_id,                    :string,        :limit       => 32,     :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:style_supplier_colors, [:style_supplier_color_id], :unique => true)

    end
  end
end
