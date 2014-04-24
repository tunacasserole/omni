class Omni::PriceBook::Service
  include Buildit::Service::Base

  service 'PriceBook', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::PriceBook
  end


  def display_as
    self.display
  end
end # class Omni::PriceBook::Service
