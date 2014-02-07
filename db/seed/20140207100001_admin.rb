# ADMIN USERS =====================================================================
Buildit::User.create(email_address: 'a', first_name: 'Aaron', last_name: 'Henderson', user_id: '811166D4D50A11E2B45820C9D04AARON', sso_plugin_code: 'BUILDIT', password: 'a', password_confirmation: 'a', ) unless Buildit::User.where(user_id: '811166D4D50A11E2B45820C9D04AARON').first

# GRANT ADMIN ROLE
Buildit::UserRole.where(user_id: '811166D4D50A11E2B45820C9D04AARON').each {|x| x.is_enabled = true; x.save}
