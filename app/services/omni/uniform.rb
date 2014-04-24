class Omni::Uniform::Service
  include Buildit::Service::Base

  service 'Uniform', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Uniform
  end


  def display_as
    self.display
  end
end # class Omni::Uniform::Service
