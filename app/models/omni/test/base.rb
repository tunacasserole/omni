require 'colored'
class Omni::Test::Base

  def self.go
    constants
    create_base_test_data

    # RUN TESTS BY MODULE
    Omni::Test::Allocation.go
    Omni::Test::Purchase.go
    Omni::Test::Projection.go
    Omni::Test::Bts.go
    # END OF RUN TESTS

    reindex_data
    output_results
  end

  def self.test_it(scenario, expected, actual)
    # FOR DEBUGGING
    # puts "scenario #{@@test_number +1}: #{@@model_name}  #{scenario}  #{expected} <=> #{actual}"
    # RUN TEST BY COMPARING EXPECTED VS ACTUAL RESULTS
    success = (expected == actual)
    # OUTPUT TEST RESULTS
    result = "#{(@@test_number += 1).to_s}. #{@@model_name} #{@@model_action} | #{scenario}  result: #{success ? 'PASS' : 'FAIL'} ==> expected:#{expected.to_s} -- actual:#{actual.to_s}"
    @@results << (success ?  result.green : result.red)
    @@passed_tests += 1 if success
  end

  def self.output_results
    # output test results to screen
    @@results << ["**************************************************************************************************************************\n\n"]
    @@results << "TEST RESULTS: #{@@passed_tests.to_s} out of #{@@test_number.to_s} tests passed\n\n"
    puts @@results
  end

  def self.constants
    @@model_name = '40'
    @@model_action = '40'
    @@test_number = 0
    @@passed_tests = 0
    @@results = ["\n**************************************** RUN RESULTS *********************************************************************"]
  end

  def self.create_base_test_data
    Omni::AllocationProfile.all.each {|x|x.delete}
    Omni::AllocationProfile.create(:allocation_profile_id => '913BB680231211XXXXBTSPERCENTSTOR', :display => 'bts need with allocate by percent to store', :allocation_formula => 'BTS_NEED', :percent_to_allocate => 100,:excess_demand_option => 'APPORTION_BY_PERCENT', :excess_supply_option => 'APPORTION_TO_STORES',:rounding_option => 'NONE') unless Omni::AllocationProfile.where(:allocation_profile_id => '913BB680231211E3E4BTSPERCENTSTOR').first
    Omni::AllocationProfile.create(:allocation_profile_id => '913BB680231211XXXXXBTSDEMANDWHSE', :display => 'bts need with allocate by demand and warehouse', :allocation_formula => 'BTS_NEED', :percent_to_allocate => 100,:excess_demand_option => 'FILL_LARGEST_DEMAND', :excess_supply_option => 'LEAVE_IN_WAREHOUSE',:rounding_option => 'NONE') unless Omni::AllocationProfile.where(:allocation_profile_id => '913BB680231211E3BE4BTSDEMANDWHSE').first
    Omni::AllocationProfile.create(:allocation_profile_id => '913BB680231211E3PROJECTION1UNITS', :display => 'projection 1 units profile', :allocation_formula => 'PROJECTION_1_UNITS', :percent_to_allocate => 100,:excess_demand_option => 'FILL_LARGEST_DEMAND', :excess_supply_option => 'LEAVE_IN_WAREHOUSE',:rounding_option => 'NONE') unless Omni::AllocationProfile.where(:allocation_profile_id => '913BB680231211E3PROJECTION1UNITS').first
    Omni::AllocationProfile.create(:allocation_profile_id => '913BB680231211E3PROJECTION2UNITS', :display => 'projection 2 units profile', :allocation_formula => 'PROJECTION_2_UNITS', :percent_to_allocate => 100,:excess_demand_option => 'FILL_LARGEST_DEMAND', :excess_supply_option => 'LEAVE_IN_WAREHOUSE',:rounding_option => 'NONE') unless Omni::AllocationProfile.where(:allocation_profile_id => '913BB680231211E3PROJECTION2UNITS').first
    Omni::AllocationProfile.create(:allocation_profile_id => '913BB680231211E3PROJECTION3UNITS', :display => 'projection 3 units profile', :allocation_formula => 'PROJECTION_3_UNITS', :percent_to_allocate => 100,:excess_demand_option => 'FILL_LARGEST_DEMAND', :excess_supply_option => 'LEAVE_IN_WAREHOUSE',:rounding_option => 'NONE') unless Omni::AllocationProfile.where(:allocation_profile_id => '913BB680231211E3PROJECTION3UNITS').first
    Omni::AllocationProfile.create(:allocation_profile_id => '913BB680231211E3PROJECTION4UNITS', :display => 'projection 4 units profile', :allocation_formula => 'PROJECTION_4_UNITS', :percent_to_allocate => 100,:excess_demand_option => 'FILL_LARGEST_DEMAND', :excess_supply_option => 'LEAVE_IN_WAREHOUSE',:rounding_option => 'NONE') unless Omni::AllocationProfile.where(:allocation_profile_id => '913BB680231211E3PROJECTION4UNITS').first
    Omni::AllocationProfile.create(:allocation_profile_id => '913BB680231XXXXLASTFORECASTUNITS', :display => 'last forecast units profile', :allocation_formula => 'LAST_FORECAST_UNITS', :percent_to_allocate => 100,:excess_demand_option => 'FILL_LARGEST_DEMAND', :excess_supply_option => 'LEAVE_IN_WAREHOUSE',:rounding_option => 'NONE') unless Omni::AllocationProfile.where(:allocation_profile_id => '913BB680231211ELASTFORECASTUNITS').first
    Omni::AllocationProfile.create(:allocation_profile_id => '913BB680231XXPURCHASEALLOCATIONS', :display => 'allocated units profile', :allocation_formula => 'PURCHASE_ALLOCATION', :percent_to_allocate => 100,:excess_demand_option => 'FILL_LARGEST_DEMAND', :excess_supply_option => 'LEAVE_IN_WAREHOUSE',:rounding_option => 'NONE') unless Omni::AllocationProfile.where(:allocation_profile_id => '913BB680231211APPROVEDPROJECTION').first
    Omni::AllocationProfile.create(:allocation_profile_id => '913BB680231XXXAPPROVEDPROJECTION', :display => 'approve projection units profile', :allocation_formula => 'APPROVED_PROJECTION', :percent_to_allocate => 100,:excess_demand_option => 'FILL_LARGEST_DEMAND', :excess_supply_option => 'LEAVE_IN_WAREHOUSE',:rounding_option => 'NONE') unless Omni::AllocationProfile.where(:allocation_profile_id => '913BB680231211APPROVEDPROJECTION').first

    Omni::SystemOption.where(:system_option_id=>'89278604AD2911E2AFA800FF58D32228').to_a.each {|x| x.delete}
    Omni::SystemOption.create(:system_option_id=>'89278604AD2911E2AFA800FF58D32228',:display=>'Regular Sale Promotional Sale',:price_book_id=>'86B291B8A6C911E2AE1900FF58D32228',:purchase_approval_1_maximum_amount=>5000,:purchase_approval_2_maximum_amount=>20000)

    # Omni::Size.where(:size_id => '41352886FE0711E280D020C9D047DD15').to_a.each {|x| x.delete}
    Omni::Size.create(:size_id => '41352886FE0711E280D020C9D047DD15', :display=>'GL', :size_nbr =>1503, :size_type=>'STANDARD', :concatenated_name=>'GL', :dimension_1=>'GL') unless Omni::Size.where(:size_id => '41352886FE0711E280D020C9D047DD15').first

    # Heirarchy: style_id: D4EB81EE0EC711E3BFA320C9D047DD15, subclass_id:   , class_id: 54058C7AAC5511E299E700FF58D32228, department_id: 05C40DDEAC5511E299E700FF58D32228
    # Omni::Style.where(:style_id=>'D4EB81EE0EC711E3BFA320C9D047DD15').to_a.each {|x| x.delete}
    Omni::Style.create(:style_id=>'D4EB81EE0EC711E3BFA320C9D047DD15', :display=>'0010PKGRL-BU-391-BU391b1', :concatenated_name=>'*BLOUSE, SS, P-PAN',:pos_name=>'*BLOUSE, SS, P-PAN',:size_group_id=>'636F7E9EAC5711E299E700FF58D32228',:style_nbr=>'54504',:description=>'*BLOUSE, SS, P-PAN', :subclass_id=>'B1D7091EAC5511E299E700FF58D32228', :product_id=>'3DC7C7B8FE1F11E28D2320C9D047DD15', :brand=>'PARKER', :product_type_id=>'B25227F6AC5611E299E700FF58D32228', :fabric_content=>'65% POLY 35% COTTON', :initial_retail_price=>15.50, :site_id=>'0E5E192EAC5211E299E700FF58D32228', :conversion_type=>'MONOGRAM', :state=>'active') unless Omni::Style.where(:style_id=>'D4EB81EE0EC711E3BFA320C9D047DD15').first

    Omni::Sku.where(:sku_id => '285C928C0F3611E3BB7120C9D047DD15').to_a.each {|x| x.delete}
    Omni::Sku.create(:sku_id => '285C928C0F3611E3BB7120C9D047DD15',:display =>'0010PKGRL-BU-391-BU391b1-WHT-GL',:sku_nbr=>'75886',:source=>'BUCKHEAD',:source_id=>'344',:design_code=>'BU391b1',:state=>'active',:site_id=>'0036FF32AC5211E299E700FF58D32228',:style_id=>'D4EB81EE0EC711E3BFA320C9D047DD15',:color_id=>'0B7965A0AC5811E299E700FF58D32228',:size_id=>'41352886FE0711E280D020C9D047DD15',:initial_retail_price=>15.50)

    Omni::Supplier.where(:supplier_id => ['B931D2A4AC531XXXXXXXXXXOLIVANDER','B931D2A4AC5311E299E700FF58D32228']).to_a.each {|x| x.delete}
    Omni::Supplier.create(:supplier_id => 'B931D2A4AC531XXXXXXXXXXOLIVANDER', :display=>"Olivander's Wands - 1000", :supplier_name=>"Olivander's Wands", :supplier_nbr=>1000, :line_1=>'123 Maple St', :line_2=>'Ste 300', :line_3=>'Attn: Sam', :city=>'Sandy Springs', :state_code=>'GA', :zip=>'30303', :country=>'USA', :phone => '999-999-9999', :default_ship_thru_supplier_id=>'B931D2A4AC531XXXXXXXXXXOLIVANDER', :default_pay_to_supplier_id=>'B931D2A4AC531XXXXXXXXXXOLIVANDER', :shipping_point=>'Hong Kong', :ship_via=>'Ocean', :freight_term=>'PREPAID', :lead_time=>60, :default_payment_term=>'NET', :is_enabled=>true)

    # Omni::SkuSupplier.where(:supplier_id => 'B931D2A4AC531XXXXXXXXXXOLIVANDER').to_a.each {|x| x.delete}
    Omni::SkuSupplier.create(:sku_supplier_id => '239F5610231F11E3BE4920C9D047DD15', :sku_id => '285C928C0F3611E3BB7120C9D047DD15',:supplier_id => 'B931D2A4AC531XXXXXXXXXXOLIVANDER', :supplier_cost=>100, :supplier_cost_units=>1, :supplier_item_identifier=>'The Elder Wand', :master_pack_units=>1, :master_pack_uom_code=>'EACH', :inner_pack_units=>1, :inner_pack_uom_code=>'EACH', :extra_cost=>10, :is_included_extra_cost=>true, :origin_country=>'China', :freight_term=>'PREPAID', :pack_type=>'SELL_UNIT') unless Omni::SkuSupplier.where(:supplier_id => 'B931D2A4AC531XXXXXXXXXXOLIVANDER').first

    Omni::Inventory.where(sku_id: '285C928C0F3611E3BB7120C9D047DD15').to_a.each {|x| x.delete}
    Omni::Inventory.create(inventory_id: 'INVENTORYFORSKU1LOCATION1XXXXXXX', sku_id: '285C928C0F3611E3BB7120C9D047DD15', location_id: '51713A3EAC3E11E2947800FF58D32228')
    Omni::Inventory.create(inventory_id: 'INVENTORYFORSKU1LOCATION2XXXXXXX', sku_id: '285C928C0F3611E3BB7120C9D047DD15', location_id: '51892F68AC3E11E2947800FF58D32228')
    Omni::Inventory.create(inventory_id: 'INVENTORYFORSKU1LOCATION4XXXXXXX', sku_id: '285C928C0F3611E3BB7120C9D047DD15', location_id: '5247A038AC3E11E2947800FF58D32228')
    Omni::Inventory.create(inventory_id: 'INVENTORYFORSKU1LOCATION5XXXXXXX', sku_id: '285C928C0F3611E3BB7120C9D047DD15', location_id: '526058B2AC3E11E2947800FF58D32228')

    Omni::Inventory.all.each {|x| x.delete}
    Omni::Inventory.create(:inventory_id=>'INVENTORYFORSKU1LOCATION1XXXXXXX',:sku_id=>'285C928C0F3611E3BB7120C9D047DD15',:location_id=>'51713A3EAC3E11E2947800FF58D32228',:is_authorized => true)
    Omni::Inventory.create(:inventory_id=>'INVENTORYFORSKU1LOCATION2XXXXXXX',:sku_id=>'285C928C0F3611E3BB7120C9D047DD15',:location_id=>'51892F68AC3E11E2947800FF58D32228',:is_authorized => true)
    Omni::Inventory.create(:inventory_id=>'INVENTORYFORSKU1LOCATION4XXXXXXX',:sku_id=>'285C928C0F3611E3BB7120C9D047DD15',:location_id=>'5247A038AC3E11E2947800FF58D32228',:is_authorized => true)
    Omni::Inventory.create(:inventory_id=>'INVENTORYFORSKU1LOCATION5XXXXXXX',:sku_id=>'285C928C0F3611E3BB7120C9D047DD15',:location_id=>'526058B2AC3E11E2947800FF58D32228',:is_authorized => false)

    Omni::LocationUser.where(:user_id=>'811166D4D50A11E2B45820C9D04AARON').to_a.each {|x| x.delete}
    Omni::LocationUser.create(:location_user_id=>'1281A4CA1DF511E3ABXXXXXUSERALOC1', :location_id=>'51713A3EAC3E11E2947800FF58D32228', :user_id=>'811166D4D50A11E2B45820C9D04AARON' )
    Omni::LocationUser.create(:location_user_id=>'1281A4CA1DF511E3ABXXXXXUSERALOC2', :location_id=>'51892F68AC3E11E2947800FF58D32228', :user_id=>'811166D4D50A11E2B45820C9D04AARON' )
    Omni::LocationUser.create(:location_user_id=>'1281A4CA1DF511E3ABXXXXXUSERALOC3', :location_id=>'5247A038AC3E11E2947800FF58D32228', :user_id=>'811166D4D50A11E2B45820C9D04AARON' )
    Omni::LocationUser.create(:location_user_id=>'1281A4CA1DF511E3ABXXXXXUSERALOC4', :location_id=>'526058B2AC3E11E2947800FF58D32228', :user_id=>'811166D4D50A11E2B45820C9D04AARON' )

    Omni::Projection.all.each {|x| x.delete}
    Omni::Projection.create(projection_id: 'XXXXX1C19361XXXXXTESTPROJECTION1', state: 'active', department_id: '5EA20FF2FE0611E280D020C9D047DD15', forecast_profile_id: '42608AAEE7D011E28FB520C9D0471234')
    Omni::Projection.create(projection_id: 'XXXXX1C19361XXXXXTESTPROJECTION2', state: 'forecast', department_id: '5EA20FF2FE0611E280D020C9D047DD15', forecast_profile_id: '42608AAEE7D011E28FB520C9D0471234')

    Omni::ProjectionDetail.all.each {|x| x.delete}
    Omni::ProjectionDetail.create(:projection_id => 'XXXXX1C19361XXXXXTESTPROJECTION1', :projection_detail_id => 'PROJ1A1C193611E3A22D20CXXPRODET1', :sku_id=>'285C928C0F3611E3BB7120C9D047DD15', :location_id=>'51713A3EAC3E11E2947800FF58D32228', :projection_1_units => 50, :projection_2_units => 50, :projection_3_units => 50, :projection_4_units => 50, :last_forecast_units => 50)
    Omni::ProjectionDetail.create(:projection_id => 'XXXXX1C19361XXXXXTESTPROJECTION1', :projection_detail_id => 'PROJ1A1C193611E3A22D20CXXPRODET2', :sku_id=>'285C928C0F3611E3BB7120C9D047DD15', :location_id=>'51892F68AC3E11E2947800FF58D32228', :projection_1_units => 40, :projection_2_units => 40, :projection_3_units => 40, :projection_4_units => 40, :last_forecast_units => 40)
    Omni::ProjectionDetail.create(:projection_id => 'XXXXX1C19361XXXXXTESTPROJECTION1', :projection_detail_id => 'PROJ1A1C193611E3A22D20CXXPRODET3', :sku_id=>'285C928C0F3611E3BB7120C9D047DD15', :location_id=>'5247A038AC3E11E2947800FF58D32228', :projection_1_units => 10, :projection_2_units => 10, :projection_3_units => 10, :projection_4_units => 10, :last_forecast_units => 10)
    Omni::ProjectionDetail.create(:projection_id => 'XXXXX1C19361XXXXXTESTPROJECTION2', :projection_detail_id => 'PROJ2A1C193611E3A22D20CXXPRODET1', :sku_id=>'285C928C0F3611E3BB7120C9D047DD15', :location_id=>'51713A3EAC3E11E2947800FF58D32228', :projection_1_units => 50, :projection_2_units => 50, :projection_3_units => 50, :projection_4_units => 50, :last_forecast_units => 50)
    Omni::ProjectionDetail.create(:projection_id => 'XXXXX1C19361XXXXXTESTPROJECTION2', :projection_detail_id => 'PROJ2A1C193611E3A22D20CXXPRODET2', :sku_id=>'285C928C0F3611E3BB7120C9D047DD15', :location_id=>'51892F68AC3E11E2947800FF58D32228', :projection_1_units => 40, :projection_2_units => 40, :projection_3_units => 40, :projection_4_units => 40, :last_forecast_units => 40)
    Omni::ProjectionDetail.create(:projection_id => 'XXXXX1C19361XXXXXTESTPROJECTION2', :projection_detail_id => 'PROJ2A1C193611E3A22D20CXXPRODET3', :sku_id=>'285C928C0F3611E3BB7120C9D047DD15', :location_id=>'5247A038AC3E11E2947800FF58D32228', :projection_1_units => 10, :projection_2_units => 10, :projection_3_units => 10, :projection_4_units => 10, :last_forecast_units => 10)

    Omni::PurchaseDetail.where(:purchase_detail_id=>['ABABDAAA35E011E3APURCHASEDETAIL1','ABABDAAA35E011E3APURCHASEDETAIL2']).to_a.each {|x| x.delete}
    Omni::PurchaseDetail.create(:purchase_detail_id=>'ABABDAAA35E011E3APURCHASEDETAIL1', :allocation_profile_id => '913BB680231211XXXXBTSPERCENTSTOR', :purchase_id => 'ABABDAAA35E011E3ABAA20C9D047DD15', :sku_supplier_id => '239F5610231F11E3BE4920C9D047DD15',:sku_id => '285C928C0F3611E3BB7120C9D047DD15', :units_ordered=>100, :order_pack_size=>1, :supplier_cost=>25, :order_cost_units=>1)

    Omni::Purchase.where(:purchase_id => 'ABABDAAA35E011E3ABAA20C9D047DD15').to_a.each {|x| x.delete}
    Omni::Purchase.create(:purchase_id => 'ABABDAAA35E011E3ABAA20C9D047DD15',:supplier_id => 'B931D2A4AC531XXXXXXXXXXOLIVANDER', :location_id => '51579764AC3E11E2947800FF58D32228',  :allocation_profile_id => '913BB680231211XXXXBTSPERCENTSTOR', :purchase_type => 'SAMPLE', :purchase_source => 'SAMPLE', :ordered_by_user_id => '811166D4D50A11E2B45820C9D04AARON', :payment_term =>'NET 30',:freight_term => 'COLLECT',:ship_via => 'SAMPLE', :fob_point => 'ORIGIN' , :display => 'Olivanders wands test purchase',:purchase_approver_1_user_id => '811166D4D50A11E2B45820C9D04AARON')

    Omni::Bts.all.each {|x| x.delete}
    Omni::Bts.create(:bts_id => '4D594A1C193611E3A22D20C9D047DBTS', :department_id => '05C40DDEAC5511E299E700FF58D32228', :state => 'active') unless Omni::Bts.where(:bts_id => '4D594A1C193611E3A22D20C9D047DBTS', :state => 'active').first

    Omni::BtsDetail.all.each {|x| x.delete}
    Omni::BtsDetail.create(:bts_id => '4D594A1C193611E3A22D20C9D047DBTS', :bts_detail_id => '6D8E304E323C11E38DC320C9D047DBD1',:sku_id => '285C928C0F3611E3BB7120C9D047DD15',:style_id => 'D4EB81EE0EC711E3BFA320C9D047DD15',:style_display=>'0010PKGRL-BU-391-BU391b1',:location_id => '51713A3EAC3E11E2947800FF58D32228',:need => 50)
    Omni::BtsDetail.create(:bts_id => '4D594A1C193611E3A22D20C9D047DBTS', :bts_detail_id => '6D8E304E323C11E38DC320C9D047DBD2',:sku_id => '285C928C0F3611E3BB7120C9D047DD15',:style_id => 'D4EB81EE0EC711E3BFA320C9D047DD15',:style_display=>'0010PKGRL-BU-391-BU391b1',:location_id => '51892F68AC3E11E2947800FF58D32228',:need => 40)
    Omni::BtsDetail.create(:bts_id => '4D594A1C193611E3A22D20C9D047DBTS', :bts_detail_id => '6D8E304E323C11E38DC320C9D047DBD3',:sku_id => '285C928C0F3611E3BB7120C9D047DD15',:style_id => 'D4EB81EE0EC711E3BFA320C9D047DD15',:style_display=>'0010PKGRL-BU-391-BU391b1',:location_id => '5247A038AC3E11E2947800FF58D32228',:need => 10)
  end

  def self.reindex_data
    Omni::Allocation.reindex
    Omni::AllocationDetail.reindex
    Omni::AllocationProfile.reindex
    Omni::Bts.reindex
    Omni::BtsDetail.reindex
    Omni::Projection.reindex
    Omni::ProjectionDetail.reindex
    Omni::Purchase.reindex
    Omni::PurchaseAllocation.reindex
    Omni::PurchaseDetail.reindex
  end

  def self.allocation_scenarios
    x = []
    x << {scenario: 'Supply equals Demand',:allocation_profile_id => '913BB680231211XXXXBTSPERCENTSTOR', :units_to_allocate => 100, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>50, :expected_allocation_results_loc_2=>40, :expected_allocation_results_loc_3=>10 }
    x << {scenario: 'Excess Supply',             :allocation_profile_id => '913BB680231211XXXXBTSPERCENTSTOR', :units_to_allocate => 1000, :order_pack_size => 10, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>500, :expected_allocation_results_loc_2=>400, :expected_allocation_results_loc_3=>100,}
    x << {scenario: 'Excess Demand',           :allocation_profile_id => '913BB680231211XXXXBTSPERCENTSTOR', :units_to_allocate => 100, :order_pack_size => 1, :percent_to_allocate=>1, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>1, :expected_allocation_results_loc_2=>0, :expected_allocation_results_loc_3=>0}
    x << {scenario: 'Excess Demand',           :allocation_profile_id => '913BB680231211XXXXBTSPERCENTSTOR', :units_to_allocate => 1000, :order_pack_size => 10, :percent_to_allocate=>1, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>5, :expected_allocation_results_loc_2=>4, :expected_allocation_results_loc_3=>1}
    x << {scenario: 'Excess Demand',           :allocation_profile_id => '913BB680231211XXXXBTSPERCENTSTOR', :units_to_allocate => 100, :order_pack_size => 1, :percent_to_allocate=>80, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>40, :expected_allocation_results_loc_2=>32, :expected_allocation_results_loc_3=>8}
    x << {scenario: 'Excess Supply',              :allocation_profile_id => '913BB680231211XXXXBTSPERCENTSTOR', :units_to_allocate => 1000, :order_pack_size => 10, :percent_to_allocate=>80, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>400, :expected_allocation_results_loc_2=>320, :expected_allocation_results_loc_3=>80}
    x << {scenario: 'Supply equals Demand',:allocation_profile_id => '913BB680231211XXXXXBTSDEMANDWHSE', :units_to_allocate => 100, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>50, :expected_allocation_results_loc_2=>40, :expected_allocation_results_loc_3=>10}
    x << {scenario: 'Excess Supply',              :allocation_profile_id => '913BB680231211XXXXXBTSDEMANDWHSE', :units_to_allocate => 1000, :order_pack_size => 10, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>50, :expected_allocation_results_loc_2=>40, :expected_allocation_results_loc_3=>10}
    x << {scenario: 'Excess Demand',           :allocation_profile_id => '913BB680231211XXXXXBTSDEMANDWHSE', :units_to_allocate => 100, :order_pack_size => 1, :percent_to_allocate=>1, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>1, :expected_allocation_results_loc_2=>0, :expected_allocation_results_loc_3=>0}
    x << {scenario: 'Excess Demand',           :allocation_profile_id => '913BB680231211XXXXXBTSDEMANDWHSE', :units_to_allocate => 1000, :order_pack_size => 10, :percent_to_allocate=>1, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>10, :expected_allocation_results_loc_2=>0, :expected_allocation_results_loc_3=>0}
    x << {scenario: 'Excess Demand',           :allocation_profile_id => '913BB680231211XXXXXBTSDEMANDWHSE', :units_to_allocate => 100, :order_pack_size => 1, :percent_to_allocate=>80, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>50, :expected_allocation_results_loc_2=>30, :expected_allocation_results_loc_3=>0}
    x << {scenario: 'Excess Supply',              :allocation_profile_id => '913BB680231211XXXXXBTSDEMANDWHSE', :units_to_allocate => 1000, :order_pack_size => 10, :percent_to_allocate=>80, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>50, :expected_allocation_results_loc_2=>40, :expected_allocation_results_loc_3=>10}
    x << {scenario: 'All Locations Locked',   :allocation_profile_id => '913BB680231211XXXXXBTSDEMANDWHSE', :units_to_allocate => 100, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>40,  :allocated_units_locked_loc_2=>40,  :allocated_units_locked_loc_3=>40, :expected_allocation_results_loc_1=>'40', :expected_allocation_results_loc_2=>'40', :expected_allocation_results_loc_3=>'40' }
    x << {scenario: '1 Location not locked, Excess Supply', :allocation_profile_id => '913BB680231211XXXXBTSPERCENTSTOR', :units_to_allocate => 100, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>40,  :allocated_units_locked_loc_2=>40,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>'40', :expected_allocation_results_loc_2=>'40', :expected_allocation_results_loc_3=>20 }
    x << {scenario: '1 Location not locked, Excess Supply', :allocation_profile_id => '913BB680231211XXXXXBTSDEMANDWHSE', :units_to_allocate => 100, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>40,  :allocated_units_locked_loc_2=>40,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>'40', :expected_allocation_results_loc_2=>'40', :expected_allocation_results_loc_3=>10 }
    x << {scenario: '1 Location locked, Excess Supply',       :allocation_profile_id => '913BB680231211XXXXBTSPERCENTSTOR', :units_to_allocate => 100, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>40,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>'40', :expected_allocation_results_loc_2=>48, :expected_allocation_results_loc_3=>12 }
    x << {scenario: '1 Location locked, Excess Supply',       :allocation_profile_id => '913BB680231211XXXXXBTSDEMANDWHSE', :units_to_allocate => 100, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>40,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>'40', :expected_allocation_results_loc_2=>40, :expected_allocation_results_loc_3=>10 }
    x << {scenario: '1 Location locked, Excess Demand',    :allocation_profile_id => '913BB680231211XXXXBTSPERCENTSTOR', :units_to_allocate => 100, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>60,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>60, :expected_allocation_results_loc_2=>32, :expected_allocation_results_loc_3=>8 }
    x << {scenario: '1 Location locked, Excess Demand',    :allocation_profile_id => '913BB680231211XXXXXBTSDEMANDWHSE', :units_to_allocate => 100, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>60,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>60, :expected_allocation_results_loc_2=>40, :expected_allocation_results_loc_3=>0 }
    x << {scenario: 'Projection 1 Units',       :allocation_profile_id => '913BB680231211E3PROJECTION1UNITS', :units_to_allocate => 100, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>50, :expected_allocation_results_loc_2=>40, :expected_allocation_results_loc_3=>10 }
    x << {scenario: 'Projection 2 Units',       :allocation_profile_id => '913BB680231211E3PROJECTION2UNITS', :units_to_allocate => 100, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>50, :expected_allocation_results_loc_2=>40, :expected_allocation_results_loc_3=>10 }
    x << {scenario: 'Projection 3 Units',       :allocation_profile_id => '913BB680231211E3PROJECTION3UNITS', :units_to_allocate => 100, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>50, :expected_allocation_results_loc_2=>40, :expected_allocation_results_loc_3=>10 }
    x << {scenario: 'Projection 4 Units',       :allocation_profile_id => '913BB680231211E3PROJECTION4UNITS', :units_to_allocate => 100, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>50, :expected_allocation_results_loc_2=>40, :expected_allocation_results_loc_3=>10 }
    x << {scenario: 'Last Forecast Units',     :allocation_profile_id => '913BB680231XXXXLASTFORECASTUNITS', :units_to_allocate => 100, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>50, :expected_allocation_results_loc_2=>40, :expected_allocation_results_loc_3=>10 }
    x << {scenario: 'Purchase Allocation formula',   :allocation_profile_id => '913BB680231XXPURCHASEALLOCATIONS', :units_to_allocate => 100, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>0, :expected_allocation_results_loc_2=>0, :expected_allocation_results_loc_3=>0 }
    x << {scenario: 'Approved Projection formula',   :allocation_profile_id => '913BB680231XXXAPPROVEDPROJECTION', :units_to_allocate => 100, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>50, :expected_allocation_results_loc_2=>40, :expected_allocation_results_loc_3=>10 }
    x
  end

  def self.put(output)
    # puts "Value of field is #{output}  -----   #{output.inspect}"
    # puts "#{output.to_yaml}"
  end
end
