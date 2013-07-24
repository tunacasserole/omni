Ext.define('Omni.store.Receipt', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Receipt',
  model:         'Omni.model.Receipt',
  autoLoad:      false,
  storeId:       'ReceiptStore',
  remoteFilter:  true,
  remoteSort:    true
});
