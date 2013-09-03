Ext.define('Omni.store.ReceiptFormat', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-ReceiptFormat',
  model:         'Omni.model.ReceiptFormat',
  autoLoad:      false,
  storeId:       'ReceiptFormatStore',
  remoteFilter:  true,
  remoteSort:    true
});
