class Omni::Tender::Service
  include Buildit::Service::Base

  service 'Tender', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Tender
  end

end # class Omni::Tender::Service
