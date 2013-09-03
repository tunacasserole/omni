class Omni::SizeGroup::Service
  include Buildit::Service::Base

  service 'SizeGroup', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::SizeGroup
  end

end # class Omni::SizeGroup::Service
