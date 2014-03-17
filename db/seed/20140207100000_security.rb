# DESTROY ALL EXISTING SECURITY DATA =====================================================================
Buildit::User.delete_all
Buildit::Application.delete_all
Buildit::Role.delete_all
Buildit::UserRole.delete_all
Buildit::ApplicationRole.delete_all

# APPLICATIONS =====================================================================
# PLATFORM CONSOLE
Buildit::Application.create(
  application_id:       'AC41CFBEFAC211E2BPLATFORMCONSOLE',
  application_code:     'PLATFORM_CONSOLE',
  application_name:     'Buildit Console',
  hub_xtype:            'buildit-app-SuperHub',
  description:          'The Super Administrator desktop provides access to all key SDK level features under a single desktop. It is not designed to be modified by custom projects.',
)

# OMNI ERP DESKTOP
Buildit::Application.create(
  application_id:       '6900AE7AC18B11E289BA20C9DOMNIERP',
  application_code:     'OMNI',
  hub_xtype:            'omni-app-Hub',
  application_name:     'Omni ERP System',
  description:          "The complete ERP solution for Parker School Uniforms",
)

# ROLES =====================================================================
# PSU POWER ROLE
Buildit::Role.create(
  role_id:                 '323244F0204011EFCFE9040CCEDPOWER',
  role_code:               'POWER_USER',
  description:             'access to most of the omni system',
)

# SUPER ADMINSTRATOR ROLE
Buildit::Role.create(
  role_id:                 '323244F0204011EFCFE904SUPERADMIN',
  role_code:               'SUPER_ADMIN',
  description:             'The highest-level administrator of the system',
)

# OMNI POWER USER GETS OMNI ERP DESKTOP
Buildit::ApplicationRole.where(role_id: '323244F0204011EFCFE9040CCEDPOWER', application_id: '6900AE7AC18B11E289BA20C9DOMNIERP').each { |x| x.is_enabled = true; x.save }

# SUPER ADMIN ROLE GETS ALL APPLICATIONS
Buildit::ApplicationRole.where(role_id: '323244F0204011EFCFE904SUPERADMIN').each { |x| x.is_enabled = true; x.save }

# PURCHASE APPROVER ROLES
Buildit::Role.create(:role_id => '60D522FC09OEU1E3B93028CFE9147ZZZ',:role_code => 'PURCHASE_APPROVER_1',:description => 'Can do first level of Purchase Order approval.')
Buildit::Role.create(:role_id => '60D522FC09UDO1E3B93028CFE9147XXX',:role_code => 'PURCHASE_APPROVER_2',:description => 'Can do second level of Purchase Order approval.')
Buildit::Role.create(:role_id => '60D522FC09UDE1E3B93028CFE9147YYY',:role_code => 'PURCHASE_APPROVER_3',:description => 'Can do third level of Purchase Order approval.')
# Purchase Approver roles should not get any applications
Buildit::ApplicationRole.where(role_id: ['60D522FC09C611E3B93028CFE9147ZZZ','60D522FC09C611E3B93028CFE9147XXX','60D522FC09C611E3B93028CFE9147YYY']).each { |x| x.is_enabled = false; x.save }

# ADMIN USER =====================================================================
Buildit::User.create(email_address: 'a', first_name: 'Aaron', last_name: 'Henderson', user_id: '811166D4D50A11E2B45820C9D04AARON', sso_plugin_code: 'BUILDIT', password: 'a', password_confirmation: 'a', ) unless Buildit::User.where(user_id: '811166D4D50A11E2B45820C9D04AARON').first

# GRANT ADMIN ROLE
Buildit::UserRole.where(user_id: '811166D4D50A11E2B45820C9D04AARON').each {|x| x.is_enabled = true; x.save}


