Ext.define('Omni.store.ReceiptDetail', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-ReceiptDetail',
  model:         'Omni.model.ReceiptDetail',
  autoLoad:      false,
  storeId:       'ReceiptDetailStore',
  remoteFilter:  true,
  remoteSort:    true
});
