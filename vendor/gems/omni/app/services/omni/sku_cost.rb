class Omni::SkuCost::Service
  include Buildit::Service::Base

  service 'SkuCost', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::SkuCost
  end

end # class Omni::SkuCost::Service
