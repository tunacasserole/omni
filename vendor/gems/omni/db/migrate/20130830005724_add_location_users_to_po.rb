class AddLocationUsersToPo < ActiveRecord::Migration
  def change
    add_column :purchases,  :purchase_approver_1_location_user_id,  :string,  :limit => 32, :null => true
    add_column :purchases,  :purchase_approver_2_location_user_id,  :string,  :limit => 32, :null => true
    add_column :purchases,  :purchase_approver_3_location_user_id,  :string,  :limit => 32, :null => true
  end
end
