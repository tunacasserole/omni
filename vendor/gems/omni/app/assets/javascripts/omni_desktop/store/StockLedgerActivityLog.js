Ext.define('Omni.store.StockLedgerActivityLog', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-StockLedgerActivityLog',
  model:         'Omni.model.StockLedgerActivityLog',
  autoLoad:      false,
  storeId:       'StockLedgerActivityLogStore',
  remoteFilter:  true,
  remoteSort:    true
});
