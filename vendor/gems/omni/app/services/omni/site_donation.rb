class Omni::SiteDonation::Service
  include Buildit::Service::Base

  service 'SiteDonation', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::SiteDonation
  end

end # class Omni::SiteDonation::Service
