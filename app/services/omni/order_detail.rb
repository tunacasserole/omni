class Omni::OrderDetail::Service
  include Buildit::Service::Base

  service 'OrderDetail', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::OrderDetail
  end

end # class Omni::OrderDetail::Service
