class Omni::Terminal::Service
  include Buildit::Service::Base

  service 'Terminal', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Terminal
  end

end # class Omni::Terminal::Service
