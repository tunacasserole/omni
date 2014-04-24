class Omni::Subclass::Service
  include Buildit::Service::Base

  service 'Subclass', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Subclass
  end


  def display_as
    self.display
  end
end # class Omni::Subclass::Service
