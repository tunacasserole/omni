class Omni::StyleLocation::Service
  include Buildit::Service::Base

  service 'StyleLocation', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::StyleLocation
  end

end # class Omni::StyleLocation::Service
