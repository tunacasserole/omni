class Omni::Account::Service
  include Buildit::Service::Base

  service 'Account', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Account
  end


  def display_as
    self.display
  end
end # class Omni::Account::Service
