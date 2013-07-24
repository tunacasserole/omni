Ext.define('Omni.store.Product', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-Product',
  model:         'Omni.model.Product',
  autoLoad:      false,
  storeId:       'ProductStore',
  remoteFilter:  true,
  remoteSort:    true
});
