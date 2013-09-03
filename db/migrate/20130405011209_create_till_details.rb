class CreateTillDetails < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'till_details'
      create_table(:till_details, :id => false) do |t|
        t.column :till_detail_id,                    :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :till_id,                           :string,        :limit       => 32,     :null        => true
        t.column :tender_id,                         :string,        :limit       => 32,     :null        => true
        t.column :tender_count,                      :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :tender_amount,                     :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:till_details, [:till_detail_id], :unique => true)

    end
  end
end
