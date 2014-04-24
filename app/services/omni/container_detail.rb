class Omni::ContainerDetail::Service
  include Buildit::Service::Base

  service 'ContainerDetail', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::ContainerDetail
  end


  def display_as
    self.display
  end
end # class Omni::ContainerDetail::Service
