class Omni::Pick::Service
  include Buildit::Service::Base

  service 'Pick', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Pick
  end


  def display_as
    self.display
  end
end # class Omni::Pick::Service
