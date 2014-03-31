class Omni::Sync::Inventory < Omni::Sync::Base

  def self.go
    @grits_stores = {'60' => '56072748AC3E11E2947800FF58D32228', '61' => '562B2A8AAC3E11E2947800FF58D32228', '62' => '564FA306AC3E11E2947800FF58D32228', '63' => '5678132CAC3E11E2947800FF58D32228', '64'=> '569FE712AC3E11E2947800FF58D32228', '65' => '56CAEF52AC3E11E2947800FF58D32228', '66' =>'56EB490AAC3E11E2947800FF58D32228'}
    @inventories = Omni::Inventory.source_hash
    @skus = Omni::SkuAlias.to_hash
    @rows_processed = 0
    @source = 'TG'
    excel_to_seed('Inventory','tg_inventory')
    @source = 'RMS'
    excel_to_seed('Inventory','rms_inventory')
  end

  def self.map_to_db(row)
    tg_map(row) if row['ITEM']
    rms_map(row) if row[]



  end

  def tg_map(row)
     @grits_stores.each do |k,v|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{@rows_processed.to_s}" if @rows_processed.to_s.end_with? '000'
      inventory = Omni::Inventory.new(
        location_id: v,
        sku_id: @skus[row['ITEM'].chop.chop],
        on_hand_units: row["#{k} O/H"] || 0,
        supplier_on_order_units: row["#{k} O/O"] || 0,
       )

      puts "inventory could not be created for #{row['ITEM'].to_s} due to: #{inventory.errors.full_messages}" unless inventory.save
      @rows_processed += 1

    end
  end

  def self.get_id(location_id, sku_id)
    @inventories["#{location_id},#{sku_id}"] || Buildit::Util::Guid.generate
  end

  def self.update_inventory_id
    sql = "update inventories, skus_load set inventories.inventory_id = skus_load.inventory_id where skus_load.display = inventories.display"
    ActiveRecord::Base.connection.execute sql
  end
end

      # inventory_id = get_id(location_id, sku_id)
      # @updates.push "('#{inventory_id}','#{sku_id}','#{location_id}',#{oh},#{oo},'#{date}')"
      # ActiveRecord::Base.connection.execute "insert into inventories (inventory_id, sku_id, location_id, on_hand_units, supplier_on_order_units) VALUES ('#{inventory_id}', '#{sku_id}', '#{location_id}',#{oh},#{oo}) ON DUPLICATE KEY UPDATE on_hand_units = VALUES(on_hand_units), supplier_on_order_units = VALUES(supplier_on_order_units)"

  # def self.inventory
  #   @inventories = Omni::Inventory.source_hash
  #   data = load_file('DATA.txt')
  #   data.each do  |x|
  #     @source_count += 1
  #     sku_id = @skus[x['TGSU SKU #']]
  #     unless sku_id
  #       @no_sku_count += 1
  #       @no_skus << x['TGSU SKU #']
  #       next
  #     end

