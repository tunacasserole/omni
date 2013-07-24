class Omni::StyleSupplier::Service
  include Buildit::Service::Base

  service 'StyleSupplier', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::StyleSupplier
  end

end # class Omni::StyleSupplier::Service
