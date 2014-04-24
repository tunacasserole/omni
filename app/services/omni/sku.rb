class Omni::Sku::Service
  include Buildit::Service::Base

  service 'Sku', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Sku
  end


  def display_as
    self.display
  end
end # class Omni::Sku::Service
