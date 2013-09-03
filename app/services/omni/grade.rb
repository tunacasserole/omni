class Omni::Grade::Service
  include Buildit::Service::Base

  service 'Grade', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Grade
  end

end # class Omni::Grade::Service
