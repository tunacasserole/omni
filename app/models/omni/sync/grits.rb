
# require 'roo'

class Omni::Sync::Grits < Omni::Import::Base

  def self.xit
    # put "no locations found for these outlets: #{@no_locations}"
    # put "no skus found for these stock-size combos: #{@no_skus}"
    put "no sku found: #{@no_sku_count}"
    put "no location found for that outlet: #{@no_location_count}"
    put "omni rows created: #{@created_count}"
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
    @no_sku_count = 0
    @no_location_count = 0
    @no_inventory_count = 0
    @days = 0

    @locations = Omni::Location.source_hash('GRITS')
    @skus = Omni::Sku.source_hash('GRITS')
    @inventories = Omni::Inventory.source_hash

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
        break if i > 10
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
    data = load_file('DATA.txt')
    data.each do  |x|
      sku_id = @skus[x['TGSU SKU #']]
      unless sku_id
        @no_sku_count += 1
        @no_skus << x['TGSU SKU #']
        next
      end

      ActiveRecord::Base.connection.execute "insert into inventories (inventory_id, sku_id, location_id, on_hand_units, supplier_on_order_units) VALUES ('#{get_id(@locations['60'], sku_id)}', '#{sku_id}', '#{@locations['60']}',#{x['60 O/H']},#{x['60 O/O']})"  if x['60 O/H'].to_i != 0 || x['60 O/O'].to_i != 0
      # ActiveRecord::Base.connection.execute "insert into inventories (inventory_id, sku_id, location_id, on_hand_units, supplier_on_order_units) VALUES ('#{get_id}', '#{sku_id}', '#{@locations['61']}',#{x['61 O/H']},#{x['61 O/O']})"  if x['61 O/H'].to_i != 0 || x['61 O/O'].to_i != 0
      # ActiveRecord::Base.connection.execute "insert into inventories (inventory_id, sku_id, location_id, on_hand_units, supplier_on_order_units) VALUES ('#{get_id}', '#{sku_id}', '#{@locations['62']}',#{x['62 O/H']},#{x['62 O/O']})"  if x['62 O/H'].to_i != 0 || x['62 O/O'].to_i != 0
      # ActiveRecord::Base.connection.execute "insert into inventories (inventory_id, sku_id, location_id, on_hand_units, supplier_on_order_units) VALUES ('#{get_id}', '#{sku_id}', '#{@locations['63']}',#{x['63 O/H']},#{x['63 O/O']})"  if x['63 O/H'].to_i != 0 || x['63 O/O'].to_i != 0
      # ActiveRecord::Base.connection.execute "insert into inventories (inventory_id, sku_id, location_id, on_hand_units, supplier_on_order_units) VALUES ('#{get_id}', '#{sku_id}', '#{@locations['64']}',#{x['64 O/H']},#{x['64 O/O']})"  if x['64 O/H'].to_i != 0 || x['64 O/O'].to_i != 0
      # ActiveRecord::Base.connection.execute "insert into inventories (inventory_id, sku_id, location_id, on_hand_units, supplier_on_order_units) VALUES ('#{get_id}', '#{sku_id}', '#{@locations['65']}',#{x['65 O/H']},#{x['65 O/O']})"  if x['65 O/H'].to_i != 0 || x['65 O/O'].to_i != 0
      # ActiveRecord::Base.connection.execute "insert into inventories (inventory_id, sku_id, location_id, on_hand_units, supplier_on_order_units) VALUES ('#{get_id}', '#{sku_id}', '#{@locations['66']}',#{x['66 O/H']},#{x['66 O/O']})"  if x['66 O/H'].to_i != 0 || x['66 O/O'].to_i != 0

      if @created_count.to_s.end_with? '000'
        puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{@created_count.to_s}"
      end
      @created_count += 1
    end

    xit

  end

  def self.results
    data = load_file('sold.xlsx')
    data.each do  |x|
      sku_id = @skus[x['Item#'].chop.chop]
      unless sku_id
        @no_sku_count += 1
        @no_skus << x['TGSU SKU #']
        next
      end

      # period_ytd = Omni::Period.
      ActiveRecord::Base.connection.execute "insert into period_results (period_result_id, sku_id, net_sale_units, period_id) VALUES ('#{SecureRandom.uuid.gsub('-','').upcase}', '#{sku_id}', #{x['YTD']},#{period_ytd})" if x['YTD'] != "0.0"
      ActiveRecord::Base.connection.execute "insert into period_results (period_result_id, sku_id, net_sale_units, period_id) VALUES ('#{SecureRandom.uuid.gsub('-','').upcase}', '#{sku_id}', #{x['PY1']},#{period_py1})" if x['PY1'] != "0.0"
      ActiveRecord::Base.connection.execute "insert into period_results (period_result_id, sku_id, net_sale_units, period_id) VALUES ('#{SecureRandom.uuid.gsub('-','').upcase}', '#{sku_id}', #{x['PY2']},#{period_py2})" if x['PY2'] != "0.0"
      if @created_count.to_s.end_with? '000'
        puts "#{Time.now.strftime("%H:%M:%S").yellow}: processing row: #{@created_count.to_s}"
      end
      @created_count += 1
    end

    xit

  end
end
