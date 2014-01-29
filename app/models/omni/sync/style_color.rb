class Omni::Sync::StyleColor < Omni::Sync::Base

  def self.go
    create_from_sku_load
  end

    def self.create_from_sku_load
    data = Omni::SkuLoad.where('style_color_id is null')
    puts "records to process: #{data.count}"
    data.each_with_index do |x, i|
      puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '00'
      row = Omni::StyleColor.where(style_id: x.style_id, color_id: x.color_id).first || Omni::StyleColor.create(style_id: x.style_id, color_id: x.color_id)
      if row
        x.style_color_id = row.style_color_id
        x.save
      else
        puts "couldn't create style_color row for style_id is #{x.style_id} and color_id is #{x.color_id}"
        abort
      end
    end
  end

end
