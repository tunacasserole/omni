Ext.define('Omni.store.SkuSupplier', {
  extend:        'Ext.data.Store',
  alias:         'store.omni-SkuSupplier',
  model:         'Omni.model.SkuSupplier',
  autoLoad:      false,
  storeId:       'SkuSupplierStore',
  remoteFilter:  true,
  remoteSort:    true
});
