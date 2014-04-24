class Omni::Supplier::Service
  include Buildit::Service::Base

  service 'Supplier', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Supplier
  end


  def display_as
    self.display
  end
end # class Omni::Supplier::Service
