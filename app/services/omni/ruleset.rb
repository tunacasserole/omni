class Omni::Ruleset::Service
  include Buildit::Service::Base

  service 'Ruleset', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Ruleset
  end

end # class Omni::Ruleset::Service
