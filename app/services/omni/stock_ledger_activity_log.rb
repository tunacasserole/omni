class Omni::StockLedgerActivityLog::Service
  include Buildit::Service::Base

  service 'StockLedgerActivityLog', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::StockLedgerActivityLog
  end


  def display_as
    self.display
  end
end # class Omni::StockLedgerActivityLog::Service
