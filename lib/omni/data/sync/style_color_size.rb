class Omni::Data::Sync::StyleColorSize

  def self.go
    # create_from_sku_load
    update_skus
  end

  def self.update_skus
    data = ActiveRecord::Base.connection.execute "select a.sku_id, a.size_id, b.style_color_id from skus a, style_colors b where a.size_id is not null and a.style_color_size_id is null and a.style_id = b.style_id and a.color_id = b.color_id"
    bar = ProgressBar.new(data.count)
    puts "records to process: #{data.count}"
    data.each do |x|
      bar.increment!
      # puts "sku is #{x[0]}  style_color is #{x[2]}  size is #{x[1]}"
      scs = ActiveRecord::Base.connection.execute "select style_color_size_id from style_color_sizes where style_color_id = '#{x[2]}' and size_id = '#{x[1]}'"
      ActiveRecord::Base.connection.execute "update skus set style_color_size_id = '#{scs.first[0]}' where sku_id = '#{x[0]}'"
      ActiveRecord::Base.connection.execute "update style_color_sizes set sku_id = '#{x[0]}' where style_color_size_id = '#{scs.first[0]}'"
    end
  end

  def self.create_from_sku_load
    sql = "select style_color_id, size_id from skus_load"
    data = ActiveRecord::Base.connection.execute sql
    puts "records to process: #{data.count}"
    data.each_with_index do |x, i|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '000'
      Omni::StyleColorSize.create(style_color_id: x[0], size_id: x[1])
    end
  end

    def self.create_from_sku_load_orig
    data = Omni::SkuLoad.where('style_color_size_id is null')
    # data = Omni::SkuLoad.where('select id, style_color_id, size_id from skus_load where style_color_size_id not in (select style_color_size_id from style_color_sizes)')
    puts "records to process: #{data.count}"
    data.each_with_index do |x, i|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '000'
      row = Omni::StyleColorSize.where(style_color_id: x.style_color_id, size_id: x.size_id).first || Omni::StyleColorSize.create(style_color_id: x.style_color_id, size_id: x.size_id)
      if row
        x.style_color_size_id = row.style_color_size_id
        x.save
      else
        puts "couldn't create style_color_size row for style_color_id is #{x.style_color_id} and size_id is #{x.size_id}"
        abort
      end
    end
  end

end
