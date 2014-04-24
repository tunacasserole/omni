class Omni::CustomerAccount::Service
  include Buildit::Service::Base

  service 'CustomerAccount', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::CustomerAccount
  end


  def display_as
    self.display
  end
end # class Omni::CustomerAccount::Service
