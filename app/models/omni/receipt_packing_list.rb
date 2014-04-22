  class Omni::ReceiptPackingList < Omni::Receipt

  def upload(attachment)
     # Create a temporary file and write the attachment content data to it
    foldername = File.join(Rails.root, 'db','tmp')
    filename = "temp_pack_list#{Time.now.strftime("%H_%M_%S")}.xlsx"
    file = File.open(File.join(foldername, filename), "w+b")
    file.write attachment.content.data
    file.close

    # read the excel file data into an array of rows
    tabname = '2.PACKING_LIST'
    header_row = 16
    data = excel_to_hash foldername, filename, tabname, header_row

    # for each row of spreadsheet data, create a sku carton row
    data.each_with_index do |row,i|
      puts "processed #{i.to_s} rows at #{Time.now.to_s.chop.chop.chop.chop.chop}" if i.to_s.end_with? '000'
      # puts row['Description']
    end

    # The Packing List Upload feature will take an Excel spreadsheet as input and create receiving detail records from it.
    # Specifically, for each spreadsheet uploaded, the system will add:
      # A ReceiptPurchase record for every Purchase Order that has line items in the receipt.
      # A ReceiptDetail record for every Purchase Detail (SKU) in the spreadsheet (every SKU being received).  The total received units for the SKU are added up from all of the carton detail for the SKU.
      # A ReceiptCarton record for every detail row of the spreadsheet (every SKU/Carton # combination).

# The receipt will be added in draft state and then managed through its life cycle just like a manually created receipt.

  end

  def test
    receipt = Omni::Receipt.where(receipt_nbr: '2269').first
    receipt.upload
  end

  def excel_to_hash(folder_name, file_name, tab_name, header_row)
    # Takes an excel file name and a tab name, and returns an array of stripped, transposed rows
    # Sample call:  @@models = excel_to_hash File.join(Rails.root,'db/meta/model_headers.xlsx'), 'models'
    puts "started reading excel from content into memory at #{Time.now.to_s.chop.chop.chop.chop.chop}"
    rows = []
      file = File.open(File.join(folder_name, file_name), mode = 'r')
      excel = Roo::Excelx.new(file.path)
      excel.default_sheet = excel.sheets.index(tab_name) ? excel.sheets.index(tab_name) + 1 : excel.sheets[1]
      header = excel.row(header_row)
      ((header_row+1)..1000).each do |i|
        break if i > 100
        next unless excel.row(i)[0]
        row = Hash[[header, excel.row(i)].transpose]
        row.each_key{|x| row[x] = row[x].to_s.strip if row[x]}
        rows << row
      end
    puts "finished reading #{rows.count.to_s} rows from excel into memory at #{Time.now.to_s.chop.chop.chop.chop.chop} "
    return rows
  end
end
