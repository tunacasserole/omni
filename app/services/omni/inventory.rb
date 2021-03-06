class Omni::Inventory::Service
  include Buildit::Service::Base

  service 'Inventory', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Inventory
  end


  def display_as
    self.display
  end
end # class Omni::Inventory::Service
