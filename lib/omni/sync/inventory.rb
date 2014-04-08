class Omni::Sync::Inventory < Omni::Sync::Base

  def self.go
    @inventories = Omni::Inventory.to_hash
    # load_true_grits
    # load_buckhead
    # load_parker
    Omni::Sync::Inventory::Parker.inventory
  end

  def self.load_parker
    @parker_skus = Omni::SkuAlias.to_hash('PARKER')

  end

  def self.load_true_grits
    @grits_stores = {'60' => '56072748AC3E11E2947800FF58D32228', '61' => '562B2A8AAC3E11E2947800FF58D32228', '62' => '564FA306AC3E11E2947800FF58D32228', '63' => '5678132CAC3E11E2947800FF58D32228', '64'=> '569FE712AC3E11E2947800FF58D32228', '65' => '56CAEF52AC3E11E2947800FF58D32228', '66' =>'56EB490AAC3E11E2947800FF58D32228'}
    @grits_skus = Omni::SkuAlias.to_hash('TRUE GRITS')

    data = Omni::TgInventory.all
    bar = ProgressBar.new(data.count)

    data.each_with_index do |row, i|
      sku_id = @grits_skus[row.ITEM.to_s]
      next unless sku_id

      @grits_stores.each do |k,v|
        on_hand = row.send("#{k} O/H") || 0
        on_order = row.send("#{k} O/O") || 0
        ytd = row.send("#{k} SOLD") || 0
        proj = row.send("#{k} PROJ") || 0

        inventory_id = get_id(v,sku_id)
        if inventory_id
          ActiveRecord::Base.connection.execute "update inventories set on_hand_units = #{on_hand}, supplier_on_order_units = #{on_order}, sale_units_ytd = #{ytd}, projected_units = #{proj} where inventory_id = '#{inventory_id}'"
        else
          ActiveRecord::Base.connection.execute "insert into inventories (inventory_id, sku_id, location_id, on_hand_units, supplier_on_order_units, sale_units_ytd, projected_units) values ( '#{Buildit::Util::Guid.generate}', '#{sku_id}', '#{v}', #{on_hand}, #{on_order}, #{ytd}, #{proj} )"
        end

      end

      bar.increment!
    end
  end

  def self.load_buckhead
    @buckhead_stores = {'Van Sales' => '0799CE3A7BCD11E3A0A920C9D047DD15', '41' => '54BA7E26AC3E11E2947800FF58D32228', '42' => '54DA89BEAC3E11E2947800FF58D32228', '43' => '54FFC58AAC3E11E2947800FF58D32228', '44' => '551C007EAC3E11E2947800FF58D32228', '45' => '555BC98EAC3E11E2947800FF58D32228', '46' => '55A83D00AC3E11E2947800FF58D32228', '47' => '8B20CF5E77BF11E3B24B20C9D047DD15'}
    @buckhead_skus = Omni::SkuAlias.to_hash('BUCKHEAD')
    data = ActiveRecord::Base.connection.execute("select * from rms_inventory")
    bar = ProgressBar.new(data.count)

    data.each_with_index do |row, i|
      bar.increment!

      sku_id = @buckhead_skus[row[1]]
      next unless sku_id

      location_id = @buckhead_stores[row[0]]
      inventory_id = get_id(location_id, sku_id)

      on_hand = row[13].gsub('-','0').gsub(',','').gsub('(','-').gsub(')','') || 0
      on_order = row[16].gsub('-','0').gsub(',','').gsub('(','-').gsub(')','') || 0
      ytd = row[24].gsub('-','0').gsub(',','').gsub('(','-').gsub(')','') || 0
      py1 = row[23].gsub('-','0').gsub(',','').gsub('(','-').gsub(')','') || 0
      py2 = row[22].gsub('-','0').gsub(',','').gsub('(','-').gsub(')','') || 0
      py3 = row[21].gsub('-','0').gsub(',','').gsub('(','-').gsub(')','') || 0

      if inventory_id
        ActiveRecord::Base.connection.execute "update inventories set on_hand_units = #{on_hand}, supplier_on_order_units = #{on_order}, sale_units_ytd = #{ytd}, sale_units_py1 = #{py1}, sale_units_py2 = #{py2}, sale_units_py3 = #{py3} where inventory_id = '#{inventory_id}'"
      else
        ActiveRecord::Base.connection.execute "insert into inventories (inventory_id, sku_id, location_id, on_hand_units, supplier_on_order_units, sale_units_ytd, sale_units_py1, sale_units_py2, sale_units_py3) values ( '#{Buildit::Util::Guid.generate}', '#{sku_id}', '#{location_id}', #{on_hand}, #{on_order}, #{ytd}, #{py1}, #{py2}, #{py3} )"
      end

    end
  end


  def self.get_id(location_id, sku_id)
    @inventories["#{location_id},#{sku_id}"]
  end

end

  # def self.load_parker

  #   # @all_stores = {}; Omni::Location.all.each  { |loc| @all_stores[loc.location_nbr] = loc.location_id }
  #   # data = ActiveRecord::Base.connection.execute("select * from inventory")
  #   # bar = ProgressBar.new(data.count)
  #   # data.each_with_index do |row, i|
  #   #   parker_db_map(row)
  #   #   bar.increment!
  #   # end
  # end

  # def self.parker_db_map(row)
  #   # inventory = Omni::Inventory.new(
  #   #   location_id: @all_stores[row[0]],
  #   #   sku_id: @buckhead_skus[row[1]],
  #   #   on_hand_units: row[13] || 0,
  #   #   supplier_on_order_units: row[16] || 0,
  #   #   sale_units_ytd: row[24],
  #   #   sale_units_py1: row[23],
  #   #   sale_units_py2: row[22],
  #   #   sale_units_py3: row[21]
  #   #  )

  #   # inventory.save
  #   # puts "inventory could not be created for item #{row[1]} and location #{row[0]} due to: #{inventory.errors.full_messages}" unless inventory.save
  # end
  # def self.buckhead_map(row)
  #   inventory = Omni::Inventory.new(
  #     location_id: @buckhead_stores[row['Store ID']],
  #     sku_id: @buckhead_skus[row['Item ID']],
  #     on_hand_units: row["ItemQOH"] || 0,
  #     supplier_on_order_units: row["ItemQOO"] || 0,
  #    )

  #   puts "inventory could not be created for item #{row['Item ID'].to_s} and location #{row['Store ID']} due to: #{inventory.errors.full_messages}" unless inventory.save
  # end
      # inventory_id = get_id(location_id, sku_id)
      # @updates.push "('#{inventory_id}','#{sku_id}','#{location_id}',#{oh},#{oo},'#{date}')"
      # ActiveRecord::Base.connection.execute "insert into inventories (inventory_id, sku_id, location_id, on_hand_units, supplier_on_order_units) VALUES ('#{inventory_id}', '#{sku_id}', '#{location_id}',#{oh},#{oo}) ON DUPLICATE KEY UPDATE on_hand_units = VALUES(on_hand_units), supplier_on_order_units = VALUES(supplier_on_order_units)"

  # def self.inventory
  #   @inventories = Omni::Inventory.to_hash
  #   data = load_file('DATA.txt')
  #   data.each do  |x|
  #     @source_count += 1
  #     sku_id = @buckhead_skus[x['TGSU SKU #']]
  #     unless sku_id
  #       @no_sku_count += 1
  #       @no_skus << x['TGSU SKU #']
  #       next
  #     end

