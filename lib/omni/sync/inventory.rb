class Omni::Sync::Inventory < Omni::Sync::Base

  def self.go
    @grits_stores = {'60' => '56072748AC3E11E2947800FF58D32228', '61' => '562B2A8AAC3E11E2947800FF58D32228', '62' => '564FA306AC3E11E2947800FF58D32228', '63' => '5678132CAC3E11E2947800FF58D32228', '64'=> '569FE712AC3E11E2947800FF58D32228', '65' => '56CAEF52AC3E11E2947800FF58D32228', '66' =>'56EB490AAC3E11E2947800FF58D32228'}
    @rms_stores = {'Van Sales' => '0799CE3A7BCD11E3A0A920C9D047DD15', '41' => '54BA7E26AC3E11E2947800FF58D32228', '42' => '54DA89BEAC3E11E2947800FF58D32228', '43' => '54FFC58AAC3E11E2947800FF58D32228', '44' => '551C007EAC3E11E2947800FF58D32228', '45' => '555BC98EAC3E11E2947800FF58D32228', '46' => '55A83D00AC3E11E2947800FF58D32228', '47' => '55A83D00AC3E11E2947800FFCHAMBLEE', '  Van Sales' => ''}
    @skus = Omni::SkuAlias.to_hash('buckhead')
    @inventories = Omni::Inventory.source_hash

    ['rms'].each do |source|
      @rows_processed = 0
      @source = source
      excel_to_seed('Inventory',"#{source}_inventory10k")
    end
  end

  def self.map_to_db(row)
    # "#{@source}_map".constantize(row)
    rms_map(row)
  end

  def self.rms_map(row)
    inventory = Omni::Inventory.new(
      location_id: @rms_stores[row['Store ID']],
      sku_id: @skus[row['Item ID']],
      on_hand_units: row["ItemQOH"] || 0,
      supplier_on_order_units: row["ItemQOO"] || 0,
     )

    puts "inventory could not be created for item #{row['Item ID'].to_s} and location #{row['Store ID']} due to: #{inventory.errors.full_messages}" unless inventory.save
  end

  def self.tg_map(row)
    # puts "tg"
     @grits_stores.each do |k,v|
      # puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{@rows_processed.to_s}" if @rows_processed.to_s.end_with? '000'
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

