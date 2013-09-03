class Omni::GlAccount::Service
  include Buildit::Service::Base

  service 'GlAccount', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::GlAccount
  end

end # class Omni::GlAccount::Service
