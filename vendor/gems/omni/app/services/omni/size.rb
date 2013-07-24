class Omni::Size::Service
  include Buildit::Service::Base

  service 'Size', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Size
  end

end # class Omni::Size::Service
