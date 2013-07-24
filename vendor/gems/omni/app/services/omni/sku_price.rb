class Omni::SkuPrice::Service
  include Buildit::Service::Base

  service 'SkuPrice', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::SkuPrice
  end

end # class Omni::SkuPrice::Service
