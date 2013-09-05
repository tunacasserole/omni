class Omni::Label::Service
  include Buildit::Service::Base

  service 'Label', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Label
  end

end # class Omni::Label::Service