class Omni::Donation::Service
  include Buildit::Service::Base

  service 'Donation', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Donation
  end

end # class Omni::Donation::Service
