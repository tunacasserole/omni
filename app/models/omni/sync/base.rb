class Omni::Sync::Base

  def self.go
    Omni::Sync::Mark.inventory
    Omni::Sync::Rms.inventory
    Omni::Sync::Grits.inventory
    # Omni::Sync::MasterData.sync_skus
  end

  def self.xit
    # put "no locations found for these outlets: #{@no_locations}"
    # put "no skus found for these stock-size combos: #{@no_skus}"
    # put "no inventory rows: #{@no_row_rows}"
    put "no sku found for that stock-size: #{@no_sku_count}"
    put "no location found for that outlet: #{@no_location_count}"
    put "no inventory found: #{@no_id_count}"
    put "***********************************"
    put "legacy source rows: #{@source_count}"
    put "omni rows created: #{@created_count}"
    put "legacy rows skipped: #{@source_count - @created_count}"
    put "***********************************"
    put "== finished in #{(Time.now - @start_time).round(0).to_s.cyan}s"
    puts @output
    # @no_locations.each {|x| puts x}
    exit
  end

  def self.put(message)
    @output = [] unless @output
    @output << "#{Time.now.strftime("%H:%M:%S").yellow}: #{message}"
    # puts "#{Time.now.strftime("%H:%M:%S").yellow}: #{message}"
  end

  def self.load
    puts "== starting at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
    @start_time = Time.now
    @date = Date.parse('1-1-1999')
    # @start_date = Date.parse('1-1-2011')
    # @end_date = Date.parse('31-12-2013')
    # @total_count = 0
    @created_count = 0
    @source_count = 0
    @no_sku_count = 0
    @no_location_count = 0
    @no_id_count = 0
    @days = 0

    @locations = Omni::Location.source_hash('PARKER')
    @skus = Omni::Sku.source_hash('PARKER')
    @inventories = Omni::Inventory.source_hash

    @updates = []
    @no_locations = []
    @no_skus = []
    @no_row = []
    @order_lines = []
  end
end
