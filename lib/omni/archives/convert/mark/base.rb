require 'roo'
class Omni::Convert::Mark::Base

  def self.constants
    @@models =['inventory']
    @@fetch_rows = 100

  end

  def self.run(model_name)
    puts 'run'

    constants unless defined? @@models

  end

  def self.excel_to_hash(folder_name, file_name, tab_name)
    # Takes an excel folder name, file name and tab name, and returns an array of hashed, stripped, transposed rows
    # Sample call:  @@models = excel_to_hash File.join(Rails.root, db, meta), @@meta_file, 'application_models'
    rows = []
    file = File.open(File.join(folder_name, file_name), mode = 'r')
    excel = Excelx.new(file.path, nil, :ignore)
    puts folder_name + '/' + file_name + ' tab: ' + tab_name unless excel.sheets.index(tab_name)
    excel.default_sheet = excel.sheets.index(tab_name) + 1
    header = excel.row(1)
    (2..excel.last_row).each do |i|
      next unless excel.row(i)[0]
      row = Hash[[header, excel.row(i)].transpose]
      row.each_key{|x| row[x] = row[x].to_s.strip if row[x]}
      rows << row
    end
    return rows
  end

end