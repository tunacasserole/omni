class Omni::Adjustment::Service
  include Buildit::Service::Base

  service 'Adjustment', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Adjustment
  end


  def display_as
    self.display
  end
end # class Omni::Adjustment::Service
