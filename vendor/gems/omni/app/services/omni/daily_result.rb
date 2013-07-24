class Omni::DailyResult::Service
  include Buildit::Service::Base

  service 'DailyResult', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::DailyResult
  end

end # class Omni::DailyResult::Service
