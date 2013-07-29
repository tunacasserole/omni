class CreateTillActivities < ActiveRecord::Migration
  def change
    unless ActiveRecord::Base.connection.tables.include? 'till_activities'
      create_table(:till_activities, :id => false) do |t|
        t.column :till_activity_id,                  :string,        :limit       => 32,     :null        => false
        t.column :display,                           :string,        :limit       => 300,    :null        => false
        t.column :till_id,                           :string,        :limit       => 32,     :null        => true
        t.column :till_activity_nbr,                 :string,        :limit       => 11,     :null        => true
        t.column :till_activity_date,                :date,          :null        => true
        t.column :till_activity_reason,              :string,        :limit       => 100,    :null        => true
        t.column :tender_id,                         :string,        :limit       => 32,     :null        => true
        t.column :activity_count,                    :decimal,       :precision   => 9,      :scale       => 0,      :null        => true
        t.column :activity_amount,                   :decimal,       :precision   => 11,     :scale       => 2,      :null        => true
        t.column :payment_id,                        :string,        :limit       => 32,     :null        => true
        t.column :user_id,                           :string,        :limit       => 32,     :null        => true
        t.column :is_destroyed,                      :boolean,       :null        => true
      end
      add_index(:till_activities, [:till_activity_id], :unique => true)

    end
  end
end
