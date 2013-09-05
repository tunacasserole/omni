class Omni::ProjectionReason::Service
  include Buildit::Service::Base

  service 'ProjectionReason', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::ProjectionReason
  end

end # class Omni::ProjectionReason::Service