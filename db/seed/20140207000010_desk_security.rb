# MY DESK
Buildit::Application.where(application_id: '6900AE7AC18B11E289BA20C9DDESKERP').each {|x| x.delete}
Buildit::Application.create(
  application_id:       '6900AE7AC18B11E289BA20C9DDESKERP',
  application_code:     'DESK',
  hub_xtype:            'desk-app-Hub',
  application_name:     'My Desk',
  description:          "The complete help desk solution.",
  )

# power role gets my desk application
Buildit::ApplicationRole.where(role_id: '323244F0204011EFCFE9040CCEDPOWER', application_id: '6900AE7AC18B11E289BA20C9DDESKERP').each { |x| x.is_enabled = true; x.save }

