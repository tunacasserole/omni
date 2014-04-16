class Omni::Data::Sync::Size < Omni::Data::Sync::Base

  def self.go
    excel_to_seed('Size','sizes')
  end

  def self.map_to_db(row)
    size = Omni::Size.new(
      display: row['display'],
      description: row['description'],
      short_name: row['short_name'],
      size_type: 'STANDARD',
      concatenated_name: row['display'],
      # dimension_1: row['dimension_1'],
      dimension_2: row['dimension_2']
     )

    puts "size could not be created for #{row['display'].to_s}" unless size.save
  end

  def self.de_dup
    delete_count = 0
    sizes = Omni::Size.all
    sizes.each do |s|
      used_count = Omni::SizeGroupDetail.where(size_id: s.size_id).count
      next if used_count > 0
      dup_count = Omni::Size.where(display: s.display).count
      next if dup_count < 2
      delete_count += 1
      s.delete if dup_count > 1
    end

    puts "delete_count is #{delete_count}"
  end

end


  # def self.xit
  #   # put "no locations found for these outlets: #{@no_locations}"
  #   # put "no skus found for these stock-size combos: #{@no_skus}"
  #   put "no sku found: #{@no_sku_count}"
  #   put "no location found for that outlet: #{@no_location_count}"
  #   put "***********************************"
  #   put "legacy source rows: #{@source_count}"
  #   put "legacy rows skipped: #{@source_count - @created_count}"
  #   put "omni rows created: #{@created_count}"
  #   put "***********************************"
  #   put "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"
  #   puts @output
  #   # @no_locations.each {|x| puts x}
  #   exit
  # end
