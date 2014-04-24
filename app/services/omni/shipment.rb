class Omni::Shipment::Service
  include Buildit::Service::Base

  service 'Shipment', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Shipment
  end


  def display_as
    self.display
  end
end # class Omni::Shipment::Service
