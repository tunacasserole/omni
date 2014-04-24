class Omni::UniformDetail::Service
  include Buildit::Service::Base

  service 'UniformDetail', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::UniformDetail
  end


  def display_as
    self.display
  end
end # class Omni::UniformDetail::Service
