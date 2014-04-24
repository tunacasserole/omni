class Omni::Allocation::Service
  include Buildit::Service::Base

  service 'Allocation', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Allocation
  end


  def display_as
    self.display
  end
end # class Omni::Allocation::Service
