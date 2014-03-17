class CreateDeskFeatures < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :features if ActiveRecord::Base.connection.tables.include?('features')
    create_table(:features, :id => false) do |t|
      t.column   :feature_id,                      :string,            null: false,   limit: 32
      t.column   :project_id,                      :string,            null: true,   limit: 32
      t.column   :feature_nbr,                     :string,            null: true,   limit: 200
      t.column   :feature_type,                    :string,            null: true,    limit: 200
      t.column   :state,                           :string,            null: true,    limit: 200
      t.column   :display,                         :string,            null: true,    limit: 200
      t.column   :description,                     :string,            null: true,    limit: 4000
      t.column   :release_date,                    :datetime,          null: true
      t.column   :estimated_hours,                 :decimal,     null: true,      :default => 0,      :precision => 11, :scale => 4
      t.column   :actual_hours,                    :decimal,     null: true,      :default => 0,      :precision => 11, :scale => 4
    end
    add_index(:features,            [:feature_id],                              :unique => true)
  end
end
