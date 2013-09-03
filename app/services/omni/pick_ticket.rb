class Omni::PickTicket::Service
  include Buildit::Service::Base

  service 'PickTicket', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::PickTicket
  end

end # class Omni::PickTicket::Service
