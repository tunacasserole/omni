class Omni::Donation::Service
  include Buildit::Service::Base

  service 'Donation', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Donation
  end


  def display_as
    self.display
  end
end # class Omni::Donation::Service
