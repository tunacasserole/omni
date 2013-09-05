class Omni::StyleColor::Service
  include Buildit::Service::Base

  service 'StyleColor', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::StyleColor
  end

end # class Omni::StyleColor::Service