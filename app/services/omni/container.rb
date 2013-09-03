class Omni::Container::Service
  include Buildit::Service::Base

  service 'Container', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Container
  end

end # class Omni::Container::Service
