class Omni::AccountGrade::Service
  include Buildit::Service::Base

  service 'AccountGrade', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::AccountGrade
  end


  def display_as
    self.display
  end
end # class Omni::AccountGrade::Service
