class Omni::SiteTaxAuthority::Service
  include Buildit::Service::Base

  service 'SiteTaxAuthority', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::SiteTaxAuthority
  end

end # class Omni::SiteTaxAuthority::Service
