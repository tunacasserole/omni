class Omni::StyleSupplierColor::Service
  include Buildit::Service::Base

  service 'StyleSupplierColor', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::StyleSupplierColor
  end

end # class Omni::StyleSupplierColor::Service
