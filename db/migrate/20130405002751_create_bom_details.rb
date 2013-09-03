class CreateBomDetails < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'bom_details'
      create_table(:bom_details, :id => false) do |t|
        t.column :bom_detail_id,                     :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :bom_id,                            :string,        :limit       => 32,     :null        => true
        t.column :color_id,                          :string,        :limit       => 32,     :null        => true
        t.column :sku_id,                            :string,        :limit       => 32,     :null        => true
        t.column :quantity,                          :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :waste_percent,                     :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :uom_code,                          :string,        :limit       => 100,    :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:bom_details, [:bom_detail_id], :unique => true)

    end
  end
end
