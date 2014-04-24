class Omni::ReceiptDetail::Service
  include Buildit::Service::Base

  service 'ReceiptDetail', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::ReceiptDetail
  end


  def display_as
    self.display
  end
end # class Omni::ReceiptDetail::Service
