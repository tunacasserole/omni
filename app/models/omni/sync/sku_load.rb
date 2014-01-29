class Omni::Sync::SkuLoad < Omni::Sync::Base

  def self.go
    # update_style_id
    # update_color_id
    # update_supplier_id
    # update_sku_id
    # update_size_id
    # update_sku_price
    # update_site_id_ar
    update_sku_id_ar
  end

  def self.update_sku_id_ar
    data = Omni::SkuLoad.where('sku_id is null')
    # data = Omni::SkuLoad.where('select id, style_color_id, size_id from skus_load where sku_id not in (select sku_id from style_color_sizes)')
    puts "records to process: #{data.count}"
    data.each_with_index do |x, i|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '00'
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

  def self.update_site_id_ar
    data = Omni::SkuLoad.where('site_id is null')
    # data = Omni::SkuLoad.where('select id, style_color_id, size_id from skus_load where site_id not in (select site_id from style_color_sizes)')
    puts "records to process: #{data.count}"
    data.each_with_index do |x, i|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '00'
      row = Omni::Site.where(description: x.school_name.gsub!(/\s+/, "")).first #|| Omni::Site.where(display: x.school_name).first || Omni::Site.where(school_nbr: x.school_name).first
      # row = Omni::Site.where(site_name: x.school_code).first || Omni::Site.where(display: x.school_code).first || Omni::Site.where(school_nbr: x.school_code).first unless row
      if row
        x.site_id = row.site_id
        x.save
      else
        puts "couldn't find site_id for #{x.school_name} and sku is #{x.description} and id is #{x.id}"
        # abort
      end
    end
  end

  def self.update_supplier_id
    sql = "update skus_load, suppliers set skus_load.supplier_id = suppliers.supplier_id where skus_load.supplier = suppliers.display"
    ActiveRecord::Base.connection.execute sql
    sql = "update skus_load, suppliers set skus_load.supplier_id = suppliers.supplier_id where skus_load.supplier = suppliers.description"
    ActiveRecord::Base.connection.execute sql
  end

  def self.update_site_id_sql
    sql = "update skus_load, sites set skus_load.site_id = sites.site_id where skus_load.school_name = sites.display"
    ActiveRecord::Base.connection.execute sql
  end

  def self.update_style_id
    sql = "update skus_load, styles set skus_load.style_id = styles.style_id where skus_load.style_display = styles.display"
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

  def self.update_sku_price
    sql = "update skus_load, skus set skus_load.sku_price = skus.sku_price where skus_load.sku_display = skus.display"
    ActiveRecord::Base.connection.execute sql
  end

  def self.update_size_group_id
    sql = "update skus_load, size_groups set skus_load.size_group_id = size_groups.size_group_id where skus_load.size_group_display = size_groups.display"
    ActiveRecord::Base.connection.execute sql
  end

  def self.update_color_id
    sql = "update skus_load, colors set skus_load.color_id = colors.color_id where skus_load.color_conv = colors.short_name"
    ActiveRecord::Base.connection.execute sql
    sql = "update skus_load, colors set skus_load.color_id = colors.color_id where skus_load.color_conv = colors.display"
    ActiveRecord::Base.connection.execute sql
  end

end


