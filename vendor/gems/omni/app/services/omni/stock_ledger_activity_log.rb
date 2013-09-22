class Omni::StockLedgerActivityLog::Service
  include Buildit::Service::Base

  # register the service and names space to allow for more routing
  # options and namespaces
  service 'StockLedgerActivityLog', 'Omni.service'

  # this class will be implemented by the backend below
  connected_mode(Buildit::Service::Backend::Crud)  do |config|
    config.model = Omni::StockLedgerActivityLog
  end

end # class Omni::StockLedgerActivityLog