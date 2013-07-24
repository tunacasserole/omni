class Omni::Color::Service
  include Buildit::Service::Base

  service 'Color', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Color
  end

end # class Omni::Color::Service
