class Omni::Sync::Inventory < Omni::Sync::Base

  def self.go
    # @inventories = Omni::Inventory.to_hash
    # load_true_grits
    # load_buckhead
    # load_parker
    # Omni::Sync::Inventory::Parker.inventory
    self.fill_in_heirarchy
  end

  def self.fill_in_heirarchy

    test_hierarchy

    # fill in styles
    # data = ActiveRecord::Base.connection.execute("select a.inventory_id, b.style_id from inventories a, skus b where a.sku_id = b.sku_id and a.style_id is null or a.style_id not in (select style_id from styles)")
    # bar = ProgressBar.new(data.count)
    # data.each { |row| bar.increment!; ActiveRecord::Base.connection.execute("update inventories set style_id = '#{row[1]}' where inventory_id = '#{row[0]}'") }

    # fill in subclasses
    # data = ActiveRecord::Base.connection.execute("select a.inventory_id, b.subclass_id from inventories a, styles b where (a.subclass_id is null or a.subclass_id not in (select subclass_id from subclasses)) and a.style_id = b.style_id")
    # bar = ProgressBar.new(data.count)
    # data.each { |row| bar.increment!; ActiveRecord::Base.connection.execute("update inventories set subclass_id = '#{row[1]}' where inventory_id = '#{row[0]}'") }

    # fill in classes
    # data = ActiveRecord::Base.connection.execute("select a.inventory_id, b.classification_id from inventories a, subclasses b where (a.classification_id is null or a.classification_id not in (select classification_id from classifications)) and a.subclass_id = b.subclass_id")
    # bar = ProgressBar.new(data.count)
    # data.each { |row| bar.increment!; ActiveRecord::Base.connection.execute("update inventories set classification_id = '#{row[1]}' where inventory_id = '#{row[0]}'") }

    # # fill in departments
    # data = ActiveRecord::Base.connection.execute("select a.inventory_id, b.department_id from inventories a, classifications b where (a.department_id is null or a.department_id not in (select department_id from departments)) and a.classification_id = b.classification_id")
    # bar = ProgressBar.new(data.count)
    # data.each { |row| bar.increment!; ActiveRecord::Base.connection.execute("update inventories set department_id = '#{row[1]}' where inventory_id = '#{row[0]}'") }

    # fill in projection_id
    # data = ActiveRecord::Basee.connection.execute("select a.projection_detail_id, b.department_id from projection_details a, inventories b where a.projection_id is null or a.projection_id not in (select projection_id from projections) and a.inventory_id = b.inventory_id")
    data = ActiveRecord::Base.connection.execute("select projection_detail_id, inventory_id from projection_details where projection_id is null or projection_id not in (select projection_id from projections)")
    bar = ProgressBar.new(data.count)
    data.each do |row|
      bar.increment!
      department_id = ActiveRecord::Base.connection.execute("select department_id from inventories where inventory_id = '#{row[1]}'").first[0]
      projection_id = ActiveRecord::Base.connection.execute("select projection_id from projections where department_id = '#{department_id}'").first[0]

      ActiveRecord::Base.connection.execute("update projection_details set projection_id = '#{projection_id}' where projection_detail_id = '#{row[0]}'")
    end

  end

  def self.test_hierarchy
    # get total inventory count
    # data = ActiveRecord::Base.connection.execute("select count(*) from inventories")
    # puts "inventory count is #{data.first[0]}"

    # data = ActiveRecord::Base.connection.execute("select count(*) from skus where sku_id not in (select distinct(sku_id) from inventories)")
    # puts "skus missing inventory count is #{data.first[0]}" if data.first[0] > 0

    data = ActiveRecord::Base.connection.execute("select count(*) from subclasses where classification_id is null or classification_id not in (select classification_id from classifications)")
    puts "subclasses missing classes count is #{data.first[0]}" if data.first[0] > 0

    data = ActiveRecord::Base.connection.execute("select count(*) from inventories where sku_id is null or sku_id not in (select sku_id from skus)")
    puts "inventory missing skus count is #{data.first[0]}" if data.first[0] > 0

    data = ActiveRecord::Base.connection.execute("select count(*) from inventories where style_id is null or style_id not in (select style_id from styles)")
    puts "inventory missing styles count is #{data.first[0]}" if data.first[0] > 0

    data = ActiveRecord::Base.connection.execute("select count(*) from inventories where subclass_id is null or subclass_id not in (select subclass_id from subclasses)")
    puts "inventory missing subclasses count is #{data.first[0]}" if data.first[0] > 0

    data = ActiveRecord::Base.connection.execute("select count(*) from inventories where classification_id is null or classification_id not in (select classification_id from classifications)")
    puts "inventory missing classifications count is #{data.first[0]}" if data.first[0] > 0

    data = ActiveRecord::Base.connection.execute("select count(*) from inventories where department_id is null or department_id not in (select department_id from departments)")
    puts "inventory missing departments count is #{data.first[0]}" if data.first[0] > 0

    data = ActiveRecord::Base.connection.execute("select count(*) from projection_details where projection_id is null or projection_id not in (select projection_id from projections)")
    puts "projection details missing projections count is #{data.first[0]}" if data.first[0] > 0


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

