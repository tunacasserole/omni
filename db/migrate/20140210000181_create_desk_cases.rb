class CreateDeskCases < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :cases if ActiveRecord::Base.connection.tables.include?('cases')
    create_table(:cases, :id => false) do |t|
      t.column   :case_id,                         :string,            :null  =>  false,  :limit   => 32
      t.column   :requestor_id,                    :string,            :null  =>  true,   :limit   => 32
      t.column   :owner_id,                        :string,            :null  =>  true,   :limit   => 32
      t.column   :project_id,                      :string,            :null  =>  true,   :limit   => 32
      t.column   :case_nbr,                        :string,            :null  =>  true,   :limit   => 200
      t.column   :case_type,                       :string,            :null  =>  true,   :limit   => 200
      t.column   :case_size,                       :string,            :null  =>  true,   :limit   => 200
      t.column   :case_detail,                     :string,            :null  =>  true,   :limit   => 4000
      t.column   :state,                           :string,            :null  =>  true,   :limit   => 200
      t.column   :display,                         :string,            :null  =>  true,   :limit   => 200
      t.column   :description,                     :string,            :null  =>  true,   :limit   => 4000
      t.column   :is_approved,                     :boolean,           :null  =>  true
    end
    add_index(:cases,            [:case_id],                              :unique => true)
  end
end
