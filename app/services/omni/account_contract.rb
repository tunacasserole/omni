class Omni::Contract::Service
  include Buildit::Service::Base

  service 'Contract', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Contract
  end


  def display_as
    self.display
  end
end # class Omni::Contract::Service
