class Omni::Data::Sync::SkuAlias

  def self.go
    create_from_sku_load
    # de_dup
  end

  def self.create_from_sku_load
    data = ActiveRecord::Base.connection.execute "select id, sku_id, mark_sku, bu_sku, tg_sku from skus_load order by sku_name"
    bar = ProgressBar.new(data.count)
    data.each_with_index do |x,i|
      bar.increment!
      # puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '000'
      if x[2] && x[2].length > 1
        row = Omni::SkuAlias.create(sku_id: x[1], sku_alias: x[2], alias_source: 'PARKER')
        unless row
          puts "couldn't create sku_alias row for id #{x[0]}, sku_id #{x[1]}, mark alias #{x[2]}"
          abort
        end
      end
      if x[3] && x[3].length > 0
        row = Omni::SkuAlias.create(sku_id: x[1], sku_alias: x[3], alias_source: 'BUCKHEAD')
        unless row
          puts "couldn't create sku_alias row for id #{x[0]}, sku_id #{x[1]}, bu alias #{x[3]}"
          abort
        end
      end
      if x[4] && x[4].length > 0
        row = Omni::SkuAlias.create(sku_id: x[1], sku_alias: x[4], alias_source: 'TRUE GRITS')
        unless row
          puts "couldn't create sku_alias row for id #{x[0]}, sku_id #{x[1]}, tg alias #{x[4]}"
          abort
        end
      end
    end
  end

  def self.de_dup
    sql = "select sku_alias_id, count(*) from sku_aliases group by sku_alias_id order by count(*) desc"
    data = ActiveRecord::Base.connection.execute sql
    puts "count is #{data.count}"
    data.each_with_index do |x,i|
      # puts "sku_alias_id is #{x[0]}"
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '00'
      break if x[1] == 1 or i > 1508
      sku_alias = Omni::SkuAlias.where(sku_alias_id: x[0]).first
      # puts "deleting sku_alias_id #{x[0]}"
      sku_alias.delete
    end
  end

end
