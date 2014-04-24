class Omni::Classification::Service
  include Buildit::Service::Base

  service 'Classification', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Classification
  end


  def display_as
    self.display
  end
end # class Omni::Classification::Service
