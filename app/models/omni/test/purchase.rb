require 'colored'

class Omni::Test::Purchase

  def self.go
    # create all data needed to run this test suite
    create_base_data

    # test release, approve & cancel a purchase
    test_purchase_events

    # test approve, receive, allocate & cancel a purchase detail
    test_purchase_detail_events

    # test approve, receive, allocate & cancel a purchase detail
    test_purchase_allocation_events

    # reindex newly created test data
    reindex_data

    # output test results to screen
    puts @results + ["******************************************************************************************************\n\n\n"]
  end

  def self.test_purchase_events
    x=@p

    # if base data was created and relationship exists, the purchase should have 1 detail
    test_it('Create a purchase with 1 detail', 1, x.purchase_details.count)

    # RELEASE SHOULD SET STATE TO PENDING APPROVAL
    x.release
    test_it('Release a purchase','pending_approval',@p.state)

    # APPROVE SHOULD SET STATE TO OPEN
    3.times {|i| x.approve}
    test_it('Approve a purchase','open',x.state)

    # PRINT SHOULD CREATE A PDF
    # x.print
    test_it('Print a purchase','PRINT','TEST NOT IMPLEMENTED YET')

    # CANCEL SHOULD SET STATE TO PENDING APPROVAL
    # x.cancel
    test_it('Cancel a purchase','cancelled',x.state)
  end

  def self.test_purchase_detail_events
    # run 26 different allocation tests
    allocation_scenarios.each {|s| test_allocation_scenario s}

    x=@pd

    # approve should set state to open
    x.approve
    test_it('Approve a purchase detail','open',x.state)

    # receive should set state to open
    x.receive
    test_it('Receive a purchase detail','open',x.state)

    # cancel should set state to cancelled
    x.cancel
    test_it('Cancel a purchase detail','cancelled',x.state)
  end

  def self.test_purchase_allocation_events
    @pd=Omni::PurchaseDetail.where(:purchase_detail_id => 'ABABDAAA35E011E3ABAA20XXXXXXXXXX').first
    x = @pd.purchase_allocations.first

    # lock should set state to locked
    x.lock
    test_it('Lock a purchase allocation','locked',x.state)

    # unlock should set state to draft
    x.unlock
    test_it('Unlock a purchase allocation','draft',x.state)
  end

  def self.test_allocation_scenario(s)
    a=Omni::AllocationProfile.where(:allocation_profile_id=>s[:allocation_profile_id]).first
    a.percent_to_allocate = s[:percent_to_allocate]
    a.save

    x=Omni::PurchaseDetail.where(:purchase_detail_id => 'ABABDAAA35E011E3ABAA20XXXXXXXXXX').first
    x.allocation_profile_id = s[:allocation_profile_id]
    x.save

    x.process_allocation

    x=Omni::PurchaseDetail.where(:purchase_detail_id => 'ABABDAAA35E011E3ABAA20XXXXXXXXXX').first

    expected_result =  s[:expected_allocation_results_loc_1].to_s + ',' + s[:expected_allocation_results_loc_2].to_s + ',' + s[:expected_allocation_results_loc_3].to_s
    actual_result = x.purchase_allocations.first.units_allocated.to_s.chop.chop + ',' + x.purchase_allocations.second.units_allocated.to_s.chop.chop + ',' + x.purchase_allocations.third.units_allocated.to_s.chop.chop

    test_it("Allocation - #{s[:scenario_description]}", expected_result, actual_result)
  end

  def self.test_it(scenario_description, expected_result, actual_result)
    # FOR DEBUGGING
    puts "\n\n\n scenario #{@scenario_number +1}: #{scenario_description}  #{expected_result} <=> #{actual_result}"
    # RUN TEST BY COMPARING EXPECTED VS ACTUAL RESULTS
    success = (expected_result == actual_result)
    # OUTPUT TEST RESULTS
    result = "#{(@scenario_number += 1).to_s}: #{scenario_description}  ==> result: #{success ? 'PASS' : 'FAIL'},   expected: #{expected_result.to_s},  actual: #{actual_result.to_s}"
    @results << (success ?  result.green : result.red)
  end

  def self.create_base_data
    #   CREATE ALL DATA NEEDED FOR TEST SUITE
    create_allocation_profiles
    create_projections
    create_bts
    create_purchase_data
  end

  def self.create_purchase_data
    # create data for styles, skus, sizes, system_options, sku_suppliers, sku_locations, location_users, purchases and purchase_details by destroying then creating.
    @results = ["\n\n\n************************* RUN RESULTS ****************************************************************"]
    @scenario_number = 0

    Omni::Style.where(:style_id=>'D4EB81EE0EC711E3BFA320C9D047DD15').all.each {|x| x.delete}
    Omni::Style.create(:style_id=>'D4EB81EE0EC711E3BFA320C9D047DD15', :display=>'0010PKGRL-BU-391-BU391b1', :concatenated_name=>'*BLOUSE, SS, P-PAN',:pos_name=>'*BLOUSE, SS, P-PAN',:size_group_id=>'636F7E9EAC5711E299E700FF58D32228',:style_nbr=>'54504',:description=>'*BLOUSE, SS, P-PAN', :subclass_id=>'4AB6ABEA081C11E3A9EB20C9D047DD15', :product_id=>'3DC7C7B8FE1F11E28D2320C9D047DD15', :brand=>'PARKER', :product_type_id=>'B25227F6AC5611E299E700FF58D32228', :fabric_content=>'65% POLY 35% COTTON', :initial_retail_price=>15.50, :site_id=>'0E5E192EAC5211E299E700FF58D32228', :conversion_type=>'MONOGRAM', :state=>'active')

    Omni::SystemOption.where(:system_option_id=>'89278604AD2911E2AFA800FF58D32228').all.each {|x| x.delete}
    Omni::SystemOption.create(:system_option_id=>'89278604AD2911E2AFA800FF58D32228',:display=>'Regular Sale Promotional Sale',:price_book_id=>'86B291B8A6C911E2AE1900FF58D32228',:purchase_approval_1_maximum_amount=>5000,:purchase_approval_2_maximum_amount=>20000)

    Omni::Size.where(:size_id => '41352886FE0711E280D020C9D047DD15').all.each {|x| x.delete}
    Omni::Size.create(:size_id => '41352886FE0711E280D020C9D047DD15',:display=>'GL',:size_nbr =>1503, :size_type=>'STANDARD',:concatenated_name=>'GL',:dimension_1=>'GL')

    Omni::Sku.where(:sku_id => '285C928C0F3611E3BB7120C9D047DD15').all.each {|x| x.delete}
    Omni::Sku.create(:sku_id => '285C928C0F3611E3BB7120C9D047DD15',:display =>'0010PKGRL-BU-391-BU391b1-WHT-GL',:sku_nbr=>'75886',:source=>'BUCKHEAD',:source_id=>'344',:design_code=>'BU391b1',:state=>'active',:site_id=>'0036FF32AC5211E299E700FF58D32228',:style_id=>'D4EB81EE0EC711E3BFA320C9D047DD15',:color_id=>'0B7965A0AC5811E299E700FF58D32228',:size_id=>'41352886FE0711E280D020C9D047DD15',:initial_retail_price=>15.50)

    Omni::Supplier.where(:supplier_id => 'B931D2A4AC5311E299E700FF58D32228').all.each {|x| x.delete}
    Omni::Supplier.create(:supplier_id => 'B931D2A4AC5311E299E700FF58D32228', :display=>"Olivander's Wands - 1000", :supplier_name=>"Olivander's Wands", :supplier_nbr=>1000, :line_1=>'123 Maple St', :line_2=>'Ste 300', :line_3=>'Attn: Sam', :city=>'Sandy Springs', :state_code=>'GA', :zip=>'30303', :country=>'USA', :phone => '999-999-9999', :default_ship_thru_supplier_id=>'B931D2A4AC5311E299E700FF58D32228', :default_pay_to_supplier_id=>'B931D2A4AC5311E299E700FF58D32228', :shipping_point=>'Hong Kong', :ship_via=>'Ocean', :freight_term=>'PREPAID', :lead_time=>60, :default_payment_term=>'NET', :is_enabled=>true)

    Omni::SkuSupplier.where(:sku_supplier_id => '239F5610231F11E3BE4920C9D047DD15').all.each {|x| x.delete}
    Omni::SkuSupplier.create(:sku_supplier_id => '239F5610231F11E3BE4920C9D047DD15', :sku_id => '285C928C0F3611E3BB7120C9D047DD15',:supplier_id => 'B931D2A4AC5311E299E700FF58D32228',:supplier_cost=>100, :supplier_cost_units=>1, :supplier_item_identifier=>'The Elder Wand', :master_pack_units=>1, :master_pack_uom_code=>'EACH', :inner_pack_units=>1, :inner_pack_uom_code=>'EACH', :extra_cost=>10, :is_included_extra_cost=>true, :origin_country=>'China', :freight_term=>'PREPAID', :pack_type=>'SELL_UNIT')

    Omni::SkuLocation.where(:sku_location_id=>['14A01280231F11E3BE4920C9D047LOC1','14A01280231F11E3BE4920C9D047LOC2','14A01280231F11E3BE4920C9D047LOC4','14A01280231F11E3BE4920C9D047LOC5']).all.each {|x| x.delete}
    Omni::SkuLocation.create(:sku_location_id=>'14A01280231F11E3BE4920C9D047LOC1', :sku_id=>'285C928C0F3611E3BB7120C9D047DD15',:location_id=>'51713A3EAC3E11E2947800FF58D32228',:is_authorized => true)
    Omni::SkuLocation.create(:sku_location_id=>'14A01280231F11E3BE4920C9D047LOC2', :sku_id=>'285C928C0F3611E3BB7120C9D047DD15',:location_id=>'51892F68AC3E11E2947800FF58D32228',:is_authorized => true)
    Omni::SkuLocation.create(:sku_location_id=>'14A01280231F11E3BE4920C9D047LOC4', :sku_id=>'285C928C0F3611E3BB7120C9D047DD15',:location_id=>'5247A038AC3E11E2947800FF58D32228',:is_authorized => true)
    Omni::SkuLocation.create(:sku_location_id=>'14A01280231F11E3BE4920C9D047LOC5', :sku_id=>'285C928C0F3611E3BB7120C9D047DD15',:location_id=>'526058B2AC3E11E2947800FF58D32228',:is_authorized => false)

    Omni::LocationUser.where(:user_id=>'811166D4D50A11E2B45820C9D04AARON').all.each {|x| x.delete}
    Omni::LocationUser.create(:location_user_id=>'1281A4CA1DF511E3ABXXXXXUSERALOC1', :location_id=>'51713A3EAC3E11E2947800FF58D32228', :user_id=>'811166D4D50A11E2B45820C9D04AARON' )
    Omni::LocationUser.create(:location_user_id=>'1281A4CA1DF511E3ABXXXXXUSERALOC2', :location_id=>'51892F68AC3E11E2947800FF58D32228', :user_id=>'811166D4D50A11E2B45820C9D04AARON' )
    Omni::LocationUser.create(:location_user_id=>'1281A4CA1DF511E3ABXXXXXUSERALOC3', :location_id=>'5247A038AC3E11E2947800FF58D32228', :user_id=>'811166D4D50A11E2B45820C9D04AARON' )
    Omni::LocationUser.create(:location_user_id=>'1281A4CA1DF511E3ABXXXXXUSERALOC4', :location_id=>'526058B2AC3E11E2947800FF58D32228', :user_id=>'811166D4D50A11E2B45820C9D04AARON' )

    Omni::PurchaseDetail.where(:purchase_detail_id=>['ABABDAAA35E011E3ABAA20XXXXXXXXXX','ABABDAAA35E011E3ABAA20C9DBTPROJ1','ABABDAAA35E011E3ABAA20C9DBTPROJ2','ABABDAAA35E011E3ABAA20C9DBTPROJ3','ABABDAAA35E011E3ABAA20C9DBTPROJ4','ABABDAAA35E011E3ABAALASTFORECAST','ABABDAAA35E011E3ABAA20C9APPROVED']).all.each {|x| x.delete}
    @pd=Omni::PurchaseDetail.create(:purchase_detail_id=>'ABABDAAA35E011E3ABAA20XXXXXXXXXX', :allocation_profile_id => '913BB680231211E3BE49201ILBTSNEED', :purchase_id => 'ABABDAAA35E011E3ABAA20C9D047DD15', :sku_supplier_id => '239F5610231F11E3BE4920C9D047DD15',:sku_id => '285C928C0F3611E3BB7120C9D047DD15', :units_ordered => 100, :order_cost_units => 1, :order_pack_size => 1)

    Omni::Purchase.where(:purchase_id => 'ABABDAAA35E011E3ABAA20C9D047DD15').all.each {|x| x.delete}
    @p=Omni::Purchase.create(:purchase_id => 'ABABDAAA35E011E3ABAA20C9D047DD15',:supplier_id => 'B931D2A4AC5311E299E700FF58D32228', :location_id => '51579764AC3E11E2947800FF58D32228', :purchase_type => 'SAMPLE', :purchase_source => 'SAMPLE', :ordered_by_user_id => '811166D4D50A11E2B45820C9D04AARON',  :payment_term =>'NET 30', :purchase_approver_1_user_id => '811166D4D50A11E2B45820C9D04AARON',:purchase_approver_2_user_id => '811166D4D50A11E2B45820C9D04AARON', :purchase_approver_3_user_id => '811166D4D50A11E2B45820C9D04AARON', :payment_term =>'NET 30',:freight_term => 'COLLECT',:ship_via => 'SAMPLE', :fob_point => 'ORIGIN' , :display => 'Olivanders wands test purchase')
  end

  def self.create_projections
    Omni::Projection.all.each {|x| x.delete}
    Omni::Projection.create(:projection_id => '4D594A1C193611E3A22D20C9D04PROJ1', :state => 'active', :department_id => '5EA20FF2FE0611E280D020C9D047DD15')

    Omni::ProjectionDetail.all.each {|x| x.delete}
    Omni::ProjectionDetail.create(:projection_id => '4D594A1C193611E3A22D20C9D04PROJ1', :projection_detail_id => '4D594A1C193611E3A22D20CXXPRODET1', :sku_id=>'285C928C0F3611E3BB7120C9D047DD15', :location_id=>'51713A3EAC3E11E2947800FF58D32228', :projection_1_units => 50, :projection_2_units => 50, :projection_3_units => 50, :projection_4_units => 50, :last_forecast_units => 50)
    Omni::ProjectionDetail.create(:projection_id => '4D594A1C193611E3A22D20C9D04PROJ1', :projection_detail_id => '4D594A1C193611E3A22D20CXXPRODET2', :sku_id=>'285C928C0F3611E3BB7120C9D047DD15', :location_id=>'51892F68AC3E11E2947800FF58D32228', :projection_1_units => 40, :projection_2_units => 40, :projection_3_units => 40, :projection_4_units => 40, :last_forecast_units => 40)
    Omni::ProjectionDetail.create(:projection_id => '4D594A1C193611E3A22D20C9D04PROJ1', :projection_detail_id => '4D594A1C193611E3A22D20CXXPRODET3', :sku_id=>'285C928C0F3611E3BB7120C9D047DD15', :location_id=>'5247A038AC3E11E2947800FF58D32228', :projection_1_units => 10, :projection_2_units => 10, :projection_3_units => 10, :projection_4_units => 10, :last_forecast_units => 10)
  end

  def self.create_bts
    Omni::Bts.all.each {|x| x.delete}
    Omni::Bts.create(:bts_id => '4D594A1C193611E3A22D20C9D047DBTS', :state => 'active')

    Omni::BtsDetail.all.each {|x| x.delete}
    Omni::BtsDetail.create(:bts_id => '4D594A1C193611E3A22D20C9D047DBTS', :bts_detail_id => '6D8E304E323C11E38DC320C9D047DBD1',:sku_id => '285C928C0F3611E3BB7120C9D047DD15',:style_id => 'D4EB81EE0EC711E3BFA320C9D047DD15',:style_display=>'0010PKGRL-BU-391-BU391b1',:location_id => '51713A3EAC3E11E2947800FF58D32228',:need => 50)
    Omni::BtsDetail.create(:bts_id => '4D594A1C193611E3A22D20C9D047DBTS', :bts_detail_id => '6D8E304E323C11E38DC320C9D047DBD2',:sku_id => '285C928C0F3611E3BB7120C9D047DD15',:style_id => 'D4EB81EE0EC711E3BFA320C9D047DD15',:style_display=>'0010PKGRL-BU-391-BU391b1',:location_id => '51892F68AC3E11E2947800FF58D32228',:need => 40)
    Omni::BtsDetail.create(:bts_id => '4D594A1C193611E3A22D20C9D047DBTS', :bts_detail_id => '6D8E304E323C11E38DC320C9D047DBD3',:sku_id => '285C928C0F3611E3BB7120C9D047DD15',:style_id => 'D4EB81EE0EC711E3BFA320C9D047DD15',:style_display=>'0010PKGRL-BU-391-BU391b1',:location_id => '5247A038AC3E11E2947800FF58D32228',:need => 10)
  end

  def self.create_allocation_profiles
    percent_to_allocate = 100
    Omni::AllocationProfile.all.each {|x|x.delete}
    @ap1= '913BB680231211XXXXBTSPERCENTSTOR'
    Omni::AllocationProfile.create(:allocation_profile_id => @ap1, :display => 'bts need with allocate by percent to store', :allocation_formula => 'BTS_NEED', :percent_to_allocate => percent_to_allocate, :excess_demand_option => 'APPORTION_BY_PERCENT', :excess_supply_option => 'APPORTION_TO_STORES',:rounding_option => 'NONE') unless Omni::AllocationProfile.where(:allocation_profile_id => '913BB680231211E3E4BTSPERCENTSTOR').first
    @ap2='913BB680231211XXXXXBTSDEMANDWHSE'
    Omni::AllocationProfile.create(:allocation_profile_id => @ap2, :display => 'bts need with allocate by demand and warehouse', :allocation_formula => 'BTS_NEED', :percent_to_allocate => percent_to_allocate, :excess_demand_option => 'LARGEST_DEMAND', :excess_supply_option => 'LEAVE_IN_WAREHOUSE',:rounding_option => 'NONE') unless Omni::AllocationProfile.where(:allocation_profile_id => '913BB680231211E3BE4BTSDEMANDWHSE').first
    @ap3='913BB680231211E3PROJECTION1UNITS'
    Omni::AllocationProfile.create(:allocation_profile_id => @ap3, :display => 'projection 1 units profile', :allocation_formula => 'PROJECTION_1_UNITS', :percent_to_allocate => percent_to_allocate, :excess_demand_option => 'LARGEST_DEMAND', :excess_supply_option => 'LEAVE_IN_WAREHOUSE',:rounding_option => 'NONE') unless Omni::AllocationProfile.where(:allocation_profile_id => '913BB680231211E3PROJECTION1UNITS').first
    @ap4='913BB680231211E3PROJECTION2UNITS'
    Omni::AllocationProfile.create(:allocation_profile_id => @ap4, :display => 'projection 2 units profile', :allocation_formula => 'PROJECTION_2_UNITS', :percent_to_allocate => percent_to_allocate, :excess_demand_option => 'LARGEST_DEMAND', :excess_supply_option => 'LEAVE_IN_WAREHOUSE',:rounding_option => 'NONE') unless Omni::AllocationProfile.where(:allocation_profile_id => '913BB680231211E3PROJECTION2UNITS').first
    @ap5='913BB680231211E3PROJECTION3UNITS'
    Omni::AllocationProfile.create(:allocation_profile_id => @ap5, :display => 'projection 3 units profile', :allocation_formula => 'PROJECTION_3_UNITS', :percent_to_allocate => percent_to_allocate, :excess_demand_option => 'LARGEST_DEMAND', :excess_supply_option => 'LEAVE_IN_WAREHOUSE',:rounding_option => 'NONE') unless Omni::AllocationProfile.where(:allocation_profile_id => '913BB680231211E3PROJECTION3UNITS').first
    @ap6='913BB680231211E3PROJECTION4UNITS'
    Omni::AllocationProfile.create(:allocation_profile_id => @ap6, :display => 'projection 4 units profile', :allocation_formula => 'PROJECTION_4_UNITS', :percent_to_allocate => percent_to_allocate, :excess_demand_option => 'LARGEST_DEMAND', :excess_supply_option => 'LEAVE_IN_WAREHOUSE',:rounding_option => 'NONE') unless Omni::AllocationProfile.where(:allocation_profile_id => '913BB680231211E3PROJECTION4UNITS').first
    @ap7='913BB680231XXXXLASTFORECASTUNITS'
    Omni::AllocationProfile.create(:allocation_profile_id => @ap7, :display => 'last forecast units profile', :allocation_formula => 'LAST_FORECAST_UNITS', :percent_to_allocate => percent_to_allocate, :excess_demand_option => 'LARGEST_DEMAND', :excess_supply_option => 'LEAVE_IN_WAREHOUSE',:rounding_option => 'NONE') unless Omni::AllocationProfile.where(:allocation_profile_id => '913BB680231211ELASTFORECASTUNITS').first
    @ap8='913BB680231XXXXXXXALLOCATEDUNITS'
    Omni::AllocationProfile.create(:allocation_profile_id => @ap8, :display => 'allocated units profile', :allocation_formula => 'ALLOCATED_UNITS', :percent_to_allocate => percent_to_allocate, :excess_demand_option => 'LARGEST_DEMAND', :excess_supply_option => 'LEAVE_IN_WAREHOUSE',:rounding_option => 'NONE') unless Omni::AllocationProfile.where(:allocation_profile_id => '913BB680231211APPROVEDPROJECTION').first
    @ap9='913BB680231XXXAPPROVEDPROJECTION'
    Omni::AllocationProfile.create(:allocation_profile_id => @ap9, :display => 'approve projection units profile', :allocation_formula => 'APPROVED_PROJECTION', :percent_to_allocate => percent_to_allocate, :excess_demand_option => 'LARGEST_DEMAND', :excess_supply_option => 'LEAVE_IN_WAREHOUSE',:rounding_option => 'NONE') unless Omni::AllocationProfile.where(:allocation_profile_id => '913BB680231211APPROVEDPROJECTION').first
  end

  def self.allocation_scenarios
    x = []
    x << {:scenario_description=>'Supply equals Demand',      :allocation_profile_id => @ap1, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>50, :expected_allocation_results_loc_2=>40, :expected_allocation_results_loc_3=>10 }
    x << {:scenario_description=>'Excess Supply',             :allocation_profile_id => @ap1, :order_pack_size => 10, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>500, :expected_allocation_results_loc_2=>400, :expected_allocation_results_loc_3=>100 }
    x << {:scenario_description=>'Excess Demand',           :allocation_profile_id => @ap1, :order_pack_size => 1, :percent_to_allocate=>1, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>1, :expected_allocation_results_loc_2=>0, :expected_allocation_results_loc_3=>0}
    x << {:scenario_description=>'Excess Demand',           :allocation_profile_id => @ap1, :order_pack_size => 10, :percent_to_allocate=>1, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>5, :expected_allocation_results_loc_2=>4, :expected_allocation_results_loc_3=>1}
    x << {:scenario_description=>'Excess Demand',           :allocation_profile_id => @ap1, :order_pack_size => 1, :percent_to_allocate=>80, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>40, :expected_allocation_results_loc_2=>32, :expected_allocation_results_loc_3=>8}
    x << {:scenario_description=>'Excess Supply',              :allocation_profile_id => @ap1, :order_pack_size => 10, :percent_to_allocate=>80, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>400, :expected_allocation_results_loc_2=>320, :expected_allocation_results_loc_3=>80}
    x << {:scenario_description=>'Supply equals Demand',       :allocation_profile_id => @ap2, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>50, :expected_allocation_results_loc_2=>40, :expected_allocation_results_loc_3=>10}
    x << {:scenario_description=>'Excess Supply',              :allocation_profile_id => @ap2, :order_pack_size => 10, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>50, :expected_allocation_results_loc_2=>40, :expected_allocation_results_loc_3=>10}
    x << {:scenario_description=>'Excess Demand',           :allocation_profile_id => @ap2, :order_pack_size => 1, :percent_to_allocate=>1, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>1, :expected_allocation_results_loc_2=>0, :expected_allocation_results_loc_3=>0}
    x << {:scenario_description=>'Excess Demand',           :allocation_profile_id => @ap2, :order_pack_size => 10, :percent_to_allocate=>1, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>10, :expected_allocation_results_loc_2=>0, :expected_allocation_results_loc_3=>0}
    x << {:scenario_description=>'Excess Demand',           :allocation_profile_id => @ap2, :order_pack_size => 1, :percent_to_allocate=>80, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>50, :expected_allocation_results_loc_2=>30, :expected_allocation_results_loc_3=>0}
    x << {:scenario_description=>'Excess Supply',              :allocation_profile_id => @ap2, :order_pack_size => 10, :percent_to_allocate=>80, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>50, :expected_allocation_results_loc_2=>40, :expected_allocation_results_loc_3=>10}
    x << {:scenario_description=>'All Locations Locked',   :allocation_profile_id => @ap2, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>40,  :allocated_units_locked_loc_2=>40,  :allocated_units_locked_loc_3=>40, :expected_allocation_results_loc_1=>40, :expected_allocation_results_loc_2=>40, :expected_allocation_results_loc_3=>40 }
    x << {:scenario_description=>'1 Location not locked, Excess Supply', :allocation_profile_id => @ap1, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>40,  :allocated_units_locked_loc_2=>40,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>40, :expected_allocation_results_loc_2=>40, :expected_allocation_results_loc_3=>20 }
    x << {:scenario_description=>'1 Location not locked, Excess Supply', :allocation_profile_id => @ap2, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>40,  :allocated_units_locked_loc_2=>40,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>40, :expected_allocation_results_loc_2=>40, :expected_allocation_results_loc_3=>10 }
    x << {:scenario_description=>'1 Location locked, Excess Supply',       :allocation_profile_id => @ap1, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>40,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>40, :expected_allocation_results_loc_2=>48, :expected_allocation_results_loc_3=>12 }
    x << {:scenario_description=>'1 Location locked, Excess Supply',       :allocation_profile_id => @ap2, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>40,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>40, :expected_allocation_results_loc_2=>40, :expected_allocation_results_loc_3=>10 }
    x << {:scenario_description=>'1 Location locked, Excess Demand',    :allocation_profile_id => @ap1, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>60,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>60, :expected_allocation_results_loc_2=>32, :expected_allocation_results_loc_3=>8 }
    x << {:scenario_description=>'1 Location locked, Excess Demand',    :allocation_profile_id => @ap2, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>60,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>60, :expected_allocation_results_loc_2=>40, :expected_allocation_results_loc_3=>0 }
    x << {:scenario_description=>'Projection 1 Units',       :allocation_profile_id => @ap3, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>50, :expected_allocation_results_loc_2=>40, :expected_allocation_results_loc_3=>10 }
    x << {:scenario_description=>'Projection 2 Units',       :allocation_profile_id => @ap4, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>50, :expected_allocation_results_loc_2=>40, :expected_allocation_results_loc_3=>10 }
    x << {:scenario_description=>'Projection 3 Units',       :allocation_profile_id => @ap5, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>50, :expected_allocation_results_loc_2=>40, :expected_allocation_results_loc_3=>10 }
    x << {:scenario_description=>'Projection 4 Units',       :allocation_profile_id => @ap6, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>50, :expected_allocation_results_loc_2=>40, :expected_allocation_results_loc_3=>10 }
    x << {:scenario_description=>'Last Forecast Units',     :allocation_profile_id => @ap7, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>50, :expected_allocation_results_loc_2=>40, :expected_allocation_results_loc_3=>10 }
    x << {:scenario_description=>'Allocated Units',           :allocation_profile_id => @ap8, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>0, :expected_allocation_results_loc_2=>0, :expected_allocation_results_loc_3=>0 }
    x << {:scenario_description=>'Approved Projection',   :allocation_profile_id => @ap9, :order_pack_size => 1, :percent_to_allocate=>100, :allocated_units_locked_loc_1=>0,  :allocated_units_locked_loc_2=>0,  :allocated_units_locked_loc_3=>0, :expected_allocation_results_loc_1=>50, :expected_allocation_results_loc_2=>40, :expected_allocation_results_loc_3=>10 }
    x
  end

  def self.reindex_data
    Omni::AllocationProfile.reindex
    Omni::Bts.reindex
    Omni::BtsDetail.reindex
    Omni::Projection.reindex
    Omni::ProjectionDetail.reindex
    Omni::Purchase.reindex
    Omni::PurchaseAllocation.reindex
    Omni::PurchaseDetail.reindex
  end

end