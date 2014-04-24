class Omni::TillActivity::Service
  include Buildit::Service::Base

  service 'TillActivity', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::TillActivity
  end


  def display_as
    self.display
  end
end # class Omni::TillActivity::Service
