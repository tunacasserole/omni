class CreateDeskFeatures < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :features if ActiveRecord::Base.connection.tables.include?('features')
    create_table(:features, :id => false) do |t|
      t.column   :feature_id,                      :string,            :null  =>  false,   :limit   => 32
      t.column   :state,                           :string,            :null  =>  true,    :limit   => 200
      t.column   :display,                         :string,            :null  =>  true,    :limit   => 200
      t.column   :description,                     :string,            :null  =>  true,    :limit   => 2000
      t.column   :release_date,                    :datetime,          :null  =>  true
      t.column   :is_destroyed,                    :boolean,           :null  =>  true
    end
  end
end
