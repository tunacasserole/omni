class CreatePriceBooks < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'price_books'
      create_table(:price_books, :id => false) do |t|
        t.column :price_book_id,                     :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 100,    :null        => false
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :price_book_type,                   :string,        :limit       => 100,    :null        => true
        t.column :short_name,                        :string,        :limit       => 15,     :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:price_books, [:price_book_id], :unique => true)

    end
  end
end
