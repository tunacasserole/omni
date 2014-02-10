class Desk::Checklist::Service
  include Buildit::Service::Base

  service 'Checklist', 'Desk.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Desk::Checklist
  end

end # class Desk::Checklist::Service
