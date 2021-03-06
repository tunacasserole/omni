# USERS =====================================================================

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D04ALARA',
  first_name: 'Lara',
  last_name: 'Marshall',
  email_address: 'larabmarshall@gmail.com',
  sso_plugin_code: 'BUILDIT',
  password: 'lara',
  password_confirmation: 'lara'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D04AAJIM',
  first_name: 'Jim',
  last_name: 'Mullady',
  email_address: 'jmullady@parkersu.com',
  sso_plugin_code: 'BUILDIT',
  password: 'parker',
  password_confirmation: 'parker'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D04ASEAN',
  first_name: 'Sean',
  last_name: 'Northrup',
  email_address: 'snorthrup@truegrits.com',
  sso_plugin_code: 'BUILDIT',
  password: 'parker',
  password_confirmation: 'parker'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820CDEMOSUSEN',
  first_name: 'Susen',
  last_name: 'Sarpa',
  email_address: 'smsarpa@truegrits.com',
  sso_plugin_code: 'BUILDIT',
  password: 'parker',
  password_confirmation: 'parker'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D0PBRIAN',
  first_name: 'Brian',
  last_name: 'Seitz',
  email_address: 'bseitz@buckheaduniforms.com',
  sso_plugin_code: 'BUILDIT',
  password: 'parker',
  password_confirmation: 'parker'
)

Buildit::User.create(
  user_id: '811166D4D50EUIDHDUEOJOHNSTEPHENS',
  first_name: 'John',
  last_name: 'Stephens',
  email_address: 'jstephens@buckheaduniforms.com',
  sso_plugin_code: 'BUILDIT',
  password: 'parker',
  password_confirmation: 'parker'
)

Buildit::User.create(
  user_id: 'AOEUID234567EUID56789IDHT87654RG',
  first_name: 'Roy',
  last_name: 'Garcia',
  email_address: 'rgarcia@parkersu.com',
  sso_plugin_code: 'BUILDIT',
  password: 'parker',
  password_confirmation: 'parker'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D0PYYBOB',
  first_name: 'Bob',
  last_name: 'Sustak',
  email_address: 'bob',
  sso_plugin_code: 'BUILDIT',
  password: 'parker',
  password_confirmation: 'parker',
  api_token:  'L5+p+qgR5p'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D04AMIKE',
  first_name: 'Mike',
  last_name: 'Porter',
  email_address: 'mporter@parkersu.com',
  sso_plugin_code: 'BUILDIT',
  password: 'parker',
  password_confirmation: 'parker'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D04ATROY',
  first_name: 'Troy',
  last_name: 'Pike',
  email_address: 'tpike@parkersu.com',
  sso_plugin_code: 'BUILDIT',
  password: 'parker',
  password_confirmation: 'parker'
)
# USER ROLES =====================================================================
# delete admin user roles
# Buildit::UserRole.where(:role_id => '323244F0204011EFCFE904SUPERADMIN').each do |x|
#   next if x.user_id = '811166D4D50A11E2B45820C9D04AARON'
#   x.delete
# end
# everyone is at least a power user
Buildit::UserRole.where(:role_id => '323244F0204011EFCFE9040CCEDPOWER').each {|x| x.is_enabled = true; x.save}

Buildit::UserRole.where(is_enabled: false).each {|x| x.delete}

# OLD USERS =====================================================================
# Buildit::User.create(
#   user_id: 'FB0ACB1AFAC111E2B25720SYSBUILDIT',
#   first_name: 'System',
#   last_name: 'Administrator',
#   email_address: 'sys@buildit.io',
#   sso_plugin_code: 'BUILDIT'
# )

# Buildit::User.create(
#   user_id: '811166D4D50A11E2B45820C9D0PARKER',
#   first_name: 'Parker',
#   last_name: 'Demo',
#   email_address: 'demo',
#   sso_plugin_code: 'BUILDIT',
#   password: 'parker',
#   password_confirmation: 'parker'
# )

# Buildit::User.create(
#   user_id: '811166D4D50A11E2B45820C9D0PXXBOB',
#   first_name: 'Bob',
#   last_name: 'Sustak',
#   email_address: 'bob.sustak@buckheaduniforms.com',
#   sso_plugin_code: 'BUILDIT',,
#   password: 'parker',
#   password_confirmation: 'parker'
#   api_token:  'J0ZWpblOYA'
# )

