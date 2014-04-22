# class Omni::Test::Projection < Omni::Test::Base

#   def self.go
#     @@model_name = 'Projection'
#     @@model_action = 'Event'

#     @p=Omni::Projection.where(:projection_id => 'XXXXX1C19361XXXXXTESTPROJECTION1').first
#     @pd=Omni::ProjectionDetail.where(:projection_detail_id => 'PROJ1A1C193611E3A22D20CXXPRODET1').first

#     test_it('it created one with details', 3, @p.projection_details.count)

#     test_forecast
#     test_release
#     test_approve
#     test_close
#   end

#   def self.test_forecast
#     @@model_action = 'Forecast'
#     self.forecasting_scenarios.each {|x| do_forecasting_scenario x}
#   end

#   def self.do_forecasting_scenario(s)
#     # puts "\n" + s[:scenario]
#     Omni::ProjectionDetail.where(projection_id: 'XXXXX1C19361XXXXXTESTPROJECTION1').each {|x| x.delete}
#     Omni::ProjectionDetail.create(:projection_id => 'XXXXX1C19361XXXXXTESTPROJECTION1', :projection_detail_id => 'PROJ1A1C193611E3A22D20CXXPRODET1', :forecast_profile_id =>s[:forecast_profile_id], :sku_id=>'285C928C0F3611E3BB7120C9D047DD15', :location_id=>'51713A3EAC3E11E2947800FF58D32228', :projection_1_units => 50, :projection_2_units => 50, :projection_3_units => 50, :projection_4_units => 50, :last_forecast_units => 50)
#     Omni::Projection.where(projection_id: 'XXXXX1C19361XXXXXTESTPROJECTION1').each {|x| x.delete}
#     @p=Omni::Projection.create(projection_id: 'XXXXX1C19361XXXXXTESTPROJECTION1', display: 'test projection 1', plan_year: '2013', state: 'forecast', department_id: '05A9CEBAAC5511E299E700FF58D32228', :forecast_profile_id =>s[:forecast_profile_id])

#     @p.forecast

#     actual = @p.projection_details.first.send('first_forecast_units')
#     test_it(s[:scenario],s[:expected], actual)
#   end

#   def self.test_release
#     @@model_action = 'Release'
#     @p.projection_locations.each {|x| x.delete}
#     @p.state ='forecast'
#     @p.save
#     @p.do_release
#     test_it('It builds projection location rows when released', 3, @p.projection_locations.count)
#   end

#   def self.test_approve
#     @@model_action = 'Approve'
#     @p=Omni::Projection.where(:projection_id => 'XXXXX1C19361XXXXXTESTPROJECTION1').first
#     @p.state = 'projection_3'
#     @p.approval_3_date=nil
#     @p.save
#     @p.approve
#     test_it('It sets the approval date when a projection is approved', true, @p.approval_3_date?)
#     test_it('It sets the approval user when a projection is approved', true, @p.projection_approver_id?)

#     @p.state = 'projection_4'
#     @p.approval_4_date=nil
#     @p.save
#     @p.approve
#     test_it('It approves a projection if state = projection 4', true, @p.approval_4_date?)
#   end

#   def self.test_close
#     @@model_action = 'Close'
#     self.closing_scenarios.each {|x| do_closing_scenario x}
#   end

#   def self.do_closing_scenario(s)
#     # puts "\n" + s[:scenario]
#     # Omni::ProjectionDetail.all.each {|x| @p.delete}
#     Omni::ProjectionDetail.where(projection_id: 'XXXXX1C19361XXXXXTESTPROJECTION2').each {|x| x.delete}
#     Omni::ProjectionDetail.create(:projection_id => 'XXXXX1C19361XXXXXTESTPROJECTION2', :projection_detail_id => 'PROJ2A1C193611E3A22D20CXXPRODET1', :sku_id=>'285C928C0F3611E3BB7120C9D047DD15', :location_id=>'51713A3EAC3E11E2947800FF58D32228', :projection_1_units => 50, :projection_2_units => 50, :projection_3_units => 50, :projection_4_units => 50, :last_forecast_units => 50)

#     # Omni::Projection.all.each {|x| @p.delete}
#     Omni::Projection.where(projection_id: 'XXXXX1C19361XXXXXTESTPROJECTION2').each {|x| x.delete}
#     @p=Omni::Projection.create(projection_id: 'XXXXX1C19361XXXXXTESTPROJECTION2', display: 'test projection 2', state: s[:projection_state], department_id: '05A9CEBAAC5511E299E700FF58D32228', :forecast_profile_id =>'XXXXXXXXXXXXXXXXFORECASTPROFILE1')

#     @p.state = s[:projection_state]
#     @p.projection_approver_id = s[:projection_approver_id]
#     @p.projection_closer_id = s[:projection_closer_id]
#     @p.approval_3_date = s[:approval_3_date]
#     @p.approval_4_date = s[:approval_4_date]
#     @p.save

#     @pd=@p.projection_details.first
#     @pd.state = s[:projection_detail_state]
#     @pd.projection_1_units = s[:projection_1_units]
#     @pd.projection_2_units = s[:projection_2_units]
#     @pd.projection_3_units = s[:projection_3_units]
#     @pd.projection_4_units = s[:projection_4_units]
#     @pd.save

#     @p.close
#     expected = s[:expected]

#     case s[:model_name]
#     when 'projection'
#       actual = @p.send(s[:actual_result])
#     when 'projection_detail'
#       actual =  @p.projection_details.first.send(s[:actual_result])
#     when 'email'
#       actual = 'not yet implemented'
#     end

#     test_it(s[:scenario],expected, actual)
#   end

#   def self.forecasting_scenarios
#     x=[]
#     x << {:scenario=>'It forecasts with weighting of 100% for py1', expected: 100, actual_result: 'first_forecast_units', model_name: 'projection_detail', projection_state: 'forecast', projection_detail_state: 'draft', forecast_profile_id: 'XXXXXXXXXXXXXXXXFORECASTPROFILE1'}
#     x << {:scenario=>'It forecasts with weighting of 90% for py1, 10% for py2', expected: 110, actual_result: 'first_forecast_units', model_name: 'projection_detail', projection_state: 'forecast', projection_detail_state: 'draft', forecast_profile_id: 'XXXXXXXXXXXXXXXXFORECASTPROFILE2'}
#     x << {:scenario=>'It forecasts with weighting of 85% for py1, 10% for py2, 5% for py3', expected: 120, actual_result: 'first_forecast_units', model_name: 'projection_detail', projection_state: 'forecast', projection_detail_state: 'draft', forecast_profile_id: 'XXXXXXXXXXXXXXXXFORECASTPROFILE3'}
#     x
#   end

#   def self.closing_scenarios
#     user_1 = 'TESTUSERXXXXXXXXXXXXXXXBUYERBILL'
#     user_2 = 'TESTUSERXXXXXXXXXXXXXPLANNERPAUL'
#     user_3 = '811166D4D50A11E2B45820C9D04AARON'
#     x=[]
#     x << {:scenario=>'It prevents closing from draft state', :user_id=>user_2, projection_state: 'draft', projection_approver_id: nil, projection_closer_id: nil, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved', projection_1_units: 100, projection_2_units: 0, projection_3_units: 0, projection_4_units: 0,        expected: 'draft',       model_name: 'projection', actual_result: 'state'}
#     x << {:scenario=>'It prevents closing from forecast state', :user_id=>user_2, projection_state: 'forecast', projection_approver_id: nil, projection_closer_id: nil, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved', projection_1_units: 100, projection_2_units: 0, projection_3_units: 0, projection_4_units: 0, expected: 'forecast',  model_name: 'projection', actual_result: 'state'}
#     x << {:scenario=>'It prevents closing from complete state', :user_id=>user_2, projection_state: 'complete', projection_approver_id: user_2, projection_closer_id: user_2, approval_3_date: Date.yesterday, approval_4_date: Date.yesterday, projection_detail_state: 'approved', projection_1_units: 100, projection_2_units: 150, projection_3_units: 200, projection_4_units: 250,expected: 'complete',model_name: 'projection', actual_result: 'state'}
#     x << {:scenario=>'It prevents closing without proper permission', :user_id=>user_1, projection_state: 'draft', projection_approver_id: nil, projection_closer_id: nil, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved', projection_1_units: 100, projection_2_units: 0, projection_3_units: 0, projection_4_units: 0,                     expected: 'draft',              model_name: 'projection', actual_result: 'state'}

#     x << {:scenario=>'It updates state from projection_1 to projection_2', :user_id=>user_2, projection_state: 'projection_1', projection_approver_id: nil, projection_closer_id: nil, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 0, projection_3_units: 0, projection_4_units: 0,expected: 'projection_2', model_name: 'projection', actual_result: 'state'}
#     x << {:scenario=>'It updates projection_closer_id', :user_id=>user_2, projection_state: 'projection_1', projection_approver_id: nil, projection_closer_id: nil, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 0, projection_3_units: 0, projection_4_units: 0,                     expected: user_3,            model_name: 'projection', actual_result: 'projection_closer_id'}

#     x << {:scenario=>'It updates Projection Detail projection_2_units', :user_id=>user_2, projection_state: 'projection_1', projection_approver_id: nil, projection_closer_id: nil, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 0, projection_3_units: 0, projection_4_units: 0,     expected: 100,                model_name: 'projection_detail', actual_result: 'projection_2_units'}
#     x << {:scenario=>'It updates Projection Detail state from draft', :user_id=>user_2, projection_state: 'projection_1', projection_approver_id: nil, projection_closer_id: nil, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'draft',  projection_1_units: 100, projection_2_units: 0, projection_3_units: 0, projection_4_units: 0,     expected: 'approved',      model_name: 'projection_detail', actual_result: 'state'}
#     x << {:scenario=>'It updates Projection Detail state from approved', :user_id=>user_2, projection_state: 'projection_1', projection_approver_id: nil, projection_closer_id: nil, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 0, projection_3_units: 0, projection_4_units: 0,     expected: 'approved',      model_name: 'projection_detail', actual_result: 'state'}
#     x << {:scenario=>'It allows closing with proper Permission', :user_id=>user_1, projection_state: 'projection_2', projection_approver_id: nil, projection_closer_id: user_1, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 0, projection_4_units: 0,     expected: 'projection_3',      model_name: 'projection', actual_result: 'state'}

#     x << {:scenario=>'It updates state from projection_2 to projection_3', :user_id=>user_2, projection_state: 'projection_2', projection_approver_id: nil, projection_closer_id: user_1, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 0, projection_4_units: 0,     expected: 'projection_3',      model_name: 'projection', actual_result: 'state'}
#     x << {:scenario=>'It updates projection_closer_id', :user_id=>user_2, projection_state: 'projection_2', projection_approver_id: nil, projection_closer_id: user_1, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 0, projection_4_units: 0,     expected: user_3,      model_name: 'projection', actual_result: 'projection_closer_id'}
#     x << {:scenario=>'It updates Projection Detail projection_3_units', :user_id=>user_2, projection_state: 'projection_2', projection_approver_id: nil, projection_closer_id: user_1, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 0, projection_4_units: 0,     expected: 150,      model_name: 'projection_detail', actual_result: 'projection_3_units'}
#     x << {:scenario=>'It updates Projection Detail state', :user_id=>user_2, projection_state: 'projection_2', projection_approver_id: nil, projection_closer_id: user_1, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'draft',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 0, projection_4_units: 0,     expected: 'approved',      model_name: 'projection_detail', actual_result: 'state'}
#     # x << {:scenario=>'It sends an email to Projection Approver', :user_id=>user_2, projection_state: 'projection_2', projection_approver_id: nil, projection_closer_id: user_1, approval_3_date: nil, approval_4_date: nil, projection_detail_state: 'draft',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 0, projection_4_units: 0,     expected: user_1,      model_name: 'email', actual_result: 'recipient'}
#     x << {:scenario=>'It allows closing with proper Permission', :user_id=>user_1, projection_state: 'projection_3', projection_approver_id: nil, projection_closer_id: user_1, approval_3_date: Date.yesterday, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 200, projection_4_units: 0,     expected: 'projection_4',      model_name: 'projection', actual_result: 'state'}

#     x << {:scenario=>'It updates state from projection_3 to projection_4', :user_id=>user_2, projection_state: 'projection_3', projection_approver_id: nil, projection_closer_id: user_1, approval_3_date: Date.yesterday, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 200, projection_4_units: 0,     expected: 'projection_4',      model_name: 'projection', actual_result: 'state'}
#     x << {:scenario=>'It updates projection_closer_id', :user_id=>user_2, projection_state: 'projection_3', projection_approver_id: nil, projection_closer_id: user_1, approval_3_date: Date.yesterday, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 200, projection_4_units: 0,     expected: user_3,      model_name: 'projection', actual_result: 'projection_closer_id'}
#     x << {:scenario=>'It updates Projection Detail projection_4_units', :user_id=>user_2, projection_state: 'projection_3', projection_approver_id: nil, projection_closer_id: user_1, approval_3_date: Date.yesterday, approval_4_date: nil, projection_detail_state: 'approved',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 200, projection_4_units: 0,     expected: 200,      model_name: 'projection_detail', actual_result: 'projection_4_units'}
#     x << {:scenario=>'It updates Projection Detail state', :user_id=>user_2, projection_state: 'projection_3', projection_approver_id: nil, projection_closer_id: user_1, approval_3_date: Date.yesterday, approval_4_date: nil, projection_detail_state: 'draft',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 200, projection_4_units: 0,     expected: 'approved',      model_name: 'projection_detail', actual_result: 'state'}
#     # x << {:scenario=>'It sends an email to Projection Approver', :user_id=>user_2, projection_state: 'projection_3', projection_approver_id: user_1, projection_closer_id: user_1, approval_3_date: Date.yesterday, approval_4_date: nil, projection_detail_state: 'draft',  projection_1_units: 100, projection_2_units: 150, projection_3_units: 200, projection_4_units: 0,     expected: user_1,      model_name: 'email', actual_result: 'recipient'}
#     x
#   end


# end
