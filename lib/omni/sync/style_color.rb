class Omni::Sync::StyleColor < Omni::Sync::Base

  def self.go
    # styles
    # colors
    create_from_sku_load
  end

  def self.create_from_sku_load
    sql = "select style_id, color_id from skus_load group by style_id, color_id"
    data = ActiveRecord::Base.connection.execute sql
    puts "records to process: #{data.count}"
    data.each_with_index do |x, i|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '000'
      Omni::StyleColor.create(style_id: x[0], color_id: x[1])
    end
  end

  def self.create_from_sku_load_orig
    # data = Omni::SkuLoad.all
    puts "records to process: #{data.count}"
    data.each_with_index do |x, i|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '000'
      style = Omni::Style.where(display: x.style_name).first
      color = Omni::Color.where(concatenated_name: x.color_name).first
      if style && color
        row = Omni::StyleColor.where(style_id: style.style_id, color_id: color.color_id).first || Omni::StyleColor.create(style_id: style.style_id, color_id: color.color_id)
        if row
            x.save
        else
          puts "couldn't create style_color row for style_id is #{x.style_id} and color_id is #{x.color_id}"
          abort
        end
      else
        puts "missing style and/or color for #{x.sku_name}, style is #{x.style_name}, color is #{x.color_name}"
      end
    end
  end

  # def self.styles
  #   data_sql = "select a.style_name, b.style_id from skus_load a, styles b where a.style_name = b.display and a.style_id is null"
  #   data = ActiveRecord::Base.connection.execute data_sql
  #   puts "#{Time.now.strftime("%H:%M:%S").yellow}: records to process = #{data.count}"
  #   data.each_with_index do |x, i|
  #     puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '000'
  #     # style_sql = "select style_id from styles where display = '#{x[0]}'"
  #     # result = ActiveRecord::Base.connection.execute style_sql
  #     # if result
  #       # update_sql = "update skus_load set style_id = '#{result.first[0]}' where style_name = '#{x[0]}'"
  #       update_sql = "update skus_load set style_id = '#{x[1]}' where style_name = '#{x[0]}'"
  #       ActiveRecord::Base.connection.execute update_sql
  #     # else
  #       # puts "no style found for #{x[0]}"
  #     # end
  #   end
  # end

  # def self.colors
  #   data_sql = "select a.color_name, b.color_id from skus_load a, colors b where a.color_name = b.display and a.color_id is null"
  #   data = ActiveRecord::Base.connection.execute data_sql
  #   puts "#{Time.now.strftime("%H:%M:%S").yellow}: records to process = #{data.count}"
  #   data.each_with_index do |x, i|
  #     puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '000'
  #       update_sql = "update skus_load set color_id = '#{x[1]}' where color_name = '#{x[0]}'"
  #       ActiveRecord::Base.connection.execute update_sql
  #     # else
  #       # puts "no color found for #{x[0]}"
  #     # end
  #   end
  # end

end
