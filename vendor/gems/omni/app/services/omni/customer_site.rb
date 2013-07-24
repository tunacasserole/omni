class Omni::CustomerSite::Service
  include Buildit::Service::Base

  service 'CustomerSite', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::CustomerSite
  end

end # class Omni::CustomerSite::Service
