class Omni::AttachmentsAa::Service
  include Buildit::Service::Base

  # register the service and names space to allow for more routing
  # options and namespaces
  service 'AttachmentsAa', 'Omni.service'

  # this class will be implemented by the backend below
  connected_mode(Buildit::Service::Backend::Crud)  do |config|
    config.model = Omni::AttachmentsAa
  end

end # class Omni::AttachmentsAa