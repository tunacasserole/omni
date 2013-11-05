class AddInventoryIdToSkuLocation < ActiveRecord::Migration
  def change

    add_column :sku_locations, :inventory_id,        :string,           :null  =>  true, :limit=>32

  end
end