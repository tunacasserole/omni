class Omni::Contact::Service
  include Buildit::Service::Base

  service 'Contact', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Contact
  end

end # class Omni::Contact::Service
