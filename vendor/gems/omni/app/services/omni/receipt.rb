class Omni::Receipt::Service
  include Buildit::Service::Base

  service 'Receipt', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Receipt
  end

end # class Omni::Receipt::Service
