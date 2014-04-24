class Omni::Payment::Service
  include Buildit::Service::Base

  service 'Payment', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Payment
  end


  def display_as
    self.display
  end
end # class Omni::Payment::Service
