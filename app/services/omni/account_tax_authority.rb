class Omni::AccountTaxAuthority::Service
  include Buildit::Service::Base

  service 'AccountTaxAuthority', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::AccountTaxAuthority
  end

end # class Omni::AccountTaxAuthority::Service
