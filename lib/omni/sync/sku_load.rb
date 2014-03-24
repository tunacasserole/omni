class Omni::Sync::SkuLoad < Omni::Sync::Base

  def self.go
    # puts "#{Time.now.strftime("%H:%M:%S").yellow} - starting"
    # update_style_id
    # update_color_id
    # update_supplier_id
    update_style_supplier_id
    # update_size_id
    # update_style_color_id
    # update_account_id_ar
    # update_sku_id
    # update_sku_id_ar
    # update_sku_price
    puts "#{Time.now.strftime("%H:%M:%S").yellow} - ending"
  end

  def self.update_sku_id_ar
    data = Omni::SkuLoad.where('sku_id is null')
    # data = Omni::SkuLoad.where('select id, style_color_id, size_id from skus_load where sku_id not in (select sku_id from style_color_sizes)')
    puts "records to process: #{data.count}"
    data.each_with_index do |x, i|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '000'
      # row = Omni::Sku.where(display: x.sku_display).first
      sku_sql = "select sku_id from skus where display = '#{x.sku_display}'"
      sku = ActiveRecord::Base.connection.execute sku_sql

      #|| Omni::Sku.where(display: x.school_name).first || Omni::Sku.where(school_nbr: x.school_name).first
      # row = Omni::Sku.where(sku_name: x.school_code).first || Omni::Sku.where(display: x.school_code).first || Omni::Sku.where(school_nbr: x.school_code).first unless row
      if sku.first
        x.sku_id = sku.first[0]
        x.save
      else
        puts "couldn't find sku_id for #{x.sku_display} and sku is #{x.description} and id is #{x.id}"
        # abort
      end
    end
  end

  def self.update_account_id_ar
    data = Omni::SkuLoad.where('account_id is null')
    # data = Omni::SkuLoad.where('select id, style_color_id, size_id from skus_load where account_id not in (select account_id from style_color_sizes)')
    puts "records to process: #{data.count}"
    data.each_with_index do |x, i|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '000'
      row = Omni::Account.where(description: x.school_name.gsub!(/\s+/, "")).first #|| Omni::Account.where(display: x.school_name).first || Omni::Account.where(school_nbr: x.school_name).first
      # row = Omni::Account.where(account_name: x.school_code).first || Omni::Account.where(display: x.school_code).first || Omni::Account.where(school_nbr: x.school_code).first unless row
      if row
        x.account_id = row.account_id
        x.save
      else
        puts "couldn't find account_id for #{x.school_name} and sku is #{x.description} and id is #{x.id}"
        # abort
      end
    end
  end

  def self.update_supplier_id
    sql = "update skus_load, suppliers set skus_load.supplier_id = suppliers.supplier_id where skus_load.supplier = suppliers.display"
    ActiveRecord::Base.connection.execute sql
    sql = "update skus_load, suppliers set skus_load.supplier_id = suppliers.supplier_id where skus_load.supplier = suppliers.supplier_name"
    ActiveRecord::Base.connection.execute sql
    sql = "update skus_load, suppliers set skus_load.supplier_id = suppliers.supplier_id where skus_load.supplier = suppliers.short_name"
    ActiveRecord::Base.connection.execute sql
    sql = "update skus_load, suppliers set skus_load.supplier_id = suppliers.supplier_id where skus_load.supplier = suppliers.description"
    ActiveRecord::Base.connection.execute sql
  end

  # def self.update_supplier_ar
  #   data = Omni::SkuLoad.where('supplier_id is null')
  #   puts "count is #{data.count}"
  #   data.each do |x|
  #     supplier_id = Omni::Supplier.where(display)
  #   end
  # end

  def self.update_account_id_sql
    sql = "update skus_load, accounts set skus_load.account_id = accounts.account_id where skus_load.school_name = accounts.display"
    ActiveRecord::Base.connection.execute sql
  end

  def self.update_style_id
    sql = "update skus_load, styles set skus_load.style_id = styles.style_id where skus_load.style_name = styles.display"
    ActiveRecord::Base.connection.execute sql
  end

  def self.update_sku_id
    sql = "update skus_load, skus set skus_load.sku_id = skus.sku_id where skus_load.sku_display = skus.display"
    ActiveRecord::Base.connection.execute sql
  end

  def self.update_size_id
    sql = "update skus_load, sizes set skus_load.size_id = sizes.size_id where skus_load.size_display = sizes.display"
    ActiveRecord::Base.connection.execute sql
  end

  def self.update_style_color_id
    sql = "update skus_load, style_colors set skus_load.style_color_id = style_colors.style_color_id where skus_load.style_id = style_colors.style_id and skus_load.color_id = style_colors.color_id "
    ActiveRecord::Base.connection.execute sql
  end

  def self.update_style_supplier_id
    sql = "update skus_load, style_suppliers set skus_load.style_supplier_id = style_suppliers.style_supplier_id where skus_load.style_id = style_suppliers.style_id and skus_load.supplier_id = style_suppliers.supplier_id "
    ActiveRecord::Base.connection.execute sql
  end

  def self.update_sku_price
    sql = "update skus_load, skus set skus_load.sku_price = skus.sku_price where skus_load.sku_display = skus.display"
    ActiveRecord::Base.connection.execute sql
  end

  def self.update_size_group_id
    sql = "update skus_load, size_groups set skus_load.size_group_id = size_groups.size_group_id where skus_load.size_group_display = size_groups.display"
    ActiveRecord::Base.connection.execute sql
  end

  def self.update_color_id
    sql = "update skus_load, colors set skus_load.color_id = colors.color_id where skus_load.color_id is null and skus_load.color_name = colors.concatenated_name"
    ActiveRecord::Base.connection.execute sql
    sql = "update skus_load, colors set skus_load.color_id = colors.color_id where skus_load.color_id is null and skus_load.color_name = colors.display"
    ActiveRecord::Base.connection.execute sql
  end

end


