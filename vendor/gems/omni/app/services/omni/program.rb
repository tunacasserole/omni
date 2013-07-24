class Omni::Program::Service
  include Buildit::Service::Base

  service 'Program', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Program
  end

end # class Omni::Program::Service
