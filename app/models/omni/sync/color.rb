class Omni::Sync::Color < Omni::Sync::Base

  def self.go
    excel_to_seed('Color','colors')
  end

  def self.map_to_db(row)
    color_name = row['color_conv'].to_s
    color_name = color_name.chop.chop if color_name.end_with? '.0'
    color = Omni::Color.create(display: color_name, concatenated_name: color_name, short_name: color_name, description: row['color_description'])
    puts "color could not be created for #{color_name}" unless color
  end

  # def self.create_from_sku_load
  #   data = Omni::SkuLoad.all
  #   data.each_with_index do |x, i|
  #     puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '00'
  #     color = Omni::Color.where(display: x.color_conv).first || Omni::Color.where(short_name: x.color_conv).first
  #     # color = Omni::Color.create(display: x.color_conv, concatenated_name: x.color_conv, short_name: x.color_conv) unless color
  #     next unless color
  #     x.color_id = color.color_id
  #     x.save
  #   end

  # end

  # def self.de_dup
  #   delete_count = 0
  #   colors = Omni::Color.all
  #   colors.each do |s|
  #     # used_count = Omni::StyleColor.where(color_id: s.color_id).count
  #     # next if used_count > 0
  #     dup_count = Omni::Color.where(display: s.display).count
  #     next if dup_count < 2
  #     delete_count += 1
  #     s.delete if dup_count > 1
  #   end

  #   puts "delete_count is #{delete_count}"
  # end

end


