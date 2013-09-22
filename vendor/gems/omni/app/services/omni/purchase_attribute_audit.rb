class Omni::PurchaseAttributeAudit::Service
  include Buildit::Service::Base

  # register the service and names space to allow for more routing
  # options and namespaces
  service 'PurchaseAttributeAudit', 'Omni.service'

  # this class will be implemented by the backend below
  connected_mode(Buildit::Service::Backend::Crud)  do |config|
    config.model = Omni::PurchaseAttributeAudit
  end

end # class Omni::PurchaseAttributeAudit