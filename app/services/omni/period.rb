class Omni::Period::Service
  include Buildit::Service::Base

  service 'Period', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Period
  end

end # class Omni::Period::Service
