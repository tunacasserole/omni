# initialize the framework
require 'buildit/framework'

$BUILDIT_SUPPRESS_EVENTS = true


Buildit::Framework.configure do

  # register this gem with the framework
  #config.gems.sbna               = {name: "sbna", path: Omni::Engine.root.to_s, allow_unpacking: true}
  config.service_paths          += [File.join(Rails.root, "app/services", "**")]
  config.model_paths            += [File.join(Rails.root, "app/models", "**")]
  config.email_template_paths   += [File.join(Rails.root, "app/emails", "**")]
  config.event_template_paths   += [File.join(Rails.root, "app/events", "**")]

  # config.user_extension_models  += ['Omni::UserExtension']

end # Buildit::Framework.configure

Rails.application.config.i18n.load_path += Dir[Rails.root.join('config', 'locales', '**/*.{rb,yml}').to_s]

Buildit::Framework.initialize!