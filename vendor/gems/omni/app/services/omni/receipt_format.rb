class Omni::ReceiptFormat::Service
  include Buildit::Service::Base

  service 'ReceiptFormat', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::ReceiptFormat
  end

end # class Omni::ReceiptFormat::Service
