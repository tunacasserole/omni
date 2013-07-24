class CreatePriceChanges < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'price_changes'
      create_table(:price_changes, :id => false) do |t|
        t.column :price_change_id,                   :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:price_changes, [:price_change_id], :unique => true)

    end
  end
end
