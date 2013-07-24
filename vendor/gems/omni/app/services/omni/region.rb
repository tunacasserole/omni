class Omni::Region::Service
  include Buildit::Service::Base

  service 'Region', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Region
  end

end # class Omni::Region::Service
