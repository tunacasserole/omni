class Omni::SizeGroupDetail::Service
  include Buildit::Service::Base

  service 'SizeGroupDetail', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::SizeGroupDetail
  end

end # class Omni::SizeGroupDetail::Service