class Omni::Bom::Service
  include Buildit::Service::Base

  service 'Bom', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Bom
  end

end # class Omni::Bom::Service
