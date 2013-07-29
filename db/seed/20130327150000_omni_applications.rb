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
# Buildit::Application.create(
#   application_id:       'A25DC00EC19511E289BA20C9D047DD15',
#   application_code:     'GRITS',
#   hub_xtype:            'grits-app-Hub',
#   application_name:     'True Grits',
#   description:          'True Grits Retail Pro System',
#   is_enabled:           1
#   )
# Buildit::Application.create(
#   application_id:       '62BE3B04C19511E289BA20C9D047DD15',
#   application_code:     'BUILDIT',
#   hub_xtype:            'mark-app-Hub',
#   application_name:     "Parker's Mark System",
#   description:          "The legacy application used to run Parker's business.",
#   is_enabled:           1
#   )

# Buildit::Application.create(
#   application_id:       'E99B8E0CC19411E289BA20C9D047DD15',
#   application_code:     'BUILDIT',
#   hub_xtype:            'rms-app-Hub',
#   application_name:     "Buckhead's Retail Management System",
#   description:          "The legacy ERP system used to run Buckhead Uniforms",
#   is_enabled:           1
#   )
# APPLICATION ROLES =====================================================================
# Buildit::ApplicationRole.create(
#   application_role_id:  '62BF1790C19511E289BA20C9D0478888',
#   application_id:       'A25DC00EC19511E289BA20C9D047DD15',
#   role_id:              '323244F0204011EFCFE9040CCEDF842E',
#   is_enabled:           1
#   )
# Buildit::ApplicationRole.create(
#   application_role_id:  '62BF1790C19511E289BA20C9D0477777',
#   application_id:       '62BE3B04C19511E289BA20C9D047DD15',
#   role_id:              '323244F0204011EFCFE9040CCEDF842E',
#   is_enabled:           1
#   )
# Buildit::ApplicationRole.create(
#   application_role_id:  '62BF1790C19511E289BA20C9D0475555',
#   application_id:       'E99B8E0CC19411E289BA20C9D047DD15',
#   role_id:              '323244F0204011EFCFE9040CCEDF842E',
#   is_enabled:           1
#   )
