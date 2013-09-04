
Buildit::User.create(
  first_name: 'System',
  last_name: 'Administrator',
  email_address: 'sys@domain.com',
  sso_plugin_code: 'BUILDIT',
  api_token: 'L0qxHS_RoW'
)

Buildit::UserRole.create(
  user_id: '811166D4D50A11E2B45820C9D0PARKER',
  role_id: '323244F0204011EFCFE9040CCEDF842E'
)

Buildit::UserRole.create(
  user_id: '811166D4D50A11E2B45820C9D04AARON',
  role_id: '323244F0204011EFCFE9040CCEDF842E'
)

Buildit::UserRole.create(
  user_id: '811166D4D50A11E2B45820CDEMOAARON',
  role_id: '323244F0204011EFCFE9040CCEDF842E'
)

x = Buildit::User.where(:user_id => '811166D4D50A11E2B45820C9D0PARKER').first
x.password = 'demo'
x.save

x = Buildit::User.where(:user_id => '811166D4D50A11E2B45820C9D04AARON').first
x.password = 'a'
x.save

x = Buildit::User.where(:user_id => '811166D4D50A11E2B45820CDEMOAARON').first
x.password = 'welcome'
x.save

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D04AARON',
  first_name: 'Aaron',
  last_name: 'Henderson',
  email_address: 'a',
  sso_plugin_code: 'BUILDIT'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820CDEMOAARON',
  first_name: 'Aaron',
  last_name: 'Henderson',
  email_address: 'aaron@buildit.io',
  sso_plugin_code: 'BUILDIT'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D0PARKER',
  first_name: 'Parker',
  last_name: 'Demo',
  email_address: 'demo',
  sso_plugin_code: 'BUILDIT'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D04AAJIM',
  first_name: 'Jim',
  last_name: 'Mullady',
  email_address: 'jmullady@parkersu.com',
  sso_plugin_code: 'BUILDIT'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D04ASEAN',
  first_name: 'Sean',
  last_name: 'Northrup',
  email_address: 'snorthrup@truegrits.com',
  sso_plugin_code: 'BUILDIT'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820CDEMOSUSEN',
  first_name: 'Susen',
  last_name: 'Sarpa',
  email_address: 'smsarpa@truegrits.com',
  sso_plugin_code: 'BUILDIT'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D0PBRIAN',
  first_name: 'Brian',
  last_name: 'Seitz',
  email_address: 'bseitz@buckheaduniforms.com',
  sso_plugin_code: 'BUILDIT'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D0PXXBOB',
  first_name: 'Bob',
  last_name: 'Sustak',
  email_address: 'bob',
  sso_plugin_code: 'BUILDIT'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D04AMIKE',
  first_name: 'Mike',
  last_name: 'Porter',
  email_address: 'mporter@parkersu.com',
  sso_plugin_code: 'BUILDIT'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D04ATROY',
  first_name: 'Troy',
  last_name: 'Pike',
  email_address: 'tpike@parkersu.com',
  sso_plugin_code: 'BUILDIT'
)

Buildit::Role.create(:role_id=> '323244F0204011EFCFE9040CCEDPOWER', :role_code => 'POWER_USER', :description => 'access to most of the omni system')

Buildit::User.all.each do |u|
  Buildit::UserRole.create(:user_id=>u.user_id,:role_id => '323244F0204011EFCFE9040CCEDPOWER', :is_enabled => true) unless Buildit::UserRole.where(:user_id=>u.user_id,:role_id => '323244F0204011EFCFE9040CCEDPOWER').first    
  u.password = 'parker'
  u.save
end

# APPLICATIONS =====================================================================
Buildit::Application.create(
  application_id:       '6900AE7AC18B11E289BA20C9D047DD15',
  application_code:     'OMNI',
  hub_xtype:            'omni-app-Hub',
  application_name:     'Omni ERP System',
  description:          "The complete ERP solution for Parker School Uniforms",
  is_enabled:           1
  )
Buildit::ApplicationRole.create(
  application_role_id:  '62BF1790C19511E289BA20C9D0476666',
  application_id:       '6900AE7AC18B11E289BA20C9D047DD15',
  role_id:              '323244F0204011EFCFE9040CCEDF842E',
  is_enabled:           1
  )

Buildit::Application.create(
  application_id:       '6900AE7AC18B11E289BA20COMNIADMIN',
  application_code:     'OMNI_ADMIN',
  hub_xtype:            'omni-app-AdminHub',
  application_name:     'Omni ERP Administration',
  description:          "The admin console for the ERP solution for Parker School Uniforms",
  is_enabled:           1
  )
Buildit::ApplicationRole.create(
  application_role_id:  '62BF1790C19511E289BA20C9D04ADMIN',
  application_id:       '6900AE7AC18B11E289BA20COMNIADMIN',
  role_id:              '323244F0204011EFCFE9040CCEDF842E',
  is_enabled:           1
  )    
Buildit::ApplicationRole.create(:application_id=>'6900AE7AC18B11E289BA20C9D047DD15',:role_id=>'323244F0204011EFCFE9040CCEDPOWER',:is_enabled=>true)
