require 'roo'
require 'roo/excel'

class Omni::Meta::Base 
  
  def self.constants
    #puts 'base'
    @@verbose = false
    @@debug = false
    @@meta_folder = File.join(Rails.root, 'vendor','gems','omni','db','meta')
    @@meta_file = 'model_meta.xlsx'
    @@logic_file = 'logic_meta.xlsx'    
    @@attr_file = 'attribute_meta.xlsx'
    if false # run for mark models
      @@meta_file = 'mark_meta.xlsx' 
      @@attr_file = 'mark_meta'
    end
    @@data_file = 'core_data table assignment, v5.xlsx'
    #@@project_id = Buildit::StudioProject.all(:project_code => Buildit::Framework.configuration.studio['project']).first.project_id
    @@project_id = '0C391A30852011E28A1F123139183A42'
    @@poly_hash = {'stockable_id' => 'StockLedgerActivity','noteable_id' => 'Note','pickable_id' => 'PickTicket'}
    @@poly_models = ['WorkOrder','StockLedgerActivity','PickTicket','Bom','Shipment','Note','Attachment']
    @@skip_these_attributes = ['vehicle_id','manifest_id','demand_forecast_profile_id','pallet_id','landed_cost_model_id','customer_account_id','fob_point']
    #@@skip_these_tables = ['users','location_users','skus2','work_orders','bin_tags','customer_tags','location_tags','price_changes','promotions','site_tags','sku_tags','style_tags','supplier_programs','supplier_program_details','supplier_tags','tags']
    #@@exceptions = []

    # Load attribute spreadsheets and other Excel based meta data into arrays for faster import
    @@models = excel_to_hash @@meta_folder, @@meta_file, 'models'
    @@models.reject! {|row| ['Buildit','Permission'].include? row['model_group']}
    @@models_with_states = ['Adjustment','Allocation','AllocationDetail','Container','ContainerDetail','Production','ProductionBom','ProductionDetail','Order','OrderDetail','Payment','Projection','ProjectionDetail','Purchase','PurchaseDetail','PickTicket','Shipment','Transfer', 'Voucher','WorkOrder','StockLedgerActivity','Receipt','ReceiptDetail','Sku','Style','SkuPriceRequest']
    @@models.sort!{|x,y| x['model_name'] <=> y['model_name']}

  end
    
  def self.run(model_name)
    #puts 'run'
    attr_tab = ''
    constants unless defined? @@project_id
    @@has_states = @@models_with_states.include? model_name 
    @@models.each {|row| attr_tab = row["model_group"].downcase if row["model_name"] == model_name}
    abort "can't find attribute spreadsheet" if !attr_tab
    @@attributes = excel_to_hash @@meta_folder, @@attr_file, attr_tab 
    @@attributes.reject! {|row| row['model_name'] != model_name}
    #@@attributes.each {|row| puts row['attribute_name']} if @@debug
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