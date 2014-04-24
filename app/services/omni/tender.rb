class Omni::Tender::Service
  include Buildit::Service::Base

  service 'Tender', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Tender
  end


  def display_as
    self.display
  end
end # class Omni::Tender::Service
