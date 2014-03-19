class Omni::Sync::StyleColor < Omni::Sync::Base

  def self.go
    create_from_sku_load
  end

  def self.create_from_sku_load
    data = Omni::SkuLoad.all
    puts "records to process: #{data.count}"
    data.each_with_index do |x, i|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '00'
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

end
