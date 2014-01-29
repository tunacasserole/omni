class Omni::Sync::SkuPrice < Omni::Sync::Base

  def self.go
    create_style_color_sizes_from_sku_load
  end

  def self.create_style_color_sizes_from_sku_load
    sql = "select id, sku_id, retail from skus_load where sku_price is null"
    data = ActiveRecord::Base.connection.execute sql
    data.each_with_index do |x,i|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '00'
      # select_sql = "select count(*) from style_color_sizes where sku_id = #{x.sku_id}"
      row = Omni::SkuPrice.where(sku_id: x[1], retail: x[2]).first || Omni::SkuPrice.create(sku_id: x[1], size_id: x[2])
      if row
        update_sql = "update skus_load set sku_price_id = '#{row.sku_price_id}' where id = #{x[0]}"
        data = ActiveRecord::Base.connection.execute update_sql
      else
        puts "couldn't create style_color_size row for id #{x[0]}, sku_price_id #{x[1]}, size_id #{x[2]}",
        abort
      end
    end
  end
end
