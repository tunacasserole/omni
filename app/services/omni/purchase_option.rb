class Omni::PurchaseOption::Service
  include Buildit::Service::Base

  # register the service and names space to allow for more routing
  # options and namespaces
  service 'PurchaseOption', 'Omni.service'

  # this class will be implemented by the backend below
  connected_mode(Buildit::Service::Backend::Crud)  do |config|
    config.model = Omni::PurchaseOption
  end


  def display_as
    self.display
  end
end # class Omni::PurchaseOption
