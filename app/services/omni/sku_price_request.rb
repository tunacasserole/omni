class Omni::SkuPriceRequest::Service
  include Buildit::Service::Base

  service 'SkuPriceRequest', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::SkuPriceRequest
  end


  def display_as
    self.display
  end
end # class Omni::SkuPriceRequest::Service
