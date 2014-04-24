class Omni::PriceChange::Service
  include Buildit::Service::Base

  service 'PriceChange', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::PriceChange
  end


  def display_as
    self.display
  end
end # class Omni::PriceChange::Service
