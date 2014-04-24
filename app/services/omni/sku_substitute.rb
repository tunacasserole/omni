class Omni::SkuSubstitute::Service
  include Buildit::Service::Base

  service 'SkuSubstitute', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::SkuSubstitute
  end


  def display_as
    self.display
  end
end # class Omni::SkuSubstitute::Service
