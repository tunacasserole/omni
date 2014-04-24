class Omni::BomDetail::Service
  include Buildit::Service::Base

  service 'BomDetail', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::BomDetail
  end


  def display_as
    self.display
  end
end # class Omni::BomDetail::Service
