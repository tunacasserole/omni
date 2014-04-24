class Omni::SupplierRating::Service
  include Buildit::Service::Base

  service 'SupplierRating', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::SupplierRating
  end


  def display_as
    self.display
  end
end # class Omni::SupplierRating::Service
