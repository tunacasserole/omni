class Omni::SupplierRatingSubject::Service
  include Buildit::Service::Base

  service 'SupplierRatingSubject', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::SupplierRatingSubject
  end


  def display_as
    self.display
  end
end # class Omni::SupplierRatingSubject::Service
