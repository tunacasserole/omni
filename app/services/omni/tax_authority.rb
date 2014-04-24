class Omni::TaxAuthority::Service
  include Buildit::Service::Base

  service 'TaxAuthority', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::TaxAuthority
  end


  def display_as
    self.display
  end
end # class Omni::TaxAuthority::Service
