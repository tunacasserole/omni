class Omni::Test::Projection < Omni::Test::Base

  def self.go
    # create_projection_data
    create_security_data
    test_projection
  end

  def self.test_projection
    @@model_name = 'Projection'
    @@model_action = 'Event'

    @p=Omni::Projection.where(:projection_id => 'XXXXX1C19361XXXXXTESTPROJECTION1').first
    @pd=Omni::ProjectionDetail.where(:projection_detail_id => 'PROJ1A1C193611E3A22D20CXXPRODET1').first

    x=@p
    test_it('It creates one with details', 1, x.projection_details.count)

    x.projection_details.each {|x| x.delete}
    test_it('it destroys all details', 0, x.projection_details.count)

    # # close scenarios 1 - 4  not allowed for these states
    # ['draft','new','forecast','complete'].each do |s|
    #   x.state = s
    #   x.save
    #   x.close
    #   test_it("it prevents closing from #{s} state",s,x.state)
    # end

    @@model_action = 'Close'
    self.closing_scenarios.each {|x| process_projection_scenario x}
  end

  def self.process_projection_scenario(s)
    x=@p
    x.state = s[:projection_state]
    x.projection_approver_user_id = s[:projection_approver_user_id]
    x.projection_closer_user_id = s[:projection_closer_user_id]
    x.approval_3_date = s[:approval_3_date]
    x.approval_4_date = s[:approval_4_date]
    x.save

    y=@pd
    y.state = s[:projection_detail_state]
    y.projection_2_units = s[:projection_2_units]
    y.projection_3_units = s[:projection_3_units]
    y.projection_4_units = s[:projection_4_units]
    y.save

    x=Omni::Projection.where(:projection_id => 'XXXXX1C19361XXXXXTESTPROJECTION1').first
    x.close

    expected = s[:expected]

    case s[:compare_to]
    when 'projection'
      actual = x.send(s[:actual])
    when 'projection_detail'
      actual = y.send(s[:actual])
    when 'email'
      actual = 'not yet implemented'
    end

    test_it(s[:scenario],expected, actual)
  end

  def self.closing_scenarios
    user_1 = 'TESTUSERXXXXXXXXXXXXXXXBUYERBILL'
    user_2 = 'TESTUSERXXXXXXXXXXXXXPLANNERPAUL'
    x=[]
    x << {:scenario=>'It prevents Closing from new state', :user_id=>user_2, projection_state: 'new', projection_approver_user_id: nil, projection_closer_id: nil, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved', projection_1_units: 100, projection_2_units: 0, projection_3_units: 0, projection_4_units: 0,                                                              expected: 'new',        compare_to: 'projection', actual: 'state'}
    x << {:scenario=>'It prevents Closing from new state', :user_id=>user_2, projection_state: 'new', projection_approver_user_id: nil, projection_closer_id: nil, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved', projection_1_units: 100, projection_2_units: 0, projection_3_units: 0, projection_4_units: 0,                                                              expected: 'draft',       compare_to: 'projection', actual: 'state'}
    x << {:scenario=>'It prevents Closing from new state', :user_id=>user_2, projection_state: 'new', projection_approver_user_id: nil, projection_closer_id: nil, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved', projection_1_units: 100, projection_2_units: 0, projection_3_units: 0, projection_4_units: 0,                                                              expected: 'forecast',  compare_to: 'projection', actual: 'state'}
    x << {:scenario=>'It prevents Closing from new state', :user_id=>user_2, projection_state: 'new', projection_approver_user_id: user_2, projection_closer_id: user_2, approval_3_date: Date.yesterday, approval_4_date: Date.yesterday, projection_detail_state: 'approved', projection_1_units: 100, projection_2_units: 150, projection_3_units: 200, projection_4_units: 250,expected: 'complete',compare_to: 'projection', actual: 'state'}

    x << {:scenario=>'It prevents closing without proper permission', :user_id=>user_1, projection_state: 'new', projection_approver_user_id: nil, projection_closer_id: nil, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved', projection_1_units: 100, projection_2_units: 0, projection_3_units: 0, projection_4_units: 0,                     expected: 'new',              compare_to: 'projection', actual: 'state'}
    x << {:scenario=>'It updates state from projection_1 to projection_2', :user_id=>user_2, projection_state: 'projection_1', projection_approver_user_id: nil, projection_closer_id: nil, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 0, projection_3_units: 0, projection_4_units: 0,expected: 'projection_2', compare_to: 'projection', actual: 'state'}
    x << {:scenario=>'It updates projection_closer_user_id', :user_id=>user_2, projection_state: 'projection_1', projection_approver_user_id: nil, projection_closer_id: nil, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 0, projection_3_units: 0, projection_4_units: 0,                     expected: user_2,            compare_to: 'projection', actual: 'projection_closer_user_id'}
    x << {:scenario=>'It updates Projection Detail projection_2_units', :user_id=>user_2, projection_state: 'projection_1', projection_approver_user_id: nil, projection_closer_id: nil, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 0, projection_3_units: 0, projection_4_units: 0,     expected: 150,                compare_to: 'projection_detail', actual: 'projection_2_units'}
    x << {:scenario=>'It updates Projection Detail state', :user_id=>user_2, projection_state: 'projection_1', projection_approver_user_id: nil, projection_closer_id: nil, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 0, projection_3_units: 0, projection_4_units: 0,     expected: 'approved',      compare_to: 'projection_detail', actual: 'state'}
    x << {:scenario=>'It updates Projection Detail state', :user_id=>user_2, projection_state: 'projection_1', projection_approver_user_id: nil, projection_closer_id: nil, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 0, projection_3_units: 0, projection_4_units: 0,     expected: 'approved',      compare_to: 'projection_detail', actual: 'state'}

    x << {:scenario=>'It prevents Closing without proper Permission', :user_id=>user_1, projection_state: 'projection_2', projection_approver_user_id: nil, projection_closer_id: user_1, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 0, projection_4_units: 0,     expected: 'projection_2',      compare_to: 'projection', actual: 'state'}
    x << {:scenario=>'It updates state from projection_2 to projection_3', :user_id=>user_2, projection_state: 'projection_2', projection_approver_user_id: nil, projection_closer_id: user_1, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 0, projection_4_units: 0,     expected: 'projection_3',      compare_to: 'projection', actual: 'state'}
    x << {:scenario=>'It updates projection_closer_user_id', :user_id=>user_2, projection_state: 'projection_2', projection_approver_user_id: nil, projection_closer_id: user_1, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 0, projection_4_units: 0,     expected: 'user_2',      compare_to: 'projection', actual: 'state'}
    x << {:scenario=>'It updates Projection Detail projection_3_units', :user_id=>user_2, projection_state: 'projection_2', projection_approver_user_id: nil, projection_closer_id: user_1, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 0, projection_4_units: 0,     expected: 200,      compare_to: 'projection_detail', actual: 'state'}
    x << {:scenario=>'It updates Projection Detail state', :user_id=>user_2, projection_state: 'projection_2', projection_approver_user_id: nil, projection_closer_id: user_1, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'draft',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 0, projection_4_units: 0,     expected: 'approved',      compare_to: 'projection_detail', actual: 'state'}
    x << {:scenario=>'It sends an email to Projection Approver', :user_id=>user_2, projection_state: 'projection_2', projection_approver_user_id: nil, projection_closer_id: user_1, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'draft',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 0, projection_4_units: 0,     expected: user_1,      compare_to: 'email', actual: 'recipient'}

    x << {:scenario=>'It prevents Closing without proper Permission', :user_id=>user_1, projection_state: 'projection_3', projection_approver_user_id: nil, projection_closer_id: user_1, approval_3_date: Date.yesterday, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 200, projection_4_units: 0,     expected: 'projection_2',      compare_to: 'projection', actual: 'state'}
    x << {:scenario=>'It updates state from projection_3 to projection_4', :user_id=>user_2, projection_state: 'projection_3', projection_approver_user_id: nil, projection_closer_id: user_1, approval_3_date: Date.yesterday, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 200, projection_4_units: 0,     expected: 'projection_3',      compare_to: 'projection', actual: 'state'}
    x << {:scenario=>'It updates projection_closer_user_id', :user_id=>user_2, projection_state: 'projection_3', projection_approver_user_id: nil, projection_closer_id: user_1, approval_3_date: Date.yesterday, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 200, projection_4_units: 0,     expected: 'user_2',      compare_to: 'projection', actual: 'state'}
    x << {:scenario=>'It updates Projection Detail projection_4_units', :user_id=>user_2, projection_state: 'projection_3', projection_approver_user_id: nil, projection_closer_id: user_1, approval_3_date: Date.yesterday, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 200, projection_4_units: 0,     expected: 200,      compare_to: 'projection', actual: 'state'}
    x << {:scenario=>'It updates Projection Detail state', :user_id=>user_2, projection_state: 'projection_3', projection_approver_user_id: nil, projection_closer_id: user_1, approval_3_date: Date.yesterday, approval_4_date: nil, projection_detail_state: 'draft',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 200, projection_4_units: 0,     expected: 'approved',      compare_to: 'projection', actual: 'state'}
    x << {:scenario=>'It sends an email to Projection Approver', :user_id=>user_2, projection_state: 'projection_3', projection_approver_user_id: user_1, projection_closer_id: user_1, approval_3_date: Date.yesterday, approval_4_date: nil, projection_detail_state: 'draft',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 200, projection_4_units: 0,     expected: user_1,      compare_to: 'email', actual: 'recipient'}
    x
  end

  # def self.create_projection_data
  #   Omni::Projection.all.each {|x| x.delete}
  #   Omni::Projection.create(:projection_id => 'XXXXX1C19361XXXXXTESTPROJECTION1', :state => 'active', :department_id => '5EA20FF2FE0611E280D020C9D047DD15')

  #   Omni::ProjectionDetail.all.each {|x| x.delete}
  #   Omni::ProjectionDetail.create(projection_id: 'XXXXX1C19361XXXXXTESTPROJECTION1', projection_detail_id: '4D594A1C193611E3A22D20CXXPRODET1', sku_id: '285C928C0F3611E3BB7120C9D047DD15', location_id: '51713A3EAC3E11E2947800FF58D32228', first_forecast_units: 100, last_forecast_units: 100, last_forecast_date: Date.yesterday, projection_1_units: 100, projection_2_units: 0, projection_3_units: 0, projection_4_units: 0)
  # end

  def self.create_security_data
    # Buildit::User.where(user_id: ['TESTUSERXXXXXXXXXXXXXXXBUYERBILL','TESTUSERXXXXXXXXXXXXXPLANNERPAUL','TESTUSERXXXXXXXXMERCHANDISERMARY','TESTUSERXXXXXXXXXXXBIGCHEESEBART','TESTUSERXXXXXXXXXXXXXXBUYERBETTY']).to_a.each {|x| x.delete}
    Buildit::User.create(user_id: 'TESTUSERXXXXXXXXXXXXXXXBUYERBILL',email_address: 'thenderson@parkersu.com', first_name: 'Bill', last_name: 'Buyer and Planner' ) unless Buildit::User.where(user_id: 'TESTUSERXXXXXXXXXXXXXXXBUYERBILL').first
    Buildit::User.create(user_id: 'TESTUSERXXXXXXXXXXXXXPLANNERPAUL',email_address: 'thenderson@parkersu.com', first_name: 'Paul', last_name: 'Planning Director' ) unless Buildit::User.where(user_id: 'TESTUSERXXXXXXXXXXXXXPLANNERPAUL').first
    Buildit::User.create(user_id: 'TESTUSERXXXXXXXXMERCHANDISERMARY',email_address: 'thenderson@parkersu.com', first_name: 'Mary', last_name: 'Merchandise Director' ) unless Buildit::User.where(user_id: 'TESTUSERXXXXXXXXMERCHANDISERMARY').first
    Buildit::User.create(user_id: 'TESTUSERXXXXXXXXXXXBIGCHEESEBART',email_address: 'thenderson@parkersu.com', first_name: 'Bart', last_name: 'Big Cheese' ) unless Buildit::User.where(user_id: 'TESTUSERXXXXXXXXXXXBIGCHEESEBART').first
    Buildit::User.create(user_id: 'TESTUSERXXXXXXXXXXXXXXBUYERBETTY',email_address: 'thenderson@parkersu.com', first_name: 'Betty', last_name: 'Buyer and Planner' ) unless Buildit::User.where(user_id: 'TESTUSERXXXXXXXXXXXXXXBUYERBETTY').first

    Buildit::Role.where(role_id: ['TESTROLEMERCHANDISEDIRECTORXXXXX','TESTROLEBUYERXXXXXXXXXXXXXXXXXXX','TESTROLECEOXXXXXXXXXXXXXXXXXXXXX','TESTROLEPLANNERXXXXXXXXXXXXXXXXX','TESTROLEPLANNINGDIRECTORXXXXXXXX']).to_a.each {|x| x.delete}
    Buildit::Role.create(role_id: 'TESTROLEMERCHANDISEDIRECTORXXXXX', role_code: 'MERCHANDISE_DIRECTOR', description: 'Merchandise Director')
    Buildit::Role.create(role_id: 'TESTROLEBUYERXXXXXXXXXXXXXXXXXXX', role_code: 'BUYER', description: 'Buyer')
    Buildit::Role.create(role_id: 'TESTROLECEOXXXXXXXXXXXXXXXXXXXXX', role_code: 'CEO', description: 'CEO')
    Buildit::Role.create(role_id: 'TESTROLEPLANNERXXXXXXXXXXXXXXXXX', role_code: 'PLANNER', description: 'Planner')
    Buildit::Role.create(role_id: 'TESTROLEPLANNINGDIRECTORXXXXXXXX', role_code: 'PLANNING_DIRECTOR', description: 'Planning Director')

    user_roles = []
    user_roles << Buildit::UserRole.where(user_id: 'TESTUSERXXXXXXXXXXXXXXXBUYERBILL', role_id: 'TESTROLEPLANNERXXXXXXXXXXXXXXXXX').first
    user_roles << Buildit::UserRole.where(user_id: 'TESTUSERXXXXXXXXXXXXXXXBUYERBILL', role_id: 'TESTROLEBUYERXXXXXXXXXXXXXXXXXXX').first
    user_roles << Buildit::UserRole.where(user_id: 'TESTUSERXXXXXXXXXXXXXPLANNERPAUL', role_id: 'TESTROLEPLANNINGDIRECTORXXXXXXXX').first
    user_roles << Buildit::UserRole.where(user_id: 'TESTUSERXXXXXXXXMERCHANDISERMARY', role_id: 'TESTROLEMERCHANDISEDIRECTORXXXXX').first
    user_roles << Buildit::UserRole.where(user_id: 'TESTUSERXXXXXXXXXXXBIGCHEESEBART', role_id: 'TESTROLECEOXXXXXXXXXXXXXXXXXXXXX').first
    user_roles.each do |x|
      x.is_enabled = true
      x.save
    end

    # Buildit::Privilege.where(privilege_id: ['TESTPRIVILEGEPURCHASEAPPROVER1XX', 'TESTPRIVILEGEPURCHASEAPPROVER2XX','TESTPRIVILEGEPURCHASEAPPROVER3XX','TESTPRIVILEGEPROJECTIONCLOSERXXX','TESTPRIVILEGEPROJECTIONAPPROVERX']).all.each {|x|x.delete}
    Buildit::Privilege.where(privilege_code: ['PURCHASE_APPROVER_1', 'PURCHASE_APPROVER_2','PURCHASE_APPROVER_3','PROJECTION_CLOSER','PROJECTION_APPROVER']).to_a.each {|x|x.delete}
    Buildit::Privilege.create(privilege_id: 'TESTPRIVILEGEPURCHASEAPPROVER1XX', privilege_code: 'PURCHASE_APPROVER_1', module_code: 'OMNI_PROJECTION', description: '1st level projection approver', is_enabled: true, model_name: 'Omni::Projection', op_custom: true)
    Buildit::Privilege.create(privilege_id: 'TESTPRIVILEGEPURCHASEAPPROVER2XX', privilege_code: 'PURCHASE_APPROVER_2', module_code: 'OMNI_PROJECTION', description: '2nd level projection approver', is_enabled: true, model_name: 'Omni::Projection', op_custom: true)
    Buildit::Privilege.create(privilege_id: 'TESTPRIVILEGEPURCHASEAPPROVER3XX', privilege_code: 'PURCHASE_APPROVER_3', module_code: 'OMNI_PROJECTION', description: '3rd level projection approver', is_enabled: true, model_name: 'Omni::Projection', op_custom: true)
    Buildit::Privilege.create(privilege_id: 'TESTPRIVILEGEPROJECTIONCLOSERXXX', privilege_code: 'PROJECTION_CLOSER', module_code: 'OMNI_PROJECTION', description: 'PROJECTION_CLOSER', is_enabled: true, model_name: 'Omni::Projection', op_custom: true)
    Buildit::Privilege.create(privilege_id: 'TESTPRIVILEGEPROJECTIONAPPROVERX', privilege_code: 'PROJECTION_APPROVER', module_code: 'OMNI_PROJECTION', description: 'PROJECTION_APPROVER', is_enabled: true, model_name: 'Omni::Projection', op_custom: true)

    # Buildit::Permission.where(permission_id: ['525C4310191911E3PROJECTIONCLOSER','XPERMISSIONXXXPROJECTIONAPPROVER']).all.each {|x|x.delete}
    roles = []
    roles << Buildit::Permission.where(role_id: 'TESTROLEPLANNERXXXXXXXXXXXXXXXXX', privilege_id: 'TESTPRIVILEGEPROJECTIONAPPROVERX').first
    roles << Buildit::Permission.where(role_id: 'TESTROLEPLANNINGDIRECTORXXXXXXXX', privilege_id: 'TESTPRIVILEGEPROJECTIONCLOSERXXX').first
    roles << Buildit::Permission.where(role_id: 'TESTROLEPLANNINGDIRECTORXXXXXXXX', privilege_id: 'TESTPRIVILEGEPROJECTIONAPPROVERX').first
    roles << Buildit::Permission.where(role_id: 'TESTROLECEOXXXXXXXXXXXXXXXXXXXXX', privilege_id: 'TESTPRIVILEGEPROJECTIONAPPROVERX').first
    roles << Buildit::Permission.where(role_id: 'TESTROLECEOXXXXXXXXXXXXXXXXXXXXX', privilege_id: 'TESTPRIVILEGEPROJECTIONCLOSERXXX').first
    roles << Buildit::Permission.where(role_id: 'TESTROLECEOXXXXXXXXXXXXXXXXXXXXX', privilege_id: 'TESTPRIVILEGEPURCHASEAPPROVER1XX').first
    roles << Buildit::Permission.where(role_id: 'TESTROLECEOXXXXXXXXXXXXXXXXXXXXX', privilege_id: 'TESTPRIVILEGEPURCHASEAPPROVER2XX').first
    roles << Buildit::Permission.where(role_id: 'TESTROLECEOXXXXXXXXXXXXXXXXXXXXX', privilege_id: 'TESTPRIVILEGEPURCHASEAPPROVER3XX').first
    roles << Buildit::Permission.where(role_id: 'TESTROLEBUYERXXXXXXXXXXXXXXXXXXX', privilege_id: 'TESTPRIVILEGEPURCHASEAPPROVER1XX').first
    roles << Buildit::Permission.where(role_id: 'TESTROLEMERCHANDISEDIRECTORXXXXX', privilege_id: 'TESTPRIVILEGEPURCHASEAPPROVER1XX').first
    roles << Buildit::Permission.where(role_id: 'TESTROLEMERCHANDISEDIRECTORXXXXX', privilege_id: 'TESTPRIVILEGEPURCHASEAPPROVER2XX').first
    roles.each do |x|
      x.is_enabled = true
      x.save
    end
  end

end
