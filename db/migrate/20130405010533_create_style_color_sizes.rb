class CreateStyleColorSizes < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'style_color_sizes'
      create_table(:style_color_sizes, :id => false) do |t|
        t.column :style_color_size_id,               :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :state,                              :string,       :limit => 100,                 :null => true   
        t.column :style_color_id,                    :string,        :limit       => 32,     :null        => true
        t.column :size_id,                           :string,        :limit       => 32,     :null        => true
        t.column :sku_id,                            :string,        :limit       => 32,     :null        => true
        t.column :sku_name,                          :string,        :limit       => 100,    :null        => true
        t.column :pos_name,                          :string,        :limit       => 30,     :null        => true
        t.column :is_special_order,                  :boolean,       :null        => true
        t.column :is_not_available,                  :boolean,       :null        => true
        t.column :fabric_bom_adjust_percent,         :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:style_color_sizes, [:style_color_size_id], :unique => true)

    end
  end
end
