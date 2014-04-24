class Omni::SkuPromoPrice::Service
  include Buildit::Service::Base

  service 'SkuPromoPrice', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::SkuPromoPrice
  end


  def display_as
    self.display
  end
end # class Omni::SkuPromoPrice::Service
