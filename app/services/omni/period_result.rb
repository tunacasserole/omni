class Omni::PeriodResult::Service
  include Buildit::Service::Base

  service 'PeriodResult', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::PeriodResult
  end


  def display_as
    self.display
  end
end # class Omni::PeriodResult::Service
