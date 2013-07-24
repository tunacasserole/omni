class CreateSites < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'sites'
      create_table(:sites, :id => false) do |t|
        t.column :site_id,                           :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :site_name,                         :string,        :limit       => 100,    :null        => false
        t.column :parent_site_id,                    :string,        :limit       => 32,     :null        => true
        t.column :school_nbr,                        :string,        :limit       => 11,     :null        => false
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :short_name,                        :string,        :limit       => 15,     :null        => true
        t.column :concatenated_name,                 :string,        :limit       => 6,      :null        => true
        t.column :site_type,                         :string,        :limit       => 100,    :null        => false
        t.column :location_id,                       :string,        :limit       => 32,     :null        => true
        t.column :is_on_web,                         :boolean,       :null        => true
        t.column :gradeset,                          :string,        :limit       => 100,    :null        => true
        t.column :site_gender,                       :string,        :limit       => 100,    :null        => true
        t.column :line_1,                            :string,        :limit       => 100,    :null        => false
        t.column :line_2,                            :string,        :limit       => 100,    :null        => true
        t.column :line_3,                            :string,        :limit       => 100,    :null        => true
        t.column :line_4,                            :string,        :limit       => 100,    :null        => true
        t.column :city,                              :string,        :limit       => 100,    :null        => false
        t.column :state_code,                        :string,        :limit       => 2,      :null        => true
        t.column :zip,                               :string,        :limit       => 10,     :null        => false
        t.column :country,                           :string,        :limit       => 100,    :null        => true
        t.column :latitude,                          :string,        :limit       => 15,     :null        => true
        t.column :longitude,                         :string,        :limit       => 15,     :null        => true
        t.column :phone,                             :string,        :limit       => 30,     :null        => false
        t.column :fax,                               :string,        :limit       => 30,     :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:sites, [:site_id], :unique => true)

    end
  end
end
