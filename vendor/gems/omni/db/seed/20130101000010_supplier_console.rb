
Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9SUPPLIER',
  first_name: 'Demo',
  last_name: 'Supplier',
  email_address: 'supplier',
  sso_plugin_code: 'BUILDIT',
  api_token: 'L0qxHS_RoW'
)

Buildit::Role.create(
  role_id: '323244F020411EFCFE9040CSUPPLIER',
  role_code: 'SUPPLIER',
  description: 'User access to the Omni Supplier console.',
  is_enabled:           1  
)

Buildit::UserRole.create(
  user_id: '811166D4D50A11E2B45820C9SUPPLIER',
  role_id: '323244F020411EFCFE9040CSUPPLIER',
  is_enabled:           1  
)

supplier = Buildit::User.where(:user_id => '811166D4D50A11E2B45820C9SUPPLIER').first
supplier.password = 'supplier'
supplier.save

Buildit::Application.create(
  application_id:       '6900AE7AC18B11E289BA20C9SUPPLIER',
  application_code:     'SUPPLIER',
  hub_xtype:            'omni-supplier-Hub',
  application_name:     'Supplier Console',
  description:          "The complete ERP solution for Parker School Uniforms",
  is_enabled:           1
  )

Buildit::ApplicationRole.create(
  application_id:       '6900AE7AC18B11E289BA20C9SUPPLIER',
  role_id:              '323244F020411EFCFE9040CSUPPLIER',
  is_enabled:           1  
)