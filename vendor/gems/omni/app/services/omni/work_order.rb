class Omni::WorkOrder::Service
  include Buildit::Service::Base

  service 'WorkOrder', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::WorkOrder
  end

end # class Omni::WorkOrder::Service
