# class Omni::Test::Security < Omni::Test::Base

#   def self.create_data
#     # Buildit::User.where(user_id: ['TESTUSERXXXXXXXXXXXXXXXBUYERBILL','TESTUSERXXXXXXXXXXXXXPLANNERPAUL','TESTUSERXXXXXXXXMERCHANDISERMARY','TESTUSERXXXXXXXXXXXBIGCHEESEBART','TESTUSERXXXXXXXXXXXXXXBUYERBETTY']).to_a.each {|x| x.delete}
#     Buildit::User.create(user_id: 'TESTUSERXXXXXXXXXXXXXXXBUYERBILL',email_address: 'thenderson@parkersu.com', first_name: 'Bill', last_name: 'Buyer and Planner' ) unless Buildit::User.where(user_id: 'TESTUSERXXXXXXXXXXXXXXXBUYERBILL').first
#     Buildit::User.create(user_id: 'TESTUSERXXXXXXXXXXXXXPLANNERPAUL',email_address: 'thenderson@parkersu.com', first_name: 'Paul', last_name: 'Planning Director' ) unless Buildit::User.where(user_id: 'TESTUSERXXXXXXXXXXXXXPLANNERPAUL').first
#     Buildit::User.create(user_id: 'TESTUSERXXXXXXXXMERCHANDISERMARY',email_address: 'thenderson@parkersu.com', first_name: 'Mary', last_name: 'Merchandise Director' ) unless Buildit::User.where(user_id: 'TESTUSERXXXXXXXXMERCHANDISERMARY').first
#     Buildit::User.create(user_id: 'TESTUSERXXXXXXXXXXXBIGCHEESEBART',email_address: 'thenderson@parkersu.com', first_name: 'Bart', last_name: 'Big Cheese' ) unless Buildit::User.where(user_id: 'TESTUSERXXXXXXXXXXXBIGCHEESEBART').first
#     Buildit::User.create(user_id: 'TESTUSERXXXXXXXXXXXXXXBUYERBETTY',email_address: 'thenderson@parkersu.com', first_name: 'Betty', last_name: 'Buyer and Planner' ) unless Buildit::User.where(user_id: 'TESTUSERXXXXXXXXXXXXXXBUYERBETTY').first

#     Buildit::Role.where(role_id: ['TESTROLEMERCHANDISEDIRECTORXXXXX','TESTROLEBUYERXXXXXXXXXXXXXXXXXXX','TESTROLECEOXXXXXXXXXXXXXXXXXXXXX','TESTROLEPLANNERXXXXXXXXXXXXXXXXX','TESTROLEPLANNINGDIRECTORXXXXXXXX']).to_a.each {|x| x.delete}
#     Buildit::Role.create(role_id: 'TESTROLEMERCHANDISEDIRECTORXXXXX', role_code: 'MERCHANDISE_DIRECTOR', description: 'Merchandise Director')
#     Buildit::Role.create(role_id: 'TESTROLEBUYERXXXXXXXXXXXXXXXXXXX', role_code: 'BUYER', description: 'Buyer')
#     Buildit::Role.create(role_id: 'TESTROLECEOXXXXXXXXXXXXXXXXXXXXX', role_code: 'CEO', description: 'CEO')
#     Buildit::Role.create(role_id: 'TESTROLEPLANNERXXXXXXXXXXXXXXXXX', role_code: 'PLANNER', description: 'Planner')
#     Buildit::Role.create(role_id: 'TESTROLEPLANNINGDIRECTORXXXXXXXX', role_code: 'PLANNING_DIRECTOR', description: 'Planning Director')

#     user_roles = []
#     user_roles << Buildit::UserRole.where(user_id: 'TESTUSERXXXXXXXXXXXXXXXBUYERBILL', role_id: 'TESTROLEPLANNERXXXXXXXXXXXXXXXXX').first
#     user_roles << Buildit::UserRole.where(user_id: 'TESTUSERXXXXXXXXXXXXXXXBUYERBILL', role_id: 'TESTROLEBUYERXXXXXXXXXXXXXXXXXXX').first
#     user_roles << Buildit::UserRole.where(user_id: 'TESTUSERXXXXXXXXXXXXXPLANNERPAUL', role_id: 'TESTROLEPLANNINGDIRECTORXXXXXXXX').first
#     user_roles << Buildit::UserRole.where(user_id: 'TESTUSERXXXXXXXXMERCHANDISERMARY', role_id: 'TESTROLEMERCHANDISEDIRECTORXXXXX').first
#     user_roles << Buildit::UserRole.where(user_id: 'TESTUSERXXXXXXXXXXXBIGCHEESEBART', role_id: 'TESTROLECEOXXXXXXXXXXXXXXXXXXXXX').first
#     user_roles.each do |x|
#       x.is_enabled = true
#       x.save
#     end

#     # Buildit::Privilege.where(privilege_id: ['TESTPRIVILEGEPURCHASEAPPROVER1XX', 'TESTPRIVILEGEPURCHASEAPPROVER2XX','TESTPRIVILEGEPURCHASEAPPROVER3XX','TESTPRIVILEGEPROJECTIONCLOSERXXX','TESTPRIVILEGEPROJECTIONAPPROVERX']).all.each {|x|x.delete}
#     Buildit::Privilege.where(privilege_code: ['PURCHASE_APPROVER_1', 'PURCHASE_APPROVER_2','PURCHASE_APPROVER_3','PROJECTION_CLOSER','PROJECTION_APPROVER']).to_a.each {|x|x.delete}
#     Buildit::Privilege.create(privilege_id: 'TESTPRIVILEGEPURCHASEAPPROVER1XX', privilege_code: 'PURCHASE_APPROVER_1', module_code: 'OMNI_PROJECTION', description: '1st level projection approver', is_enabled: true, model_name: 'Omni::Projection', op_custom: true)
#     Buildit::Privilege.create(privilege_id: 'TESTPRIVILEGEPURCHASEAPPROVER2XX', privilege_code: 'PURCHASE_APPROVER_2', module_code: 'OMNI_PROJECTION', description: '2nd level projection approver', is_enabled: true, model_name: 'Omni::Projection', op_custom: true)
#     Buildit::Privilege.create(privilege_id: 'TESTPRIVILEGEPURCHASEAPPROVER3XX', privilege_code: 'PURCHASE_APPROVER_3', module_code: 'OMNI_PROJECTION', description: '3rd level projection approver', is_enabled: true, model_name: 'Omni::Projection', op_custom: true)
#     Buildit::Privilege.create(privilege_id: 'TESTPRIVILEGEPROJECTIONCLOSERXXX', privilege_code: 'PROJECTION_CLOSER', module_code: 'OMNI_PROJECTION', description: 'PROJECTION_CLOSER', is_enabled: true, model_name: 'Omni::Projection', op_custom: true)
#     Buildit::Privilege.create(privilege_id: 'TESTPRIVILEGEPROJECTIONAPPROVERX', privilege_code: 'PROJECTION_APPROVER', module_code: 'OMNI_PROJECTION', description: 'PROJECTION_APPROVER', is_enabled: true, model_name: 'Omni::Projection', op_custom: true)

#     # Buildit::Permission.where(permission_id: ['525C4310191911E3PROJECTIONCLOSER','XPERMISSIONXXXPROJECTIONAPPROVER']).all.each {|x|x.delete}
#     permissions = []
#     permissions << Buildit::Permission.where(role_id: '323244F0204011EFCFE904SUPERADMIN', privilege_id: 'TESTPRIVILEGEPROJECTIONCLOSERXXX').first
#     permissions << Buildit::Permission.where(role_id: 'TESTROLEPLANNERXXXXXXXXXXXXXXXXX', privilege_id: 'TESTPRIVILEGEPROJECTIONAPPROVERX').first
#     permissions << Buildit::Permission.where(role_id: 'TESTROLEPLANNINGDIRECTORXXXXXXXX', privilege_id: 'TESTPRIVILEGEPROJECTIONCLOSERXXX').first
#     permissions << Buildit::Permission.where(role_id: 'TESTROLEPLANNINGDIRECTORXXXXXXXX', privilege_id: 'TESTPRIVILEGEPROJECTIONAPPROVERX').first
#     permissions << Buildit::Permission.where(role_id: 'TESTROLECEOXXXXXXXXXXXXXXXXXXXXX', privilege_id: 'TESTPRIVILEGEPROJECTIONAPPROVERX').first
#     permissions << Buildit::Permission.where(role_id: 'TESTROLECEOXXXXXXXXXXXXXXXXXXXXX', privilege_id: 'TESTPRIVILEGEPROJECTIONCLOSERXXX').first
#     permissions << Buildit::Permission.where(role_id: 'TESTROLECEOXXXXXXXXXXXXXXXXXXXXX', privilege_id: 'TESTPRIVILEGEPURCHASEAPPROVER1XX').first
#     permissions << Buildit::Permission.where(role_id: 'TESTROLECEOXXXXXXXXXXXXXXXXXXXXX', privilege_id: 'TESTPRIVILEGEPURCHASEAPPROVER2XX').first
#     permissions << Buildit::Permission.where(role_id: 'TESTROLECEOXXXXXXXXXXXXXXXXXXXXX', privilege_id: 'TESTPRIVILEGEPURCHASEAPPROVER3XX').first
#     permissions << Buildit::Permission.where(role_id: 'TESTROLEBUYERXXXXXXXXXXXXXXXXXXX', privilege_id: 'TESTPRIVILEGEPURCHASEAPPROVER1XX').first
#     permissions << Buildit::Permission.where(role_id: 'TESTROLEMERCHANDISEDIRECTORXXXXX', privilege_id: 'TESTPRIVILEGEPURCHASEAPPROVER1XX').first
#     permissions << Buildit::Permission.where(role_id: 'TESTROLEMERCHANDISEDIRECTORXXXXX', privilege_id: 'TESTPRIVILEGEPURCHASEAPPROVER2XX').first
#     permissions.each do |x|
#       x.is_enabled = true
#       x.save
#     end
#   end
# end
