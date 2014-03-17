Ext.define('Omni.store.StockLedgerActivity', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-StockLedgerActivity',
  model:         'Omni.model.StockLedgerActivity',
  autoLoad:      false,
  storeId:       'StockLedgerActivityStore',
  remoteFilter:  true,
  remoteSort:    true
});
