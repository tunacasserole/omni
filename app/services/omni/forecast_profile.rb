class Omni::ForecastProfile::Service
  include Buildit::Service::Base

  service 'ForecastProfile', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::ForecastProfile
  end


  def display_as
    self.display
  end
end # class Omni::ForecastProfile::Service
