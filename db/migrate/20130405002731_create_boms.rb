class CreateBoms < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'boms'
      create_table(:boms, :id => false) do |t|
        t.column :bom_id,                            :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :bomable_type,                      :string,        :limit       => 100,    :null        => true
        t.column :bomable_id,                        :string,        :limit       => 32,     :null        => true
        t.column :bom_nbr,                           :string,        :limit       => 11,     :null        => true
        t.column :description,                       :string,        :limit       => 300,    :null        => true
        t.column :bom_type,                          :string,        :limit       => 100,    :null        => false
        t.column :version,                           :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :effective_date,                    :date,          :null        => true
        t.column :end_date,                          :date,          :null        => true
        t.column :is_primary_bom,                    :boolean,       :null        => true
        t.column :labor_hours,                       :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :machine_hours,                     :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :construction_hours,                :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :is_enabled,                        :boolean,       :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:boms, [:bom_id], :unique => true)

    end
  end
end
