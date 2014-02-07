class Desk::Feature::Service
  include Buildit::Service::Base

  # register the service and names space to allow for more routing
  # options and namespaces
  service 'Feature', 'Desk.service.'

  # this class will be implemented by the backend below
  connected_mode(Buildit::Service::Backend::Crud)  do |config|
    config.model = Desk::Feature
  end

end # class Desk::Feature::Service