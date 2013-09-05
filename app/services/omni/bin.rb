class Omni::Bin::Service
  include Buildit::Service::Base

  service 'Bin', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Bin
  end

end # class Omni::Bin::Service