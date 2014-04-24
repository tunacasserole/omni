class Omni::Till::Service
  include Buildit::Service::Base

  service 'Till', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Till
  end


  def display_as
    self.display
  end
end # class Omni::Till::Service
