class Omni::District::Service
  include Buildit::Service::Base

  service 'District', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::District
  end


  def display_as
    self.display
  end
end # class Omni::District::Service
