class CreateOmniBts < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :bts if ActiveRecord::Base.connection.tables.include?('bts')
    create_table(:bts, :id => false) do |t|
      t.column   :bts_id,                          :string,            :null  =>  false,   :limit   => 32
      t.column   :department_id,                   :string,            :null  =>  true,    :limit   => 32
      t.column   :user_id,                         :string,            :null  =>  true,    :limit   => 32
      t.column   :state,                           :string,            :null  =>  true,    :limit   => 100
      t.column   :plan_year,                       :string,            :null  =>  true,    :limit   => 100
      t.column   :display,                         :string,            :null  =>  true,    :limit   => 300
      t.column   :description,                     :string,            :null  =>  true,    :limit   => 300
      t.column   :plan_year,                       :string,            :null  =>  true,    :limit   => 32
      t.column   :is_destroyed,                    :boolean,           :null  =>  true
    end
  end
end
