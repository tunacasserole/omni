class Omni::Site::Service
  include Buildit::Service::Base

  service 'Site', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Site
  end

end # class Omni::Site::Service
