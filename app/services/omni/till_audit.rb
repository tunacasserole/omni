class Omni::TillAudit::Service
  include Buildit::Service::Base

  service 'TillAudit', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::TillAudit
  end

end # class Omni::TillAudit::Service
