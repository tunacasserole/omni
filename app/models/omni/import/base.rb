# require 'roo'
class Omni::Import::Base 
  
  def self.load_import(import_id)
    @@import = Omni::Import.where(:import_id => import_id).first
    
    # Delete old logs
    #  puts "== destroying logs"
    # @@import.logs.each do |log|
    #   log.destroy
    # end
    # puts "== done destroying logs"
  end

  def self.log_it(the_message)
      puts "logging message: #{the_message}"
      # import_id = @@import.import_id
      # import_id = 'D66E37AEFBA411E28B9420C9D047DD15'
      # the_message = 'Omni::Import::ExcelCsv::Generic'
      # Omni::Log.create(:logable_type => 'Omni::Import', :logable_id => import_id, :log_type => 'info', :log_title => 'none', :log_message => the_message)
  end

  def self.constants
    @@project_id = Buildit::StudioProject.all(:project_code => Buildit::Framework.configuration.studio['project']).first.project_id    
    @@data_folder = File.join(Rails.root,'db','meta')
    @@data_file = 'core_data table assignment, v6.xlsx'
    @@models = ActiveRecord::Base.subclasses.collect {|type| type.name}.sort
    @@poly_hash = {'stockable_id' => 'StockLedgerActivity','noteable_id' => 'Note','pickable_id' => 'PickTicket'}
    @@skip_these = ['manifest_id','post_user_id','request_user_id','customer_account_id','user_id']
    @@skip_these_tables = ['container_details','users','location_users','skus2','state_codes','person','vouchers','person_sites','bin_tags','customer_tags','location_tags','price_changes','promotions','site_tags','sku_tags','style_tags','supplier_programs','supplier_program_details','supplier_tags','tags']
    @@exceptions = []
    @@core_data_main = excel_to_hash @@data_folder, @@data_file, 'main'
  end
    
  def self.load(model_name)
    constants unless defined? @@project_id
    @@core_data = excel_to_hash @@data_folder, @@data_file, model_name.tableize
    # @@core_data.reject! {|row| @@skip_these.include? row['attribute_name']}
  end 

  def self.excel_to_hash(folder_name, file_name, tab_name)
    # Takes an excel file name and a tab name, and returns an array of stripped, transposed rows
    # Sample call:  @@models = excel_to_hash File.join(Rails.root,'db/meta/model_headers.xlsx'), 'models'
    puts "started reading excel into memory at #{Time.now.to_s.chop.chop.chop.chop.chop}"    
    rows = []
      # file = File.open(File.join(folder_name, file_name), mode = 'r')
      # excel = Excelx.new(file.path, nil, :ignore)
      # tab_name = 'Sheet1' if !excel.sheets.index(tab_name)
      # excel.default_sheet = excel.sheets.index(tab_name) + 1
      # header = excel.row(1)
      # puts "going into loop"
      # (2..1000).each do |i|
      #   # break if i > 100
      #   next unless excel.row(i)[0]
      #   row = Hash[[header, excel.row(i)].transpose]      
      #   row.each_key{|x| row[x] = row[x].to_s.strip if row[x]}
      #   rows << row
      # end
    puts "finished reading #{rows.count.to_s} rows from excel into memory at #{Time.now.to_s.chop.chop.chop.chop.chop} "    
    return rows
  end

end