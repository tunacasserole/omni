class Omni::Order::Service
  include Buildit::Service::Base

  service 'Order', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Order
  end

end # class Omni::Order::Service
