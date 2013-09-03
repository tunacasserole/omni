class Omni::Shipment::Service
  include Buildit::Service::Base

  service 'Shipment', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Shipment
  end

end # class Omni::Shipment::Service
