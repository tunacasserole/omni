class CreateOmniProjectionDetails < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :projection_details if ActiveRecord::Base.connection.tables.include?('projection_details')
    create_table(:projection_details, :id => false) do |t|
    t.column   :projection_detail_id,            :string,            :null  =>  false,   :limit   => 32
    t.column   :projection_line_nbr,             :string,            :null  =>  true,    :limit   => 20
    t.column   :projection_id,                   :string,            :null  =>  true,    :limit   => 32
    t.column   :projection_location_id,          :string,            :null  =>  true,    :limit   => 32
    t.column   :forecast_profile_id,             :string,            :null  =>  true,    :limit   => 32
    t.column   :inventory_id,                    :string,            :null  =>  true,    :limit   => 32
    t.column   :sku_id,                          :string,            :null  =>  true,    :limit   => 32
    t.column   :location_id,                     :string,            :null  =>  true,    :limit   => 32
    t.column   :display,                         :string,            :null  =>  true,    :limit   => 200
    t.column   :state,                           :string,             :null => true,  :limit => 200
    t.column   :first_forecast_units,            :integer,           :null  =>  true
    t.column   :last_forecast_units,             :integer,           :null  =>  true
    t.column   :last_forecast_date,              :datetime,          :null  =>  true
    t.column   :projection_1_units,              :integer,           :null  =>  true
    t.column   :projection_2_units,              :integer,           :null  =>  true
    t.column   :projection_3_units,              :integer,           :null  =>  true
    t.column   :projection_4_units,              :integer,           :null  =>  true
    t.column   :sale_units_ytd,                  :integer,          :null  =>  true,    :scale   => 2,          :precision  => 11
    t.column   :sale_units_py1,                  :integer,        :null  =>  true,    :scale   => 2,          :precision  => 11
    t.column   :sale_units_py2,                  :integer,          :null  =>  true,    :scale   => 2,          :precision  => 11
    t.column   :sale_units_py3,                  :integer,           :null  =>  true,    :scale   => 2,          :precision  => 11
    t.column   :on_hand,                         :string,            :null  =>  true,    :scale   => 2,          :precision  => 11
    t.column   :on_order,                        :string,            :null  =>  true,    :scale   => 2,          :precision  => 11
    t.column   :sd_raw,                          :string,            :null  =>  true,    :scale   => 2,          :precision  => 11
    t.column   :sd_floor,                        :string,            :null  =>  true,    :scale   => 2,          :precision  => 11
    t.column   :sd_ceiling,                      :string,            :null  =>  true,    :scale   => 2,          :precision  => 11
    t.column   :sd_smooth,                       :string,            :null  =>  true,    :scale   => 2,          :precision  => 11
    t.column   :sd_percent,                      :string,            :null  =>  true,    :scale   => 2,          :precision  => 11
    t.column   :coverage_allowed,                :string,            :null  =>  true,    :scale   => 2,          :precision  => 11
    t.column   :coverage_complete,               :string,            :null  =>  true,    :scale   => 2,          :precision  => 11
    t.column   :custom_need,                     :string,            :null  =>  true,    :scale   => 2,          :precision  => 11
    t.column   :generic_need,                    :string,            :null  =>  true,    :scale   => 2,          :precision  => 11
    t.column   :total_need,                      :string,            :null  =>  true,    :scale   => 2,          :precision  => 11
    t.column   :usable,                          :string,            :null  =>  true,    :scale   => 2,          :precision  => 11
    t.column   :unusable,                        :string,            :null  =>  true,    :scale   => 2,          :precision  => 11
    t.column   :average_sales,                   :integer,           :null  =>  true
    t.column   :standard_deviation,              :integer,           :null  =>  true
    t.column   :is_destroyed,                    :boolean,           :null  =>  true
    t.column   :audit_created_by,                :string,            :null  =>  true,    :limit   => 100
    t.column   :audit_updated_by,                :string,            :null  =>  true,    :limit   => 100
    t.column   :audit_created_at,                :datetime,          :null  =>  true
    t.column   :audit_updated_at,                :datetime,          :null  =>  true
    end
  end
end
