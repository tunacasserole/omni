class Omni::Rule::Service
  include Buildit::Service::Base

  service 'Rule', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Rule
  end

end # class Omni::Rule::Service