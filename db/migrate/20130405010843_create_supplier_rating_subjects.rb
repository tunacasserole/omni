class CreateSupplierRatingSubjects < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'supplier_rating_subjects'
      create_table(:supplier_rating_subjects, :id => false) do |t|
        t.column :supplier_rating_subject_id,        :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 100,    :null        => false
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :supplier_rating_subject_type,      :string,        :limit       => 100,    :null        => true
        t.column :weighting_percent,                 :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:supplier_rating_subjects, [:supplier_rating_subject_id], :unique => true)

    end
  end
end
