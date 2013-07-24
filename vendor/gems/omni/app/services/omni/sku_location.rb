class Omni::SkuLocation::Service
  include Buildit::Service::Base

  service 'SkuLocation', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::SkuLocation
  end

end # class Omni::SkuLocation::Service
