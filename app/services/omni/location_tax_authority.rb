class Omni::LocationTaxAuthority::Service
  include Buildit::Service::Base

  service 'LocationTaxAuthority', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::LocationTaxAuthority
  end

end # class Omni::LocationTaxAuthority::Service
