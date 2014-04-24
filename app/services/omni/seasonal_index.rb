class Omni::SeasonalIndex::Service
  include Buildit::Service::Base

  service 'SeasonalIndex', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::SeasonalIndex
  end


  def display_as
    self.display
  end
end # class Omni::SeasonalIndex::Service
