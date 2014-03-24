class Omni::Sync::StyleSupplier < Omni::Sync::Base

  def self.go
    # create_style_suppliers_from_sku_load_sql
    create_from_sku_load
  end

  def self.create_from_sku_load
    sql = "select style_id, supplier_id from skus_load where style_supplier_id is null"
    data = ActiveRecord::Base.connection.execute sql
    puts "records to process: #{data.count}"
    data.each_with_index do |x, i|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '000'
      Omni::StyleSupplier.create(style_id: x[0], supplier_id: x[1])
    end
  end

  def self.create_style_suppliers_from_sku_load_sql
    sql = "select id, style_id, supplier_id from skus_load where style_supplier_id not in (select style_supplier_id from style_suppliers)"
    data = ActiveRecord::Base.connection.execute sql
    puts "records to process: #{data.count}"
    data.each_with_index do |x,i|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '000'
      # row = Omni::StyleSupplier.where(style_id: x[1], supplier_id: x[2]).first || Omni::StyleSupplier.create(style_id: x[1], supplier_id: x[2])
      row = Omni::StyleSupplier.create(style_id: x[1], supplier_id: x[2])
      if row
        update_sql = "update skus_load set style_supplier_id = '#{row.style_supplier_id}' where id = #{x[0]}"
        data = ActiveRecord::Base.connection.execute update_sql
      else
        puts "couldn't create style_supplier row for id #{x[0]}, style_id #{x[1]}, supplier_id #{x[2]}",
        abort
      end
    end
  end

  def self.create_from_sku_load_orig
    data = Omni::SkuLoad.where('style_supplier_id not in (select style_supplier_id from style_suppliers)')
    puts "records to process: #{data.count}"
    data.each_with_index do |x, i|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '000'
      row = Omni::StyleSupplier.where(style_id: x.style_id, supplier_id: x.supplier_id).first || Omni::StyleSupplier.create(style_id: x.style_id, supplier_id: x.supplier_id)
      if row
        x.style_supplier_id = row.style_supplier_id
        x.save
      else
        puts "couldn't create style_supplier row for style_id is #{x.style_id} and supplier_id is #{x.supplier_id}"
        abort
      end
    end

  end

end
