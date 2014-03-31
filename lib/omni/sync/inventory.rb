class Omni::Sync::Inventory < Omni::Sync::Base

  def self.go
    excel_to_seed('Inventory','tg_inventory')
    # excel_to_seed('Inventory','rms_inventory')
  end

  def self.map_to_db(row)

    sku_id = Omni::SkuAlias.where(sku_alias: row['ITEM']).first.sku_id if Omni::Sku.where(sku_alias: row['ITEM']).first
    puts "could not find sku for row #{row['ITEM']}" unless Omni::Sku.where(display: row['ITEM']).first
    # location_id = Omni::Location.where(short_name: row['location']).first.location_id if Omni::Location.where(short_name: row['location']).first

    # inventory = Omni::Inventory.new(
    #   location_id: location_id,
    #   sku_id: sku_id,
    #   on_hand_units: on_hand_units,
    #   supplier_on_order_units: supplier_on_order_units,
    #  )

    # puts "inventory could not be created for #{row['display'].to_s} due to: #{inventory.errors.full_messages}" unless inventory.save
  end

  def self.update_inventory_id
    sql = "update inventories, skus_load set inventories.inventory_id = skus_load.inventory_id where skus_load.display = inventories.display"
    ActiveRecord::Base.connection.execute sql
  end
end
