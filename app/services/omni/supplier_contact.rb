class Omni::SupplierContact::Service
  include Buildit::Service::Base

  service 'SupplierContact', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::SupplierContact
  end

end # class Omni::SupplierContact::Service
