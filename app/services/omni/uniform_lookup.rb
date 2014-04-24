class Omni::UniformLookup::Service
  include Buildit::Service::Base

  service 'UniformLookup', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::UniformLookup
  end


  def display_as
    self.display
  end
end # class Omni::UniformLookup::Service
