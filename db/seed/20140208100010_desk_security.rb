# MY DESK
Buildit::Application.where(application_id: ['6900AE7AC18B11E289BA20C9DDESKERP', '6900AE18B11MYOFFICEAKAADMIN4DESK']).each {|x| x.delete}
Buildit::Application.create(application_id:'6900AE7AC18B11E289BA20C9DDESKERP',application_code:'DESK',hub_xtype:'desk-app-Hub',application_name:'My Desk',description:"The complete help desk solution.")
Buildit::Application.create(application_id:'6900AE18B11MYOFFICEAKAADMIN4DESK',application_code:'OFFICE',hub_xtype:'desk-admin-Hub',application_name:'My Office',description:"Administer, setup, maintain & work with Desk related data.")

# ROLES =====================================================================
# POWER USER ROLE
Buildit::Role.create(role_id:'323244F0204011EFCFE9040CCEDPOWER',role_code: 'POWER_USER',description:'access to most of the omni system') unless Buildit::Role.where(role_id:'323244F0204011EFCFE9040CCEDPOWER',role_code:'POWER_USER').first

# SUPER ADMINSTRATOR ROLE
Buildit::Role.create(role_id:'323244F0204011EFCFE904SUPERADMIN',role_code: 'SUPER_ADMIN',description: 'The highest-level administrator of the system') unless Buildit::Role.where(role_id:'323244F0204011EFCFE904SUPERADMIN', role_code: 'SUPER_ADMIN').first

# user role gets my desk application
Buildit::ApplicationRole.where(role_id: '323244F0204011EFCFE9040CCEDPOWER', application_id: '6900AE7AC18B11E289BA20C9DDESKERP').each { |x| x.is_enabled = true; x.save }

# admin role gets my office application
Buildit::ApplicationRole.where(role_id: '323244F0204011EFCFE904SUPERADMIN', application_id: '6900AE7AC18B11E289BA20C9DDESKERP').each { |x| x.is_enabled = true; x.save }

# ADMIN USERS =====================================================================
Buildit::User.create(email_address: 'a', first_name: 'Aaron', last_name: 'Henderson', user_id: '811166D4D50A11E2B45820C9D04AARON', sso_plugin_code: 'BUILDIT', password: 'a', password_confirmation: 'a', ) unless Buildit::User.where(user_id: '811166D4D50A11E2B45820C9D04AARON').first

# GRANT ADMIN ROLE
Buildit::UserRole.where(user_id: '811166D4D50A11E2B45820C9D04AARON').each {|x| x.is_enabled = true; x.save}
