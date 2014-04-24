class Omni::ReceiptPurchase::Service
  include Buildit::Service::Base

  # register the service and names space to allow for more routing
  # options and namespaces
  service 'ReceiptPurchase', 'Omni.service'

  # this class will be implemented by the backend below
  connected_mode(Buildit::Service::Backend::Crud)  do |config|
    config.model = Omni::ReceiptPurchase
  end


  def display_as
    self.display
  end
end # class Omni::ReceiptPurchase::Service
