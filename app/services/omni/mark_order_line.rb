class Omni::MarkOrderLine::Service
  include Buildit::Service::Base

  # register the service and names space to allow for more routing
  # options and namespaces
  service 'MarkOrderLine', 'Omni.service'

  # this class will be implemented by the backend below
  connected_mode(Buildit::Service::Backend::Crud)  do |config|
    config.model = Omni::MarkOrderLine
  end


  def display_as
    self.display
  end
end # class Omni::MarkOrderLine
