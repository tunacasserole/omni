class AddPoApprovalRoles < ActiveRecord::Migration
  def change
    add_column :location_users,  :is_purchase_approver_1,  :boolean,  :null => true
    add_column :location_users,  :is_purchase_approver_2,  :boolean,  :null => true
    add_column :location_users,  :is_purchase_approver_3,  :boolean,  :null => true
  end
end
