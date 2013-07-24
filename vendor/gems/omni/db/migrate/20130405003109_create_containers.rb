class CreateContainers < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'containers'
      create_table(:containers, :id => false) do |t|
        t.column :container_id,                      :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :container_nbr,                     :string,        :limit       => 11,     :null        => false
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :container_type,                    :string,        :limit       => 100,    :null        => true
        t.column :parent_container_id,               :string,        :limit       => 32,     :null        => true
        t.column :is_labeled,                        :boolean,       :null        => true
        t.column :barcode_nbr,                       :string,        :limit       => 100,    :null        => true
        t.column :location_id,                       :string,        :limit       => 32,     :null        => true
        t.column :state,                             :string,        :limit       => 100,    :null        => true
        t.column :create_date,                       :date,          :null        => true
        t.column :last_update_date,                  :date,          :null        => true
        t.column :is_located,                        :boolean,       :null        => true
        t.column :is_moving,                         :boolean,       :null        => true
        t.column :is_in_transit,                     :boolean,       :null        => true
        t.column :bin_id,                            :string,        :limit       => 32,     :null        => true
        t.column :is_container_lost,                 :boolean,       :null        => true
        t.column :last_verify_date,                  :date,          :null        => true
        t.column :capacity,                          :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :capacity_weight,                   :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :inside_length,                     :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :inside_height,                     :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :inside_width,                      :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :is_outside_dimensions,             :boolean,       :null        => true
        t.column :outside_length,                    :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :outside_height,                    :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :outside_width,                     :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :tare_weight,                       :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :fill_percent,                      :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :carton_count,                      :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :actual_weight,                     :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :actual_cube,                       :decimal,       :precision   => 13,     :scale       => 4,      :null        => true
        t.column :filled_percent,                    :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:containers, [:container_id], :unique => true)

    end
  end
end
