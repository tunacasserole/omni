class Omni::Sync::Site < Omni::Sync::Base

  def self.go
    # de_dup
    descriptions
    # upcase_all
  end

  def self.upcase_all
    Omni::Site.all.each do |x|
      puts x.display
      x.display = x.display.upcase
      x.site_name = x.site_name.upcase
      x.save
    end
  end

  def self.descriptions
    Omni::Site.all.each do |x|
      x.description = x.display.gsub!(/\s+/, "")
      x.save
    end
  end

  def self.de_dup
    # delete_count = 0
    # sizes = Omni::Site.all
    # sizes.each do |s|
    #   used_count = Omni::SiteGroupDetail.where(size_id: s.size_id).count
    #   next if used_count > 0
    #   dup_count = Omni::Site.where(display: s.display).count
    #   next if dup_count < 2
    #   delete_count += 1
    #   s.delete if dup_count > 1
    # end

    # puts "delete_count is #{delete_count}"
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