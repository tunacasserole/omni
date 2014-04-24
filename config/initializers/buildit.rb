# Load the Buildit Framework
require 'buildit/framework'

# BUILDIT Configuration ==============================================================================
Buildit::Framework.configure do
  config.service_paths          += [File.join(Rails.root, "app/services", "**")]
  config.model_paths            += [File.join(Rails.root, "app/models",   "**")]
  config.email_template_paths   += [File.join(Rails.root, "app/emails",   "**")]
  config.event_template_paths   += [File.join(Rails.root, "app/events",   "**")]
  config.subscriber_paths       += [File.join(Rails.root, "app/subscribers",   "**")]


  # SOCKETS Connection Details
  config.server_context.sockets  = {host: '/', port: 3001}

  # AMPQ Connection Details
  #config.ampq_connection         = {host: 'localhost', vhost: '/', port: 5672, username: 'guest', password: 'guest'}

  # SSO Settings
  #config.sso_settings            = {user_identifier: 'email_address', default_plugin: 'buildit'}

end # Buildit::Framework.configure


# SUNSPOT Settings
Sunspot.config.solr.url          = 'http://localhost:8983/solr/omni_dev'


# ASSETS precompiler settings
Rails.application.config.i18n.load_path += Dir[Rails.root.join('config', 'locales', '**/*.{rb,yml}').to_s]


# ASSET Precompiler References
Rails.application.config.assets.precompile << 'omni.css'
Rails.application.config.assets.precompile << 'omni.js'


# REGISTER AMPQ Exchanges
Buildit::Messaging::Exchange.register('omni.events', :direct)


# APPLICATION Initializers ===========================================================================
Buildit::Framework.initialize!

