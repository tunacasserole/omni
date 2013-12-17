# DESTROY EXISTING SECURITY DATA =====================================================================
Buildit::User.delete_all
Buildit::UserRole.delete_all
Buildit::Role.delete_all
Buildit::Application.delete_all
Buildit::ApplicationRole.delete_all

# APPLICATIONS =====================================================================
# PLATFORM CONSOLE
Buildit::Application.create(
  application_id:       'AC41CFBEFAC211E2BPLATFORMCONSOLE',
  application_code:     'PLATFORM_CONSOLE',
  application_name:     'Platform Console',
  hub_xtype:            'buildit-app-SuperHub',
  description:          'The Super Administrator desktop provides access to all key SDK level features under a single desktop. It is not designed to be modified by custom projects.',
  is_enabled:           true
)

# OMNI ERP DESKTOP
Buildit::Application.create(
  application_id:       '6900AE7AC18B11E289BA20C9DOMNIERP',
  application_code:     'OMNI',
  hub_xtype:            'omni-app-Hub',
  application_name:     'Omni ERP System',
  description:          "The complete ERP solution for Parker School Uniforms",
  is_enabled:           1
  )

# OMNI ERP ADMIN HUB
Buildit::Application.create(
  application_id:       '6900AE7AC18B11E289BA20COMNIADMIN',
  application_code:     'OMNI_ADMIN',
  hub_xtype:            'omni-app-AdminHub',
  application_name:     'Omni ERP Administration',
  description:          "The admin console for the ERP solution for Parker School Uniforms",
  is_enabled:           1
  )

# USERS =====================================================================
Buildit::User.create(
  user_id: 'FB0ACB1AFAC111E2B25720SYSBUILDIT',
  first_name: 'System',
  last_name: 'Administrator',
  email_address: 'sys@buildit.io',
  sso_plugin_code: 'BUILDIT'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D04AARON',
  first_name: 'Aaron',
  last_name: 'Henderson',
  email_address: 'a',
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
  user_id: '811166D4D50EUIDHDUEOJOHNSTEPHENS',
  first_name: 'John',
  last_name: 'Stephens',
  email_address: 'jstephens@buckheaduniforms.com',
  sso_plugin_code: 'BUILDIT'
)

Buildit::User.create(
  user_id: 'AOEUID234567EUID56789IDHT87654RG',
  first_name: 'Roy',
  last_name: 'Garcia',
  email_address: 'rgarcia@parkersu.com',
  sso_plugin_code: 'BUILDIT'
)

# Buildit::User.create(
#   user_id: '811166D4D50A11E2B45820C9D0PXXBOB',
#   first_name: 'Bob',
#   last_name: 'Sustak',
#   email_address: 'bob.sustak@buckheaduniforms.com',
#   sso_plugin_code: 'BUILDIT',
#   api_token:  'J0ZWpblOYA'
# )

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D0PYYBOB',
  first_name: 'Bob',
  last_name: 'Sustak',
  email_address: 'bob',
  sso_plugin_code: 'BUILDIT',
  api_token:  'L5+p+qgR5p'
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

# Buildit::User.create(
#   user_id: '811166D4D50A11E2B45820C9D04ATTOM',
#   first_name: 'Tom',
#   last_name: 'Henderson',
#   email_address: 'thenderson@parkersu.com',
#   sso_plugin_code: 'BUILDIT'
# )

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D04ATTTT',
  first_name: 'Tom',
  last_name: 'Henderson',
  email_address: 't',
  sso_plugin_code: 'BUILDIT'
)

# SET PASSWORDS =====================================================================
Buildit::User.all.each do |u|
  u.password = 'parker' # set password
  u.password_confirmation = 'parker'
  u.save
end

x = Buildit::User.where(:user_id => '811166D4D50A11E2B45820C9D0PARKER').first
x.password = 'demo'
x.password_confirmation = 'demo'
x.save

x = Buildit::User.where(:user_id => '811166D4D50A11E2B45820C9D04AARON').first
x.password = 'a'
x.password_confirmation = 'a'
x.save

x = Buildit::User.where(:user_id => '811166D4D50A11E2B45820C9D04ATTTT').first
x.password = 't'
x.password_confirmation = 't'
x.save

x = Buildit::User.where(:user_id => 'FB0ACB1AFAC111E2B25720SYSBUILDIT').first
x.password = 'password'
x.password_confirmation = 'password'
x.save


# ROLES =====================================================================
# SUPER ADMINSTRATOR ROLE

Buildit::Role.create(
  role_id:                 '323244F0204011EFCFE904SUPERADMIN',
  role_code:               'SUPER_ADMIN',
  description:             'The highest-level administrator of the system',
  is_enabled:              true,
  auto_assign:             false
)

# PSU POWER ROLE
Buildit::Role.create(
  role_id:                 '323244F0204011EFCFE9040CCEDPOWER',
  role_code:               'POWER_USER',
  description:             'access to most of the omni system',
  is_enabled:              true,
  auto_assign:             false
)

Buildit::Role.create(
                     :role_id => '60D522FC09C611E3B93028CFE9147ZZZ',
                     :role_code => 'PURCHASE_APPROVER_1',
                     :description => 'Can do first level of Purchase Order approval.'
                     )

Buildit::Role.create(
                     :role_id => '60D522FC09C611E3B93028CFE9147XXX',
                     :role_code => 'PURCHASE_APPROVER_2',
                     :description => 'Can do second level of Purchase Order approval.'
                     )

Buildit::Role.create(
                     :role_id => '60D522FC09C611E3B93028CFE9147YYY',
                     :role_code => 'PURCHASE_APPROVER_3',
                     :description => 'Can do third level of Purchase Order approval.'
                     )

# USER ROLES =====================================================================
# everyone is at least a power user
# user_id = '811166D4D50A11E2B45820C9D04AARON'
# role_id = '323244F0204011EFCFE904SUPERADMIN'
# ur=Buildit::UserRole.create(user_id: user_id, role_id: role_id, is_enabled: true)
Buildit::User.all.each do |u|
  # puts u.user_id
  # puts u.full_name
  # ur = u.user_roles.where(:role_id => '323244F0204011EFCFE9040CCEDPOWER').first
  ur = Buildit::UserRole.where(:role_id => '323244F0204011EFCFE9040CCEDPOWER', :user_id => u.user_id).first
  ur.is_enabled = true
  ur.save
end

# Tom, Aaron, Bob, Marty, and Jason are system admins
  # ur = u.roles.where(:role_id => '323244F0204011EFCFE904SUPERADMIN').first
Buildit::User.where("email_address in ('a','aaron@buildit.io','t','thenderson@parkersu.com','bob.sustak@buckheaduniforms.com','bob','jason@buildit.io','marty@buildit.io')").each do |u|
  ur = Buildit::UserRole.where(role_id: '323244F0204011EFCFE904SUPERADMIN', user_id: u.user_id).first
  ur.is_enabled = true
  ur.save
end

# APPLICATION ROLES =====================================================================
# Buildit::ApplicationRole.create(
#   application_id: '6900AE7AC18B11E289BA20C9DOMNIERP',
#   role_id:        '323244F0204011EFCFE904SUPERADMIN',
#   is_enabled:     true
# )

# Buildit::ApplicationRole.create(
#   application_id: '6900AE7AC18B11E289BA20C9DOMNIERP',
#   role_id:        '323244F0204011EFCFE9040CCEDPOWER',
#   is_enabled:     true
# )

# OMNI POWER USER GETS OMNI ERP DESKTOP
Buildit::ApplicationRole.where(role_id: '323244F0204011EFCFE9040CCEDPOWER', application_id: '6900AE7AC18B11E289BA20C9DOMNIERP').each { |x| x.is_enabled = true; x.save }

# SUPER ADMIN ROLE GETS ALL APPLICATIONS
Buildit::ApplicationRole.where(role_id: '323244F0204011EFCFE904SUPERADMIN').each { |x| x.is_enabled = true; x.save }




