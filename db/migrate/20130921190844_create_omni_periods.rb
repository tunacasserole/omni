class CreateOmniPeriods < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :periods if ActiveRecord::Base.connection.tables.include?('periods')
    create_table(:periods, :id => false) do |t|
      t.column   :period_id,                       :string,            null: false,   limit: 32
      t.column   :display,                         :string,            null: true,   limit: 200
      t.column   :start_date,                      :datetime,          null: true
      t.column   :end_date,                        :datetime,          null: true
      t.column   :year_number,                     :string,            null: true,   :limit   => 4
      t.column   :period_number,                   :string,            null: true,   limit: 2
      t.column   :is_destroyed,                    :boolean,           null: true
    end
  end
end
