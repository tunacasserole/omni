class Omni::Bts::Base

  def self.xit
    # put "no locations found for these outlets: #{@no_locations}"
    # put "no skus found for these products: #{@no_skus}"
    # put "no sku found for that item: #{@no_sku_count}"
    # put "no location found for that store: #{@no_location_count}"
    # put "no inventory found: #{@no_id_count}"
    # put "***********************************"
    # put "legacy source rows: #{@source_count}"
    # put "legacy rows skipped: #{@source_count - @created_count}"
    # put "omni rows created: #{@created_count}"
    # put "***********************************"
    # put "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"
    # puts @output
    # exit
  end

  def self.put(message)
    # @output = [] unless @output
    # @output << "#{Time.now.strftime("%H:%M:%S").yellow}: #{message}"
    # puts "#{Time.now.strftime("%H:%M:%S").yellow}: #{message}"
  end

  def self.load
    # puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
    # @start_time = Time.now
    # @created_count = 0
    # @source_count = 0
    # @no_sku_count = 0
    # @no_location_count = 0
    # @no_periods = []
    # @no_period_count = 0
    # @locations = Omni::Location.source_hash('PARKER')
    # @skus = Omni::Sku.source_hash('PARKER')
    # @updates = []
  end

  def self.results
    # puts "---results---"
    # load
    # xit
  end
end