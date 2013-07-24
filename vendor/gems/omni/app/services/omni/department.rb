class Omni::Department::Service
  include Buildit::Service::Base

  service 'Department', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Department
  end

end # class Omni::Department::Service
