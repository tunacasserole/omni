class Omni::StyleLocation::Service
  include Buildit::Service::Base

  service 'StyleLocation', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::StyleLocation
  end


  def display_as
    self.display
  end
end # class Omni::StyleLocation::Service
