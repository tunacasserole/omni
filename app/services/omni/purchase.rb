class Omni::Purchase::Service
  include Buildit::Service::Base

  service 'Purchase', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Purchase
  end

end # class Omni::Purchase::Service
