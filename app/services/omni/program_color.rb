class Omni::ProgramColor::Service
  include Buildit::Service::Base

  service 'ProgramColor', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::ProgramColor
  end

end # class Omni::ProgramColor::Service
