class CreateDistricts < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'districts'
      create_table(:districts, :id => false) do |t|
        t.column :district_id,                       :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 100,    :null        => false
        t.column :district_nbr,                      :string,        :limit       => 6,      :null        => true
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :short_name,                        :string,        :limit       => 15,     :null        => true
        t.column :region_id,                         :string,        :limit       => 32,     :null        => false
        t.column :user_id,                           :string,        :limit       => 32,     :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:districts, [:district_id], :unique => true)

    end
  end
end
