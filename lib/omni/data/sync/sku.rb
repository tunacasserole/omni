class Omni::Data::Sync::Sku < Omni::Data::Sync::Base

  def self.go
    # update_suppliers_sql
    # update_accounts
    update_price_and_wac
    # sync_skus
    # resync_skus_sql
    # create_from_sku_load
  end

  def self.create_from_sku_load
    # turn skus into hash
    skus_hash = {}
    ActiveRecord::Base.connection.execute("select display, sku_id from skus").each {|x| skus_hash[x[0]] = x[1]}
    puts "skus loaded to hash: #{skus_hash.count}"

    # get skus_load data
    sql = "select sku_display_name, sku_receipt_name, description, retail, style_id, color_id, size_id, style_color_size_id, supplier_id, account_id, fabric_content, design_code, g_c, id from skus_load where sku_id is null"
    data = ActiveRecord::Base.connection.execute sql
    puts "records to process: #{data.count}"

    data.each_with_index do |x, i|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '000'
      # puts "sku name is #{x[0]} - id is #{skus_hash[x[0]]}"
      # sql = "select sku_id from skus where display = '#{x[0]}'"
      # data = ActiveRecord::Base.connection.execute sql
      # puts "sku_id is #{data.first[0]}"
      # if data.first #.length == 0
      if skus_hash[x[0]]
        sku_id = skus_hash[x[0]]
      else
        sku_id = map_to_db(x)
      end
      sql = "update skus_load set sku_id = '#{sku_id}' where id = #{x[13]}"
      ActiveRecord::Base.connection.execute sql
    end
  end

  def self.map_to_db(row)
    is_converted = row[12] == 'CONVERTED GARMENT'

    sku = Omni::Sku.create(
      display: row[0],
      pos_name: row[1],
      description: row[2],
      initial_retail_price: row[3],
      style_id: row[4],
      color_id: row[5],
      size_id: row[6],
      style_color_size_id: row[7],
      supplier_id: row[8],
      account_id: row[9],
      fabric_content: row[10],
      design_code: row[11],
      is_converted: is_converted
     )


    if sku
      # puts "created sku #{row[0]} with id #{sku.sku_id}"
      return sku.sku_id
    else
      puts "sku could not be created for #{row[0].to_s} due to: #{sku.errors.full_messages}"
      # abort
    end
  end



  def self.resync_skus_sql
    @errors = 0
    @saved = 0
    puts "started at #{Time.now.to_s.chop.chop.chop.chop.chop}"
    sql = "select id, sku_id, style_id, size_id, color_id, supplier_id, style_color_size_id from skus_load where sku_id is not null and is_done is false"
    data = ActiveRecord::Base.connection.execute sql
    puts "rows to process: #{data.count}"
    data.each_with_index do |x,i|
      puts "processed #{i.to_s} rows at #{Time.now.to_s.chop.chop.chop.chop.chop}" if i.to_s.end_with? '000'
      update_sql = "update skus set style_id = '#{x[2]}', size_id = '#{x[3]}', color_id = '#{x[4]}', supplier_id = '#{x[5]}', style_color_size_id = '#{x[6]}' where sku_id = '#{[1]}'"
      ActiveRecord::Base.connection.execute update_sql
      update_sku_load_sql = "update skus_load set is_done = true where sku_id = '#{x[1]}'"
      ActiveRecord::Base.connection.execute update_sku_load_sql
    end
  end

  def self.resync_skus_ar
    @errors = 0
    @saved = 0
    puts "started at #{Time.now.to_s.chop.chop.chop.chop.chop}"
    sql = "select id, sku_id, style_id, size_id, color_id, supplier_id, style_color_size_id from skus_load where sku_id is not null"
    data = ActiveRecord::Base.connection.execute sql
    puts "rows to process: #{data.count}"
    data.each_with_index do |x,i|
      puts "processed #{i.to_s} rows at #{Time.now.to_s.chop.chop.chop.chop.chop} error count is #{@errors} / saved count is #{@saved}" if i.to_s.end_with? '000'
      s = Omni::Sku.where(sku_id: x[1]).first
      next unless s
      s.style_id = x[2]
      s.size_id = x[3]
      s.color_id = x[4]
      s.supplier_id = x[5]
      s.style_color_size_id = x[6]
      if s.save
        @saved += 1
      else
        @errors += 1
      end
    end
  end

  def self.sync_skus
    puts "started at #{Time.now.to_s.chop.chop.chop.chop.chop}"
    skus_created = 0
    sql = "select id, sku_display, style_id, size_id, school_code, mark_sku, bu_sku, tg_sku, description, fabric_content, retail, g_c from skus_load_staged"
    data = ActiveRecord::Base.connection.execute sql
    data.each_with_index do |x,i|
      puts "processed #{i.to_s} rows at #{Time.now.to_s.chop.chop.chop.chop.chop}" if i.to_s.end_with? '000'
      # break if i > 2000
      # create skus with these fields: style_id, size_id,
      display = x[1]
      style_id = Omni::Style.where(display: x[2]).first ? Omni::Style.where(display: x[2]).first.style_id : x[2].truncate(32)
      size_id = Omni::Size.where(display: x[3]).first ? Omni::Size.where(display: x[3]).first.size_id : x[3].truncate(32)
      account_id = Omni::Account.where(account_nbr: x[4]).first ? Omni::Account.where(account_nbr: x[4]).first.account_id : x[4].truncate(32)

      if x[5].length > 1
        source = 'PARKER'
        source_id = x[5]
      elsif x[6].length > 1
        source = 'BUCKHEAD'
        source_id = x[6]
      elsif x[7].length > 1
        source = 'TRUEGRITS'
        source_id = x[7]
      end

      description = x[8]
      fabric_content = x[9].length > 1 ? x[9] : 'NONE'
      initial_retail_price = x[10].length > 1 ? x[10] : 0
      is_converted = x[11] == 'CONVERTED_GARMENT'
      s = Omni::Sku.create(display: display, style_id: style_id, size_id: size_id, source: source, source_id: source_id, description: description, fabric_content: fabric_content, initial_retail_price: initial_retail_price, is_converted: is_converted)
      skus_created += 1 if s
    end

    puts "skus_created is #{skus_created}"
  end


   def self.update_suppliers_sql
    sql = 'select sku_id, display from skus'
    data = ActiveRecord::Base.connection.execute sql
    data.each_with_index do |x,i|
      skus_load_sql = "select supplier from skus_load where sku_display = '#{x[1]}'"
      skus_load = ActiveRecord::Base.connection.execute skus_load_sql
      next unless skus_load.first
      supplier_name = skus_load.first[0]


      supplier_sql = "select supplier_id from suppliers where display = '#{supplier_name}'"
      suppliers = ActiveRecord::Base.connection.execute supplier_sql
      next unless suppliers.first
      supplier_id = suppliers.first[0]

      puts "i is #{i}: sku is #{x[0]} - #{x[1]}, supplier is #{supplier_name}: #{supplier_id}"

    end

  end

  def self.update_suppliers_ar
    puts "update_suppliers_ar"
    data = Omni::Sku.all
    data.each_with_index do |x, i|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '000'
      # load = Omni::SkuLoad.where(display: x.display).first
      # next unless load
      # supplier = Omni::Supplier.where(display: load.supplier_id).first
      # next unless supplier
      # x.supplier_id = supplier.supplier_id
      # x.save
    end
  end


  def self.update_accounts
    sql = "select sku_id, account_id from skus_load"
    data = ActiveRecord::Base.connection.execute sql
    data.each_with_index do |x,i|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '000'
      update_sql = "update skus set account_id = '#{x[1]}' where sku_id = '#{x[0]}'"
      ActiveRecord::Base.connection.execute update_sql
    end
  end

  def self.update_price_and_wac
    sql = "select sku_id, retail, wac from skus_load"
    data = ActiveRecord::Base.connection.execute sql
    data.each_with_index do |x,i|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '000'
      update_sql = "update skus set initial_retail_price = #{x[1][1..x[2].length]} where sku_id = '#{x[0]}'"
      ActiveRecord::Base.connection.execute update_suppliers_sql unless x[1] == '$-   '
      update_sql = "update skus set average_cost = #{x[2][1..x[2].length]} where sku_id = '#{x[0]}'"
      ActiveRecord::Base.connection.execute update_sql unless x[2] == '$-   '
    end
  end
end
      # if skus_load_hash[x[0]]
  #   # get account_hash
  #   account_hash = {}
  #   ActiveRecord::Base.connection.execute("
  #   # read account_id and sku_id from skus_load into a hash
  #   skus_load_hash = {}
  #   puts "rows loaded to hash: #{skus_load_hash.count}"

  #   # get skus data
  #   sql = "select sku_id from skus where account_id is null"
  #   puts "records to process: #{data.count}"

  #       sku_id = skus_load_hash[x[0]]
  #     else
  #       sku_id = map_to_db(x)
  #     end
  #     sql = "update skus_load set sku_id = '#{sku_id}' where id = #{x[13]}"
  #     # puts "i is #{i}: sku is #{x[0]} - #{x[1]}, supplier is #{supplier_name}: #{supplier_id}"

  #   end

  # end


