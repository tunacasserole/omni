class Omni::ProgramProduct::Service
  include Buildit::Service::Base

  service 'ProgramProduct', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::ProgramProduct
  end

end # class Omni::ProgramProduct::Service
