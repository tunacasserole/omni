class Omni::Category::Service
  include Buildit::Service::Base

  service 'Category', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Category
  end


  def display_as
    self.display
  end
end # class Omni::Category::Service
