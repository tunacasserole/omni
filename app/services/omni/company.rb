class Omni::Company::Service
  include Buildit::Service::Base

  service 'Company', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Company
  end


  def display_as
    self.display
  end
end # class Omni::Company::Service
