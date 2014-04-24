class Omni::Product::Service
  include Buildit::Service::Base

  service 'Product', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Product
  end


  def display_as
    self.display
  end
end # class Omni::Product::Service
