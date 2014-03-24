class Omni::Sync::StyleSupplierColor < Omni::Sync::Base

  def self.go
    # create_style_suppliers_from_sku_load_sql
    create_from_sku_load
  end

  def self.create_from_sku_load
    sql = "select style_supplier_id, style_color_id from skus_load where style_supplier_color_id is null"
    data = ActiveRecord::Base.connection.execute sql
    puts "records to process: #{data.count}"
    data.each_with_index do |x, i|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '000'
      Omni::StyleSupplierColor.create(style_supplier_id: x[0], style_color_id: x[1]) unless Omni::StyleSupplierColor.where(style_supplier_id: x[0], style_color_id: x[1]).first
    end
  end

end
