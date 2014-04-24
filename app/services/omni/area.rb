class Omni::Area::Service
  include Buildit::Service::Base

  service 'Area', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Area
  end


  def display_as
    self.display
  end
end # class Omni::Area::Service
