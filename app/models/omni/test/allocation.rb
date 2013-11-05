class Omni::Test::Allocation < Omni::Test::Base

  def self.go
    create_data
    # test_events
    test_calculate
  end

  def self.test_calculate
    @@model_action = 'Calculate'
    sku_id = '285C928C0F3611E3BB7120C9D047DD15'

    allocation_scenarios.each do |s|
      ap = Omni::AllocationProfile.where(allocation_profile_id: s[:allocation_profile_id]).first
      ap.percent_to_allocate = s[:percent_to_allocate]
      ap.save

      Omni::Allocation.where(allocation_id: 'PRIMARYALLOCATION1XXXXXXXXXXXXXX').to_a.each {|x|x.delete}
      x = Omni::Allocation.create(allocation_id: 'PRIMARYALLOCATION1XXXXXXXXXXXXXX', sku_id: '285C928C0F3611E3BB7120C9D047DD15', location_id: '51713A3EAC3E11E2947800FF58D32228', :allocation_profile_id => ap.allocation_profile_id, :units_to_allocate=>100)
      # puts "x.ap.percent_to_allocate is #{x.allocation_profile.percent_to_allocate }"

      locked_units = 0 + s[:allocated_units_locked_loc_1] + s[:allocated_units_locked_loc_2] + s[:allocated_units_locked_loc_3]
      locked_locations = []
      locked_locations << '51713A3EAC3E11E2947800FF58D32228' if s[:allocated_units_locked_loc_1] > 0
      locked_locations << '51892F68AC3E11E2947800FF58D32228' if s[:allocated_units_locked_loc_2] > 0
      locked_locations << '5247A038AC3E11E2947800FF58D32228' if s[:allocated_units_locked_loc_3] > 0

      allocations = x.calculate(ap, sku_id, s[:units_to_allocate], locked_units, locked_locations, s[:purchase_detail_id])

      expected =  s[:expected_allocation_results_loc_1].to_s + ',' + s[:expected_allocation_results_loc_2].to_s + ',' + s[:expected_allocation_results_loc_3].to_s
      actual = (allocations['51713A3EAC3E11E2947800FF58D32228'] || s[:allocated_units_locked_loc_1].to_f).to_s.chop.chop + ',' + (allocations['51892F68AC3E11E2947800FF58D32228'] || s[:allocated_units_locked_loc_2].to_f).to_s.chop.chop + ',' + (allocations['5247A038AC3E11E2947800FF58D32228'] || s[:allocated_units_locked_loc_1].to_f).to_s.chop.chop

      test_it("#{s[:scenario]}", expected, actual)
    end

  end

  def self.test_events
    x=@a
    event_scenarios.each do |s|
      x.send(s[:action])
      test_it(s[:scenario],s[:expected], x.state)
    end

  end

  def self.create_data
    @@model_name = 'Allocation'
    @@model_action = 'Event'

    # Omni::AllocationDetail.where(allocation_id: 'PRIMARYALLOCATION1XXXXXXXXXXXXXX').to_a.each {|x| x.delete}
    # @ad=Omni::AllocationDetail.create(allocation_id: 'PRIMARYALLOCATION1XXXXXXXXXXXXXX', allocation_detail_id: 'PRIMARYALLOCATIONDETAIL1XXXXXXXX', sku_id: '285C928C0F3611E3BB7120C9D047DD15', location_id: '51713A3EAC3E11E2947800FF58D32228', :units_needed=>100)
  end

  def self.event_scenarios
    x=[]
    x << {scenario: 'it approves one in draft state', initial_state: 'draft', action: 'approve', expected: 'approved' }
    x << {scenario: 'it transfers one in approved state', initial_state: 'approved', action: 'transfer', expected: 'transfer_request' }
    x << {scenario: 'it ships one in transfer_request state', initial_state: 'transfer_request', action: 'ship', expected: 'shipped' }
    x
  end
end
