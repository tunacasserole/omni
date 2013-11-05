class Omni::Test::Purchase < Omni::Test::Base

  def self.go
    create_base_test_data
    @@model_name = 'Purchase'
    @@model_action = 'Event'

    @p=Omni::Purchase.where(:purchase_id => 'ABABDAAA35E011E3ABAA20C9D047DD15').first
    @pd1=Omni::PurchaseDetail.where(:purchase_detail_id=>'ABABDAAA35E011E3APURCHASEDETAIL1').first

    # test release, approve & cancel a purchase
    test_purchase_events

    # test approve, receive, allocate & cancel a purchase detail
    test_purchase_detail_events

    # test approve, receive, allocate & cancel a purchase detail
    test_purchase_allocation_events
  end

  def self.test_purchase_events
    x=@p
    # if base data was created and relationship exists, the purchase should have 1 detail
    test_it('Create a purchase with 1 detail', 1, x.purchase_details.count)

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
    @@model_action = 'Approval'
    approval_scenarios.each {|s| test_approval_scenario s}

    # run 26 different allocation tests
    # @@model_action = 'Allocation'
    # allocation_scenarios.each {|s| test_allocation_scenario s}

  end

  def self.test_purchase_detail_events
    x=@pd1

    x.approve
    test_it('Approve a purchase detail','open',x.state)

    x.receive
    test_it('Receive a purchase detail','open',x.state)

    x.cancel
    test_it('Cancel a purchase detail','cancelled',x.state)
  end

  def self.test_purchase_allocation_events
    x = @pd1.purchase_allocations.first

    x.lock
    test_it('Lock a purchase allocation','locked',x.state)

    x.unlock
    test_it('Unlock a purchase allocation','draft',x.state)
  end

  def self.test_approval_scenario(s)
    pd = @pd1
    pd.order_pack_size=10
    pd.supplier_cost=24
    pd.order_cost_units=12
    pd.save

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
    actual =      p.state                            + ',' + p.approval_1_date.to_s           + ',' + p.approval_2_date.to_s            + ',' + p.approval_3_date.to_s

    test_it(s[:scenario], expected, actual)
  end

  def self.test_allocation_scenario(s)
    a=Omni::AllocationProfile.where(:allocation_profile_id=>s[:allocation_profile_id]).first
    a.percent_to_allocate = s[:percent_to_allocate]
    a.save

    if s[:allocated_units_locked_loc_1] > 0
      Omni::PurchaseAllocation.create(:purchase_detail_id => 'ABABDAAA35E011E3APURCHASEDETAIL1', :location_id=>'51713A3EAC3E11E2947800FF58D32228', :state=>'locked', :units_allocated=>s[:allocated_units_locked_loc_1])
      Omni::PurchaseAllocation.create(:purchase_detail_id => 'ABABDAAA35E011E3APURCHASEDETAIL1', :location_id=>'51892F68AC3E11E2947800FF58D32228', :state=>'locked', :units_allocated=>s[:allocated_units_locked_loc_2])
      Omni::PurchaseAllocation.create(:purchase_detail_id => 'ABABDAAA35E011E3APURCHASEDETAIL1', :location_id=>'5247A038AC3E11E2947800FF58D32228', :state=>'locked', :units_allocated=>s[:allocated_units_locked_loc_3])
    end

    x=Omni::PurchaseDetail.where(:purchase_detail_id => 'ABABDAAA35E011E3APURCHASEDETAIL1').first
    x.allocation_profile_id = s[:allocation_profile_id]
    x.save
    x.process_allocation

    x=Omni::PurchaseDetail.where(:purchase_detail_id => 'ABABDAAA35E011E3APURCHASEDETAIL1').first

    expected =  s[:expected_allocation_results_loc_1].to_s + ',' + s[:expected_allocation_results_loc_2].to_s + ',' + s[:expected_allocation_results_loc_3].to_s
    actual = x.purchase_allocations.first.units_allocated.to_s.chop.chop + ',' + x.purchase_allocations.second.units_allocated.to_s.chop.chop + ',' + x.purchase_allocations.third.units_allocated.to_s.chop.chop

    test_it("#{s[:scenario]}", expected, actual)
  end

  def self.approval_scenarios
    user_1 = '811166D4D50A11E2B45820C9D04AARON'
    user_2 = '811166D4D50A11E2B45820C9D04ATTTT'
    user_3 = 'FB0ACB1AFAC111E2B25720SYSBUILDIT'
    now = Date.today
    x=[]
    x << {scenario:'Approval not authorized',        :approver_1=>user_2, :approver_2=>nil, :approver_3=>nil,       :approval_1_date=>nil, :approval_2_date=>nil, :approval_3_date=>nil,    :purchase_details=>@pd1, :approval_1_date_after=>nil, :approval_2_date_after=>nil, :approval_3_date_after=>nil, :purchase_state_after=>'pending_approval',  :purchase_detail_state_after=>'draft', :selling_units_approved_after=>0, :email_sent=>false, :stock_ledger_row=>false}
    x << {scenario:'Approval 1 already done',        :approver_1=>user_1, :approver_2=>user_2, :approver_3=>nil, :approval_1_date=>now, :approval_2_date=>nil, :approval_3_date=>nil, :purchase_details=>@pd1, :approval_1_date_after=>now, :approval_2_date_after=>nil, :approval_3_date_after=>nil, :purchase_state_after=>'pending_approval',  :purchase_detail_state_after=>'draft', :selling_units_approved_after=>0, :email_sent=>false, :stock_ledger_row=>false}
    x << {scenario:'Approval 1 must be done first',:approver_1=>user_2, :approver_2=>user_1, :approver_3=>nil, :approval_1_date=>nil, :approval_2_date=>nil, :approval_3_date=>nil,   :purchase_details=>@pd1, :approval_1_date_after=>nil, :approval_2_date_after=>nil, :approval_3_date_after=>nil, :purchase_state_after=>'pending_approval',  :purchase_detail_state_after=>'draft', :selling_units_approved_after=>0, :email_sent=>false, :stock_ledger_row=>false}
    x << {scenario:'Approval 2 already done',        :approver_1=>user_2, :approver_2=>user_1, :approver_3=>nil, :approval_1_date=>now, :approval_2_date=>now, :approval_3_date=>nil, :purchase_details=>@pd1, :approval_1_date_after=>now, :approval_2_date_after=>now, :approval_3_date_after=>nil, :purchase_state_after=>'pending_approval',:purchase_detail_state_after=>'draft', :selling_units_approved_after=>0, :email_sent=>false, :stock_ledger_row=>false}
    x << {scenario:'Approval 2 must be done first',:approver_1=>user_2, :approver_2=>user_3, :approver_3=>user_1,:approval_1_date=>now, :approval_2_date=>nil, :approval_3_date=>nil,:purchase_details=>@pd1, :approval_1_date_after=>now, :approval_2_date_after=>nil, :approval_3_date_after=>nil, :purchase_state_after=>'pending_approval',:purchase_detail_state_after=>'draft', :selling_units_approved_after=>0, :email_sent=>false, :stock_ledger_row=>false}
    x << {scenario:'Approval 3 already done',   :approver_1=>user_2, :approver_2=>user_3, :approver_3=>user_1,:approval_1_date=>now, :approval_2_date=>now, :approval_3_date=>now,:purchase_details=>@pd1, :approval_1_date_after=>now, :approval_2_date_after=>now, :approval_3_date_after=>now, :purchase_state_after=>'pending_approval',  :purchase_detail_state_after=>'draft', :selling_units_approved_after=>0, :email_sent=>false, :stock_ledger_row=>false}
    x << {scenario:'Approval 1 of 1 succesfull', :approver_1=>user_1, :approver_2=>nil, :approver_3=>nil,             :approval_1_date=>nil, :approval_2_date=>nil, :approval_3_date=>nil,    :purchase_details=>@pd1, :approval_1_date_after=>now, :approval_2_date_after=>nil, :approval_3_date_after=>nil, :purchase_state_after=>'open',                     :purchase_detail_state_after=>'open', :selling_units_approved_after=>100, :email_sent=>false, :stock_ledger_row=>true}
    x << {scenario:'Approval 1 of 2 succesfull', :approver_1=>user_1, :approver_2=>user_2, :approver_3=>nil,       :approval_1_date=>nil, :approval_2_date=>nil, :approval_3_date=>nil,    :purchase_details=>@pd1, :approval_1_date_after=>now, :approval_2_date_after=>nil, :approval_3_date_after=>nil, :purchase_state_after=>'pending_approval',:purchase_detail_state_after=>'draft', :selling_units_approved_after=>0, :email_sent=>true, :stock_ledger_row=>false}
    x << {scenario:'Approval 1 of 3 succesfull', :approver_1=>user_1, :approver_2=>user_2, :approver_3=>user_3, :approval_1_date=>nil, :approval_2_date=>nil, :approval_3_date=>nil,   :purchase_details=>@pd1, :approval_1_date_after=>now, :approval_2_date_after=>nil, :approval_3_date_after=>nil, :purchase_state_after=>'pending_approval', :purchase_detail_state_after=>'draft', :selling_units_approved_after=>0, :email_sent=>true, :stock_ledger_row=>false}
    x << {scenario:'Approval 2 of 2 succesfull', :approver_1=>user_2, :approver_2=>user_1, :approver_3=>nil,       :approval_1_date=>now, :approval_2_date=>nil, :approval_3_date=>nil, :purchase_details=>@pd2, :approval_1_date_after=>now, :approval_2_date_after=>now, :approval_3_date_after=>nil, :purchase_state_after=>'open',                   :purchase_detail_state_after=>'open', :selling_units_approved_after=>1000, :email_sent=>false, :stock_ledger_row=>true}
    x << {scenario:'Approval 2 of 3 succesfull', :approver_1=>user_2, :approver_2=>user_1, :approver_3=>user_3, :approval_1_date=>now, :approval_2_date=>nil, :approval_3_date=>nil,  :purchase_details=>@pd1, :approval_1_date_after=>now, :approval_2_date_after=>now,:approval_3_date_after=>nil,:purchase_state_after=>'pending_approval',:purchase_detail_state_after=>'draft', :selling_units_approved_after=>0, :email_sent=>true, :stock_ledger_row=>false}
    x << {scenario:'Approval 3 of 3 succesfull', :approver_1=>user_2, :approver_2=>user_3, :approver_3=>user_1, :approval_1_date=>now, :approval_2_date=>now, :approval_3_date=>nil, :purchase_details=>@pd2, :approval_1_date_after=>now, :approval_2_date_after=>now, :approval_3_date_after=>now, :purchase_state_after=>'open',                   :purchase_detail_state_after=>'open', :selling_units_approved_after=>1000, :email_sent=>false, :stock_ledger_row=>true}
    x << {scenario:'Approval 1 succesfull',        :approver_1=>user_1, :approver_2=>user_1, :approver_3=>user_3, :approval_1_date=>nil, :approval_2_date=>nil, :approval_3_date=>nil,     :purchase_details=>@pd2, :approval_1_date_after=>now, :approval_2_date_after=>nil, :approval_3_date_after=>nil, :purchase_state_after=>'pending_approval', :purchase_detail_state_after=>'draft', :selling_units_approved_after=>0, :email_sent=>true, :stock_ledger_row=>false}
    x << {scenario:'Approval 1 succesfull',        :approver_1=>user_1, :approver_2=>user_1, :approver_3=>user_1, :approval_1_date=>nil, :approval_2_date=>nil, :approval_3_date=>nil,    :purchase_details=>@pd2, :approval_1_date_after=>now, :approval_2_date_after=>nil, :approval_3_date_after=>nil, :purchase_state_after=>'pending_approval', :purchase_detail_state_after=>'draft', :selling_units_approved_after=>0, :email_sent=>true, :stock_ledger_row=>false}
    x << {scenario:'Approval 2 succesfull',        :approver_1=>user_2, :approver_2=>user_1, :approver_3=>user_1, :approval_1_date=>now, :approval_2_date=>nil, :approval_3_date=>nil,  :purchase_details=>@pd2, :approval_1_date_after=>now, :approval_2_date_after=>now, :approval_3_date_after=>nil, :purchase_state_after=>'pending_approval', :purchase_detail_state_after=>'draft', :selling_units_approved_after=>0, :email_sent=>true, :stock_ledger_row=>false}
    x
  end

end
