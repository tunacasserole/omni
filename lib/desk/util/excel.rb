class Omni::Util::Excel
 def self.excel_to_hash(file_name)
    # Takes an excel file name and a tab name, and returns an array of stripped, transposed rows
    # Sample call:  @@data = excel_to_hash File.join(Rails.root,'db/meta/model_headers.xlsx'), 'models'
    # Access the data:  @data.first['column_name']
    puts "== reading excel into memory at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
    folder_name = File.join(Rails.root, 'db','import')
    rows = []
    file = File.open(File.join(folder_name, file_name), mode = 'r')
    excel = Roo::Excelx.new(file.path)
    # tab_name = 'sheet1'
    # excel.default_sheet = excel.sheets.index(tab_name) ? excel.sheets.index(tab_name) + 1 : excel.sheets[1]
    header = excel.row(1)
    (2..excel.last_row).each do |i|
      break if i > 10
      Omni::Util::Clock.go(row: i, total: excel.last_row - 1)
      next unless excel.row(i)[0]
      row = Hash[[header, excel.row(i)].transpose]
      # row.each_key{|x| row[x] = row[x].to_s.strip if row[x]}
      # next if ['0','-'].include?(excel.row(i)[0])
      rows << row
    end
    puts "== finished reading #{rows.count.to_s} rows at " << Time.now.strftime("%H:%M:%S").yellow << " ============ "
    return rows
  end

  def self.excel_to_seed(model_name, table_name)

    # delete all data for a fresh start
    # "Omni::#{model_name}".constantize.delete_all

    # reset the sequence number
    # seq(table_name)

    # load the excel data into a hash and map it to the database
    data = excel_to_hash("#{table_name}.xlsx")
    data.each_with_index {|x,i| "Omni::Data::Sync::#{model_name}".constantize.map_to_db(x); Omni::Util::Clock.go(row: i, total: ata.count)}

    # optionally call seed file generator
    # dump_to_seed(model_name)

    # test that the correct number of rows were created

  end

  # def self.get_gem(model_name)
  #   if ['Lookup','Sequence'].include? model_name
  #     gem_name = 'Buildit'
  #   else
  #     gem_name = 'Omni'
  #   end
  # end
end
