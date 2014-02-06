class Desk::Case::Service
  include Buildit::Service::Base

  service 'Case', 'Desk.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Desk::Case
  end

end # class Desk::Case::Service
