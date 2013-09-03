class Omni::TillDetail::Service
  include Buildit::Service::Base

  service 'TillDetail', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::TillDetail
  end

end # class Omni::TillDetail::Service
