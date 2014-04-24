class Omni::SkuAlias::Service
  include Buildit::Service::Base

  service 'SkuAlias', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::SkuAlias
  end


  def display_as
    self.display
  end
end # class Omni::SkuAlias::Service
