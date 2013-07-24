class Omni::ContainerDetail::Service
  include Buildit::Service::Base

  service 'ContainerDetail', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::ContainerDetail
  end

end # class Omni::ContainerDetail::Service
