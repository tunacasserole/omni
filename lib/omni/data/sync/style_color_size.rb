class Omni::Data::Sync::StyleColorSize

  def self.go
    create_from_sku_load
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
