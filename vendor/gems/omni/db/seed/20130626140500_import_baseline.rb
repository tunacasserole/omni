
# Source Systems
Buildit::Lookup.create(:lookup_id => '12348TOTETE2323MM32312313B100AAA', :code => 'PARKER', :default_text => "Parker's Mark System", :category => 'DATA_SOURCE', :position => 1)
# Buildit::Lookup.create(:lookup_id => '1234234OTE28XXO8E9U312313B100AAA', :code => 'OMNI', :default_text => "Omni System", :category => 'DATA_SOURCE', :position => 2)
Buildit::Lookup.create(:lookup_id => '123456749528XXO5ED3312313B100AAA', :code => 'BUCKHEAD', :default_text => "Buckhead's RMS System", :category => 'DATA_SOURCE', :position => 3)
Buildit::Lookup.create(:lookup_id => '123678929728XXJ6EIO312313B100AAA', :code => 'GRITS', :default_text => "True Grits' Retail Pro", :category => 'DATA_SOURCE', :position => 4)
Buildit::Lookup.create(:lookup_id => '12348902XXX8XXA6EOH312313B100AAA', :code => 'CSV', :default_text => "Custom CSV or Spreadsheet", :category => 'DATA_SOURCE', :position => 5)

# # Target Systems - only Omni is supported currently
# Buildit::Lookup.create(:lookup_id => '12348902XXX8XXEHJ8E312313B100AAA', :code => 'OMNI', :default_text => "Omni System", :category => 'IMPORT_TARGET', :position => 1)

# Job Types
Buildit::Lookup.create(:lookup_id => '12348902XXX8XODEHU2312313GENERIC', :code => 'GENERIC', :default_text => "Load any table from a csv", :category => 'JOB_TYPE', :position => 1)
Buildit::Lookup.create(:lookup_id => '12348902XXX8XODEHU23123INVENTORY', :code => 'INVENTORY', :default_text => "Convert inventory from legacy system to omni", :category => 'JOB_TYPE', :position => 2)
Buildit::Lookup.create(:lookup_id => '12348902XXX8XXOTJ9E312313B1ORDER', :code => 'ORDER', :default_text => "Order - Load period results from order history", :category => 'JOB_TYPE', :position => 3)
Buildit::Lookup.create(:lookup_id => '12348902XXX8XODEHU2312313B100SKU', :code => 'SKU', :default_text => "Sku - Load skus from csvs", :category => 'JOB_TYPE', :position => 4)

# Import Log Sequence
Buildit::Sequence.create(:sequence_code => 'LOG_NBR', :padding => 3, :value => 1000)