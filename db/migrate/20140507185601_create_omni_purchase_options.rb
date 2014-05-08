class CreateOmniPurchaseOptions < ActiveRecord::Migration
  def change

  	unless table_exists? :purchase_options
      create_table(:purchase_options, :id => false) do |t|
        t.column :purchase_option_id,              :string,            :null  =>  false,   :limit   => 32
        t.column :display,                         :string,            :null  =>  true,    :limit   => 200
        t.column :approver_1_id,                      :string,            :null  =>  true,    :limit   => 32
        t.column :approver_2_id,                      :string,            :null  =>  true,    :limit   => 32
        t.column :approver_3_id,                      :string,            :null  =>  true,    :limit   => 32
        t.column :approver_1_limit,                :integer,           :null  =>  true
        t.column :approver_2_limit,                :integer,           :null  =>  true
        t.column :approver_3_limit,                :integer,           :null  =>  true
        t.column :is_destroyed,                    :boolean,           :null  =>  true
      end
    end

  end
end
