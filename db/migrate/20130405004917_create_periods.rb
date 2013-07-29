class CreatePeriods < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'periods'
      create_table(:periods, :id => false) do |t|
        t.column :period_id,                         :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 100,    :null        => false
        t.column :start_date,                        :date,          :null        => false
        t.column :end_date,                          :date,          :null        => false
        t.column :year_number,                       :string,        :limit       => 4,      :null        => false
        t.column :period_number,                     :string,        :limit       => 2,      :null        => false
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:periods, [:period_id], :unique => true)

    end
  end
end
