class CreateSupplierRatings < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'supplier_ratings'
      create_table(:supplier_ratings, :id => false) do |t|
        t.column :supplier_rating_id,                :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :supplier_id,                       :string,        :limit       => 32,     :null        => false
        t.column :supplier_rating_subject_id,        :string,        :limit       => 32,     :null        => false
        t.column :rating_date,                       :date,          :null        => true
        t.column :rating_value,                      :integer,       :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:supplier_ratings, [:supplier_rating_id], :unique => true)

    end
  end
end
