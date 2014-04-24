class Omni::AdjustmentReason::Service
  include Buildit::Service::Base

  service 'AdjustmentReason', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::AdjustmentReason
  end


  def display_as
    self.display
  end
end # class Omni::AdjustmentReason::Service
