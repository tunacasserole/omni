class Omni::Test::Purchase < Omni::Test::Base

  def self.go
    create_base_test_data
    @@model_name = 'Purchase'
    @@model_action = 'event'

    @p=Omni::Purchase.where(:purchase_id => 'ABABDAAA35E011E3ABAA20C9D047DD15').first
    @pd1=Omni::PurchaseDetail.where(:purchase_detail_id=>'ABABDAAA35E011E3APURCHASEDETAIL1').first

    test_purchase_events
    # test_purchase_detail_events

    @@model_action = 'request'
    # request_scenarios.each {|s| test_request_scenario s}
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

    # Test allocating purchase details
    x.allocate
    x.purchase_allocations.first

    x.lock
    test_it('Lock a purchase allocation','locked',x.state)

    x.unlock
    test_it('Unlock a purchase allocation','draft',x.state)
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

  # def self.test_allocation_scenario(s)
  #   # puts s[:scenario]
  #   a=Omni::AllocationProfile.where(:allocation_profile_id=>s[:allocation_profile_id]).first
  #   a.percent_to_allocate = s[:percent_to_allocate]
  #   a.save

  #   if s[:allocated_units_locked_loc_1] > 0
  #     Omni::PurchaseAllocation.create(:purchase_detail_id => 'ABABDAAA35E011E3APURCHASEDETAIL1', :location_id=>'51713A3EAC3E11E2947800FF58D32228', :state=>'locked', :units_allocated=>s[:allocated_units_locked_loc_1])
  #     Omni::PurchaseAllocation.create(:purchase_detail_id => 'ABABDAAA35E011E3APURCHASEDETAIL1', :location_id=>'51892F68AC3E11E2947800FF58D32228', :state=>'locked', :units_allocated=>s[:allocated_units_locked_loc_2])
  #     Omni::PurchaseAllocation.create(:purchase_detail_id => 'ABABDAAA35E011E3APURCHASEDETAIL1', :location_id=>'5247A038AC3E11E2947800FF58D32228', :state=>'locked', :units_allocated=>s[:allocated_units_locked_loc_3])
  #   end

  #   x=Omni::PurchaseDetail.where(:purchase_detail_id => 'ABABDAAA35E011E3APURCHASEDETAIL1').first
  #   x.allocation_profile_id = s[:allocation_profile_id]
  #   x.order_pack_size = s[:order_pack_size]
  #   x.save
  #   # puts x.allocation_profile_id
  #   # x.do_allocation

  #   x=Omni::PurchaseDetail.where(:purchase_detail_id => 'ABABDAAA35E011E3APURCHASEDETAIL1').first

  #   expected =  s[:expected_allocation_results_loc_1].to_s + ',' + s[:expected_allocation_results_loc_2].to_s + ',' + s[:expected_allocation_results_loc_3].to_s
  #   actual = x.purchase_allocations.count > 0 ? x.purchase_allocations.first.units_allocated.to_s.chop.chop + ',' + x.purchase_allocations.second.units_allocated.to_s.chop.chop + ',' + x.purchase_allocations.third.units_allocated.to_s.chop.chop : 'No allocations created'

  #   test_it("#{s[:scenario]}", expected, actual)
  # end

  def self.request_scenarios
    x = []
    x << {scenario: 'it creates a new purchase order by cloning an existing purchase order', expected: '', actual: '', action: 'clone', adjustment_percent: 5}
    # x << {scenario: 'it automatically create a new purchase order based on a few parameters entered by a user.', expected: '', actual: ''}
    # x << {scenario: 'it adds SKUs in bulk to a new or existing purchase order according to user parameters', expected: '', actual: ''}
    # x << {scenario: 'it derives the units to order of each SKU from the BTS needs calculation.', expected: '', actual: ''}
    # x << {scenario: '', expected: '', actual: ''}
  end

end
