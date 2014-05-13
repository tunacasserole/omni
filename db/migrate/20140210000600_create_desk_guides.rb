class CreateDeskGuides < ActiveRecord::Migration
  def change
    @connection = ActiveRecord::Base.connection
    drop_table :guides if ActiveRecord::Base.connection.tables.include?('guides')
    create_table(:guides, :id => false) do |t|
      t.column   :guide_id,                      :string,            :null  =>  false,   :limit   => 32
      t.column   :guideable_id,                  :string,            :null  =>  false,   :limit   => 32
      t.column   :guideable_type,                :string,            :null  =>  false,   :limit   => 200
      t.column   :owner_id,                      :string,            :null  =>  true,   :limit   => 32
      t.column   :reviewer_id,                   :string,            :null  =>  true,   :limit   => 32
      t.column   :guide_nbr,                     :string,            :null  =>  true,   :limit   => 200
      t.column   :guide_name,                    :string,            :null  =>  true,   :limit   => 200
      t.column   :description,                   :string,            :null  =>  true,   :limit   => 4000
      t.column   :guide_location,                :string,            :null  =>  true,   :limit   => 200
      t.column   :gem_name,                      :string,            :null  =>  true,   :limit   => 200
    end
    add_index(:guides,            [:guide_id],                              :unique => true)
  end
end
