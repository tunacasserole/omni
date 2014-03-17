Ext.define('Omni.store.Payment', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Payment',
  model:         'Omni.model.Payment',
  autoLoad:      false,
  storeId:       'PaymentStore',
  remoteFilter:  true,
  remoteSort:    true
});
