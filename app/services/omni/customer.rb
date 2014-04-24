class Omni::Customer::Service
  include Buildit::Service::Base

  service 'Customer', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Customer
  end


  def display_as
    self.display
  end
end # class Omni::Customer::Service
