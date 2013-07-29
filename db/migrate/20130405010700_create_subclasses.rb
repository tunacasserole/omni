class CreateSubclasses < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'subclasses'
      create_table(:subclasses, :id => false) do |t|
        t.column :subclass_id,                       :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 100,    :null        => false
        t.column :subclass_nbr,                      :string,        :limit       => 6,      :null        => true
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :short_name,                        :string,        :limit       => 15,     :null        => true
        t.column :classification_id,                 :string,        :limit       => 32,     :null        => false
        t.column :markup_percent_high_limit,         :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :markup_percent_low_limit,          :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:subclasses, [:subclass_id], :unique => true)

    end
  end
end
