class Omni::LocationUser::Service
  include Buildit::Service::Base

  service 'LocationUser', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::LocationUser
  end


  def display_as
    self.display
  end
end # class Omni::LocationUser::Service
