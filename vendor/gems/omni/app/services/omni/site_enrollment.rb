class Omni::SiteEnrollment::Service
  include Buildit::Service::Base

  service 'SiteEnrollment', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::SiteEnrollment
  end

end # class Omni::SiteEnrollment::Service
