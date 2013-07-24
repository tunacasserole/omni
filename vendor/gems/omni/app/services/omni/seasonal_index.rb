class Omni::SeasonalIndex::Service
  include Buildit::Service::Base

  service 'SeasonalIndex', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::SeasonalIndex
  end

end # class Omni::SeasonalIndex::Service
