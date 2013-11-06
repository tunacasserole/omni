class CreateOmniProjectionLocations < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :projection_locations if ActiveRecord::Base.connection.tables.include?('projection_locations')
    create_table(:projection_locations, :id => false) do |t|
      t.column   :projection_location_id,          :string,            :null  =>  false,   :limit   => 32
      t.column   :projection_id,                   :string,            :null  =>  true,    :limit   => 32
      t.column   :location_id,                     :string,            :null  =>  true,    :limit   => 32
      t.column   :display,                         :string,            :null  =>  true,    :limit   => 100
      t.column   :approval_date,                 :datetime,          :null  =>  true
      t.column   :state,                           :string,            :null  =>  true,    :limit   => 100
      t.column   :is_destroyed,                    :boolean,           :null  =>  true
    end
  end
end
