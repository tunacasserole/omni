class Omni::LocationTaxHoliday::Service
  include Buildit::Service::Base

  # register the service and names space to allow for more routing
  # options and namespaces
  service 'LocationTaxHoliday', 'Omni.service'

  # this class will be implemented by the backend below
  connected_mode(Buildit::Service::Backend::Crud)  do |config|
    config.model = Omni::LocationTaxHoliday
  end

end # class Omni::LocationTaxHoliday