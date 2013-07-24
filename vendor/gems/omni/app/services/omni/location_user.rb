class Omni::LocationUser::Service
  include Buildit::Service::Base

  service 'LocationUser', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::LocationUser
  end

end # class Omni::LocationUser::Service
