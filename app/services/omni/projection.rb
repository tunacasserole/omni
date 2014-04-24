class Omni::Projection::Service
  include Buildit::Service::Base

  service 'Projection', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Projection
  end


  def display_as
    self.display
  end
end # class Omni::Projection::Service
