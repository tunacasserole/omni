class CreateColors < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'colors'
      create_table(:colors, :id => false) do |t|
        t.column :color_id,                          :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 100,    :null        => false
        t.column :color_nbr,                         :string,        :limit       => 6,      :null        => true
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :short_name,                        :string,        :limit       => 15,     :null        => true
        t.column :concatenated_name,                 :string,        :limit       => 100,    :null        => false
        t.column :is_plaid,                          :boolean,       :null        => true
        t.column :is_stripe,                         :boolean,       :null        => true
        t.column :color_family,                      :string,        :limit       => 100,    :null        => false
        t.column :is_discontinued,                   :boolean,       :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:colors, [:color_id], :unique => true)

    end
  end
end
