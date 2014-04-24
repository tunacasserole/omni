class Omni::Location::Service
  include Buildit::Service::Base

  service 'Location', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Location
  end


  def display_as
    self.display
  end
end # class Omni::Location::Service
