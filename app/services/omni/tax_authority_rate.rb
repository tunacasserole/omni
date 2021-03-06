class Omni::TaxAuthorityRate::Service
  include Buildit::Service::Base

  service 'TaxAuthorityRate', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::TaxAuthorityRate
  end


  def display_as
    self.display
  end
end # class Omni::TaxAuthorityRate::Service
