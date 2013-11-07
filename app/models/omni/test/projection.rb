class Omni::Test::Projection < Omni::Test::Base

  def self.go
    # create_security_data
    test_projection
  end

  def self.test_projection
    @@model_name = 'Projection'
    @@model_action = 'Event'

    @p=Omni::Projection.where(:projection_id => 'XXXXX1C19361XXXXXTESTPROJECTION1').first
    @pd=Omni::ProjectionDetail.where(:projection_detail_id => 'PROJ1A1C193611E3A22D20CXXPRODET1').first

    x=@p
    y=x.projection_details.first
    test_it('It creates one with details', 3, x.projection_details.count)

    @@model_action = 'Forecast'
    self.forecasting_scenarios.each {|x| process_forecasting_scenario x}

    @@model_action = 'Release'
    x.projection_locations.each {|x| x.delete}
    x.state ='forecast'
    x.save
    x.release
    test_it('It builds projection location rows when released', 1, x.projection_locations.count)

    @@model_action = 'Approve'
    x=Omni::Projection.where(:projection_id => 'XXXXX1C19361XXXXXTESTPROJECTION1').first
    x.state = 'projection_3'
    x.approval_3_date=nil
    x.save
    x.approve
    test_it('It approves a projection if state = projection 3', Date.today, x.approval_3_date)

    x.state = 'projection_4'
    x.approval_4_date=nil
    x.save
    x.approve
    test_it('It approves a projection if state = projection 4', Date.today, x.approval_4_date)

    @@model_action = 'Close'
    self.closing_scenarios.each {|x| process_closing_scenario x}
  end

  def self.process_forecasting_scenario(s)
    # puts "\n" + s[:scenario]
    Omni::ProjectionDetail.where(projection_id: 'XXXXX1C19361XXXXXTESTPROJECTION1').each {|x| x.delete}
    Omni::ProjectionDetail.create(:projection_id => 'XXXXX1C19361XXXXXTESTPROJECTION1', :projection_detail_id => 'PROJ1A1C193611E3A22D20CXXPRODET1', :forecast_profile_id =>s[:forecast_profile_id], :sku_id=>'285C928C0F3611E3BB7120C9D047DD15', :location_id=>'51713A3EAC3E11E2947800FF58D32228', :projection_1_units => 50, :projection_2_units => 50, :projection_3_units => 50, :projection_4_units => 50, :last_forecast_units => 50)

    Omni::Projection.where(projection_id: 'XXXXX1C19361XXXXXTESTPROJECTION1').each {|x| x.delete}
    x=Omni::Projection.create(projection_id: 'XXXXX1C19361XXXXXTESTPROJECTION1', display: 'test projection 1', state: 'forecast', department_id: '05A9CEBAAC5511E299E700FF58D32228', :forecast_profile_id =>s[:forecast_profile_id])

    x.forecast

    actual = x.projection_details.first.send('first_forecast_units')
    test_it(s[:scenario],s[:expected], actual)

  end

  def self.process_closing_scenario(s)
    # puts "\n" + s[:scenario]
    # Omni::ProjectionDetail.all.each {|x| x.delete}
    Omni::ProjectionDetail.where(projection_id: 'XXXXX1C19361XXXXXTESTPROJECTION2').each {|x| x.delete}
    Omni::ProjectionDetail.create(:projection_id => 'XXXXX1C19361XXXXXTESTPROJECTION2', :projection_detail_id => 'PROJ2A1C193611E3A22D20CXXPRODET1', :sku_id=>'285C928C0F3611E3BB7120C9D047DD15', :location_id=>'51713A3EAC3E11E2947800FF58D32228', :projection_1_units => 50, :projection_2_units => 50, :projection_3_units => 50, :projection_4_units => 50, :last_forecast_units => 50)

    # Omni::Projection.all.each {|x| x.delete}
    Omni::Projection.where(projection_id: 'XXXXX1C19361XXXXXTESTPROJECTION2').each {|x| x.delete}
    x=Omni::Projection.create(projection_id: 'XXXXX1C19361XXXXXTESTPROJECTION2', display: 'test projection 2', state: s[:projection_state], department_id: '05A9CEBAAC5511E299E700FF58D32228', :forecast_profile_id =>'XXXXXXXXXXXXXXXXFORECASTPROFILE1')
    x=Omni::Projection.create(projection_id: 'XXXXX1C19361XXXXXTESTPROJECTION2', state: 'draft', department_id: '05A9CEBAAC5511E299E700FF58D32228', :forecast_profile_id =>'XXXXXXXXXXXXXXXXFORECASTPROFILE1')

    x.state = s[:projection_state]
    x.projection_approver_user_id = s[:projection_approver_user_id]
    x.projection_closer_user_id = s[:projection_closer_user_id]
    x.approval_3_date = s[:approval_3_date]
    x.approval_4_date = s[:approval_4_date]
    x.save

    y=x.projection_details.first
    y.state = s[:projection_detail_state]
    y.projection_1_units = s[:projection_1_units]
    y.projection_2_units = s[:projection_2_units]
    y.projection_3_units = s[:projection_3_units]
    y.projection_4_units = s[:projection_4_units]
    y.save

    x.close
    expected = s[:expected]

    case s[:model_name]
    when 'projection'
      actual = x.send(s[:actual_result])
    when 'projection_detail'
      actual =  x.projection_details.first.send(s[:actual_result])
    when 'email'
      actual = 'not yet implemented'
    end

    test_it(s[:scenario],expected, actual)
  end

  def self.forecasting_scenarios
    x=[]
    x << {:scenario=>'It forecasts with weighting of 100% for py1', expected: 100, actual_result: 'first_forecast_units', model_name: 'projection_detail', projection_state: 'forecast', projection_detail_state: 'draft', forecast_profile_id: 'XXXXXXXXXXXXXXXXFORECASTPROFILE1'}
    x << {:scenario=>'It forecasts with weighting of 90% for py1, 10% for py2', expected: 110, actual_result: 'first_forecast_units', model_name: 'projection_detail', projection_state: 'forecast', projection_detail_state: 'draft', forecast_profile_id: 'XXXXXXXXXXXXXXXXFORECASTPROFILE2'}
    x << {:scenario=>'It forecasts with weighting of 85% for py1, 10% for py2, 5% for py3', expected: 120, actual_result: 'first_forecast_units', model_name: 'projection_detail', projection_state: 'forecast', projection_detail_state: 'draft', forecast_profile_id: 'XXXXXXXXXXXXXXXXFORECASTPROFILE3'}
    x
  end

  def self.closing_scenarios
    user_1 = 'TESTUSERXXXXXXXXXXXXXXXBUYERBILL'
    user_2 = 'TESTUSERXXXXXXXXXXXXXPLANNERPAUL'
    user_3 = '811166D4D50A11E2B45820C9D04AARON'
    x=[]
    x << {:scenario=>'It prevents closing from draft state', :user_id=>user_2, projection_state: 'draft', projection_approver_user_id: nil, projection_closer_user_id: nil, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved', projection_1_units: 100, projection_2_units: 0, projection_3_units: 0, projection_4_units: 0,        expected: 'draft',       model_name: 'projection', actual_result: 'state'}
    x << {:scenario=>'It prevents closing from forecast state', :user_id=>user_2, projection_state: 'forecast', projection_approver_user_id: nil, projection_closer_user_id: nil, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved', projection_1_units: 100, projection_2_units: 0, projection_3_units: 0, projection_4_units: 0, expected: 'forecast',  model_name: 'projection', actual_result: 'state'}
    x << {:scenario=>'It prevents closing from complete state', :user_id=>user_2, projection_state: 'complete', projection_approver_user_id: user_2, projection_closer_user_id: user_2, approval_3_date: Date.yesterday, approval_4_date: Date.yesterday, projection_detail_state: 'approved', projection_1_units: 100, projection_2_units: 150, projection_3_units: 200, projection_4_units: 250,expected: 'complete',model_name: 'projection', actual_result: 'state'}
    x << {:scenario=>'It prevents closing without proper permission', :user_id=>user_1, projection_state: 'draft', projection_approver_user_id: nil, projection_closer_user_id: nil, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved', projection_1_units: 100, projection_2_units: 0, projection_3_units: 0, projection_4_units: 0,                     expected: 'draft',              model_name: 'projection', actual_result: 'state'}

    x << {:scenario=>'It updates state from projection_1 to projection_2', :user_id=>user_2, projection_state: 'projection_1', projection_approver_user_id: nil, projection_closer_user_id: nil, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 0, projection_3_units: 0, projection_4_units: 0,expected: 'projection_2', model_name: 'projection', actual_result: 'state'}
    x << {:scenario=>'It updates projection_closer_user_id', :user_id=>user_2, projection_state: 'projection_1', projection_approver_user_id: nil, projection_closer_user_id: nil, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 0, projection_3_units: 0, projection_4_units: 0,                     expected: user_3,            model_name: 'projection', actual_result: 'projection_closer_user_id'}

    x << {:scenario=>'It updates Projection Detail projection_2_units', :user_id=>user_2, projection_state: 'projection_1', projection_approver_user_id: nil, projection_closer_user_id: nil, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 0, projection_3_units: 0, projection_4_units: 0,     expected: 100,                model_name: 'projection_detail', actual_result: 'projection_2_units'}
    x << {:scenario=>'It updates Projection Detail state from draft', :user_id=>user_2, projection_state: 'projection_1', projection_approver_user_id: nil, projection_closer_user_id: nil, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'draft',  projection_1_units: 100, projection_2_units: 0, projection_3_units: 0, projection_4_units: 0,     expected: 'approved',      model_name: 'projection_detail', actual_result: 'state'}
    x << {:scenario=>'It updates Projection Detail state from approved', :user_id=>user_2, projection_state: 'projection_1', projection_approver_user_id: nil, projection_closer_user_id: nil, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 0, projection_3_units: 0, projection_4_units: 0,     expected: 'approved',      model_name: 'projection_detail', actual_result: 'state'}
    x << {:scenario=>'It allows closing with proper Permission', :user_id=>user_1, projection_state: 'projection_2', projection_approver_user_id: nil, projection_closer_user_id: user_1, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 0, projection_4_units: 0,     expected: 'projection_3',      model_name: 'projection', actual_result: 'state'}

    x << {:scenario=>'It updates state from projection_2 to projection_3', :user_id=>user_2, projection_state: 'projection_2', projection_approver_user_id: nil, projection_closer_user_id: user_1, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 0, projection_4_units: 0,     expected: 'projection_3',      model_name: 'projection', actual_result: 'state'}
    x << {:scenario=>'It updates projection_closer_user_id', :user_id=>user_2, projection_state: 'projection_2', projection_approver_user_id: nil, projection_closer_user_id: user_1, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 0, projection_4_units: 0,     expected: user_3,      model_name: 'projection', actual_result: 'projection_closer_user_id'}
    x << {:scenario=>'It updates Projection Detail projection_3_units', :user_id=>user_2, projection_state: 'projection_2', projection_approver_user_id: nil, projection_closer_user_id: user_1, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 0, projection_4_units: 0,     expected: 150,      model_name: 'projection_detail', actual_result: 'projection_3_units'}
    x << {:scenario=>'It updates Projection Detail state', :user_id=>user_2, projection_state: 'projection_2', projection_approver_user_id: nil, projection_closer_user_id: user_1, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'draft',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 0, projection_4_units: 0,     expected: 'approved',      model_name: 'projection_detail', actual_result: 'state'}
    # x << {:scenario=>'It sends an email to Projection Approver', :user_id=>user_2, projection_state: 'projection_2', projection_approver_user_id: nil, projection_closer_user_id: user_1, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'draft',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 0, projection_4_units: 0,     expected: user_1,      model_name: 'email', actual_result: 'recipient'}
    x << {:scenario=>'It allows closing with proper Permission', :user_id=>user_1, projection_state: 'projection_3', projection_approver_user_id: nil, projection_closer_user_id: user_1, approval_3_date: Date.yesterday, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 200, projection_4_units: 0,     expected: 'projection_4',      model_name: 'projection', actual_result: 'state'}

    x << {:scenario=>'It updates state from projection_3 to projection_4', :user_id=>user_2, projection_state: 'projection_3', projection_approver_user_id: nil, projection_closer_user_id: user_1, approval_3_date: Date.yesterday, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 200, projection_4_units: 0,     expected: 'projection_4',      model_name: 'projection', actual_result: 'state'}
    x << {:scenario=>'It updates projection_closer_user_id', :user_id=>user_2, projection_state: 'projection_3', projection_approver_user_id: nil, projection_closer_user_id: user_1, approval_3_date: Date.yesterday, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 200, projection_4_units: 0,     expected: user_3,      model_name: 'projection', actual_result: 'projection_closer_user_id'}
    x << {:scenario=>'It updates Projection Detail projection_4_units', :user_id=>user_2, projection_state: 'projection_3', projection_approver_user_id: nil, projection_closer_user_id: user_1, approval_3_date: Date.yesterday, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 200, projection_4_units: 0,     expected: 200,      model_name: 'projection_detail', actual_result: 'projection_4_units'}
    x << {:scenario=>'It updates Projection Detail state', :user_id=>user_2, projection_state: 'projection_3', projection_approver_user_id: nil, projection_closer_user_id: user_1, approval_3_date: Date.yesterday, approval_4_date: nil, projection_detail_state: 'draft',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 200, projection_4_units: 0,     expected: 'approved',      model_name: 'projection_detail', actual_result: 'state'}
    # x << {:scenario=>'It sends an email to Projection Approver', :user_id=>user_2, projection_state: 'projection_3', projection_approver_user_id: user_1, projection_closer_user_id: user_1, approval_3_date: Date.yesterday, approval_4_date: nil, projection_detail_state: 'draft',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 200, projection_4_units: 0,     expected: user_1,      model_name: 'email', actual_result: 'recipient'}
    x
  end

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
    permissions = []
    permissions << Buildit::Permission.where(role_id: '323244F0204011EFCFE904SUPERADMIN', privilege_id: 'TESTPRIVILEGEPROJECTIONCLOSERXXX').first
    permissions << Buildit::Permission.where(role_id: 'TESTROLEPLANNERXXXXXXXXXXXXXXXXX', privilege_id: 'TESTPRIVILEGEPROJECTIONAPPROVERX').first
    permissions << Buildit::Permission.where(role_id: 'TESTROLEPLANNINGDIRECTORXXXXXXXX', privilege_id: 'TESTPRIVILEGEPROJECTIONCLOSERXXX').first
    permissions << Buildit::Permission.where(role_id: 'TESTROLEPLANNINGDIRECTORXXXXXXXX', privilege_id: 'TESTPRIVILEGEPROJECTIONAPPROVERX').first
    permissions << Buildit::Permission.where(role_id: 'TESTROLECEOXXXXXXXXXXXXXXXXXXXXX', privilege_id: 'TESTPRIVILEGEPROJECTIONAPPROVERX').first
    permissions << Buildit::Permission.where(role_id: 'TESTROLECEOXXXXXXXXXXXXXXXXXXXXX', privilege_id: 'TESTPRIVILEGEPROJECTIONCLOSERXXX').first
    permissions << Buildit::Permission.where(role_id: 'TESTROLECEOXXXXXXXXXXXXXXXXXXXXX', privilege_id: 'TESTPRIVILEGEPURCHASEAPPROVER1XX').first
    permissions << Buildit::Permission.where(role_id: 'TESTROLECEOXXXXXXXXXXXXXXXXXXXXX', privilege_id: 'TESTPRIVILEGEPURCHASEAPPROVER2XX').first
    permissions << Buildit::Permission.where(role_id: 'TESTROLECEOXXXXXXXXXXXXXXXXXXXXX', privilege_id: 'TESTPRIVILEGEPURCHASEAPPROVER3XX').first
    permissions << Buildit::Permission.where(role_id: 'TESTROLEBUYERXXXXXXXXXXXXXXXXXXX', privilege_id: 'TESTPRIVILEGEPURCHASEAPPROVER1XX').first
    permissions << Buildit::Permission.where(role_id: 'TESTROLEMERCHANDISEDIRECTORXXXXX', privilege_id: 'TESTPRIVILEGEPURCHASEAPPROVER1XX').first
    permissions << Buildit::Permission.where(role_id: 'TESTROLEMERCHANDISEDIRECTORXXXXX', privilege_id: 'TESTPRIVILEGEPURCHASEAPPROVER2XX').first
    permissions.each do |x|
      x.is_enabled = true
      x.save
    end
  end

end
