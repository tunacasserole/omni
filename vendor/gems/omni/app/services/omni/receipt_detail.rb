class Omni::ReceiptDetail::Service
  include Buildit::Service::Base

  service 'ReceiptDetail', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::ReceiptDetail
  end

end # class Omni::ReceiptDetail::Service
