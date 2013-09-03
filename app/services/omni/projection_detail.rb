class Omni::ProjectionDetail::Service
  include Buildit::Service::Base

  service 'ProjectionDetail', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::ProjectionDetail
  end

end # class Omni::ProjectionDetail::Service
