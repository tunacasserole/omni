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
  application_name:     'Platform Console',
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




