class CreateBins < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'bins'
      create_table(:bins, :id => false) do |t|
        t.column :bin_id,                            :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :location_id,                       :string,        :limit       => 32,     :null        => false
        t.column :area_id,                           :string,        :limit       => 32,     :null        => false
        t.column :aisle,                             :string,        :limit       => 100,    :null        => true
        t.column :section,                           :string,        :limit       => 100,    :null        => true
        t.column :level,                             :string,        :limit       => 100,    :null        => true
        t.column :position,                          :string,        :limit       => 100,    :null        => true
        t.column :bin_nbr,                           :string,        :limit       => 11,     :null        => true
        t.column :bin_code,                          :string,        :limit       => 100,    :null        => true
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :bin_type,                          :string,        :limit       => 100,    :null        => true
        t.column :last_activity_date,                :date,          :null        => true
        t.column :is_many_sku_per_bin,               :boolean,       :null        => true
        t.column :pick_sequence,                     :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :zone,                              :string,        :limit       => 100,    :null        => true
        t.column :pick_zone,                         :string,        :limit       => 100,    :null        => true
        t.column :cube_capacity,                     :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :is_area,                           :boolean,       :null        => true
        t.column :is_count_cartons,                  :boolean,       :null        => true
        t.column :is_empty,                          :boolean,       :null        => true
        t.column :carton_count,                      :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :on_hand_cube,                      :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :due_in_cube,                       :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :due_out_cube,                      :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :is_request_label_print,            :boolean,       :null        => true
        t.column :bin_label_type,                    :string,        :limit       => 100,    :null        => true
        t.column :is_enabled,                        :boolean,       :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:bins, [:bin_id], :unique => true)

    end
  end
end
