class Omni::ForecastProfile::Service
  include Buildit::Service::Base

  service 'ForecastProfile', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::ForecastProfile
  end

end # class Omni::ForecastProfile::Service
