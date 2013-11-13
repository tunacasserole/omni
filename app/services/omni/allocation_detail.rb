class Omni::AllocationDetail::Service
  include Buildit::Service::Base

  service 'AllocationDetail', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::AllocationDetail
  end

end # class Omni::AllocationDetail::Service
