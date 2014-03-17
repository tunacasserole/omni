class CreateOmniLocationTaxHolidays < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('location_tax_holidays')
      create_table(:location_tax_holidays, :id => false) do |t|
        t.column   :location_tax_holiday_id,         :string,            null: false,   limit: 32
        t.column   :display,                         :string,            null: true,   limit: 300
        t.column   :location_id,                     :string,            null: true,   limit: 32
        t.column   :short_name,                      :string,            null: true,   :limit   => 15
        t.column   :effective_date,                  :datetime,          null: true
        t.column   :end_date,                        :datetime,          null: true
        t.column   :description,                     :string,            null: true,    limit: 300
        t.column   :is_tax_holiday,                  :boolean,           null: true
        t.column   :price_cutoff,                    :decimal,           null: true,    scale: 2, precision: 11
        t.column   :is_destroyed,                    :boolean,           null: true
      end
    end
  end
end
