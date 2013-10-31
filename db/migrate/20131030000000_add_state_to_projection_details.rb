class AddStateToProjectionDetails < ActiveRecord::Migration
  def change

    add_column :projection_details, :state,                     :string,   :limit => 200

  end
end