class Omni::Test::Purchase < Omni::Test::Base

  def self.go
    # @pd1=Omni::PurchaseDetail.where(:purchase_detail_id=>'ABABDAAA35E011E3APURCHASEDETAIL1').first
    @pd1 = reset_data
    @p=Omni::Purchase.where(:purchase_id => 'ABABDAAA35E011E3ABAA20C9D047DD15').first
    @@model_name = 'Purchase'
    @@model_action = 'event'

    test_purchase_events
    test_purchase_detail_events

    # approval scenarios - various approval tests
    @@model_action = 'approve'
    approval_scenarios.each {|s| test_approval_scenario s}

    # run 26 different allocation tests
    @@model_action = 'allocation'
    allocation_scenarios.each {|s| test_allocation_scenario s}
    expected = 0
    @p.purchase_details.each {|x| expected += x.purchase_allocations.count}

    @@model_action = 'computed attributes'
    test_it('it has_many allocations through purchase_details',expected, @p.purchase_allocations.count)
    test_it('it computes the total number of allocations',expected, @p.allocations_count)

    @@model_action = 'request'
    request_scenarios.each {|s| test_request_scenario s}

  end

  def self.reset_data
    Omni::StockLedgerActivity.where(stockable_id: 'ABABDAAA35E011E3APURCHASEDETAIL1').to_a.each {|x| x.delete}
    Omni::Purchase.where(:purchase_id => 'ABABDAAA35E011E3ABAA20C9D047DD15').to_a.each {|x| x.stock_ledger_activities.delete_all; x.delete}
    Omni::Purchase.create(:purchase_id => 'ABABDAAA35E011E3ABAA20C9D047DD15',:supplier_id => 'B931D2A4AC5311E299E700FFSUPPLIER', :location_id => '51579764AC3E11E2947800FF58D32228',  :allocation_profile_id => '913BB680231XXXXLASTFORECASTUNITS', :purchase_type => 'SAMPLE', :purchase_source => 'SAMPLE', :ordered_by_user_id => '811166D4D50A11E2B45820C9D04AARON', :payment_term =>'NET 30',:freight_term => 'COLLECT',:ship_via => 'SAMPLE', :fob_point => 'ORIGIN' , :display => 'Olivanders wands test purchase',:purchase_approver_1_user_id => '811166D4D50A11E2B45820C9D04AARON')

    Omni::AllocationDetail.all.to_a.each {|x| x.delete}

    Omni::PurchaseAllocation.where(purchase_detail_id: 'ABABDAAA35E011E3APURCHASEDETAIL1').to_a.each {|x| x.delete}
    Omni::PurchaseAllocation.create(purchase_allocation_id: '45XXXX8YY386CPURCHASEALLOCATION1', purchase_detail_id: 'ABABDAAA35E011E3APURCHASEDETAIL1', location_id:'51579764AC3E11E2947800FF58D32228', units_allocated: 25)

    Omni::PurchaseDetail.where(:purchase_detail_id=>['ABABDAAA35E011E3APURCHASEDETAIL1']).to_a.each {|x| x.delete}
    pd = Omni::PurchaseDetail.create(:purchase_detail_id=>'ABABDAAA35E011E3APURCHASEDETAIL1', :allocation_profile_id => '913BB680231XXXXLASTFORECASTUNITS', :purchase_id => 'ABABDAAA35E011E3ABAA20C9D047DD15', :sku_supplier_id => '239F5610231F11E3BE4920C9D047DD15',:units_ordered=>100, :order_pack_size=>1, :supplier_cost=>25, :order_cost_units=>1)
    pd
  end

  def self.test_allocation_scenario(s)
    # puts s[:scenario]
    # TODO: Refactor to use allocation.calculate method
    Omni::PurchaseAllocation.delete_all

    a=Omni::AllocationProfile.where(:allocation_profile_id=>s[:allocation_profile_id]).first
    a.percent_to_allocate = s[:percent_to_allocate]
    a.save

    Omni::PurchaseAllocation.create(:purchase_detail_id => 'ABABDAAA35E011E3APURCHASEDETAIL1', :location_id=>'51713A3EAC3E11E2947800FF58D32228', :state=>'locked', :units_allocated=>s[:allocated_units_locked_loc_1]) if s[:allocated_units_locked_loc_1] > 0
    Omni::PurchaseAllocation.create(:purchase_detail_id => 'ABABDAAA35E011E3APURCHASEDETAIL1', :location_id=>'51892F68AC3E11E2947800FF58D32228', :state=>'locked', :units_allocated=>s[:allocated_units_locked_loc_2]) if s[:allocated_units_locked_loc_2] > 0
    Omni::PurchaseAllocation.create(:purchase_detail_id => 'ABABDAAA35E011E3APURCHASEDETAIL1', :location_id=>'5247A038AC3E11E2947800FF58D32228', :state=>'locked', :units_allocated=>s[:allocated_units_locked_loc_3]) if s[:allocated_units_locked_loc_3] > 0

    x=Omni::PurchaseDetail.where(:purchase_detail_id => 'ABABDAAA35E011E3APURCHASEDETAIL1').first
    x.allocation_profile_id = s[:allocation_profile_id]
    x.order_pack_size = s[:order_pack_size]
    x.save
    x.allocate

    x=Omni::PurchaseDetail.where(:purchase_detail_id => 'ABABDAAA35E011E3APURCHASEDETAIL1').first

    expected =  s[:expected_allocation_results_loc_1].to_s + ',' + s[:expected_allocation_results_loc_2].to_s + ',' + s[:expected_allocation_results_loc_3].to_s
    actual = x.purchase_allocations.count > 0 ? x.purchase_allocations.first.units_allocated.to_s.chop.chop + ',' + x.purchase_allocations.second.units_allocated.to_s.chop.chop + ',' + x.purchase_allocations.third.units_allocated.to_s.chop.chop : 'No allocations created'

    test_it("#{s[:scenario]}", expected, actual)
  end

  def self.test_request_scenario(s)
    @@model_action = s[:action]
    params = {'request_type' => s[:action], 'adjustment_percent' => s[:adjustment_percent]}
    cloned_po = @p.clone
    expected = true
    actual = cloned_po ? true : false
    test_it("#{s[:scenario]}", expected, actual)
    cloned_po.delete
  end

  def self.test_purchase_events
    x=@p
    # if base data was created and relationship exists, the purchase should have 1 detail
    test_it('it create a purchase with details', true, x.purchase_details.count > 0)

    # RELEASE SHOULD SET STATE TO PENDING APPROVAL
    # puts x.state
    x.release
    x=Omni::Purchase.where(:purchase_id => 'ABABDAAA35E011E3ABAA20C9D047DD15').first
    test_it('Release a purchase requires approvals','draft',x.state)

    # approval scenarios 1 - 5 approve not allowed for these state
    ['draft','open','partial','complete','cancelled'].each do |s|
      x=@p
      x.state = s
      x.save
      x.approve
      test_it('disallows approving in this state',s,x.state)
    end

    # x.print
    test_it('it prints the purchase','PRINT','NOT IMPLEMENTED YET')

    # cancel
    y = x.purchase_details.first
    y.selling_units_approved = 250
    y.save
    x.cancel
    sla_count = Omni::StockLedgerActivity.where(stockable_id: y.purchase_detail_id).count
    test_it('it cancels a purchase','cancelled',x.state)
    test_it('it creates stock ledger activity when the purchase is cancelled',1,sla_count)

    # update allocation profiles on purchase details from mass update
    @@model_action = 'Update Allocation Profiles'
    @p=Omni::Purchase.where(:purchase_id => 'ABABDAAA35E011E3ABAA20C9D047DD15').first
    x = @p
    x.mass_update_type = 'PROFILE'
    x.allocation_profile_id = ''
    x.is_update_all_details = true
    x.save
    y = x.purchase_details.first
    y.allocation_profile_id = ''
    y.save

    x.allocation_profile_id = 'LASTXFORECASTXXXDIVIDEEQUALLY123'
    x.save
    x.mass_update
    # y = x.purchase_details.first

    y = Omni::PurchaseDetail.where(purchase_id: 'ABABDAAA35E011E3ABAA20C9D047DD15').first
    test_it('it updates the allocation profiles of the purchase details when a mass update of update allocation profiles with update all details is performed', 'LASTXFORECASTXXXDIVIDEEQUALLY123', y.allocation_profile_id)
    test_it('it updates the allocation profiles of the purchase details when a mass update of update allocation profiles with update blank details is performed', 'LASTXFORECASTXXXDIVIDEEQUALLY123', y.allocation_profile_id)
    y.allocation_profile_id = '913BB680231211E3PROJECTION1UNITS'
    y.save
    test_it('it does not update the allocation profiles of the purchase details when a mass update of update allocation profiles with update blank details is performed and there is already a profile.', '913BB680231211E3PROJECTION1UNITS', y.allocation_profile_id)

  end

  def self.test_purchase_detail_events
    x=@pd1
    @@model_action = 'Events'
    @@model = 'PurchaseDetail'

    x.state = 'draft'
    x.save
    x.receive
    test_it('it prevents receiving unless state is open','draft',x.state)

    x.state = 'open'
    x.save
    x.approve
    test_it('Approve a purchase detail','open',x.state)

    @@model_action = 'receive'
    x.selling_units_approved = 100
    x.selling_units_cancelled = 10
    x.selling_units_received = 10
    x.receive
    test_it('it partially receive a purchase detail when there are open_units','partial',x.state)

    x.selling_units_approved = 100
    x.selling_units_cancelled = 0
    x.selling_units_received = 100
    x.receive
    test_it('it completely receive a purchase detail when there are no remaining open_units','complete',x.state)

    x.state = 'open'
    x.save
    x.cancel
    test_it('it cancels a purchase detail when state is open or partial','cancelled',x.state)

    @@model_action = 'process'
    x = reset_data
    Omni::Allocation.where(allocatable_type: "Omni::PurchaseDetail", allocatable_id: x.purchase_detail_id, sku_id: x.sku_id).each {|x| x.delete}
    x.process
    a = Omni::Allocation.where(allocatable_type: "Omni::PurchaseDetail", allocatable_id: x.purchase_detail_id, sku_id: x.sku_id)
    test_it('it creates an Allocation record corresponding to the Purchase Detail when the purchase detail is processed',1 , a.count)

    pa = x.purchase_allocations.first
    ad = Omni::AllocationDetail.where(allocation_id: a.first.allocation_id)
    pa = Omni::PurchaseAllocation.where(purchase_detail_id: x.purchase_detail_id)
    test_it('it creates an Allocation Detail record corresponding to the Purchase Allocation when the purchase detail is processed', pa.count, ad.count)
    test_it('it sets the units allocated on the allocation details to the same on purchase allocations when the purchase detail is processed', pa.first.units_allocated, ad.first.units_allocated)
    test_it('it creates transfers corresponding to the allocation detail when the purchase detail is processed', pa.first.units_allocated, ad.first.units_allocated)

    # Test allocating purchase details
    x.allocate
    y = x.purchase_allocations.first
    test_it('it creates purchase allocations when the purchase is allocated', 3, x.purchase_allocations.count)
    y = Omni::PurchaseAllocation.where(purchase_detail_id: x.purchase_detail_id).first
    y.lock
    test_it('Lock a purchase allocation','locked',y.state)
    y.unlock
    test_it('Unlock a purchase allocation','draft',y.state)
  end

  def self.test_approval_scenario(s)
    p=Omni::Purchase.where(:purchase_id => 'ABABDAAA35E011E3ABAA20C9D047DD15').first
    p.state = 'pending_approval'
    p.purchase_approver_1_user_id = s[:approver_1]
    p.purchase_approver_2_user_id = s[:approver_2]
    p.purchase_approver_3_user_id = s[:approver_3]
    p.approval_1_date = s[:approval_1_date]
    p.approval_2_date = s[:approval_2_date]
    p.approval_3_date = s[:approval_3_date]
    p.save
    p.approve

    expected =  s[:purchase_state_after] + ',' + s[:approval_1_date_after].to_s + ',' + s[:approval_2_date_after].to_s + ',' + s[:approval_3_date_after].to_s
    actual =  p.state                   + ',' + p.approval_1_date.to_s           + ',' + p.approval_2_date.to_s       + ',' + p.approval_3_date.to_s

    test_it(s[:scenario], expected, actual)
  end

  def self.request_scenarios
    x = []
    x << {scenario: 'it creates a new purchase order by cloning an existing purchase order', expected: '', actual: '99999', action: 'clone', adjustment_percent: 5}
    x << {scenario: 'it automatically create a new purchase order based on a few parameters entered by a user.', expected: '', actual: '99999'}
    x << {scenario: 'it adds SKUs in bulk to a new or existing purchase order according to user parameters', expected: '', actual: '99999'}
    x << {scenario: 'it derives the units to order of each SKU from the BTS needs calculation.', expected: '', actual: '99999'}
    x << {scenario: '', expected: '', actual: '99999'}
  end

end
