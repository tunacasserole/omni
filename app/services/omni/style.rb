class Omni::Style::Service
  include Buildit::Service::Base

  service 'Style', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Style
  end


  def display_as
    self.display
  end
end # class Omni::Style::Service
