class CreateAreas < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'areas'
      create_table(:areas, :id => false) do |t|
        t.column :area_id,                           :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :location_id,                       :string,        :limit       => 32,     :null        => false
        t.column :area_nbr,                          :string,        :limit       => 11,     :null        => false
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :short_name,                        :string,        :limit       => 100,    :null        => false
        t.column :is_receiving,                      :boolean,       :null        => true
        t.column :is_picking,                        :boolean,       :null        => true
        t.column :is_reserve,                        :boolean,       :null        => true
        t.column :is_putaway,                        :boolean,       :null        => true
        t.column :is_supplier_return,                :boolean,       :null        => true
        t.column :is_processing,                     :boolean,       :null        => true
        t.column :is_shipping,                       :boolean,       :null        => true
        t.column :is_put_location,                   :boolean,       :null        => true
        t.column :is_special_handling,               :boolean,       :null        => true
        t.column :is_quality_control,                :boolean,       :null        => true
        t.column :is_quick_case,                     :boolean,       :null        => true
        t.column :is_many_sku_per_bin,               :boolean,       :null        => true
        t.column :default_cube_capacity,             :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :is_request_cube_calculation,       :boolean,       :null        => true
        t.column :last_utilization_calc_date,        :date,          :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:areas, [:area_id], :unique => true)

    end
  end
end
