class Omni::ShippingRate::Service
  include Buildit::Service::Base

  service 'ShippingRate', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::ShippingRate
  end

end # class Omni::ShippingRate::Service
