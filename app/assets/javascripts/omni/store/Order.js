Ext.define('Omni.store.Order', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Order',
  model:         'Omni.model.Order',
  autoLoad:      false,
  storeId:       'OrderStore',
  remoteFilter:  true,
  remoteSort:    true
});
