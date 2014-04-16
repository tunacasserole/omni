class Omni::Data::Sync::SkuPrice < Omni::Data::Sync::Base

  def self.go
    # create_from_sku_load
    update_values
  end

  def self.update_values
    ActiveRecord::Base.connection.execute("update sku_prices set effective_date = now(), price_units = 1")
  end

  def self.create_from_sku_load
    ActiveRecord::Base.connection.execute("select id, sku_id, retail from skus_load where sku_price_id is null").each_with_index do |x,i|
      clock_it(i)
      # select_sql = "select count(*) from style_color_sizes where sku_id = #{x.sku_id}"
      # row = Omni::SkuPrice.where(sku_id: x[1], retail_price: x[2]).first ||
      # puts "retail price is #{x[2]}"
      row = Omni::SkuPrice.create(sku_id: x[1], retail_price: x[2][1..x[2].length])
      if row
        update_sql = "update skus_load set sku_price_id = '#{row.sku_price_id}' where id = #{x[0]}"
        data = ActiveRecord::Base.connection.execute update_sql
      else
        puts "couldn't create sku_price row for id #{x[0]}, sku_id #{x[1]}, retail #{x[2]}",
        abort
      end
    end
  end
end
