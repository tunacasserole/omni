class Omni::BinSku::Service
  include Buildit::Service::Base

  service 'BinSku', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::BinSku
  end


  def display_as
    self.display
  end
end # class Omni::BinSku::Service
