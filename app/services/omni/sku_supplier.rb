class Omni::SkuSupplier::Service
  include Buildit::Service::Base

  service 'SkuSupplier', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::SkuSupplier
  end

end # class Omni::SkuSupplier::Service
