class Omni::SystemOption::Service
  include Buildit::Service::Base

  service 'SystemOption', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::SystemOption
  end

end # class Omni::SystemOption::Service
