class Omni::ProgramStyle::Service
  include Buildit::Service::Base

  service 'ProgramStyle', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::ProgramStyle
  end

end # class Omni::ProgramStyle::Service
