class Omni::LocationTaxHoliday::Service
  include Buildit::Service::Base

  service 'LocationTaxHoliday', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::LocationTaxHoliday
  end


  def display_as
    self.display
  end
end # class Omni::LocationTaxHoliday::Service
