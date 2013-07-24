Buildit::Framework.configure do
  # register this gem with the framework
  config.gems.omni            = {name: "omni", path: Omni::Engine.root.to_s, allow_unpacking: true}
  
  config.service_paths          += [File.join(Omni::Engine.root, "app/services", "**")]
  config.email_template_paths   += [File.join(Omni::Engine.root, "app/emails", "**")]
  config.event_template_paths   += [File.join(Omni::Engine.root, "app/events", "**")]

  #config.model_paths            += [File.join(Omni::Engine.root, "app/models", "**")]
end # Buildit::Framework.configure

Omni::Engine.configure do
  config.i18n.load_path += Dir[Omni::Engine.root.join('config', 'locales', '**/*.{rb,yml}').to_s]  
end