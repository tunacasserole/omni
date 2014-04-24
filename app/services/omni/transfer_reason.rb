class Omni::TransferReason::Service
  include Buildit::Service::Base

  service 'TransferReason', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::TransferReason
  end


  def display_as
    self.display
  end
end # class Omni::TransferReason::Service
