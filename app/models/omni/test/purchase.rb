class Omni::Test::Purchase < Omni::Test::Base

  def self.go
    # @pd1=Omni::PurchaseDetail.where(:purchase_detail_id=>'ABABDAAA35E011E3APURCHASEDETAIL1').first
    @p=Omni::Purchase.where(:purchase_id => 'ABABDAAA35E011E3ABAA20C9D047DD15').first
    @pd1 = reset_data
    @@model_name = 'Purchase'
    @@model_action = 'event'


    # allocation_scenarios.each {|s| test_allocation_scenario s}

    # test_allocation
    # test_purchase_events
    test_purchase_detail_events

    # @@model_action = 'request'
    # request_scenarios.each {|s| test_request_scenario s}
  end

  def self.reset_data
    Omni::Purchase.where(:purchase_id => 'ABABDAAA35E011E3ABAA20C9D047DD15').to_a.each {|x| x.delete}
    Omni::Purchase.create(:purchase_id => 'ABABDAAA35E011E3ABAA20C9D047DD15',:supplier_id => 'B931D2A4AC5311E299E700FFSUPPLIER', :location_id => '51579764AC3E11E2947800FF58D32228',  :allocation_profile_id => '913BB680231XXXXLASTFORECASTUNITS', :purchase_type => 'SAMPLE', :purchase_source => 'SAMPLE', :ordered_by_user_id => '811166D4D50A11E2B45820C9D04AARON', :payment_term =>'NET 30',:freight_term => 'COLLECT',:ship_via => 'SAMPLE', :fob_point => 'ORIGIN' , :display => 'Olivanders wands test purchase',:purchase_approver_1_user_id => '811166D4D50A11E2B45820C9D04AARON')

    Omni::AllocationDetail.all.each {|x| x.delete}

    Omni::PurchaseAllocation.where(purchase_detail_id: 'ABABDAAA35E011E3APURCHASEDETAIL1').to_a.each {|x| x.delete}
    Omni::PurchaseAllocation.create(purchase_allocation_id: '45XXXX8YY386CPURCHASEALLOCATION1', purchase_detail_id: 'ABABDAAA35E011E3APURCHASEDETAIL1', location_id:'51579764AC3E11E2947800FF58D32228', units_allocated: 25)

    Omni::PurchaseDetail.where(:purchase_detail_id=>['ABABDAAA35E011E3APURCHASEDETAIL1']).to_a.each {|x| x.delete}
    pd = Omni::PurchaseDetail.create(:purchase_detail_id=>'ABABDAAA35E011E3APURCHASEDETAIL1', :allocation_profile_id => '913BB680231XXXXLASTFORECASTUNITS', :purchase_id => 'ABABDAAA35E011E3ABAA20C9D047DD15', :sku_supplier_id => '239F5610231F11E3BE4920C9D047DD15',:units_ordered=>100, :order_pack_size=>1, :supplier_cost=>25, :order_cost_units=>1)
    pd
  end

  def self.test_allocation_scenario(s)
    # puts s[:scenario]
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
    cloned_po = @p.request(params)
  end

  def self.test_purchase_events
    x=@p
    # if base data was created and relationship exists, the purchase should have 1 detail
    test_it('Create a purchase with details', true, x.purchase_details.count > 0)

    # RELEASE SHOULD SET STATE TO PENDING APPROVAL
    # puts x.state
    x.release
    # puts x.errors.inspect
    x=Omni::Purchase.where(:purchase_id => 'ABABDAAA35E011E3ABAA20C9D047DD15').first
    # puts x.state
    test_it('Release a purchase requires approvals','draft',x.state)

    # approval scenarios 1 - 5 approve not allowed for these state
    ['draft','open','partial','complete','cancelled'].each do |s|
      x=@p
      x.state = s
      x.save
      x.approve
      test_it('Test approve transition - approve not allowed for this state',s,x.state)
    end

    # x.print
    # test_it('Print a purchase','PRINT','NOT IMPLEMENTED YET')

    x.cancel
    test_it('Cancel a purchase','cancelled',x.state)

    # approval scenarios 6 - 20 various approval tests
    # @@model_action = 'approve'
    # approval_scenarios.each {|s| test_approval_scenario s}

    # run 26 different allocation tests
    # TODO: Refactor to use allocation.calculate method
    # @@model_action = 'Allocation'
    # allocation_scenarios.each {|s| test_allocation_scenario s}

  end

  def self.test_purchase_detail_events
    x=@pd1

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

#

    # Test allocating purchase details
    # x.allocate
    # y = x.purchase_allocations.first
    # y = Omni::PurchaseAllocation.where(purchase_detail_id: x.purchase_detail_id).first
    # y.lock
    # test_it('Lock a purchase allocation','locked',x.state)

    # x.unlock
    # test_it('Unlock a purchase allocation','draft',x.state)
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
    x << {scenario: 'it creates a new purchase order by cloning an existing purchase order', expected: '', actual: '', action: 'clone', adjustment_percent: 5}
    # x << {scenario: 'it automatically create a new purchase order based on a few parameters entered by a user.', expected: '', actual: ''}
    # x << {scenario: 'it adds SKUs in bulk to a new or existing purchase order according to user parameters', expected: '', actual: ''}
    # x << {scenario: 'it derives the units to order of each SKU from the BTS needs calculation.', expected: '', actual: ''}
    # x << {scenario: '', expected: '', actual: ''}
  end

end
