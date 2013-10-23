class AddHeirarchyToBts < ActiveRecord::Migration
  def change

    add_column :bts_details, :style_id,                     :string,   :limit => 32
    add_column :bts_details, :subclass_id,               :string,   :limit => 32
    add_column :bts_details, :classification_id,        :string,   :limit => 32
    add_column :bts_details, :department_id,          :string,   :limit => 32
    add_column :bts_details, :style_display,             :string,   :limit => 200
    add_column :bts_details, :subclass_display,       :string,   :limit => 200
    add_column :bts_details, :classification_display,:string,   :limit => 200
    add_column :bts_details, :department_display,  :string,   :limit => 200

  end
end