class Omni::CustomerAccount::Service
  include Buildit::Service::Base

  service 'CustomerAccount', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::CustomerAccount
  end

end # class Omni::CustomerAccount::Service
