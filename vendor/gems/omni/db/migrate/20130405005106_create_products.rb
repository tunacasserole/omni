class CreateProducts < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'products'
      create_table(:products, :id => false) do |t|
        t.column :product_id,                        :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 100,    :null        => false
        t.column :product_nbr,                       :string,        :limit       => 6,      :null        => true
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :category_id,                       :string,        :limit       => 32,     :null        => false
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:products, [:product_id], :unique => true)

    end
  end
end
