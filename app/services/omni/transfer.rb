class Omni::Transfer::Service
  include Buildit::Service::Base

  service 'Transfer', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Transfer
  end


  def display_as
    self.display
  end
end # class Omni::Transfer::Service
