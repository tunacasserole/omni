
# Buildit::User.create(
#   user_id: '811166D4D50A11E2B45820C9D04AAJIM',
#   first_name: 'Jim',
#   last_name: 'Mullady',
#   email_address: 'jmullady@parkersu.com',
#   sso_plugin_code: 'BUILDIT',
#   api_token: 'L0qxHS_RoW'
# )

Buildit::Role.create(
  :role_id => '60D522FC09C611E3B93028CFE9147CA7',
  :role_code => 'PURCHASE_APPROVER_1',
  :description => 'Can do first level of Purchase Order approval.'
  )

Buildit::Role.create(
  :role_id => '60D522FC09C611E3B93028CFE9147CA7',
  :role_code => 'PURCHASE_APPROVER_2',
  :description => 'Can do second level of Purchase Order approval.'
  )

Buildit::Role.create(
  :role_id => '60D522FC09C611E3B93028CFE9147CA7',
  :role_code => 'PURCHASE_APPROVER_3',
  :description => 'Can do third level of Purchase Order approval.'
  )
# Buildit::ApplicationRole.create(
#   :application_id=>'6900AE7AC18B11E289BA20C9D047DD15',
#   :role_id=>'323244F0204011EFCFE9040CCEDPOWER',
#   :is_enabled=>true)

# Buildit::User.all.each do |u|
#     #Buildit::UserRole.create(:user_id=>u.user_id,:role_id => '323244F0204011EFCFE9040CCEDPOWER') unless Buildit::UserRole.where(:user_id=>u.user_id,:role_id => '323244F0204011EFCFE9040CCEDPOWER').first
#   u.password = 'parker'
#   u.save
# end
    

