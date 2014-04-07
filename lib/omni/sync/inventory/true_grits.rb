
# require 'roo'

class Omni::Sync::Grits < Omni::Sync::Base

  def self.xit
    # put "no locations found for these outlets: #{@no_locations}"
    # put "no skus found for these stock-size combos: #{@no_skus}"
    put "no sku found: #{@no_sku_count}"
    put "no location found for that outlet: #{@no_location_count}"
    put "***********************************"
    put "legacy source rows: #{@source_count}"
    put "legacy rows skipped: #{@source_count - @created_count}"
    put "omni rows created: #{@created_count}"
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
    @start_date = Date.parse('1-1-2011')
    @end_date = Date.parse('31-12-2013')
    @total_count = 0
    @created_count = 0
    @source_count = 0
    @no_sku_count = 0
    @no_location_count = 0
    @no_inventory_count = 0
    @days = 0
    @grits_stores = ['60','61','62','63','64','65','66']

    @locations = Omni::Location.to_hash('GRITS')
    @skus = Omni::Sku.to_hash('GRITS')
    @period_py2 = Omni::Period.where(:display => '2011').first.period_id
    @period_py1= Omni::Period.where(:display => '2012').first.period_id
    @period_ytd = Omni::Period.where(:display => '2013').first.period_id
    @location_id = ''
    @updates = []
    @no_locations = []
    @no_skus = []
    @order_lines = []
  end

  def self.get_id(location_id, sku_id)
    row_id = @inventories["#{location_id},#{sku_id}"] || Buildit::Util::Guid.generate
  end

  def self.load_file(file_name)
    load
    rows = []
    file_name = File.join(Rails.root, '/db/import/', file_name)

    if file_name.end_with? '.xlsx'
      s = Roo::Excelx.new(file_name)
      s.default_sheet = s.sheets.first
      header = s.row(1)
      (2..s.last_row).each do |i|
        # break if i > 1000
        next unless s.row(i)[0]
        row = Hash[[header, s.row(i)].transpose]
        row.each_key{|x| row[x] = row[x].to_s.strip if row[x]}
        rows << row
      end
    end

    if file_name.end_with? '.txt'
      header = File.readlines(file_name).first.split("\t")
      File.readlines(file_name)[1..-1].map do |line|
        rows << Hash[[header, line.split("\t")].transpose]
      end
    end

    rows
  end

  def self.inventory
    @inventories = Omni::Inventory.to_hash
    data = load_file('DATA.txt')
    data.each do  |x|
      @source_count += 1
      sku_id = @skus[x['TGSU SKU #']]
      unless sku_id
        @no_sku_count += 1
        @no_skus << x['TGSU SKU #']
        next
      end

      @grits_stores.each do |loc|
      # loc = '60'
        location_id = @locations[loc]
        oh = x["#{loc} O/H"] || 0
        oo = x["#{loc} O/O"] || 0
        row_id = get_id(location_id, sku_id)
        next if (oh == '0') and (oo == '0')
        @created_count += 1
        # @updates.push "('#{row_id}','#{sku_id}','#{location_id}',#{oh},#{oo},'#{date}')"
        ActiveRecord::Base.connection.execute "insert into inventories (inventory_id, sku_id, location_id, on_hand_units, supplier_on_order_units) VALUES ('#{row_id}', '#{sku_id}', '#{location_id}',#{oh},#{oo}) ON DUPLICATE KEY UPDATE on_hand_units = VALUES(on_hand_units), supplier_on_order_units = VALUES(supplier_on_order_units)"
        if @created_count.to_s.end_with? '000'
          puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{@created_count.to_s}"
        end
      end

    end

    xit

  end

  def self.results
    @period_results = {} #Omni::PeriodResult.to_hash
    data = load_file('sold.xlsx')
    data.each do  |x|
      @source_count += 1
      sku_id = @skus[x['Item#'].chop.chop]
      unless sku_id
        @no_sku_count += 1
        @no_skus << x['TGSU SKU #']
        next
      end

      row_id = @period_results["#{@location_id},#{sku_id},#{@period_ytd}"] || Buildit::Util::Guid.generate
      units = x['YTD']
      period_id = @period_ytd
      ActiveRecord::Base.connection.execute "insert into period_results (period_result_id, sku_id, period_id, net_sale_units) VALUES ('#{row_id}', '#{sku_id}', '#{period_id}', #{units}) ON DUPLICATE KEY UPDATE net_sale_units = VALUES(net_sale_units)" if units != "0.0"

      row_id = @period_results["#{@location_id},#{sku_id},#{@period_py1}"] || Buildit::Util::Guid.generate
      units = x['PY1']
      period_id = @period_py1
      ActiveRecord::Base.connection.execute "insert into period_results (period_result_id, sku_id, period_id, net_sale_units) VALUES ('#{row_id}', '#{sku_id}', '#{period_id}', #{units}) ON DUPLICATE KEY UPDATE net_sale_units = VALUES(net_sale_units)" if units != "0.0"

      row_id = @period_results["#{@location_id},#{sku_id},#{@period_py2}"] || Buildit::Util::Guid.generate
      units = x['PY2']
      period_id = @period_py2
      ActiveRecord::Base.connection.execute "insert into period_results (period_result_id, sku_id, period_id, net_sale_units) VALUES ('#{row_id}', '#{sku_id}', '#{period_id}', #{units}) ON DUPLICATE KEY UPDATE net_sale_units = VALUES(net_sale_units)" if units != "0.0"

      if @created_count.to_s.end_with? '000'
        puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{@created_count.to_s}"
      end
      @created_count += 1
    end

    xit

  end
end
