class CreateProductTypes < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'product_types'
      create_table(:product_types, :id => false) do |t|
        t.column :product_type_id,                   :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 100,    :null        => false
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :short_name,                        :string,        :limit       => 15,     :null        => true
        t.column :is_fabric,                         :boolean,       :null        => true
        t.column :is_trim,                           :boolean,       :null        => true
        t.column :is_converted,                      :boolean,       :null        => true
        t.column :is_labor,                          :boolean,       :null        => true
        t.column :is_shipping,                       :boolean,       :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:product_types, [:product_type_id], :unique => true)

    end
  end
end
