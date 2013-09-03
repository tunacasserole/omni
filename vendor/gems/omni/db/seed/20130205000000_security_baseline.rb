
Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D04AAJIM',
  first_name: 'Jim',
  last_name: 'Mullady',
  email_address: 'jmullady@parkersu.com',
  sso_plugin_code: 'BUILDIT',
  api_token: 'L0qxHS_RoW'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D04ASEAN',
  first_name: 'Sean',
  last_name: 'Northrup',
  email_address: 'snorthrup@truegrits.com',
  sso_plugin_code: 'BUILDIT',
  api_token: 'L0qxHS_RoW'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820CDEMOSUSEN',
  first_name: 'Susen',
  last_name: 'Sarpa',
  email_address: 'smsarpa@truegrits.com',
  sso_plugin_code: 'BUILDIT',
  api_token: 'L0qxHS_RoW'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D0PBRIAN',
  first_name: 'Brian',
  last_name: 'Seitz',
  email_address: 'bseitz@buckheaduniforms.com',
  sso_plugin_code: 'BUILDIT',
  api_token: 'L0qxHS_RoW'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D0PXXBOB',
  first_name: 'Bob',
  last_name: 'Sustak',
  email_address: 'bob',
  sso_plugin_code: 'BUILDIT',
  api_token: 'L0qxHS_RoW'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D04AMIKE',
  first_name: 'Mike',
  last_name: 'Porter',
  email_address: 'mporter@parkersu.com',
  sso_plugin_code: 'BUILDIT',
  api_token: 'L0qxHS_RoW'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D04ATROY',
  first_name: 'Troy',
  last_name: 'Pike',
  email_address: 'tpike@parkersu.com',
  sso_plugin_code: 'BUILDIT',
  api_token: 'L0qxHS_RoW'
)

Buildit::Role.create(:role_id=> '323244F0204011EFCFE9040CCEDPOWER', :role_code => 'POWER_USER', :description => 'access to most of the omni system')
Buildit::ApplicationRole.create(:application_id=>'6900AE7AC18B11E289BA20C9D047DD15',:role_id=>'323244F0204011EFCFE9040CCEDPOWER',:is_enabled=>true)

Buildit::User.all.each do |u|
    #Buildit::UserRole.create(:user_id=>u.user_id,:role_id => '323244F0204011EFCFE9040CCEDPOWER') unless Buildit::UserRole.where(:user_id=>u.user_id,:role_id => '323244F0204011EFCFE9040CCEDPOWER').first
Buildit::UserRole.create(:user_id=>x.user_id,:role_id => '323244F0204011EFCFE9040CCEDPOWER') unless Buildit::UserRole.where(:user_id=>u.user_id,:role_id => '323244F0204011EFCFE9040CCEDPOWER').first    
  u.password = 'parker'
  u.save
end
    

