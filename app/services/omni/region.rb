class Omni::Region::Service
  include Buildit::Service::Base

  service 'Region', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Region
  end


  def display_as
    self.display
  end
end # class Omni::Region::Service
