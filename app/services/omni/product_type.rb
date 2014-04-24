class Omni::ProductType::Service
  include Buildit::Service::Base

  service 'ProductType', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::ProductType
  end


  def display_as
    self.display
  end
end # class Omni::ProductType::Service
