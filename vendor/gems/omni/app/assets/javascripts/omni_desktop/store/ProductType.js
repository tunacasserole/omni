Ext.define('Omni.store.ProductType', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-ProductType',
  model:         'Omni.model.ProductType',
  autoLoad:      false,
  storeId:       'ProductTypeStore',
  remoteFilter:  true,
  remoteSort:    true
});
