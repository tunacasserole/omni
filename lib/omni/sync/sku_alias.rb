class Omni::Sync::SkuAlias < Omni::Sync::Base

  def self.go
    create_from_sku_load
  end

  def self.create_from_sku_load
    sql = "select id, sku_id, mark_sku, bu_sku, tg_sku from skus_load"
    data = ActiveRecord::Base.connection.execute sql
    data.each_with_index do |x,i|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '000'
      if x[2] && x[2].length > 1
        row = Omni::SkuAlias.create(sku_id: x[1], sku_alias: x[2])
        unless row
          puts "couldn't create sku_alias row for id #{x[0]}, sku_id #{x[1]}, mark alias #{x[2]}"
          abort
        end
      end
      if x[3] && x[3].length > 0
        row = Omni::SkuAlias.create(sku_id: x[1], sku_alias: x[3])
        unless row
          puts "couldn't create sku_alias row for id #{x[0]}, sku_id #{x[1]}, bu alias #{x[3]}"
          abort
        end
      end
      if x[4] && x[4].length > 0
        row = Omni::SkuAlias.create(sku_id: x[1], sku_alias: x[4])
        unless row
          puts "couldn't create sku_alias row for id #{x[0]}, sku_id #{x[1]}, tg alias #{x[4]}"
          abort
        end
      end
    end
  end
end
