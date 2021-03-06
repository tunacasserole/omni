class Omni::Enrollment::Service
  include Buildit::Service::Base

  service 'Enrollment', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Enrollment
  end


  def display_as
    self.display
  end
end # class Omni::Enrollment::Service
