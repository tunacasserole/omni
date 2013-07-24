class Omni::District::Service
  include Buildit::Service::Base

  service 'District', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::District
  end

end # class Omni::District::Service
