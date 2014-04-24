class Omni::StyleColorSize::Service
  include Buildit::Service::Base

  service 'StyleColorSize', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::StyleColorSize
  end


  def display_as
    self.display
  end
end # class Omni::StyleColorSize::Service
