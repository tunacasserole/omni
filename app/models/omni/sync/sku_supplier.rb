class Omni::Sync::SkuSupplier < Omni::Sync::Base

  def self.go
    create_sku_suppliers_from_sku_load
  end

  def self.create_sku_suppliers_from_sku_load
    sql = "select id, sku_id, supplier_id from skus_load"
    data = ActiveRecord::Base.connection.execute sql
    data.each_with_index do |x,i|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '00'
      # select_sql = "select count(*) from sku_suppliers where sku_id = #{x.sku_id}"
      sc = Omni::SkuSupplier.create(sku_id: x[1], supplier_id: x[2]) #unless Omni::SkuSupplier.where(sku_id: x[0], supplier_id: x[1]).first
      if sc
        update_sql = "update skus_load set sku_supplier_id = '#{sc.sku_supplier_id}' where id = #{x[0]}"
        data = ActiveRecord::Base.connection.execute update_sql
      else
        puts "couldn't create sku_supplier row for id #{x[0]}, sku_id #{x[1]}, supplier_id #{x[2]}",
        abort
      end
    end
  end
end
