
Buildit::User.create(
  first_name: 'System',
  last_name: 'Administrator',
  email_address: 'sys@domain.com',
  sso_plugin_code: 'BUILDIT',
  api_token: 'L0qxHS_RoW'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D04AARON',
  first_name: 'Aaron',
  last_name: 'Henderson',
  email_address: 'a',
  sso_plugin_code: 'BUILDIT',
  api_token: 'L0qxHS_RoW'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820CDEMOAARON',
  first_name: 'Aaron',
  last_name: 'Henderson',
  email_address: 'aaron@buildit.io',
  sso_plugin_code: 'BUILDIT',
  api_token: 'L0qxHS_RoW'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D0PARKER',
  first_name: 'Parker',
  last_name: 'Demo',
  email_address: 'demo',
  sso_plugin_code: 'BUILDIT',
  api_token: 'L0qxHS_RoW'
)

# Buildit::UserRole.create(
#   user_id: '811166D4D50A11E2B45820C9D0PARKER',
#   role_id: '323244F0204011EFCFE9040CCEDF842E'
# )

# Buildit::UserRole.create(
#   user_id: '811166D4D50A11E2B45820C9D04AARON',
#   role_id: '323244F0204011EFCFE9040CCEDF842E'
# )

# Buildit::UserRole.create(
#   user_id: '811166D4D50A11E2B45820CDEMOAARON',
#   role_id: '323244F0204011EFCFE9040CCEDF842E'
# )

x = Buildit::User.where(:user_id => '811166D4D50A11E2B45820C9D0PARKER').first
x.password = 'demo'
x.save

x = Buildit::User.where(:user_id => '811166D4D50A11E2B45820C9D04AARON').first
x.password = 'a'
x.save

x = Buildit::User.where(:user_id => '811166D4D50A11E2B45820CDEMOAARON').first
x.password = 'welcome'
x.save