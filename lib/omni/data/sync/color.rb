class Omni::Data::Sync::Color

  def self.go
    excel_to_seed('Color','colors')
  end

  def self.map_to_db(row)
    color = Omni::Color.new(
      display: row['color display name'],
      short_name: row['short name'],
      concatenated_name: row['concat name'],
      is_plaid: row['is_plaid'],
      is_stripe: row['is_stripe']
     )

    puts "color could not be created for #{row['display'].to_s}" unless color.save
  end

  # def self.create_from_sku_load
  #   data = Omni::SkuLoad.all
  #   data.each_with_index do |x, i|
  #     puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{i.to_s}" if i.to_s.end_with? '000'
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


