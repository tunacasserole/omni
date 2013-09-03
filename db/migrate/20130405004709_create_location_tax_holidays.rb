class CreateLocationTaxHolidays < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'location_tax_holidays'
      create_table(:location_tax_holidays, :id => false) do |t|
        t.column :location_tax_holiday_id,           :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :location_id,                       :string,        :limit       => 32,     :null        => false
        t.column :short_name,                        :string,        :limit       => 15,     :null        => false
        t.column :effective_date,                    :date,          :null        => true
        t.column :end_date,                          :date,          :null        => true
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :is_tax_holiday,                    :boolean,       :null        => true
        t.column :price_cutoff,                      :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:location_tax_holidays, [:location_tax_holiday_id], :unique => true)

    end
  end
end
