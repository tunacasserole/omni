class Omni::ShipmentDetail::Service
  include Buildit::Service::Base

  service 'ShipmentDetail', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::ShipmentDetail
  end


  def display_as
    self.display
  end
end # class Omni::ShipmentDetail::Service
