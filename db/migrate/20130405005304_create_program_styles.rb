class CreateProgramStyles < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'program_styles'
      create_table(:program_styles, :id => false) do |t|
        t.column :program_style_id,                  :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :program_product_id,                :string,        :limit       => 32,     :null        => false
        t.column :style_id,                          :string,        :limit       => 32,     :null        => false
        t.column :retail_price,                      :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :price_units,                       :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:program_styles, [:program_style_id], :unique => true)

    end
  end
end
