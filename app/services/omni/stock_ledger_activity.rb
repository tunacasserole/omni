class Omni::StockLedgerActivity::Service
  include Buildit::Service::Base

  service 'StockLedgerActivity', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::StockLedgerActivity
  end


  def display_as
    self.display
  end
end # class Omni::StockLedgerActivity::Service
