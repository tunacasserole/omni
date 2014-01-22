class AddIndexes < ActiveRecord::Migration
  def change

    # sku
    add_index(:skus,      [:sku_id],                      :unique => true)

    # location
    add_index(:locations, [:location_id],                      :unique => true)


  end
end
