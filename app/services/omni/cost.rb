class Omni::Cost::Service
  include Buildit::Service::Base

  # register the service and names space to allow for more routing
  # options and namespaces
  service 'Cost', 'Omni.service'

  # this class will be implemented by the backend below
  connected_mode(Buildit::Service::Backend::Crud)  do |config|
    config.model = Omni::Cost
  end


  def display_as
    self.display
  end
end # class Omni::Cost
