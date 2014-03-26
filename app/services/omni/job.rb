class Omni::Job::Service
  include Buildit::Service::Base

  service 'Job', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Job
  end

end # class Omni::Job::Service